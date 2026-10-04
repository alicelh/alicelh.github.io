import pandas as pd, numpy as np
from wordllama import WordLlama
SRC='aei_global_extract.csv'
MODES=['directive','feedback loop','task iteration','validation','learning']
df=pd.read_csv(SRC)
def split(s): 
    a=s.str.rsplit('::',n=1); return a.str[0],a.str[1]
cnt=df[df.variable=='onet_task_count'].set_index('cluster_name').value
col=df[df.variable=='onet_task_collaboration_pct'].copy(); col['task'],col['mode']=split(col.cluster_name)
P=col.pivot_table(index='task',columns='mode',values='value',aggfunc='sum').fillna(0)
suc=df[df.variable=='onet_task_task_success_pct'].copy(); suc['task'],suc['k']=split(suc.cluster_name)
S=suc.pivot_table(index='task',columns='k',values='value',aggfunc='sum').fillna(0)
tasks=[t for t in P.index if t not in('none','not_classified') and cnt.get(t,0)>=100]
Q=P.loc[tasks,MODES]; tot=Q.sum(1)
keep=tot>=50  # at least half the conversations fall in one of the five modes
Q=Q[keep]; Q=Q.div(Q.sum(1),axis=0)
tasks=list(Q.index)
print('tasks',len(tasks))
wl=WordLlama.load()
V=wl.embed([t for t in tasks],norm=True).astype(np.float64)
succ=[float(S.loc[t,'yes']) if t in S.index and 'yes' in S.columns else -1 for t in tasks]
np.savez('aei.npz',V=V,P=Q.values,tasks=np.array(tasks,dtype=object),modes=np.array(MODES),n=np.array([cnt[t] for t in tasks]),succ=np.array(succ))
print(Q.idxmax(1).value_counts()); print('mean maxp',Q.max(1).mean())
