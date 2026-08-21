// AI prompt commands & parameters data — shortcut-tools.com/en/prompts/
// Every entry is a literal, typeable token sourced from official documentation.
const promptData = {
  claude_code: {
    name: 'Claude Code',
    icon: 'fas fa-terminal',
    source: { name: 'Claude Code Docs — Commands reference', url: 'https://code.claude.com/docs/en/commands' },
    categories: [
      { name: 'Built-in Slash Commands', shortcuts: [
        { keys: '/add-dir <path>', desc: 'Add a working directory for file access during the current session', usage: 'Type a partial path to see matching directory suggestions; press Tab to accept one. Most .claude/ configuration is not discovered from the added directory.' },
        { keys: '/advisor model|off', desc: 'Enable or disable the advisor tool, which consults a second model for guidance at key moments during a task', usage: 'Accepts fable, opus, sonnet, or a full model ID. fable requires Fable 5 access.' },
        { keys: '/agents', desc: 'As of v2.1.198, running /agents prints a reminder to ask Claude to create or manage subagents, or to edit .claude/agents/ or...', usage: 'On v2.1.197 and earlier, opens an interactive interface for creating and managing subagent configurations' },
        { keys: '/autocompact auto|<tokens>', desc: 'Set the auto-compact window: how full the context window gets before Claude Code compacts automatically', usage: 'Pass a size such as 500k, or auto to return to the window tuned for your model. Claude Code saves the value to user settings and applies it to the current session.' },
        { keys: '/autofix-pr prompt', desc: 'Spawn a Claude Code on the web session that watches the current branch\'s PR and pushes fixes when CI fails or reviewers leave comments', usage: 'Detects the open PR from your checked-out branch with gh pr view; to watch a different PR, check out its branch first. By default the cloud session is told to fix every CI failure and review...' },
        { keys: '/background prompt', desc: 'Detach the current session to run as a background agent and free this terminal', usage: 'Pass a prompt to send one more instruction before detaching. Monitor the session with claude agents.' },
        { keys: '/batch <instruction>', desc: '**Skill.** Orchestrate large-scale changes across a codebase in parallel', usage: 'Researches the codebase, decomposes the work into 5 to 30 independent units, and presents a plan. Once approved, spawns one background subagent per unit in an isolated git worktree.' },
        { keys: '/branch name', desc: 'Create a branch of the current conversation at this point, so you can try a different direction without losing the conversation as it stands', usage: 'Switches you into the branch and preserves the original, which you can return to with /resume. To run a copy as a separate background session instead of switching into it, use /fork; to hand a...' },
        { keys: '/btw question', desc: 'Ask a side question about the current session without adding to the conversation', usage: 'If you run /btw without a question, Claude Code shows your most recent side question so you can browse earlier answers; if you haven\'t asked one yet, Claude Code prints a usage line. Before...' },
        { keys: '/bug report', desc: 'Report a bug or share your conversation', usage: 'You choose how much session history to include and confirm on a consent screen before anything is sent. When you\'re signed in to Anthropic on a first-party connection, the report goes to...' },
        { keys: '/cd <path>', desc: 'Move this session to a new working directory, keeping the conversation and its prompt cache', usage: 'Type a partial path to see matching directory suggestions; press Tab to accept one. Claude Code prompts you to trust the workspace if you haven\'t worked in it before, and --resume finds the moved...' },
        { keys: '/chrome', desc: 'Configure Claude in Chrome settings', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/claude-api migrate|managed-agents-onboard|prompt-audit', desc: '**Skill.** Load Claude API and Managed Agents reference material for your project\'s language', usage: 'Also activates automatically when your code imports anthropic or @anthropic-ai/sdk. Run migrate to upgrade existing Claude API code to a newer model, managed-agents-onboard for a walkthrough that...' },
        { keys: '/clear name', desc: 'Start a new conversation with empty context', usage: 'Pass a name to label the previous conversation in the /resume picker. To free up context while continuing the same conversation, use /compact instead.' },
        { keys: '/code-review low|medium|high|xhigh|max|ultra --fix --comment pr#|branch|path', desc: '**Skill.** Review the current diff, or a PR number, branch, or path you pass, for correctness bugs and cleanup opportunities', usage: 'Pass --fix to apply findings, --comment to post them as inline GitHub PR comments, or ultra to run a deep cloud review. With ultra on a github.com PR target, --post preselects posting the finished...' },
        { keys: '/color color|default', desc: 'Set the prompt bar color for the current session', usage: 'Available colors: red, blue, green, yellow, purple, orange, pink, cyan. Use default to reset, or run with no argument to pick a random color.' },
        { keys: '/compact instructions', desc: 'Free up context by summarizing the conversation so far', usage: 'Optionally pass focus instructions for the summary. See how compaction handles rules, skills, and memory files' },
        { keys: '/config key=value ...', desc: 'Open the Settings interface to adjust theme, model, output style, and other preferences', usage: 'From v2.1.181, pass one or more key=value pairs to set a setting directly without opening the interface, for example /config thinking=false. From v2.1.182, named shorthand keys are also accepted,...' },
        { keys: '/context all', desc: 'Visualize current context usage as a colored grid', usage: 'Shows optimization suggestions for context-heavy tools, memory bloat, and capacity warnings. When the conversation exceeds the context window, the output includes a warning showing how far over...' },
        { keys: '/copy N', desc: 'Copy the last assistant response to clipboard', usage: 'Pass a number N to copy the Nth-latest response: /copy 2 copies the second-to-last. When code blocks are present, shows an interactive picker to select individual blocks or the full response.' },
        { keys: '/cost', desc: 'Alias for /usage', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/dataviz request', desc: '**Skill.** Design guidance for charts, graphs, and dashboards', usage: 'Claude picks the chart form for the data, assigns color by role, validates the palette for colorblind safety and contrast with a bundled script, and applies mark, interaction, and accessibility...' },
        { keys: '/debug description', desc: '**Skill.** Enable debug logging for the current session and troubleshoot issues by reading the session debug log', usage: 'Debug logging is off by default unless you started with claude --debug, so running /debug mid-session starts capturing logs from that point forward. Optionally describe the issue to focus the analysis' },
        { keys: '/deep-research <question>', desc: '**Workflow.** Fan out web searches on a question, fetch and cross-check sources, and synthesize a cited report', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/design-login', desc: 'Authorize design-system access for /design-sync with your claude.ai account', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/design-sync hint', desc: '**Skill.** Convert your repo\'s React design system and upload it to Claude Design, so designs it produces use your real components', usage: 'Optionally name the design system, for example /design-sync Acme DS. A first-time sync verifies every component and can take a few hours on a large repo.' },
        { keys: '/desktop', desc: 'Continue the current session in the Claude Code Desktop app', usage: 'Requires macOS or x64 Windows and a Claude subscription. Alias: /app' },
        { keys: '/diff', desc: 'Open an interactive diff viewer showing uncommitted changes and per-turn diffs', usage: 'Use left/right arrows to switch between the current git diff and individual Claude turns, and up/down to browse files. Press Enter to open the selected file\'s diff, scroll it with up/down or...' },
        { keys: '/doctor', desc: '**Skill.** Run a setup checkup that diagnoses issues and can fix them', usage: 'Checks installation health, including duplicate or leftover installs, PATH problems, and unparseable settings files. Finds unused skills, MCP servers, and plugins versus their context cost, flags...' },
        { keys: '/effort level|auto', desc: 'Set the model effort level', usage: 'Accepts low, medium, high, xhigh, max, or ultracode; available levels depend on the model, and max and ultracode are session-only. auto resets to the model default.' },
        { keys: '/exit', desc: 'Exit the CLI', usage: 'In an attached background session, this detaches and the session keeps running. Alias: /quit' },
        { keys: '/export filename', desc: 'Export the current conversation as plain text', usage: 'With a filename, writes directly to that file. Without, opens a dialog to copy to clipboard or save to a file' },
        { keys: '/fast on|off', desc: 'Toggle fast mode on or off', usage: 'Availability in non-interactive mode with -p is limited; see Toggle fast mode. Requires Claude Code v2.1.205 or later' },
        { keys: '/feedback report', desc: 'Send product feedback about Claude Code', usage: 'Opens the same dialog as /bug, with the same consent step, sending rules, and mid-turn behavior' },
        { keys: '/fewer-permission-prompts', desc: '**Skill.** Scan your transcripts for common read-only Bash and MCP tool calls, then add a prioritized allowlist to project...', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/focus', desc: 'Toggle the focus view, which shows only your last prompt, a one-line tool-call summary with edit diffstats, and the final response', usage: 'The tool-call summary also counts the subagents launched in the turn and collapses completed background-task notifications into a single count. The selection persists across sessions; set viewMode...' },
        { keys: '/fork prompt', desc: 'Copy the current conversation into a new background session and keep working here', usage: 'Pass a prompt and the copy starts working on it immediately; without one it waits in agent view for its first prompt. Except when the copy edits in place, Claude Code instructs it to create a...' },
        { keys: '/goal condition|clear', desc: 'Set a goal: Claude keeps working across turns until the condition is met or the goal clears for another reason', usage: 'With no argument, shows the current or most recently achieved goal. clear, stop, off, reset, none, or cancel removes an active goal early' },
        { keys: '/heapdump', desc: 'Write a JavaScript heap snapshot and a memory breakdown to ~/Desktop, or your home directory on Linux without a Desktop folder, for...', usage: 'Attach only the -diagnostics.json file when reporting a memory issue; the .heapsnapshot contains your full conversation and credentials, so don\'t share it. Doesn\'t appear in the command menu; type...' },
        { keys: '/help', desc: 'Show help and available commands', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/hooks', desc: 'View hook configurations for tool events', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/ide', desc: 'Manage IDE integrations and show status', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/import codex|gemini --dry-run --yes', desc: 'Bring configuration from other coding agents on your machine, currently OpenAI Codex and Google Gemini CLI, into Claude Code, including...', usage: 'In non-interactive mode with -p, /import lists what it found and gives you the command that confirms the import. Add --dry-run to preview without writing anything, or --yes to skip the interactive...' },
        { keys: '/init', desc: 'Initialize project with a CLAUDE.md guide', usage: 'Set CLAUDE_CODE_NEW_INIT=1 for an interactive flow that also walks through skills, hooks, and personal memory files. If /init finds configuration from a coding agent that /import supports, it...' },
        { keys: '/insights', desc: 'Generate an HTML report analyzing your recent sessions on this machine: which projects you work in, how you use Claude Code, where...', usage: 'Not available in cloud sessions. See Analyze your usage patterns for the report location, retention, and cost' },
        { keys: '/install-github-app', desc: 'Install the Claude GitHub App for a repository, with an optional step to set up GitHub Actions workflows and secrets', usage: 'Walks you through selecting a repo and configuring the integration' },
        { keys: '/install-slack-app', desc: 'Install the Claude Slack app', usage: 'Opens a browser to complete the OAuth flow' },
        { keys: '/keybindings', desc: 'Open your keyboard shortcuts file', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/list-agents', desc: 'List the subagents and other Claude Code sessions Claude can message, with the name to use for each; agent team teammates aren\'t listed,...', usage: 'See cross-session messaging. Also available as /peers.' },
        { keys: '/login', desc: 'Sign in to your Anthropic account', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/logout', desc: 'Sign out from your Anthropic account', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/loop interval prompt', desc: '**Skill.** Run a prompt repeatedly while the session stays open', usage: 'Omit the interval and, where available, Claude self-paces between iterations. Omit the prompt and, where available, Claude runs an autonomous maintenance check or the prompt in .claude/loop.md.' },
        { keys: '/mcp reconnect <server>|enable|disable <server>|all', desc: 'Manage MCP server connections and OAuth authentication', usage: 'Run with no argument to open the interactive list, pass reconnect <server> to reconnect one disconnected server, or pass enable/disable with a server name or all to change connection state without...' },
        { keys: '/memory', desc: 'Edit CLAUDE.md files, enable or disable auto memory, and view auto memory entries', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/mobile', desc: 'Show QR code to download the Claude mobile app', usage: 'Aliases: /ios, /android' },
        { keys: '/model model', desc: 'Switch the AI model and save it as your default for new sessions', usage: 'For models that support it, use left/right arrows to adjust effort level. With no argument, opens a picker; press s on a row to switch for the current session only.' },
        { keys: '/passes', desc: 'Share a free week of Claude Code with friends', usage: 'Only visible if your account is eligible' },
        { keys: '/permissions', desc: 'Manage allow, ask, and deny rules for tool permissions', usage: 'Opens an interactive dialog where you can view rules by scope, add or remove rules, manage working directories, and review recent auto mode denials. When you run it while Claude is responding,...' },
        { keys: '/plan description', desc: 'Enter plan mode directly from the prompt', usage: 'Pass an optional description to enter plan mode and immediately start with that task, for example /plan fix the auth bug' },
        { keys: '/plugin subcommand', desc: 'Manage Claude Code plugins', usage: 'Run with no argument to open the plugin menu, or pass a subcommand such as list, install, enable, or disable to act directly. Claude Code can activate a plugin during the install; the install...' },
        { keys: '/powerup', desc: 'Discover Claude Code features through quick interactive lessons with animated demos', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/pr-comments PR', desc: 'Removed in v2.1.91', usage: 'Ask Claude directly to view pull request comments instead. On earlier versions, fetches and displays comments from a GitHub pull request; automatically detects the PR for the current branch, or...' },
        { keys: '/privacy-settings', desc: 'View and update your privacy settings', usage: 'Only available for Pro and Max plan subscribers' },
        { keys: '/radio', desc: 'Open Claude FM lo-fi radio in your browser', usage: 'Prints the stream URL when no browser is available. Not available on Amazon Bedrock, Google Cloud\'s Agent Platform, Microsoft Foundry, or Claude Platform on AWS' },
        { keys: '/recap', desc: 'Generate a one-line summary of the current session on demand', usage: 'See Session recap for the automatic recap that appears after you\'ve been away' },
        { keys: '/release-notes', desc: 'View the changelog in an interactive version picker', usage: 'Select a specific version to see its release notes, or choose to show all versions. The notes appear in your transcript without entering the conversation Claude sees' },
        { keys: '/reload-plugins --force', desc: 'Reload all active plugins to apply pending changes without restarting', usage: 'Reports counts for each reloaded component and flags any load errors. When the reload would change which MCP tools are loaded and invalidate the prompt cache, the command warns and skips unless...' },
        { keys: '/reload-skills', desc: 'Re-scan skill and command directories so skills added or changed on disk during the session become available without restarting', usage: 'Reports how many skills are available and how many were added or removed. Added in v2.1.152' },
        { keys: '/remote-control', desc: 'Make this session available for Remote Control from claude.ai', usage: 'Running it while signed out prints that Remote Control requires a claude.ai subscription and tells you how to sign in; before v2.1.206 it reported Unknown command: /remote-control. Alias: /rc' },
        { keys: '/remote-env', desc: 'Choose the default environment for cloud agents', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/rename name', desc: 'Rename the current session and show the name on the prompt bar', usage: 'Without a name, auto-generates one from conversation history. Also available in non-interactive mode (-p); requires Claude Code v2.1.205 or later.' },
        { keys: '/resume session', desc: 'Resume a conversation by ID or name, or open the session picker', usage: 'Background sessions appear in the picker marked with bg; one that is still running can\'t be resumed here, so attach to it from claude agents or stop it there first. Alias: /continue' },
        { keys: '/review low|medium|high|xhigh|max|ultra --fix --comment pr#|branch|path', desc: 'Alias of /code-review: reviews the current diff, or a PR number, branch, or path you pass, such as /review 1234, and takes the same...', usage: 'With no level given, the review reuses the last low through max level you typed; see Review a diff locally for the exact rules. For a deep cloud review, use /code-review ultra.' },
        { keys: '/rewind', desc: 'Rewind the conversation and/or code to a previous point, or summarize from a selected message', usage: 'See checkpointing. Aliases: /checkpoint, /undo' },
        { keys: '/run', desc: '**Skill.** Launch and drive your project\'s app to see a change working, not only passing tests', usage: 'See Run and verify your app. Requires Claude Code v2.1.145 or later' },
        { keys: '/run-skill-generator', desc: '**Skill.** Teach /run and /verify how to build, launch, and drive your project\'s app from a clean environment by writing a per-project skill', usage: 'Requires Claude Code v2.1.145 or later' },
        { keys: '/sandbox', desc: 'Toggle sandbox mode', usage: 'Available on supported platforms only' },
        { keys: '/schedule description', desc: 'Create, update, list, or run routines, which execute in the cloud', usage: 'Claude walks you through the setup conversationally. You can also ask about a routine\'s recent runs.' },
        { keys: '/scroll-speed', desc: 'Adjust mouse wheel scroll speed interactively, with a ruler you can scroll while the dialog is open to preview the change', usage: 'Available in fullscreen rendering only and not in the JetBrains IDE terminal' },
        { keys: '/security-review', desc: 'Analyze the changes on your current branch for security vulnerabilities', usage: 'Reviews the diff between your branch and origin\'s default branch, identifying risks like injection, auth issues, and data exposure. Needs an origin remote; if the review fails with an ambiguous...' },
        { keys: '/setup-bedrock', desc: 'Configure Amazon Bedrock authentication, region, and model pins through an interactive wizard', usage: 'Only visible when CLAUDE_CODE_USE_BEDROCK=1 is set. First-time Amazon Bedrock users can also access this wizard from the login screen' },
        { keys: '/setup-vertex', desc: 'Configure Google Cloud\'s Agent Platform authentication, project, region, and model pins through an interactive wizard', usage: 'Only visible when CLAUDE_CODE_USE_VERTEX=1 is set. First-time Google Cloud\'s Agent Platform users can also access this wizard from the login screen' },
        { keys: '/simplify target', desc: '**Skill.** Review the changed code for cleanup opportunities and apply the fixes', usage: 'Four review agents run in parallel, covering reuse of existing helpers, simplification, efficiency, and whether the change is at the right level of abstraction. From v2.1.154, the review doesn\'t...' },
        { keys: '/skills', desc: 'List available skills', usage: 'Type to filter the list by name. Press t to sort by token count.' },
        { keys: '/stats', desc: 'Alias for /usage', usage: 'Opens on the Stats tab' },
        { keys: '/status', desc: 'Open the Settings interface on the Status tab, showing version, model, account, and connectivity', usage: 'A Session kind row reads background job · attached or background job · unattended in a background session, depending on whether a terminal is attached, and interactive in any other session. Before...' },
        { keys: '/statusline', desc: 'Configure Claude Code\'s status line', usage: 'Describe what you want, or run without arguments to auto-configure from your shell prompt' },
        { keys: '/stickers', desc: 'Order Claude Code stickers', usage: 'Type the command in the Claude Code prompt.' },
        { keys: '/stop', desc: 'Stop the current background session', usage: 'Only available while attached to a background session; the transcript and any worktree are kept. To detach without stopping, use /exit or press ←' },
        { keys: '/subtask <task>', desc: 'Spawn a forked subagent: a background subagent that inherits the full conversation and works on the task while you keep working', usage: 'Its result returns to this conversation when it finishes. To copy the conversation into a separate background session instead, use /fork.' },
        { keys: '/tasks', desc: 'View and manage background work in the current session, including subagents that have finished', usage: 'Also available as /bashes' },
        { keys: '/team-onboarding', desc: 'Generate a team onboarding guide from your Claude Code usage history', usage: 'Claude analyzes your sessions, commands, and MCP server usage from the past 30 days and produces a markdown guide a teammate can paste as a first message to get set up quickly. For claude.ai...' },
        { keys: '/teleport', desc: 'Pull a Claude Code on the web session into this terminal', usage: 'Opens a picker, then fetches the branch and conversation. Also available as /tp.' },
        { keys: '/terminal-setup', desc: 'Configure terminal keybindings for Shift+Enter and other shortcuts', usage: 'Only visible in terminals that need it, like VS Code, Cursor, Devin Desktop, Alacritty, or Zed' },
        { keys: '/theme', desc: 'Change the color theme', usage: 'Includes an auto option that matches your terminal\'s light or dark background, light and dark variants, colorblind-accessible (daltonized) themes, ANSI themes that use your terminal\'s color...' },
        { keys: '/tui default|fullscreen', desc: 'Set the terminal UI renderer and relaunch into it with your conversation intact', usage: 'fullscreen enables the flicker-free alt-screen renderer. With no argument, prints the active renderer' },
        { keys: '/ultraplan <prompt>', desc: 'Removed', usage: 'Use plan mode instead. Previously sent a planning task to a Claude Code on the web session for review in your browser' },
        { keys: '/ultrareview PR or branch', desc: 'Run a deep, multi-agent code review in a cloud sandbox with ultrareview', usage: 'Pass a PR reference to review that pull request, or a branch name to change the comparison base. The preferred invocation is now /code-review ultra, and /ultrareview remains as an alias.' },
        { keys: '/upgrade', desc: 'Open the upgrade page in your browser to switch to a higher plan tier', usage: 'When the browser fails to open, the command shows a sign-in prompt without printing the URL' },
        { keys: '/usage', desc: 'Show session cost, plan usage limits, and activity stats', usage: 'On a Pro, Max, Team, or Enterprise plan, includes a breakdown of usage by skill, subagent, plugin, and MCP server. See the cost tracking guide for details.' },
        { keys: '/usage-credits', desc: 'Configure usage credits, or request them from your admin, when you hit a limit', usage: 'Opens your usage-credits billing settings in the browser, except that Team and Enterprise members without billing access instead send a usage-credits request to their admin from the CLI, after...' },
        { keys: '/verify', desc: '**Skill.** Confirm a code change does what it should by building your project\'s app, running it, and observing the result, rather than...', usage: 'See Run and verify your app. Requires Claude Code v2.1.145 or later' },
        { keys: '/vim', desc: 'Removed in v2.1.92', usage: 'To toggle between Vim and Normal editing modes, use /config → Editor mode' },
        { keys: '/voice hold|tap|off', desc: 'Toggle voice dictation, or enable it in a specific mode', usage: 'Requires a Claude.ai account' },
        { keys: '/web-setup', desc: 'Connect your GitHub account to Claude Code on the web using your local gh CLI credentials', usage: '/schedule prompts for this automatically if GitHub isn\'t connected' },
        { keys: '/workflows', desc: 'Open the workflow progress view to watch, pause, resume, or save running and completed workflows', usage: 'Type the command in the Claude Code prompt.' }
      ] },
      { name: 'Prompt Input Prefixes', shortcuts: [
        { keys: '/ (at start)', desc: 'Run a command or skill', usage: 'Shows built-in commands, skills, and plugin or MCP commands as you type.' },
        { keys: '! (at start)', desc: 'Shell mode: run a command directly', usage: 'Adds its output to the session so Claude can respond to it.' },
        { keys: '@', desc: 'File path mention with autocomplete', usage: 'Can also suggest other live sessions for cross-session messaging.' },
        { keys: ':name:', desc: 'Insert an emoji by shortcode', usage: 'Two or more characters after the colon shows suggestions.' },
        { keys: '? (empty input)', desc: 'Toggle the shortcut help panel', usage: 'Typing ? with text present inserts the character instead.' }
      ] }
    ]
  },
  cursor: {
    name: 'Cursor',
    icon: 'fas fa-i-cursor',
    source: { name: 'Cursor Docs — CLI slash commands & Prompting agents', url: 'https://cursor.com/docs/cli/reference/slash-commands' },
    categories: [
      { name: 'CLI Slash Commands', shortcuts: [
        { keys: '/model [filter]', desc: 'Select a model. Press Tab to edit', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/run-everything [on|off|status]', desc: 'Toggle Run Everything or show its status', usage: 'Also: /auto-run. Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/plan [prompt]', desc: 'Switch to Plan mode, show the current plan, or submit a prompt in Plan mode', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/ask', desc: 'Toggle Ask mode for read-only questions', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/debug [prompt]', desc: 'Toggle Debug mode or submit a prompt in Debug mode', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/goal [objective]', desc: 'Give the agent a long-lived objective to work towards until it\'s fully complete. Rolling out', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/logs', desc: 'Show the debug log path and copy it to the clipboard', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/update', desc: 'Update Cursor Agent to the latest version', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/max-mode', desc: 'Toggle Max Mode on legacy request-based plans', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/rename <name>', desc: 'Rename the current chat session', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/clear', desc: 'Start a new chat session', usage: 'Also: /new, /new-chat, /newchat. Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/resume', desc: 'Open recent chats and resume one', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/fork', desc: 'Fork the current chat into a new session', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/summarize', desc: 'Summarize the conversation to reduce context', usage: 'Also: /compress. Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/rewind', desc: 'Jump back to a previous message', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/vim', desc: 'Toggle Vim keys', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/line-numbers', desc: 'Toggle line numbers in code blocks', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/show-thinking', desc: 'Toggle thinking block display', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/status-indicators', desc: 'Toggle terminal title status indicators', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/shell [command]', desc: 'Enter Shell Mode', usage: 'Also: /sh, /run. Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/about', desc: 'Show CLI version, system, and account info. Also copies it to the clipboard', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/setup-terminal', desc: 'Configure terminal newline keybindings. See Terminal setup', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/help [command]', desc: 'Show help. Use', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/help <command>', desc: 'for command details', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/feedback <message>', desc: 'Share feedback with the team', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/open', desc: 'Open the repository\'s Git root in Cursor', usage: 'Also: /cursor. Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/copy-request-id', desc: 'Copy the last request ID to the clipboard', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/copy-conversation-id', desc: 'Copy the current conversation ID to the clipboard', usage: 'Type it at the start of the cursor-agent CLI prompt.' },
        { keys: '/logout', desc: 'Sign out from Cursor', usage: 'Type it at the start of the cursor-agent CLI prompt.' }
      ] },
      { name: '@ Mentions & Prompt Input', shortcuts: [
        { keys: '@<file>', desc: 'Attach a specific file to your prompt', usage: 'Example: @auth.ts. Start typing after @ for suggestions.' },
        { keys: '@<folder>/', desc: 'Attach a folder; type / after selecting to navigate deeper', usage: 'Example: @src/components/.' },
        { keys: '@Terminals', desc: 'Include terminal output as context', usage: 'Attaches recent terminal content to the prompt.' },
        { keys: '@Chats', desc: 'Reference context from a previous conversation', usage: 'Pulls a past chat into the current prompt.' },
        { keys: '@Commit', desc: 'Attach the diff of your uncommitted working state', usage: 'Listed as Commit (Diff of Working State).' },
        { keys: '@Branch', desc: 'Attach the full diff of your branch against main', usage: 'Listed as Branch (Diff with Main).' },
        { keys: '@Browser', desc: 'Attach context from the built-in browser', usage: 'Bring page state into the conversation.' },
        { keys: '/<skill>', desc: 'Invoke a skill from the chat input', usage: 'Press Enter to attach it to one message; use Custom Modes to keep it active.' }
      ] }
    ]
  },
  copilot: {
    name: 'GitHub Copilot',
    icon: 'fab fa-github',
    source: { name: 'GitHub Docs — Copilot Chat cheat sheet', url: 'https://docs.github.com/en/copilot/reference/chat-cheat-sheet' },
    categories: [
      { name: 'Slash Commands & Prompts (VS Code)', shortcuts: [
        { keys: '/clear', desc: 'Start a new chat session', usage: 'Clears the current Copilot Chat conversation in VS Code.' },
        { keys: '/explain', desc: 'Explain how the code in your active editor works', usage: 'Select code first for a focused explanation.' },
        { keys: '/fix', desc: 'Propose a fix for problems in the selected code', usage: 'Highlight the broken code, then run the command.' },
        { keys: '/fixTestFailure', desc: 'Find and fix a failing test', usage: 'Copilot locates the failing test and proposes a repair.' },
        { keys: '/help', desc: 'Quick reference and basics of using GitHub Copilot', usage: 'Lists available commands and usage basics.' },
        { keys: '/new', desc: 'Create a new project', usage: 'Scaffolds a new workspace from your description.' },
        { keys: '/tests', desc: 'Generate unit tests for the selected code', usage: 'Select a function or class before running.' }
      ] },
      { name: 'Chat Variables (#) Prompts (VS Code)', shortcuts: [
        { keys: '#block', desc: 'Include the current block of code in the prompt', usage: 'Type # in the chat box, then the variable name.' },
        { keys: '#class', desc: 'Include the current class in the prompt', usage: 'Scopes the context to the enclosing class.' },
        { keys: '#comment', desc: 'Include the current comment in the prompt', usage: 'Useful when iterating on a doc comment.' },
        { keys: '#file', desc: 'Include the current file\'s content in the prompt', usage: 'Attaches the whole active file as context.' },
        { keys: '#function', desc: 'Include the current function or method in the prompt', usage: 'Scopes the context to the enclosing function.' },
        { keys: '#line', desc: 'Include the current line of code in the prompt', usage: 'Narrowest context scope available.' },
        { keys: '#path', desc: 'Include the file path in the prompt', usage: 'Passes the location, not the contents.' },
        { keys: '#project', desc: 'Include the project context in the prompt', usage: 'Broadest scope; slower but most informed.' },
        { keys: '#selection', desc: 'Include the currently selected text in the prompt', usage: 'Select first, then reference #selection.' },
        { keys: '#sym', desc: 'Include the current symbol in the prompt', usage: 'Targets the symbol under the cursor.' }
      ] },
      { name: 'Chat Participants (@) Prompts', shortcuts: [
        { keys: '@azure', desc: 'Context about Azure services: use, deploy, and manage them', usage: 'Public preview; subject to change.' },
        { keys: '@github', desc: 'Use GitHub-specific Copilot skills', usage: 'Bridges chat to GitHub skills from the IDE.' },
        { keys: '@terminal', desc: 'Context about the VS Code terminal shell and its contents', usage: 'Ask it to create or debug terminal commands.' },
        { keys: '@vscode', desc: 'Context about VS Code commands and features', usage: 'Ask how to do something in the editor itself.' }
      ] },
      { name: 'Slash Commands (GitHub.com Chat)', shortcuts: [
        { keys: '/clear', desc: 'Clear conversation (GitHub.com)', usage: 'Runs in Copilot Chat on the GitHub website.' },
        { keys: '/delete', desc: 'Delete a conversation', usage: 'Removes the conversation from your history.' },
        { keys: '/new', desc: 'Start a new conversation (GitHub.com)', usage: 'Opens a fresh chat thread.' },
        { keys: '/rename', desc: 'Rename a conversation', usage: 'Give threads descriptive names for later.' }
      ] },
      { name: 'Slash Commands (Visual Studio & Xcode)', shortcuts: [
        { keys: '/doc', desc: 'Add a documentation comment for this symbol', usage: 'Cursor must be on the symbol to document.' },
        { keys: '/optimize', desc: 'Analyze and improve running time of the selected code', usage: 'Select the hot path first.' },
        { keys: '/simplify', desc: 'Simplify the current code selection', usage: 'Available in Copilot for Xcode.' }
      ] },
      { name: 'Slash Commands (JetBrains & Copilot CLI)', shortcuts: [
        { keys: '/chronicle', desc: 'Review and analyze your session history', usage: 'Subcommands: standup, tips, search, improve.' },
        { keys: '/compact', desc: 'Compress the current Copilot CLI session context', usage: 'Keeps a long-running session manageable.' },
        { keys: '/remote', desc: 'Enable or manage remote control for the current CLI session', usage: 'Access the session from GitHub.com or GitHub Mobile.' }
      ] }
    ]
  },
  openai_codex: {
    name: 'OpenAI Codex CLI',
    icon: 'fas fa-robot',
    source: { name: 'OpenAI Codex Docs', url: 'https://github.com/openai/codex/tree/main/docs' },
    categories: [
      { name: 'Slash Commands', shortcuts: [
        { keys: '/permissions', desc: 'Relax or tighten approval requirements mid-session, such as switching between Auto and Read', usage: 'Relax or tighten approval requirements mid-session, such as switching between Auto and Read.' },
        { keys: '/ide', desc: 'Pull editor context into the next prompt without re-explaining what\'s open in your IDE', usage: 'Pull editor context into the next prompt without re-explaining what\'s open in your IDE.' },
        { keys: '/keymap', desc: 'Inspect and persist custom shortcut bindings in config.toml', usage: 'Inspect and persist custom shortcut bindings in config.toml.' },
        { keys: '/vim', desc: 'Switch between Vim normal/insert behavior and the default composer editing mode', usage: 'Switch between Vim normal/insert behavior and the default composer editing mode.' },
        { keys: '/setup-default-sandbox', desc: 'Replace the degraded Windows sandbox after Codex offers the elevated setup', usage: 'Replace the degraded Windows sandbox after Codex offers the elevated setup.' },
        { keys: '/sandbox-add-read-dir', desc: 'Unblock commands that need to read an absolute directory path outside the current readable', usage: 'Unblock commands that need to read an absolute directory path outside the current readable.' },
        { keys: '/agent, /subagents', desc: 'Inspect or continue work in a spawned subagent thread', usage: 'Inspect or continue work in a spawned subagent thread.' },
        { keys: '/apps', desc: 'Attach an app as $app-slug before asking Codex to use it', usage: 'Attach an app as $app-slug before asking Codex to use it.' },
        { keys: '/plugins', desc: 'Inspect plugin tools, install suggested plugins, or manage plugin availability', usage: 'Inspect plugin tools, install suggested plugins, or manage plugin availability.' },
        { keys: '/hooks', desc: 'Inspect configured hooks, trust new or changed hooks, or disable non-managed hooks before they', usage: 'Inspect configured hooks, trust new or changed hooks, or disable non-managed hooks before they.' },
        { keys: '/clear', desc: 'Reset the visible UI and chat context together when you want a fresh start', usage: 'Reset the visible UI and chat context together when you want a fresh start.' },
        { keys: '/rename', desc: 'Give a saved session a recognizable name without leaving the TUI', usage: 'Give a saved session a recognizable name without leaving the TUI.' },
        { keys: '/archive', desc: 'Remove the current session from active session lists without deleting its transcript', usage: 'Remove the current session from active session lists without deleting its transcript.' },
        { keys: '/delete', desc: 'Remove the transcript and descendant sessions when archiving isn\'t enough', usage: 'Remove the transcript and descendant sessions when archiving isn\'t enough.' },
        { keys: '/compact', desc: 'Use after long runs so Codex retains key points without blowing the context window', usage: 'Use after long runs so Codex retains key points without blowing the context window.' },
        { keys: '/copy', desc: 'Grab the latest finished response or plan text without manually selecting it. You can also', usage: 'Grab the latest finished response or plan text without manually selecting it. You can also.' },
        { keys: '/diff', desc: 'Review Codex\'s edits before you commit or run tests', usage: 'Review Codex\'s edits before you commit or run tests.' },
        { keys: '/exit', desc: 'Alternative spelling; both commands exit the session', usage: 'Alternative spelling; both commands exit the session.' },
        { keys: '/experimental', desc: 'Enable options such as Network proxy or Prevent sleep while running', usage: 'Enable options such as Network proxy or Prevent sleep while running.' },
        { keys: '/approve', desc: 'Retry a command or action that the auto reviewer denied', usage: 'Retry a command or action that the auto reviewer denied.' },
        { keys: '/memories', desc: 'Turn memory injection or memory generation on or off without leaving the TUI', usage: 'Turn memory injection or memory generation on or off without leaving the TUI.' },
        { keys: '/skills', desc: 'Improve task-specific behavior by selecting a relevant local skill', usage: 'Improve task-specific behavior by selecting a relevant local skill.' },
        { keys: '/import', desc: 'Migrate supported external-agent artifacts into Codex configuration and local files', usage: 'Migrate supported external-agent artifacts into Codex configuration and local files.' },
        { keys: '/feedback', desc: 'Report issues or share diagnostics with support', usage: 'Report issues or share diagnostics with support.' },
        { keys: '/init', desc: 'Capture persistent instructions for the repository or subdirectory you\'re working', usage: 'Capture persistent instructions for the repository or subdirectory you\'re working.' },
        { keys: '/logout', desc: 'Clear local credentials when using a shared machine', usage: 'Clear local credentials when using a shared machine.' },
        { keys: '/mcp', desc: 'Check which external tools Codex can call during the session; add verbose for server details', usage: 'Check which external tools Codex can call during the session; add verbose for server details.' },
        { keys: '/mention', desc: 'Point Codex at specific files or folders you want it to inspect next', usage: 'Point Codex at specific files or folders you want it to inspect next.' },
        { keys: '/model', desc: 'Switch between models such as gpt-5.4-mini and gpt-5.5 before running a task', usage: 'Switch between models such as gpt-5.4-mini and gpt-5.5 before running a task.' },
        { keys: '/fast', desc: 'Turn the current model\'s Fast tier on or off and persist the selection', usage: 'Turn the current model\'s Fast tier on or off and persist the selection.' },
        { keys: '/plan', desc: 'Ask Codex to propose an execution plan before implementation work starts', usage: 'Ask Codex to propose an execution plan before implementation work starts.' },
        { keys: '/goal', desc: 'Give Codex a persistent target to track while a larger task runs', usage: 'Give Codex a persistent target to track while a larger task runs.' },
        { keys: '/personality', desc: 'Make Codex more concise, more explanatory, or more collaborative without changing your', usage: 'Make Codex more concise, more explanatory, or more collaborative without changing your.' },
        { keys: '/ps', desc: 'Check long-running commands without leaving the main transcript', usage: 'Check long-running commands without leaving the main transcript.' },
        { keys: '/stop', desc: 'Cancel background terminal work started by the current session', usage: 'Cancel background terminal work started by the current session.' },
        { keys: '/fork', desc: 'Branch the active session to explore a new approach without losing the current transcript', usage: 'Branch the active session to explore a new approach without losing the current transcript.' },
        { keys: '/app', desc: 'Move from the TUI to the desktop app on macOS or Windows', usage: 'Move from the TUI to the desktop app on macOS or Windows.' },
        { keys: '/side, /btw', desc: 'Ask a focused follow-up without disrupting the main chat\'s transcript', usage: 'Ask a focused follow-up without disrupting the main chat\'s transcript.' },
        { keys: '/raw', desc: 'Make terminal selection and copying less formatted while reviewing long output', usage: 'Make terminal selection and copying less formatted while reviewing long output.' },
        { keys: '/resume', desc: 'Continue work from a previous CLI session without starting over', usage: 'Continue work from a previous CLI session without starting over.' },
        { keys: '/new', desc: 'Reset the chat context without leaving the CLI when you want a fresh prompt in the same repo', usage: 'Reset the chat context without leaving the CLI when you want a fresh prompt in the same repo.' },
        { keys: '/quit', desc: 'Leave the session immediately', usage: 'Leave the session immediately.' },
        { keys: '/review', desc: 'Run after Codex completes work or when you want a second set of eyes on local changes', usage: 'Run after Codex completes work or when you want a second set of eyes on local changes.' },
        { keys: '/status', desc: 'Confirm the active model, approval policy, writable roots, and remaining context capacity', usage: 'Confirm the active model, approval policy, writable roots, and remaining context capacity.' },
        { keys: '/usage', desc: 'Inspect daily, weekly, or cumulative ChatGPT token activity from inside the TUI', usage: 'Inspect daily, weekly, or cumulative ChatGPT token activity from inside the TUI.' },
        { keys: '/debug-config', desc: 'Debug precedence and policy requirements, including experimental network constraints', usage: 'Debug precedence and policy requirements, including experimental network constraints.' },
        { keys: '/statusline', desc: 'Pick and reorder footer items (model/context/limits/git/tokens/session) and persist', usage: 'Pick and reorder footer items (model/context/limits/git/tokens/session) and persist.' },
        { keys: '/title', desc: 'Pick and reorder title items such as project, status, thread, branch, model, and task progress', usage: 'Pick and reorder title items such as project, status, thread, branch, model, and task progress.' },
        { keys: '/theme', desc: 'Preview and persist a terminal syntax-highlighting theme', usage: 'Preview and persist a terminal syntax-highlighting theme.' },
        { keys: '/pets, /pet', desc: 'Personalize the TUI with a built-in or custom ambient pet', usage: 'Personalize the TUI with a built-in or custom ambient pet.' },
        { keys: '/cloud', desc: 'Run the chat in the cloud, when cloud execution is available', usage: 'Run the chat in the cloud, when cloud execution is available.' },
        { keys: '/cloud-environment', desc: 'Choose the cloud environment for the chat', usage: 'Choose the cloud environment for the chat.' },
        { keys: '/ide-context', desc: 'Turn automatic IDE context on or off', usage: 'Turn automatic IDE context on or off.' },
        { keys: '/local', desc: 'Run the chat in your local workspace', usage: 'Run the chat in your local workspace.' },
        { keys: '/project', desc: 'Choose a project for new chats', usage: 'Choose a project for new chats.' },
        { keys: '/reasoning', desc: 'Choose the reasoning effort for the current chat', usage: 'Choose the reasoning effort for the current chat.' },
        { keys: '/side', desc: 'Start a temporary side chat without interrupting the main chat', usage: 'Start a temporary side chat without interrupting the main chat.' },
        { keys: '/worktree', desc: 'Run the chat in a new Git worktree', usage: 'Run the chat in a new Git worktree.' }
      ] }
    ]
  },
  aider: {
    name: 'Aider',
    icon: 'fas fa-code-branch',
    source: { name: 'Aider Docs — In-chat commands', url: 'https://aider.chat/docs/usage/commands.html' },
    categories: [
      { name: 'Slash Commands', shortcuts: [
        { keys: '/add', desc: 'Add files to the chat so aider can edit them or review them in detail', usage: 'Add files to the chat so aider can edit them or review them in detail' },
        { keys: '/architect', desc: 'Enter architect/editor mode using 2 different models. If no prompt provided, switches', usage: 'Enter architect/editor mode using 2 different models. If no prompt provided, switches to architect/editor mode.' },
        { keys: '/ask', desc: 'Ask questions about the code base without editing any files. If no prompt provided, switches', usage: 'Ask questions about the code base without editing any files. If no prompt provided, switches to ask mode.' },
        { keys: '/chat-mode', desc: 'Switch to a new chat mode', usage: 'Switch to a new chat mode' },
        { keys: '/clear', desc: 'Clear the chat history', usage: 'Clear the chat history' },
        { keys: '/code', desc: 'Ask for changes to your code. If no prompt provided, switches to code mode', usage: 'Ask for changes to your code. If no prompt provided, switches to code mode.' },
        { keys: '/commit', desc: 'Commit edits to the repo made outside the chat (commit message optional)', usage: 'Commit edits to the repo made outside the chat (commit message optional)' },
        { keys: '/context', desc: 'Enter context mode to see surrounding code context. If no prompt provided, switches to context', usage: 'Enter context mode to see surrounding code context. If no prompt provided, switches to context mode.' },
        { keys: '/copy', desc: 'Copy the last assistant message to the clipboard', usage: 'Copy the last assistant message to the clipboard' },
        { keys: '/copy-context', desc: 'Copy the current chat context as markdown, suitable to paste into a web UI', usage: 'Copy the current chat context as markdown, suitable to paste into a web UI' },
        { keys: '/diff', desc: 'Display the diff of changes since the last message', usage: 'Display the diff of changes since the last message' },
        { keys: '/drop', desc: 'Remove files from the chat session to free up context space', usage: 'Remove files from the chat session to free up context space' },
        { keys: '/edit', desc: 'Alias for /editor: Open an editor to write a prompt', usage: 'Alias for /editor: Open an editor to write a prompt' },
        { keys: '/editor', desc: 'Open an editor to write a prompt', usage: 'Open an editor to write a prompt' },
        { keys: '/editor-model', desc: 'Switch the Editor Model to a new LLM', usage: 'Switch the Editor Model to a new LLM' },
        { keys: '/exit', desc: 'Exit the application', usage: 'Exit the application' },
        { keys: '/git', desc: 'Run a git command (output excluded from chat)', usage: 'Run a git command (output excluded from chat)' },
        { keys: '/help', desc: 'Ask questions about aider', usage: 'Ask questions about aider' },
        { keys: '/lint', desc: 'Lint and fix in-chat files or all dirty files if none in chat', usage: 'Lint and fix in-chat files or all dirty files if none in chat' },
        { keys: '/load', desc: 'Load and execute commands from a file', usage: 'Load and execute commands from a file' },
        { keys: '/ls', desc: 'List all known files and indicate which are included in the chat session', usage: 'List all known files and indicate which are included in the chat session' },
        { keys: '/map', desc: 'Print out the current repository map', usage: 'Print out the current repository map' },
        { keys: '/map-refresh', desc: 'Force a refresh of the repository map', usage: 'Force a refresh of the repository map' },
        { keys: '/model', desc: 'Switch the Main Model to a new LLM', usage: 'Switch the Main Model to a new LLM' },
        { keys: '/models', desc: 'Search the list of available models', usage: 'Search the list of available models' },
        { keys: '/multiline-mode', desc: 'Toggle multiline mode (swaps behavior of Enter and Meta+Enter)', usage: 'Toggle multiline mode (swaps behavior of Enter and Meta+Enter)' },
        { keys: '/ok', desc: 'Alias for /code Ok, please go ahead and make those changes. (any args are appended)', usage: 'Alias for /code Ok, please go ahead and make those changes. (any args are appended)' },
        { keys: '/paste', desc: 'Paste image/text from the clipboard into the chat. Optionally provide a name for the image', usage: 'Paste image/text from the clipboard into the chat. Optionally provide a name for the image.' },
        { keys: '/quit', desc: 'Exit the application', usage: 'Exit the application' },
        { keys: '/read-only', desc: 'Add files to the chat that are for reference only, or turn added files to read-only', usage: 'Add files to the chat that are for reference only, or turn added files to read-only' },
        { keys: '/reasoning-effort', desc: 'Set the reasoning effort level (values: number or low/medium/high depending on model)', usage: 'Set the reasoning effort level (values: number or low/medium/high depending on model)' },
        { keys: '/report', desc: 'Report a problem by opening a GitHub Issue', usage: 'Report a problem by opening a GitHub Issue' },
        { keys: '/reset', desc: 'Drop all files and clear the chat history', usage: 'Drop all files and clear the chat history' },
        { keys: '/run', desc: 'Run a shell command and optionally add the output to the chat (alias: !)', usage: 'Run a shell command and optionally add the output to the chat (alias: !)' },
        { keys: '/save', desc: 'Save commands to a file that can reconstruct the current chat session\'s files', usage: 'Save commands to a file that can reconstruct the current chat session\'s files' },
        { keys: '/settings', desc: 'Print out the current settings', usage: 'Print out the current settings' },
        { keys: '/test', desc: 'Run a shell command and add the output to the chat on non-zero exit code', usage: 'Run a shell command and add the output to the chat on non-zero exit code' },
        { keys: '/think-tokens', desc: 'Set the thinking token budget, eg: 8096, 8k, 10.5k, 0.5M, or 0 to disable', usage: 'Set the thinking token budget, eg: 8096, 8k, 10.5k, 0.5M, or 0 to disable.' },
        { keys: '/tokens', desc: 'Report on the number of tokens used by the current chat context', usage: 'Report on the number of tokens used by the current chat context' },
        { keys: '/undo', desc: 'Undo the last git commit if it was done by aider', usage: 'Undo the last git commit if it was done by aider' },
        { keys: '/voice', desc: 'Record and transcribe voice input', usage: 'Record and transcribe voice input' },
        { keys: '/weak-model', desc: 'Switch the Weak Model to a new LLM', usage: 'Switch the Weak Model to a new LLM' },
        { keys: '/web', desc: 'Scrape a webpage, convert to markdown and send in a message', usage: 'Scrape a webpage, convert to markdown and send in a message' }
      ] }
    ]
  },
  midjourney: {
    name: 'Midjourney',
    icon: 'fas fa-palette',
    source: { name: 'Midjourney Docs — Parameter List', url: 'https://docs.midjourney.com/hc/en-us/articles/32859204029709' },
    categories: [
      { name: 'Discord Slash Commands', shortcuts: [
        { keys: '/imagine', desc: 'Generate image', usage: 'Generate an image from a text prompt.' },
        { keys: '/describe', desc: 'Describe image', usage: 'Describe an uploaded image in text.' },
        { keys: '/blend', desc: 'Blend images', usage: 'Blend 2-5 images together.' },
        { keys: '/settings', desc: 'Settings', usage: 'Configure model version, quality, etc.' },
        { keys: '/info', desc: 'Account info', usage: 'Check subscription and usage.' },
        { keys: 'U1~U4', desc: 'Upscale', usage: 'Upscale the selected image.' },
        { keys: 'V1~V4', desc: 'Create variation', usage: 'Generate a variation of the selected image.' }
      ] },
      { name: 'Prompt Parameters', shortcuts: [
        { keys: '--ar <w:h>', desc: 'Aspect Ratio: change the image shape from the default square', usage: 'Also: --aspect. Example: --ar 2:3. Place after the prompt text.' },
        { keys: '--chaos <0-100>', desc: 'Vary the results more between grid images', usage: 'Also: --c. Higher values give more unexpected compositions.' },
        { keys: '--oref <url>', desc: 'Omni Reference: use a person\'s likeness or an object\'s form', usage: 'Replaces Character Reference in V7.' },
        { keys: '--no <object>', desc: 'Tell Midjourney what you do not want in the image', usage: 'Example: --no plants removes plants from results.' },
        { keys: '--profile', desc: 'Personalization: apply your personalized profile or moodboard style', usage: 'Also: --p.' },
        { keys: '--quality <value>', desc: 'Control detail level and processing time', usage: 'Also: --q.' },
        { keys: '--repeat <n>', desc: 'Generate multiple image sets from a single prompt', usage: 'Also: --r. Subscription tier limits apply.' },
        { keys: '--seed <number>', desc: 'Fix the starting noise for testing and experimenting', usage: 'Same seed and prompt reproduce similar results.' },
        { keys: '--stealth', desc: 'Make your creations private on the Midjourney website', usage: 'Availability depends on your plan.' },
        { keys: '--public', desc: 'Make your creations public on the Midjourney website', usage: 'Counterpart to --stealth.' },
        { keys: '--raw', desc: 'Raw Mode: reduce automatic beautification for more literal results', usage: 'Style-raw switch for the current model.' },
        { keys: '--stylize <value>', desc: 'Control how strongly Midjourney\'s aesthetic is applied', usage: 'Also: --s. Low values follow the prompt more literally.' },
        { keys: '--sref <url>', desc: 'Style Reference: match the look and feel of another image', usage: 'Combine with --sw to control strength.' },
        { keys: '--sw <value>', desc: 'Style Weight: control the strength of Style References', usage: 'Used together with --sref.' },
        { keys: '--sv <value>', desc: 'Select the style reference algorithm version', usage: 'Used together with --sref.' },
        { keys: '--tile', desc: 'Create seamless repeating patterns', usage: 'Output tiles edge-to-edge for textures.' },
        { keys: '--version <n>', desc: 'Switch between Midjourney model versions', usage: 'Also: --v. Example: --v 7.' },
        { keys: '--niji', desc: 'Use the model focused on anime and Eastern aesthetics', usage: 'Niji model family switch.' },
        { keys: '--draft', desc: 'Generate draft images in V7 at half the GPU cost', usage: 'Faster, lower-cost exploration.' },
        { keys: '--weird <value>', desc: 'Make images quirky and unconventional', usage: 'Also: --w.' },
        { keys: '--iw <value>', desc: 'Image Weight: control the impact of image prompts', usage: 'Higher values follow the linked image more closely.' },
        { keys: '--fast', desc: 'Switch GPU speed to Fast Mode for this job', usage: 'Consumes fast GPU time.' },
        { keys: '--relax', desc: 'Switch GPU speed to Relax Mode for this job', usage: 'No fast-hour cost; queued generation.' },
        { keys: '--turbo', desc: 'Switch GPU speed to Turbo Mode for this job', usage: 'Fastest option; higher GPU cost.' },
        { keys: '--hd', desc: 'Generate V8.1 images at higher resolution (2048px)', usage: 'Counterpart: --sd for standard 1024px.' },
        { keys: '--sd', desc: 'Generate V8.1 images at standard resolution (1024px)', usage: 'Counterpart: --hd for 2048px.' },
        { keys: '--video', desc: 'Generate videos in Discord', usage: 'Video generation switch for Discord workflows.' },
        { keys: '--motion low', desc: 'Low motion setting for video generations', usage: 'Counterpart: --motion high.' },
        { keys: '--motion high', desc: 'High motion setting for video generations', usage: 'More movement between video frames.' },
        { keys: '--loop', desc: 'Create looping video generations', usage: 'Combine with --end to set a custom end frame.' },
        { keys: '--bs <n>', desc: 'Batch Size: number of videos generated per video prompt', usage: 'Controls video batch output count.' }
      ] }
    ]
  },
  stable_diffusion: {
    name: 'Stable Diffusion (A1111)',
    icon: 'fas fa-image',
    source: { name: 'AUTOMATIC1111 WebUI Wiki — Features', url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features' },
    categories: [
      { name: 'Prompt Syntax & Weights', shortcuts: [
        { keys: '(word)', desc: 'Increase attention to word by a factor of 1.1', usage: 'Wrap any prompt token in parentheses.' },
        { keys: '((word))', desc: 'Increase attention by 1.21 (1.1 x 1.1)', usage: 'Stack parentheses to multiply the effect.' },
        { keys: '[word]', desc: 'Decrease attention to word by a factor of 1.1', usage: 'Square brackets reduce emphasis; no numeric weight allowed.' },
        { keys: '(word:1.5)', desc: 'Set an explicit attention weight on word', usage: 'Weights work with () only. Default weight is 1.1.' },
        { keys: '(word:0.25)', desc: 'Decrease attention by an explicit factor', usage: 'Values below 1 reduce influence (0.25 = quarter strength).' },
        { keys: '\\(word\\)', desc: 'Use literal parentheses characters in the prompt', usage: 'Escape with backslashes: anime_\\(character\\).' },
        { keys: 'BREAK', desc: 'Fill the current 75-token chunk with padding and start a new chunk', usage: 'Must be uppercase. Controls how long prompts are split.' },
        { keys: '[from:to:when]', desc: 'Prompt editing: swap from one text to another mid-sampling', usage: 'when is a step number or a 0.0-1.0 fraction of steps.' },
        { keys: '[to:when]', desc: 'Add text to the prompt after a fixed number of steps', usage: 'Adds the to text once step when is reached.' },
        { keys: '[from::when]', desc: 'Remove text from the prompt after a fixed number of steps', usage: 'Drops the from text once step when is reached.' },
        { keys: '[cow|horse]', desc: 'Alternating words: swap tokens every other sampling step', usage: 'Step 1 uses cow, step 2 horse, and so on.' },
        { keys: 'prompt1 AND prompt2', desc: 'Composable diffusion: combine multiple prompts', usage: 'AND must be uppercase. Supports weights: a cat :1.2 AND a dog.' },
        { keys: '<lora:filename:multiplier>', desc: 'Apply a LoRA at the given strength', usage: 'Filename without extension; multiplier usually 0-1. Not allowed in the negative prompt.' },
        { keys: '<hypernet:filename:multiplier>', desc: 'Apply a Hypernetwork at the given strength', usage: 'Same syntax family as LoRA extra networks.' },
        { keys: 'embedding-filename', desc: 'Trigger a Textual Inversion embedding by its filename', usage: 'Place the embedding\'s filename anywhere in the prompt.' }
      ] },
      { name: 'Script & Job Syntax', shortcuts: [
        { keys: 'a|b|c', desc: 'Prompt matrix: generate one image for every combination of the parts', usage: 'Separate alternatives with the pipe character; the first part is always kept. Script -> Prompt matrix.' },
        { keys: '{prompt}', desc: 'Style placeholder: substitute the current prompt into the saved style at that position', usage: 'Without it, a style is appended to the prompt instead of wrapping it. Saved in styles.csv.' },
        { keys: '--prompt "text"', desc: 'Prompts-from-file job field: the positive prompt for one queued job', usage: 'One job per line in the Prompts from file or textbox script.' },
        { keys: '--negative_prompt "text"', desc: 'Prompts-from-file job field: things the model should avoid', usage: 'Used as unconditional conditioning instead of an empty string.' },
        { keys: '--steps N', desc: 'Prompts-from-file job field: sampling steps for that job', usage: 'Overrides the UI value for the single queued job.' },
        { keys: '--cfg_scale N', desc: 'Prompts-from-file job field: classifier-free guidance scale', usage: 'Higher values follow the prompt more strictly.' },
        { keys: '--sampler_name "name"', desc: 'Prompts-from-file job field: sampling method', usage: 'Example: DPM++ 2M Karras, DDIM.' },
        { keys: '--seed N', desc: 'Prompts-from-file job field: fixed starting noise', usage: 'Reuse a seed to reproduce a composition.' },
        { keys: '--subseed N', desc: 'Prompts-from-file job field: variation seed', usage: 'Paired with subseed_strength to blend between two seeds.' },
        { keys: '--subseed_strength N', desc: 'Prompts-from-file job field: how far to move toward the variation seed', usage: 'At maximum you get the subseed image, at minimum the original seed.' },
        { keys: '--width N', desc: 'Prompts-from-file job field: output width', usage: 'Set per job in the queued list.' },
        { keys: '--height N', desc: 'Prompts-from-file job field: output height', usage: 'Set per job in the queued list.' },
        { keys: '--batch_size N', desc: 'Prompts-from-file job field: images generated in parallel per batch', usage: 'Limited by available VRAM.' },
        { keys: '--n_iter N', desc: 'Prompts-from-file job field: number of batches to run', usage: 'Total images equal batch_size multiplied by n_iter.' },
        { keys: '--styles "name"', desc: 'Prompts-from-file job field: apply a saved style to the job', usage: 'Styles come from styles.csv.' },
        { keys: '--seed_resize_from_w N', desc: 'Prompts-from-file job field: original width for seed resizing', usage: 'Keeps a known seed looking similar at a different resolution.' },
        { keys: '--seed_resize_from_h N', desc: 'Prompts-from-file job field: original height for seed resizing', usage: 'Paired with seed_resize_from_w; ancestral samplers hold this less well.' }
      ] },
      { name: 'X/Y/Z Plot & Prompt S/R Syntax', shortcuts: [
        { keys: '1-5', desc: 'X/Y/Z plot value range: expands to every integer in the range', usage: 'Entered in the X, Y, or Z values field.' },
        { keys: '1-5 (+2)', desc: 'X/Y/Z plot range with an increment in parentheses', usage: 'Expands to 1, 3, 5. Negative increments count down: 10-5 (-3).' },
        { keys: '1-10 [5]', desc: 'X/Y/Z plot range with a count in square brackets', usage: 'Expands to that many evenly spaced values: 1, 3, 5, 7, 10.' },
        { keys: 'darkness,"light, green",heat', desc: 'Prompt S/R list where a value itself contains a comma', usage: 'Quote the value with no space after the preceding comma, or it is split into separate items.' }
      ] }
    ]
  },
  suno: {
    name: 'Suno AI',
    icon: 'fas fa-music',
    source: { name: 'Suno Help Center', url: 'https://help.suno.com/' },
    categories: [
      { name: 'Prompt Metatags', shortcuts: [
        { keys: '[Verse]', desc: 'Verse section', usage: 'Specify a verse section in the song.' },
        { keys: '[Chorus]', desc: 'Chorus section', usage: 'Specify a chorus section.' },
        { keys: '[Bridge]', desc: 'Bridge section', usage: 'Specify a bridge section.' },
        { keys: '[Outro]', desc: 'Outro', usage: 'Specify the outro section.' },
        { keys: 'Genre tags', desc: 'Set genre', usage: 'Tag genres like pop, rock, jazz, hip-hop.' },
        { keys: 'BPM', desc: 'Set tempo', usage: 'Specify the song BPM (tempo).' }
      ] }
    ]
  },
  lm_studio: {
    name: 'LM Studio',
    icon: 'fas fa-desktop',
    source: { name: 'LM Studio Docs', url: 'https://lmstudio.ai/docs' },
    categories: [
      { name: 'Model Parameters', shortcuts: [
        { keys: 'Temperature', desc: 'Creativity (0-1)', usage: 'Higher = more creative, lower = more deterministic.' },
        { keys: 'Context Length', desc: 'Token window', usage: 'Max tokens for input + output combined.' },
        { keys: 'Top P', desc: 'Nucleus sampling', usage: 'Probability mass threshold for token selection.' },
        { keys: 'Repeat Penalty', desc: 'Avoid repetition', usage: 'Penalise recently used tokens to reduce repetition.' },
        { keys: 'GPU Layers', desc: 'GPU offload', usage: 'Number of model layers to offload to GPU.' }
      ] },
      { name: 'OpenAI-Compatible Endpoints', shortcuts: [
        { keys: '/v1/chat/completions', desc: 'OpenAI-compatible chat endpoint served by LM Studio', usage: 'POST against the local server started with lms server start.' },
        { keys: '/v1/completions', desc: 'OpenAI-compatible text completion endpoint', usage: 'POST; legacy completion style rather than chat messages.' },
        { keys: '/v1/embeddings', desc: 'OpenAI-compatible embeddings endpoint', usage: 'POST; returns vectors for the loaded embedding model.' },
        { keys: '/v1/responses', desc: 'OpenAI-compatible responses endpoint', usage: 'POST; newer response-style API surface.' },
        { keys: '/v1/models', desc: 'List models currently available to the local server', usage: 'GET; mirrors the OpenAI models listing shape.' }
      ] },
      { name: 'Inference Config Parameters', shortcuts: [
        { keys: 'temperature', desc: 'Inference parameter: sampling randomness', usage: 'Set per request in the config object, e.g. { "temperature": 0.6 }.' },
        { keys: 'maxTokens', desc: 'Inference parameter: maximum tokens to generate', usage: 'Set per request alongside temperature in the prediction config.' },
        { keys: 'topP', desc: 'Inference parameter: nucleus sampling cutoff', usage: 'Set per request in the prediction config.' },
        { keys: 'structured', desc: 'Inference parameter that enforces a schema on the output', usage: 'Pass a schema so the model must emit conforming JSON.' }
      ] },
      { name: 'lms CLI Commands', shortcuts: [
        { keys: 'lms server start', desc: 'Start the local LM Studio server', usage: 'Serves the OpenAI-compatible endpoints listed above.' },
        { keys: 'lms server stop', desc: 'Stop the local server', usage: 'Ends serving without quitting the app.' },
        { keys: 'lms server status', desc: 'Show whether the local server is running', usage: 'Quick check before sending API requests.' },
        { keys: 'lms ls', desc: 'List models available locally', usage: 'Shows what can be loaded without downloading.' },
        { keys: 'lms ps', desc: 'List models currently loaded into memory', usage: 'Use before unloading to see what is resident.' },
        { keys: 'lms load', desc: 'Load a model into memory', usage: 'Takes the model key; load parameters are set at load time.' },
        { keys: 'lms unload', desc: 'Unload a model from memory', usage: 'Frees VRAM or RAM held by a loaded model.' },
        { keys: 'lms get', desc: 'Download a model to the local models directory', usage: 'Fetches by model identifier.' },
        { keys: 'lms import', desc: 'Import an existing local model file into LM Studio', usage: 'Registers a GGUF or similar file already on disk.' },
        { keys: 'lms log stream', desc: 'Stream server and prediction logs', usage: 'Useful for debugging prompts and tool calls live.' }
      ] }
    ]
  },
  deepseek: {
    name: 'DeepSeek',
    icon: 'fas fa-brain',
    source: { name: 'DeepSeek API Docs', url: 'https://api-docs.deepseek.com/api/create-chat-completion' },
    categories: [
      { name: 'Chat API Parameters', shortcuts: [
        { keys: 'model', desc: 'The model used for the chat completion', usage: 'This fingerprint represents the backend configuration that the model runs with.' },
        { keys: 'messages', desc: 'A list of messages comprising the conversation so far', usage: 'JSON body field of POST /chat/completions.' },
        { keys: 'temperature', desc: 'What sampling temperature to use, between 0 and 2', usage: 'Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.' },
        { keys: 'top_p', desc: 'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the...', usage: 'So 0.1 means only the tokens comprising the top 10% probability mass are consid' },
        { keys: 'max_tokens', desc: 'The maximum number of tokens that can be generated in the chat completion', usage: 'The total length of input tokens and generated tokens is limited by the model\'s context length.' },
        { keys: 'frequency_penalty', desc: 'This parameter is no longer supported', usage: 'It will not take effect if you pass it to the API.' },
        { keys: 'presence_penalty', desc: 'This parameter is no longer supported', usage: 'It will not take effect if you pass it to the API.' },
        { keys: 'stop', desc: 'Up to 16 sequences where the API will stop generating further tokens', usage: 'JSON body field of POST /chat/completions.' },
        { keys: 'stream', desc: 'If set, partial message deltas will be sent', usage: 'Tokens will be sent as data-only server-sent events (SSE) as they become available, with the stream terminated by a' },
        { keys: 'stream_options', desc: 'Options for streaming response', usage: 'Only set this when you set If set, an additional chunk will be streamed before the field on this chunk shows the token usage statistics for the...' },
        { keys: 'response_format', desc: 'An object specifying the format that the model must output', usage: 'Setting to { "type": "json_object" } enables JSON Output, which guarantees the message the model generates is valid JSON.' },
        { keys: 'tools', desc: 'A list of tools the model may call', usage: 'Currently, only functions are supported as a tool.' },
        { keys: 'tool_choice', desc: 'Controls which (if any) tool is called by the model', usage: 'means the model will not call any tool and instead generates a message.' },
        { keys: 'logprobs', desc: 'Whether to return log probabilities of the output tokens or not', usage: 'If true, returns the log probabilities of each output token returned in the' },
        { keys: 'top_logprobs', desc: 'An integer between 0 and 20 specifying the number of most likely tokens to return at each token position, each with...', usage: 'JSON body field of POST /chat/completions.' },
        { keys: 'thinking', desc: 'Controls the switch between thinking and non-thinking mode', usage: 'JSON body field of POST /chat/completions.' }
      ] },
      { name: 'Models & Beta Feature Tokens', shortcuts: [
        { keys: 'deepseek-chat', desc: 'Model ID for the general chat model', usage: 'Set as the model field value.' },
        { keys: 'deepseek-reasoner', desc: 'Model ID for the reasoning model; responses include reasoning_content', usage: 'Set as the model field value. Chain-of-thought is returned in reasoning_content.' },
        { keys: 'https://api.deepseek.com/beta', desc: 'Base URL that enables beta features', usage: 'Required for chat prefix completion and FIM completion.' },
        { keys: 'prefix', desc: 'Chat prefix completion: force the assistant reply to continue from a given prefix (beta)', usage: 'Set prefix: true on the last assistant message, with the beta base URL.' },
        { keys: 'suffix', desc: 'FIM completion: text after the insertion point (beta)', usage: 'Fill-in-the-middle on POST /beta/completions, together with prompt.' },
        { keys: '{"type": "json_object"}', desc: 'response_format value that switches on JSON mode', usage: 'Also instruct the model to produce JSON in the prompt, or output may be empty.' }
      ] }
    ]
  },
  glm: {
    name: 'GLM (Z.ai)',
    icon: 'fas fa-microchip',
    source: { name: 'Z.AI API Reference', url: 'https://docs.z.ai/api-reference/llm/chat-completion' },
    categories: [
      { name: 'Chat API Parameters', shortcuts: [
        { keys: 'model', desc: 'The model code to be called', usage: 'GLM-5.3, GLM-5.2, GLM-5.1, GLM-5-Turbo are the latest flagship model series, foundational models specifically designed for agent applications.' },
        { keys: 'messages', desc: 'The current conversation message list as the model’s prompt input, provided in JSON array format, e.g.,`{“role”:...', usage: 'Possible message types include system messages, user messages, assistant mess' },
        { keys: 'do_sample', desc: 'When do_sample is true, sampling strategy is enabled; when do_sample is false, sampling strategy parameters such as...', usage: 'Default value is `true`.' },
        { keys: 'stream', desc: 'This parameter should be set to false or omitted when using synchronous call', usage: 'It indicates that the model returns all content at once after generating all content.' },
        { keys: 'reasoning_effort', desc: 'Controls the model\'s reasoning effort level, takes effect when `thinking` is enabled', usage: 'Default is `max`, supported by `GLM-5.2` and above.' },
        { keys: 'temperature', desc: 'Sampling temperature, controls the randomness of the output, must be a positive number within the range: `[0.0, 1.0]`', usage: 'The GLM-5.3, GLM-5.2, GLM-5.1, GLM-5, GLM-4.7, GLM-4.6 series default value is `1.0`, GLM-4.5 series' },
        { keys: 'top_p', desc: 'Another method of temperature sampling, value range is: `[0.01, 1.0]`', usage: 'The GLM-5.3, GLM-5.2, GLM-5.1, GLM-5, GLM-4.7, GLM-4.6, GLM-4.5 series default value is `0.95`, GLM-4-32B-0414-128K default value is `0.9`.' },
        { keys: 'max_tokens', desc: 'The maximum number of tokens for model output, the GLM-5.3, GLM-5.2, GLM-5.1, GLM-5, GLM-4.7, GLM-4.6 series...', usage: 'JSON body field (integer) of POST /paas/v4/chat/completions.' },
        { keys: 'tool_stream', desc: 'Whether to enable streaming response for Function Calls', usage: 'Default value is false.' },
        { keys: 'tools', desc: 'A list of tools the model may call', usage: 'Currently, only functions are supported as a tool.' },
        { keys: 'tool_choice', desc: 'Controls how the model selects a tool', usage: 'JSON body field (field) of POST /paas/v4/chat/completions.' },
        { keys: 'stop', desc: 'Stop word list', usage: 'Generation stops when the model encounters any specified string.' },
        { keys: 'response_format', desc: 'Specifies the response format of the model', usage: 'Defaults to text.' },
        { keys: 'request_id', desc: 'Passed by the user side, needs to be unique; used to distinguish each request, 6–64 characters', usage: 'If not provided by the user side, the platform will generate one by default.' },
        { keys: 'user_id', desc: 'Unique ID for the end user, 6–128 characters', usage: 'Avoid using sensitive information.' }
      ] },
      { name: 'Image Generation Parameters', shortcuts: [
        { keys: 'model', desc: 'Model code', usage: 'JSON body field of the image generation endpoint.' },
        { keys: 'prompt', desc: 'The text description of the image to be generated', usage: 'JSON body field of the image generation endpoint.' },
        { keys: 'quality', desc: 'The quality of the generated image', usage: '`glm-image` default is `hd`, others model is `standard`.' },
        { keys: 'size', desc: 'Image size', usage: '`glm-image` recommended enum values: `1280x1280` (default), `1568x1056`, `1056x1568`, `1472x1088`, `1088x1472`, `1728x960`, `960x1728`.' },
        { keys: 'user_id', desc: 'Unique ID of the end user, helping the platform intervene in illegal activities, inappropriate content generation,...', usage: 'ID length: 6 to 128 characters.' }
      ] },
      { name: 'Model & Mode Tokens', shortcuts: [
        { keys: 'glm-5.3', desc: 'Latest flagship GLM model ID', usage: 'Set as the model field value in chat completions.' },
        { keys: 'glm-5-turbo', desc: 'Faster, lower-cost GLM model ID', usage: 'Set as the model field value in chat completions.' },
        { keys: 'reasoning_effort: "high"', desc: 'Raise the reasoning effort level when thinking is enabled', usage: 'Values control how much reasoning the model performs before answering.' }
      ] }
    ]
  },
  kimi: {
    name: 'Kimi (Moonshot AI)',
    icon: 'fas fa-moon',
    source: { name: 'Kimi API Platform Docs', url: 'https://platform.kimi.ai/docs/api/chat' },
    categories: [
      { name: 'Chat API Parameters', shortcuts: [
        { keys: 'model', desc: 'Model ID to call; kimi-k3 is the default', usage: 'Set to a model ID from the Models & Modes table below.' },
        { keys: 'messages', desc: 'The conversation message list; supports dynamic tool messages', usage: 'A {"role": "system", "tools": [...]} message can be inserted at any position.' },
        { keys: 'max_completion_tokens', desc: 'Maximum tokens to generate', usage: 'Kimi K3 defaults to 131072 and can be set up to 1048576. Replaces the deprecated max_tokens.' },
        { keys: 'max_tokens', desc: 'Deprecated token limit field', usage: 'Use max_completion_tokens instead.' },
        { keys: 'response_format', desc: 'Controls the output format; {"type": "json_object"} enables JSON mode', usage: 'Default is {"type": "text"}. In JSON mode you must also guide the model to output JSON in the prompt.' },
        { keys: 'stop', desc: 'Stop words that halt generation on a full match', usage: 'Up to 5 strings, each at most 32 bytes; matched words are not output.' },
        { keys: 'stream', desc: 'Return the response as a stream', usage: 'Boolean, default false.' },
        { keys: 'stream_options', desc: 'Options for streaming responses', usage: 'Object with child attributes for stream behavior.' },
        { keys: 'tools', desc: 'A list of tools the model may call', usage: 'Standard function-tool definitions.' },
        { keys: 'tool_choice', desc: 'Controls whether and how the model calls tools', usage: 'auto (default), none, required, or an object forcing a specific function.' },
        { keys: 'logprobs', desc: 'Return log probabilities of the output tokens', usage: 'Boolean, default false; values arrive in the logprobs field of the response.' },
        { keys: 'top_logprobs', desc: 'Number of most likely tokens to return per position', usage: 'Integer 0-20; requires logprobs: true.' },
        { keys: 'prediction', desc: 'Predicted Output configuration to speed up largely-known responses', usage: 'Useful when regenerating a file with only minor changes.' },
        { keys: 'prompt_cache_key', desc: 'Cache key to raise cache hit rates across similar requests', usage: 'For coding agents, typically a session or task ID; reuse it when a session resumes.' },
        { keys: 'safety_identifier', desc: 'Stable per-user identifier for abuse detection', usage: 'Hash the username or email rather than sending it raw.' },
        { keys: 'reasoning_effort', desc: 'Reasoning effort level for Kimi K3 thinking', usage: 'Values: low, high, max (default max). K3 always thinks with Preserved Thinking.' }
      ] },
      { name: 'Models & Mode Tokens', shortcuts: [
        { keys: 'kimi-k3', desc: 'Flagship model ID with always-on thinking', usage: 'Default model; set as the model field value.' },
        { keys: 'kimi-k2.7-code', desc: 'Coding-focused model ID', usage: 'Set as the model field value.' },
        { keys: 'kimi-k2.7-code-highspeed', desc: 'Faster variant of the coding model', usage: 'Set as the model field value.' },
        { keys: 'kimi-k2.6', desc: 'Previous-generation general model ID', usage: 'Set as the model field value.' },
        { keys: 'kimi-k2.5', desc: 'Older general model ID', usage: 'Set as the model field value.' },
        { keys: 'partial: true', desc: 'Partial Mode: force the reply to continue from a given prefix', usage: 'Append a message with role: assistant, partial: true, and the prefix text in content at the end of messages.' }
      ] }
    ]
  },
  kling: {
    name: 'Kling AI',
    icon: 'fas fa-film',
    source: { name: 'Kling AI API Documentation', url: 'https://kling.ai/document-api/api/video/3-0-omni/image-to-video' },
    categories: [
      { name: 'Generation Input Parameters', shortcuts: [
        { keys: 'contents', desc: 'Reference input collection: prompts, images, Elements', usage: 'Array of typed inputs forming the generation request.' },
        { keys: '"type": "prompt"', desc: 'Prompt input identifier inside contents', usage: 'Carries the text field with positive and negative descriptions.' },
        { keys: '"type": "first_frame"', desc: 'First-frame image input identifier', usage: 'Anchors the opening frame of the generated video.' },
        { keys: '"type": "last_frame"', desc: 'Last-frame image input identifier', usage: 'Anchors the closing frame of the generated video.' },
        { keys: '"type": "element"', desc: 'Element input identifier', usage: 'References a reusable Element in the generation.' },
        { keys: '"type": "image"', desc: 'Appearance reference image (Motion Control)', usage: 'Generated characters follow the reference image; proportions should match the motion video.' },
        { keys: '"type": "video"', desc: 'Motion reference video identifier (Motion Control)', usage: 'Drives character motion from a reference clip.' },
        { keys: 'text', desc: 'Prompt text content, positive and negative descriptions', usage: 'String field inside a prompt-type content item; can add elements and motion effects.' }
      ] },
      { name: 'Output Settings Parameters', shortcuts: [
        { keys: 'settings', desc: 'Output configuration object: resolution, duration, and related fields', usage: 'Container for generation output parameters.' },
        { keys: 'multi_shot', desc: 'Whether to generate multi-shot video', usage: 'Boolean; when false, multi-shot prompts will not produce multi-shot output.' },
        { keys: 'audio', desc: 'Audio generation switch for the video', usage: 'Values: native (audio matching the visuals) or off (silent).' },
        { keys: 'resolution', desc: 'Resolution of the generated video', usage: 'Set inside the settings object.' }
      ] },
      { name: 'Task & Query Parameters', shortcuts: [
        { keys: 'options', desc: 'General configuration: callback address, watermark, and similar', usage: 'Container object alongside contents and settings.' },
        { keys: 'callback_url', desc: 'Callback URL for task result notifications', usage: 'Server sends a notification on task status change; see the Callback Protocol.' },
        { keys: 'external_task_id', desc: 'Custom task ID, unique within the account', usage: 'Does not overwrite the system task ID; usable for status queries.' },
        { keys: 'watermark_info', desc: 'Whether to also generate a watermarked result', usage: 'Object with an enabled boolean.' },
        { keys: 'task_ids', desc: 'System task IDs to query, as a request path parameter', usage: 'Choose either task_ids or external_task_ids per query, not both.' },
        { keys: 'external_task_ids', desc: 'Custom task IDs to query, as a request path parameter', usage: 'Alternative to task_ids for status queries.' },
        { keys: 'start_time', desc: 'Start of the task-creation filter window', usage: 'Unix timestamp in milliseconds; defaults to end_time minus 30 days.' },
        { keys: 'end_time', desc: 'End of the task-creation filter window', usage: 'Unix timestamp in milliseconds; defaults to now.' },
        { keys: 'cursor', desc: 'Continuation cursor for paged task queries', usage: 'Use next_cursor from the previous query; when set, start_time and end_time are ignored.' },
        { keys: 'filters', desc: 'Task query filter criteria', usage: 'Key/value entries; key status or product_type.' },
        { keys: '"key": "status"', desc: 'Filter tasks by status', usage: 'Values: submitted, processing, succeeded, failed.' },
        { keys: '"key": "product_type"', desc: 'Filter tasks by function type', usage: 'Values: video, image, try_on.' }
      ] }
    ]
  },
  vidu: {
    name: 'Vidu',
    icon: 'fas fa-video',
    source: { name: 'Vidu Platform API Docs', url: 'https://platform.vidu.com/docs/text-to-video' },
    categories: [
      { name: 'Generation Parameters', shortcuts: [
        { keys: 'model', desc: 'Model name', usage: 'Accepted values:viduq3-turbo, viduq3-pro , viduq2 , viduq1 -viduq3-turbo: Compared to viduq3-pro, the generation speed is faster -viduq3-pro: Supports audio-visual synchronization,... Required.' },
        { keys: 'style', desc: 'The style of output video', usage: 'Defaults to general, Accepted values: general anime - general : General style. Allows style control through prompts - anime: Anime style. Optimized for anime aesthetics, with better...' },
        { keys: 'prompt', desc: 'Text prompt A textual description for video generation, with a maximum length of 5000 characters', usage: 'Required.' },
        { keys: 'duration', desc: 'Video duration', usage: 'Default values vary by model: - viduq3-pro,viduq3-turbo: default 5s, available: 1 - 16 - viduq2: default 5s, available: 1 - 10 - viduq1: default 5s, available: 5' },
        { keys: 'seed', desc: 'Random seed -', usage: 'Defaults to a random seed number - Manually set values will override the default random seed' },
        { keys: 'aspect_ratio', desc: 'The aspect ratio of the output video', usage: 'Defaults to 16:9, accepted: 16:9 9:163:4 4:3 1:1 Note:3:4& 4:3only support q2 & q3 model' },
        { keys: 'resolution', desc: 'Resolution', usage: 'Default values vary by model & duration: - viduq3-pro , viduq3-turbo (1-16s): default 720p, available: 540p, 720p, 1080p - viduq2 (1-10s): default 720p, available: 540p 720p 1080p -...' },
        { keys: 'movement_amplitude', desc: 'The movement amplitude of objects in the frame', usage: 'Defaults to auto, accepted value: auto small medium large This parameter does not take effect when using the q2 & q3 model' },
        { keys: 'images', desc: 'An image to be used as the start frame of the generated video For fields that accept images: - Only accepts 1 image -...', usage: '- Supported formats: png, jpeg, jpg, webp - The aspect ratio of the images must be less than 1:4 or 4:1 - All images are limited to 50MB - The post body of the HTTP request should not... Required.' },
        { keys: 'voice_id', desc: 'Voice ID, The Q3 series model is not effective Used to determine the voice character in the video', usage: 'The system will automatically recommend a suitable voice, and optional values can be found in the Voice List. You can also use the Voice Cloning API to clone any voice. The voice_id...' },
        { keys: 'is_rec', desc: 'Whether to use the recommended prompt', usage: '- true: Yes, the system will automatically generate and apply a recommended prompt to create the video. The number of recommended prompts = 1. - false: No, the video will be generated...' },
        { keys: 'auto_subjects', desc: 'Optional | Whether to use the intelligent entity library capability, default is false, optional values are true and false...', usage: '- false: Do not use the intelligent agent library capability.' },
        { keys: 'subjects', desc: 'Required | When using the q3, q2, q1, and 2.0 models, only the main body of the image and text can be used - The maximum...', usage: 'JSON body field of the Vidu generation endpoints.' },
        { keys: 'videos', desc: 'Optional | The video URL corresponding to the subject', usage: 'All subjects share a 13s duration (each image subject = 1s). Must provide either this or images. - Note 1: This parameter is only supported by the viduq2-pro model. - Note 2: When using...' }
      ] },
      { name: 'Task & Delivery Parameters', shortcuts: [
        { keys: 'bgm', desc: 'Whether to add background music to the generated video.（q3 model not available） Default: false', usage: 'Acceptable values: true, false. When true, the system will automatically add a suitable BGM. BGM has no time limit and the system automatically adapts. BGM does not take effect when the...' },
        { keys: 'audio', desc: 'Whether to use direct audio-video generation capability', usage: 'Default: true. Enumerated values: - false: No direct audio-video generation, outputs silent video - true: Requires audio-video synchronization, outputs video with sound (including...' },
        { keys: 'payload', desc: 'transparent transmission parameters No processing, only data transmission，with a maximum length of 1048576 characters', usage: 'JSON body field of the Vidu generation endpoints.' },
        { keys: 'off_peak', desc: 'off peak mode,', usage: 'Defaults to false, accepted value: true false - true：off peak generate mode； - false：normal generate mode； - The off_peak mode consumes lower points, please refer to the details Pricing....' },
        { keys: 'callback_url', desc: 'Callback When creating a task, you need to actively set the callback_url with a POST request', usage: 'When the video generation task changes its status, Vidu will send a callback request to this URL, containing the latest status of the task. The structure of the callback request content...' },
        { keys: 'audio_type', desc: 'Audio type, required when audio is true, defaults to all -All: Sound effects+vocals -Speech_only: Vocal only...', usage: 'JSON body field of the Vidu generation endpoints.' }
      ] },
      { name: 'Model IDs', shortcuts: [
        { keys: 'viduq3-pro', desc: 'Model ID with audio-visual synchronization and video shot segmentation', usage: 'Set as the model field value.' },
        { keys: 'viduq3-turbo', desc: 'Faster variant of viduq3-pro', usage: 'Set as the model field value.' },
        { keys: 'viduq2', desc: 'Second-generation Vidu model ID', usage: 'Supports 3:4 and 4:3 aspect ratios; duration 1-10s.' },
        { keys: 'viduq1', desc: 'First-generation model: clear image, smooth transition, stable camera', usage: 'Fixed 5s duration at 1080p.' }
      ] }
    ]
  },
  minimax: {
    name: 'MiniMax (Hailuo)',
    icon: 'fas fa-wave-square',
    source: { name: 'MiniMax Platform API Reference', url: 'https://platform.minimax.io/docs/api-reference/video-generation-v2-create' },
    categories: [
      { name: 'Video Generation Parameters', shortcuts: [
        { keys: 'model', desc: 'Model name', usage: 'Currently available: MiniMax-H3.' },
        { keys: 'content', desc: 'Array of multimodal input describing the information used to generate the video', usage: 'Each element is distinguished by type (text / image_url / video_url / audio_url) and can be labeled with a role. Every request must include one non-empty text item (the prompt is...' },
        { keys: 'resolution', desc: 'Video resolution', usage: 'Currently available: 768P, 2K.' },
        { keys: 'duration', desc: 'Duration of the generated video in seconds', usage: 'Required, integer. Available values: 4-15.' },
        { keys: 'ratio', desc: 'Aspect ratio of the generated video', usage: 'Defaults to adaptive (the most suitable ratio is chosen automatically based on the input; the actual ratio can be read from the ratio field of the query endpoint). Available values:...' },
        { keys: 'callback_url', desc: 'Callback URL for task status changes', usage: 'Once configured, the MiniMax server first sends a verification request containing a challenge field (you must return the challenge unchanged within 3 seconds to complete verification);...' }
      ] },
      { name: 'Multimodal Content & Model Tokens', shortcuts: [
        { keys: '"type": "text"', desc: 'Text prompt content item; every scenario must include one', usage: 'Inside the content array, with the prompt in the text field.' },
        { keys: '"type": "image_url"', desc: 'Image input content item', usage: 'Supplies a reference or first-frame image to the generation.' },
        { keys: '"type": "video_url"', desc: 'Video input content item', usage: 'Supplies a reference video to the generation.' },
        { keys: '"type": "audio_url"', desc: 'Audio input content item', usage: 'Supplies reference audio to the generation.' },
        { keys: 'role', desc: 'Position or purpose of a content item', usage: 'Conditionally required depending on the content type.' },
        { keys: 'MiniMax-H3', desc: 'Current video generation model ID (Hailuo 03)', usage: 'Set as the model field value.' }
      ] },
      { name: 'Chat API Parameters', shortcuts: [
        { keys: 'model', desc: 'Model ID', usage: 'JSON body field of the OpenAI-compatible chat endpoint.' },
        { keys: 'service_tier', desc: 'Service tier for request admission', usage: 'Supported values are standard and priority. If omitted, the request uses the standard tier. The priority price is 1.5 times the standard price and ensures priority admission so the...' },
        { keys: 'messages', desc: 'A list of messages containing the conversation history', usage: 'Supports text, image, video, and tool call content.' },
        { keys: 'thinking', desc: 'Controls MiniMax-M3 thinking', usage: 'When omitted, adaptive thinking is enabled by default and responses include thinking content. For M2.x models, thinking cannot be disabled.' },
        { keys: 'reasoning_split', desc: 'Output-format switch', usage: 'When enabled, separates thinking content into the reasoning_content and reasoning_details fields. This does not enable or disable thinking.' },
        { keys: 'stream', desc: 'Whether to use streaming output, defaults to false', usage: 'When set to true, the response will be returned in chunks.' },
        { keys: 'stream_options', desc: 'Streaming response options', usage: 'JSON body field of the OpenAI-compatible chat endpoint.' },
        { keys: 'max_completion_tokens', desc: 'Specifies the upper limit for generated content length, in tokens', usage: 'For MiniMax-M3 the recommended value is 131072 (128K) and the maximum is 524288 (512K); for other models the recommended value is 65536 (64K) and the maximum is 204800 (200K). If...' },
        { keys: 'temperature', desc: 'Temperature coefficient, affects output randomness', usage: 'Range [0, 2], default 1. Higher values produce more random output; lower values produce more deterministic output.' },
        { keys: 'top_p', desc: 'Nucleus sampling parameter', usage: 'Range [0, 1]. Default is 0.95 for MiniMax-M3 and 0.9 for M2.x models.' },
        { keys: 'tools', desc: 'Tool definition list', usage: 'Function tools are supported.' },
        { keys: 'max_tokens', desc: 'Legacy generation length limit parameter', usage: 'Deprecated; use max_completion_tokens instead.' }
      ] }
    ]
  },
  pixverse: {
    name: 'PixVerse',
    icon: 'fas fa-clapperboard',
    source: { name: 'PixVerse Platform API Docs', url: 'https://docs.platform.pixverse.ai/text-to-video-generation-13016634e0' },
    categories: [
      { name: 'Generation Parameters', shortcuts: [
        { keys: 'aspect_ratio', desc: 'Aspect ratio', usage: 'other models : 16:9, 4:3, 1:1, 3:4, 9:16 v6/c1 models : 16:9, 4:3, 1:1, 3:4, 9:16, 2:3, 3:2, 21:9' },
        { keys: 'duration', desc: 'Video duration', usage: 'v.3.5/v4/v4.5 : 5/8 (v3.5 1080p cannot use 8) v5 : 5/8 v5.5/v5.6 : 5/8/10 (1080p cannot use 10) v6/c1 : 1~15' },
        { keys: 'model', desc: 'Model version (now supports', usage: 'v3.5/v4/v4.5/v5/v5.5/v5.6/v6/c1' },
        { keys: 'prompt', desc: 'Prompt <= 5000 characters', usage: 'JSON body field of the PixVerse video generation endpoints.' },
        { keys: 'quality', desc: 'Video quality ("360p", "540p", "720p", "1080p")', usage: 'JSON body field of the PixVerse video generation endpoints.' },
        { keys: 'seed', desc: 'Random seed,', usage: 'range: 0 - 2147483647' },
        { keys: 'generate_multi_clip_switch', desc: 'Supported in', usage: 'v5.5/v6 models. Single or multi-clip switch. controls single-clip and multi-clip generation modes. **true**: Multi-clip , **false**: Single-clip. **default value** : false' }
      ] },
      { name: 'Audio & Lip Sync Parameters', shortcuts: [
        { keys: 'generate_audio_switch', desc: 'Supported in', usage: 'v5.5/v5.6/v6/c1 models. Audio switch. Controls whether the video has audio. **true**: Audio on , **false**: Audio off . **default value** : false' },
        { keys: 'sound_effect_switch', desc: 'Supported in', usage: 'v5 models and below.' },
        { keys: 'sound_effect_content', desc: 'Supported in', usage: 'v5 models and below. Activated when sound_effect_switch=true, Describe the sound effect you want. Leave blank for auto generation.' },
        { keys: 'lip_sync_tts_switch', desc: 'Supported in', usage: 'v5 models and below. Set to true if you want to enable this feature. Default is false.' },
        { keys: 'lip_sync_tts_content', desc: 'Supported in', usage: 'v5 models and below. ~140 (UTF-8) characters' },
        { keys: 'lip_sync_tts_speaker_id', desc: 'Supported in', usage: 'v5 models and below. id from Get speech tts list' }
      ] },
      { name: 'Image & Template Inputs', shortcuts: [
        { keys: 'img_id', desc: 'Image ID from Upload image API', usage: 'single image or single-image templates' },
        { keys: 'img_ids', desc: 'img_ids is only for multi-image templates', usage: 'ex) "img_ids ":[0,0]' },
        { keys: 'template_id', desc: 'Template ID (template_id must be activated before use)', usage: 'JSON body field of the PixVerse video generation endpoints.' }
      ] },
      { name: 'Endpoints & Required Headers', shortcuts: [
        { keys: 'POST /openapi/v2/video/text/generate', desc: 'Create a text-to-video generation task', usage: 'Requires API-KEY and a unique Ai-trace-id (UUID) header per request.' },
        { keys: 'POST /openapi/v2/video/img/generate', desc: 'Create an image-to-video generation task', usage: 'Takes img_id from an uploaded image.' },
        { keys: 'API-KEY', desc: 'Required request header carrying your PixVerse platform key', usage: 'Header, not a body field.' },
        { keys: 'Ai-trace-id', desc: 'Required request header: a UUID unique to each request', usage: 'Used for tracing; reusing a value across requests is not allowed.' }
      ] },
      { name: 'Model IDs', shortcuts: [
        { keys: 'c1', desc: 'Latest PixVerse model generation', usage: 'Set as the model field value.' },
        { keys: 'v6', desc: 'Sixth-generation model', usage: 'Supports the newer aspect ratio set and audio switch.' },
        { keys: 'v5.6', desc: 'Model version with audio generation support', usage: 'Set as the model field value.' },
        { keys: 'v5.5', desc: 'Model version supporting audio and multi-clip switches', usage: 'Set as the model field value.' },
        { keys: 'v4.5', desc: 'Earlier model version', usage: 'Duration options differ from v6/c1.' },
        { keys: 'v3.5', desc: 'Oldest listed model version', usage: '1080p output cannot use the 8 second duration.' }
      ] }
    ]
  }
};
export default promptData;
