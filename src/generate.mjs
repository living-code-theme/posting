// Posting derives syntax and HTTP method colors from this native YAML palette.
// Its accent also colors borders, actions and shortcuts: use the brand UI role, not copper constants.
const roles = { primary: 'accent', secondary: 'link', accent: 'accent', background: 'bg', surface: 'bgAlt',
  panel: 'lineHighlight', text: 'fg', success: 'success', warning: 'warning', error: 'error' };
export function generate(flavors) {
  return flavors.map(f => ({ path: `themes/${f.slug}.yaml`, content:
    `name: ${f.slug}\ndark: ${!f.light}\n` +
    Object.entries(roles).map(([key, role]) => `${key}: "${f.r(role)}"`).join('\n') + '\n',
  }));
}
