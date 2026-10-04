# Hero data: "what the work is" vs. "how it's shared with AI"

Generates `public/hero-data.json`, the point cloud in the hero.

- **Data**: [Anthropic Economic Index](https://huggingface.co/datasets/Anthropic/EconomicIndex), release 2026-03-24
  (Claude.ai Free/Pro/Max, 5–12 Feb 2026, MIT). Global rows of facet `onet_task::collaboration`.
  Each point is an O\*NET task with ≥ 100 conversations where ≥ 50% of conversations fall into one of the
  five collaboration modes; the five shares are renormalised to sum to 1 (1,017 tasks).
- **Class probabilities**: the observed share of conversations per mode —
  `directive`, `feedback loop` (automation) and `task iteration`, `validation`, `learning` (augmentation).
- **Features**: 256-d [WordLlama](https://github.com/dleemiller/WordLlama) embeddings of the task statement.
- **Occupations** (shown on hover, and the "occupation" colouring): task → O\*NET occupation → SOC major group,
  from `onet_task_statements.csv` (Economic Index release 2025-03-27), committed as `occupations.json`.
  Major groups are merged into 6 + Other (Computing & engineering, Business & office, Science & social, Health,
  Education, Arts & media) based on which groups overlap in embedding space.
- **Topics** (the "topic" colouring): Ward clustering (k = 7) of the task-text embeddings, named from each
  cluster's most distinctive words — see `topics.py`, committed as `topics.json`. This separates much better
  on the α = 0 layout than O\*NET occupation groups or NMF/LDA topics.
- **Layout**: Class-Constrained t-SNE (`cstsne.py` from github.com/alicelh/class-constrained-t-SNE),
  perplexity 30, `lambda_c = 1`, learning rate 20. `fit` at α = 0.1, then `renew` down to α = 0 and up to
  α = 1 in steps of 0.1 so frames stay aligned. (With the default learning rate, or fitting directly at
  α = 0, the class anchors drift off to infinity because most tasks mix several modes.)

```bash
cd scripts/hero-data
# 1. download aei_raw_claude_ai_2026-02-05_to_2026-02-12.csv (release 2026-03-24)
#    and, optionally, onet_task_statements.csv (release 2025-03-27)
# 2. keep only global rows:
python -c "import csv;r=csv.reader(open('aei_raw_claude_ai_2026-02-05_to_2026-02-12.csv'));w=csv.writer(open('aei_global_extract.csv','w',newline=''));h=next(r);w.writerow(h);g=h.index('geography');[w.writerow(x) for x in r if x[g]=='global']"
git clone --depth 1 https://github.com/alicelh/class-constrained-t-SNE
pip install pandas scikit-learn scipy numpy wordllama
python prep.py
python occupations.py            # optional: occupations.json is already committed
python topics.py
python run.py aei.npz 1 1 aei_frames.npz 30 20
python export.py
```
