# shortcut-tools-data

The open dataset behind [shortcut-tools.com](https://shortcut-tools.com) — **7,600+ keyboard shortcuts across 271 platforms** (VS Code, Vim, tmux, Figma, Slack, kubectl and more).

## Suggest an edit

Spotted an error or a missing shortcut? Contributions are welcome:

- **Open an issue** describing the fix (platform, key combo, correct action), or
- **Send a pull request** editing `data-en.js`

Every accepted change goes live on the site, the [JSON API](https://shortcut-tools.com/en/api/), the MCP server, and the [`shortcut-tools` CLI](https://github.com/softcho-ux/shortcut-tools-cli).

## Data format

```js
platform_key: {
  name: "Platform Name",
  categories: [
    { name: "Category", shortcuts: [ { keys: "Ctrl + K", desc: "Action", usage: "When/why" } ] }
  ]
}
```

## Use the data

- JSON API (no key required): https://shortcut-tools.com/en/api/
- CLI: `npx shortcut-tools vscode`
- MCP server for AI agents: `POST https://shortcut-tools.com/mcp`

## License

Data: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) — you may share and adapt this data for **non-commercial** purposes, with attribution to **shortcut-tools.com**, and derivatives must carry the same license. For commercial licensing, contact us via https://shortcut-tools.com/en/contact
