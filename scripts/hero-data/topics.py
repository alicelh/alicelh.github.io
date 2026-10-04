"""Topic labels for the hero's "topic" colouring -> topics.json.

BERTopic-style: cluster the task-text embeddings (the same features the layout uses) with
Ward agglomerative clustering (k = 7), then name each cluster from its most distinctive words
(class-based TF-IDF, printed below; names were written by hand from these words and sample tasks).
Compared on the α = 0 layout, this separates far better than NMF/LDA topics or O*NET occupation groups
(10-NN label purity: 0.75 vs 0.45 / 0.34 / 0.53).
"""
import json, numpy as np
from sklearn.cluster import AgglomerativeClustering
from sklearn.feature_extraction.text import CountVectorizer
d = np.load('aei.npz', allow_pickle=True); T = list(d['tasks'])
lab = AgglomerativeClustering(7, linkage='ward').fit_predict(d['V'])
cv = CountVectorizer(stop_words='english', min_df=3, token_pattern=r'(?u)\b[a-z]{3,}\b')
X = cv.fit_transform(T); voc = np.array(cv.get_feature_names_out())
tf = np.vstack([np.asarray(X[lab == c].sum(0)).ravel() for c in range(7)]).astype(float)
tf /= tf.sum(1, keepdims=True); s = tf * np.log(1 + tf.sum(0).mean() / (tf.sum(0) + 1e-9))
for c in range(7): print(c, (lab == c).sum(), ', '.join(voc[np.argsort(-s[c])[:7]]))
names = ['Writing & editing', 'Customer support & advice', 'Web, data & research', 'Software & IT',
         'Teaching & tutoring', 'Health & counseling', 'Finance & marketing']  # check against the printout if re-run
json.dump({'labels': lab.tolist(), 'names': names}, open('topics.json', 'w'))
