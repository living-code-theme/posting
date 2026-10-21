<!-- living-code-readme:1 -->
# 📮 Living Code for Posting

**Calm slate. Living color.** Living Code for Posting: native YAML palettes for HTTP requests, response status, syntax colors, focus and layered UI surfaces.

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

## Previews

Real application screenshots have not been captured yet.

## Installation

```sh
git clone https://github.com/living-code-theme/posting.git
cd posting
```

Run `posting locate themes` to find your theme directory. On Linux with the default location:

```sh
mkdir -p "$HOME/.local/share/posting/themes"
cp themes/*.yaml "$HOME/.local/share/posting/themes/"
POSTING_THEME=living-code-night posting
```

Use the path reported by `posting locate themes` if it differs. Restart Posting after adding files.

## Flavors

Expand a flavor for its full-size preview and activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

A real application capture is not available yet.

```sh
POSTING_THEME=living-code-night posting
```

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

A real application capture is not available yet.

```sh
POSTING_THEME=living-code-frost posting
```

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

A real application capture is not available yet.

```sh
POSTING_THEME=living-code-paper posting
```

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

A real application capture is not available yet.

```sh
POSTING_THEME=living-code-signal posting
```

</details>

## Configuration

To keep a flavor permanently, set `theme: living-code-night` in Posting’s existing config. You can preview themes through **Ctrl+P → Theme…**. Each YAML file declares its name, light/dark appearance and all supported base palette colors. Posting derives HTTP method and syntax colors from those palette fields; no ignored legacy syntax blocks are shipped.

## Compatibility

Targets Posting 3’s native palette API; the same base fields are also understood by Posting 2, but version-specific rendering is not claimed. Paper explicitly sets `dark: false`. `load_user_themes` must be enabled, and `theme_directory` may override the default location. Tests parse YAML and verify the documented supported field set.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/posting/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

🦎 **One chameleon, many habitats.** Part of [Living Code](https://github.com/living-code-theme).

## License

[MIT](LICENSE) © Elliot Luque
