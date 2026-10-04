"""Map each AEI task to its O*NET occupation and SOC major group -> occupations.json.

Needs onet_task_statements.csv from the Economic Index release_2025_03_27 folder.
Run after prep.py (reads aei.npz for the task list).
"""
import csv, json, collections, numpy as np
MAJOR = {'11':'Management','13':'Business & finance','15':'Computing & math','17':'Architecture & engineering','19':'Sciences','21':'Community & social service','23':'Legal','25':'Education & library','27':'Arts, design & media','29':'Healthcare','31':'Healthcare support','33':'Protective service','35':'Food service','37':'Building & grounds','39':'Personal care','41':'Sales','43':'Office & admin','45':'Farming','47':'Construction','49':'Installation & repair','51':'Production','53':'Transportation'}
codes, titles = collections.defaultdict(list), {}
for r in csv.DictReader(open('onet_task_statements.csv', encoding='utf-8')):
    k = r['Task'].strip().lower()
    if r['O*NET-SOC Code'] not in codes[k]: codes[k].append(r['O*NET-SOC Code'])
    titles[r['O*NET-SOC Code']] = r['Title']
occ, maj = [], []
for t in np.load('aei.npz', allow_pickle=True)['tasks']:
    c = codes[t.strip().lower()]; k = len(c); title = titles[c[0]]
    if k > 1:
        if c[0].startswith('25-1'): title = f'Postsecondary teachers ({k} fields)'
        elif c[0].startswith('25-'): title = f'School teachers ({k} occupations)'
        else: title = f'{titles[c[0]]} (+{k-1} more)'
    occ.append(title); maj.append(c[0][:2])
json.dump({'occ': occ, 'maj': maj, 'MAJOR': MAJOR}, open('occupations.json', 'w'))
print(collections.Counter(MAJOR[m] for m in maj).most_common())
