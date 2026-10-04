import json,numpy as np
from scipy.linalg import orthogonal_procrustes
f=np.load('aei_frames.npz'); d=np.load('aei.npz',allow_pickle=True)
F=f['frames']; A=f['anchors']; P=d['P']; T=d['tasks']; n=d['n']; s=d['succ']
out=[];anc=[];prev=None
for Y,C in zip(F,A):
    mu=Y.mean(0); Y=Y-mu; C=C-mu
    if prev is None:
        u,sv,vt=np.linalg.svd(Y,full_matrices=False); R=vt.T
    else: R,_=orthogonal_procrustes(Y,prev)
    Y=Y@R; C=C@R; sc=np.maximum(np.percentile(np.abs(Y),97,axis=0), np.abs(C).max(0)/1.12); Y=Y/sc; C=C/sc
    prev=Y; out.append(Y); anc.append(C)
q=lambda v:int(round(float(v)*1000))
import json as _j
S=_j.load(open('occupations.json'))
TP=_j.load(open('topics.json'))
domains=TP['names']
dix=TP['labels']
GRP=[('Computing & engineering',['15','17','49']),('Business & office',['11','13','41','43','23']),('Science & social',['19','21']),('Health',['29','31']),('Education',['25']),('Arts & media',['27'])]
gmap={c:i for i,(_,cs) in enumerate(GRP) for c in cs}
groups=[g for g,_ in GRP]+['Other']
gix=[gmap.get(m,len(GRP)) for m in S['maj']]
classes=[{'id':'directive','group':'automation','desc':'Hand the whole task to AI'},
 {'id':'feedback loop','group':'automation','desc':'AI does it; the human reports back results or errors'},
 {'id':'task iteration','group':'augmentation','desc':'Human and AI refine it together'},
 {'id':'validation','group':'augmentation','desc':'Ask AI to check the human’s work'},
 {'id':'learning','group':'augmentation','desc':'Use AI to understand or learn'}]
J={'domains':domains,'groups':groups,'source':'Anthropic Economic Index, release 2026-03-24 (Claude.ai, Feb 5–12 2026), MIT',
 'alphas':[float(a) for a in f['alphas']],'classes':classes,
 'anchors':[[[q(v) for v in p] for p in C] for C in anc],
 'points':[{'t':str(T[i][0].upper()+T[i][1:]),'p':[int(round(v*100)) for v in P[i]],'n':int(n[i]),'s':(int(round(s[i])) if s[i]>=0 else None),'d':dix[i],'g':gix[i],'o':S['occ'][i],
   'xy':[q(v) for fr in out for v in fr[i]]} for i in range(len(T))]}
st=json.dumps(J,separators=(',',':'),ensure_ascii=False)
open('../../public/hero-data.json','w').write(st); print(len(st)//1024,'KB',len(T))
