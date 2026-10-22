"""Capture Posting's actual request editor with a local, unsent request fixture."""


def prepare(c):
    c.copy(f'themes/{c.slug}.yaml', f'.local/share/posting/themes/{c.slug}.yaml')
    c.write('glyph-field/collection/posting.yaml', 'name: Glyph field API\n')
    c.write('glyph-field/collection/get-glyphs.posting.yaml', '''name: List glyphs
description: Local capture fixture. This request is not sent.
method: GET
url: http://127.0.0.1:8080/api/glyphs
params:
- name: limit
  value: '24'
  enabled: true
headers:
- name: Accept
  value: application/json
  enabled: true
''')
    c.env['POSTING_THEME'] = c.slug
    return ['posting', '--collection', c.work / 'collection']


def drive(c):
    c.wait_text(r'List glyphs')
    # Posting initially focuses its native URL field. Prepare a real draft, without sending it.
    c.type('http://127.0.0.1:8080/api/glyphs')
    c.wait_text(r'127\.0\.0\.1:8080')
