// Posting's native YAML palette. Posting derives syntax and HTTP method colors from these fields.
const roles = { primary: 'type', secondary: 'link', accent: 'constant', background: 'bg', surface: 'bgAlt',
  panel: 'lineHighlight', text: 'fg', success: 'success', warning: 'warning', error: 'error' };
export function generate(flavors) {
  return flavors.map(f => ({ path: `themes/${f.slug}.yaml`, content:
    `name: ${f.slug}\ndark: ${!f.light}\n` +
    Object.entries(roles).map(([key, role]) => `${key}: "${f.r(role)}"`).join('\n') + '\n',
  }));
}
