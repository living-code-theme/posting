import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { resolveAll } from '../scripts/palette.mjs';
import { keys, hexColors, assertContrast } from './helpers.mjs';
const fixture = JSON.parse(await readFile(new URL('./fixtures/upstream.json', import.meta.url)));
const read = path => readFile(new URL('../' + path, import.meta.url), 'utf8');
import YAML from 'yaml';

for (const f of resolveAll()) test(f.name + ': supported Posting YAML palette and appearance', async () => {
  const t = YAML.parse(await read('themes/' + f.slug + '.yaml'));
  keys(t, fixture.fields); assert.equal(t.name, f.slug); assert.equal(t.dark, !f.light);
  hexColors(Object.fromEntries(Object.entries(t).filter(([key]) => !['name', 'dark'].includes(key))));
  for (const [key, role] of Object.entries({ primary: 'type', accent: 'constant', text: 'fg', background: 'bg', success: 'success', warning: 'warning', error: 'error' })) assert.equal(t[key], f.r(role), key);
  for (const bg of ['background', 'surface', 'panel']) assertContrast(t.text, t[bg]);
  for (const ignored of ['syntax', 'method', 'variable', 'text_area']) assert.ok(!(ignored in t), 'Do not ship ignored legacy settings');
});
