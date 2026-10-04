import sys,numpy as np,builtins
sys.path.insert(0,'class-constrained-t-SNE/examples')
from cstsne_python.cstsne import csTSNE
src,lam,seed,out=sys.argv[1],float(sys.argv[2]),int(sys.argv[3]),sys.argv[4]
d=np.load(src,allow_pickle=True); V=d['V'].astype(np.float64); P=d['P'].astype(np.float64)
np.random.seed(seed)
m=csTSNE(perplexity=int(sys.argv[5]) if len(sys.argv)>5 else 30,n_iter=750,lambda_c=lam,learning_rate=float(sys.argv[6]) if len(sys.argv)>6 else "auto")
_p=builtins.print; builtins.print=lambda *a,**k: None
al=[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]
F=[None]*11;A=[None]*11
Yd,Yc=m.fit(V,P,0.1); F[1]=Yd.copy(); A[1]=Yc.copy()
Yd,Yc=m.renew(0.0); F[0]=Yd.copy(); A[0]=Yc.copy()
m.Y_d=F[1].copy(); m.Y_c=A[1].copy()
for k in range(2,11):
    Yd,Yc=m.renew(al[k]); F[k]=Yd.copy(); A[k]=Yc.copy()
np.savez(out,frames=np.array(F),anchors=np.array(A),alphas=np.array(al))
_p(src,lam,seed,'spread',[round(float(np.std(f,0).mean()),2) for f in F]); _p('anchor',[round(float(np.abs(a-f.mean(0)).max()/np.std(f,0).mean()),1) for a,f in zip(A,F)])
