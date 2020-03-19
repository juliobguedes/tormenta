import json, os, unidecode

map_type = {
    'combate': 'Combate',
    'destino': 'Destino',
    'magia': 'Magia',
    'pericia': 'Perícia',
    'poderes': 'Poder Concedido',
    'tormenta': 'Tormenta',
    'racial': 'Racial'
}

map_book = {
    'basico': 'Módulo Básico',
    'combate': 'Manual do Combate',
    'devoto': 'Manual do Devoto',
    'arcano': 'Manual do Arcano',
    'racas': 'Manual das Raças'
}

map_spec = {
    'pré-requisito': 'preRequisito',
    'pré-requisitos': 'preRequisito',
    'benefício': 'beneficio',
    'normal': 'normal',
    'especial': 'especial',
    'custo': 'custo',
    'nota': 'nota'
}

def load_txts():
    folder = '../talentos/'
    files = os.listdir(folder)
    files = [f for f in files if 'trilogia' not in f]
    txts = []

    for txt in files:
        print(folder + txt)
        with open(folder + txt, 'r') as opened:
            text = ''.join(opened.readlines())
            txts.append((text, txt))

    return txts

def parse_txt(pair):
    txt, filename = pair
    feats = txt.split('\n\n')

    spec, bookname = filename.split('-')
    bookname = bookname.split('.')[0]
    bookname = map_book[bookname]

    spec = map_type[spec]
    if (spec != 'Poder Concedido'):
        spec = 'Talento de ' + spec

    feats = [parse_feat(feat, bookname, spec) for feat in feats]
    return feats

def regex_name(feat_name):
    name = feat_name.lower()
    regex = unidecode.unidecode(name)
    return regex

def parse_feat(feat, book, spec):
    feat = feat.split('\n')
    feat_obj = {
        'nome': feat[0],
        'livro': book,
        'tipo': spec,
        'nomeRegex': regex_name(feat[0])
    }

    start = 1
    if (not ('requisito' in feat[1])):
        start = 2
        feat_obj['descricao'] = feat[1]

    for i in range(start, len(feat)):
        line = feat[i]
        if (len(line) == 0): continue
        # print(feat[0], i)
        splitted = line.split(' ')
        category, text = splitted[0], ' '.join(splitted[1:])
        category = category.lower()[:-1]
        category = map_spec[category]
        feat_obj[category] = text

    return feat_obj

if __name__ == "__main__":
    loaded = load_txts()
    parsed = list(map(parse_txt, loaded))
    feats = []
    feats.extend(spec for spec in parsed)
    with open('../json/feats.json', 'w') as js:
        json.dump(feats, js, ensure_ascii=False)
