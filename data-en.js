const shortcutData = {
  windows: {
    name: 'Windows',
    icon: 'fab fa-windows',
    categories: [
      {
        name: 'Essential Shortcuts',
        shortcuts: [
          { keys: 'Ctrl + C', desc: 'Copy', usage: 'Copy selected item to clipboard. Works with text, files, images, and more.' },
          { keys: 'Ctrl + X', desc: 'Cut', usage: 'Cut selected item and store in clipboard. Original is removed.' },
          { keys: 'Ctrl + V', desc: 'Paste', usage: 'Paste clipboard content at current location. Can paste multiple times.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action. Press multiple times to undo previous actions.' },
          { keys: 'Ctrl + Y', desc: 'Redo', usage: 'Redo undone action. Restores actions canceled with Ctrl+Z.' },
          { keys: 'Ctrl + A', desc: 'Select All', usage: 'Select all items in current document or folder.' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save current document. Press frequently to prevent data loss.' },
          { keys: 'Ctrl + P', desc: 'Print', usage: 'Open print dialog. Preview before printing recommended.' },
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Open text search box. Quickly find words in documents.' },
          { keys: 'Ctrl + H', desc: 'Replace', usage: 'Open find and replace dialog. Batch change text efficiently.' },
          { keys: 'Ctrl + N', desc: 'New Window/Doc', usage: 'Open new window or document depending on app.' },
          { keys: 'Ctrl + W', desc: 'Close Window', usage: 'Close current window or tab. Prompts to save if needed.' },
          { keys: 'Alt + F4', desc: 'Quit Program', usage: 'Completely quit active program.' },
          { keys: 'Ctrl + Shift + Esc', desc: 'Task Manager', usage: 'Open Task Manager directly. Best for frozen programs.' },
          { keys: 'F2', desc: 'Rename', usage: 'Rename selected file or folder.' },
          { keys: 'F5', desc: 'Refresh', usage: 'Refresh current page or folder.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Move selected item to Recycle Bin. Can restore later.' },
          { keys: 'Shift + Delete', desc: 'Permanent Delete', usage: 'Permanently delete without Recycle Bin. Cannot restore.' },
        ]
      },
      {
        name: 'Window & Display',
        shortcuts: [
          { keys: 'Win + D', desc: 'Show Desktop', usage: 'Minimize all windows or restore them.' },
          { keys: 'Win + E', desc: 'File Explorer', usage: 'Open File Explorer.' },
          { keys: 'Win + L', desc: 'Lock Screen', usage: 'Lock computer for security.' },
          { keys: 'Win + I', desc: 'Settings', usage: 'Open Windows Settings app.' },
          { keys: 'Win + X', desc: 'Quick Link Menu', usage: 'Open system tools menu.' },
          { keys: 'Win + Tab', desc: 'Task View', usage: 'View open windows and virtual desktops.' },
          { keys: 'Win + Ctrl + D', desc: 'New Desktop', usage: 'Create new virtual desktop.' },
          { keys: 'Win + Ctrl + Left/Right', desc: 'Switch Desktop', usage: 'Switch between virtual desktops.' },
          { keys: 'Win + Ctrl + F4', desc: 'Close Desktop', usage: 'Close current virtual desktop.' },
          { keys: 'Win + Left/Right', desc: 'Snap Window', usage: 'Snap window to left or right half of screen.' },
          { keys: 'Win + Up/Down', desc: 'Maximize/Minimize', usage: 'Maximize or minimize window.' },
          { keys: 'Win + Shift + Left/Right', desc: 'Move to Monitor', usage: 'Move window to another monitor.' },
          { keys: 'Win + M', desc: 'Minimize All', usage: 'Minimize all windows.' },
          { keys: 'Alt + Tab', desc: 'Switch Windows', usage: 'Quickly switch between open windows.' },
          { keys: 'Alt + Shift + Tab', desc: 'Reverse Switch', usage: 'Switch windows in reverse order.' },
          { keys: 'Ctrl + Alt + Tab', desc: 'Persistent Switcher', usage: 'Keep window switcher open for arrow key selection.' },
          { keys: 'Ctrl + Tab', desc: 'Switch Tabs', usage: 'Switch between tabs in apps.' },
          { keys: 'Win + Home', desc: 'Minimize Others', usage: 'Minimize all windows except active one.' },
        ]
      },
      {
        name: 'Screenshot & Capture',
        shortcuts: [
          { keys: 'Win + Shift + S', desc: 'Snipping Tool', usage: 'Capture part of screen. Best method in Windows 10/11.' },
          { keys: 'PrtScn', desc: 'Full Screen', usage: 'Copy entire screen to clipboard.' },
          { keys: 'Win + PrtScn', desc: 'Save Screenshot', usage: 'Save entire screen to Pictures\\Screenshots folder.' },
          { keys: 'Alt + PrtScn', desc: 'Active Window', usage: 'Capture only the active window.' },
          { keys: 'Win + G', desc: 'Game Bar', usage: 'Open Game Bar for recording and screenshots.' },
          { keys: 'Win + Alt + R', desc: 'Start/Stop Recording', usage: 'Start or stop screen recording.' },
        ]
      },
      {
        name: 'System & Search',
        shortcuts: [
          { keys: 'Win + S', desc: 'Search', usage: 'Open Windows Search for files, apps, and settings.' },
          { keys: 'Win + R', desc: 'Run Dialog', usage: 'Open Run dialog for commands.' },
          { keys: 'Win + A', desc: 'Action Center', usage: 'Open Action Center for notifications and quick settings.' },
          { keys: 'Win + K', desc: 'Connect Devices', usage: 'Connect to wireless displays and audio.' },
          { keys: 'Win + P', desc: 'Project', usage: 'Choose display projection mode.' },
          { keys: 'Win + V', desc: 'Clipboard History', usage: 'View clipboard history and paste previous items.' },
          { keys: 'Win + .', desc: 'Emoji Panel', usage: 'Open emoji, symbols, and GIF picker. 😊' },
          { keys: 'Win + ;', desc: 'Emoji Panel', usage: 'Same as Win+. - opens emoji panel.' },
          { keys: 'Win + H', desc: 'Voice Typing', usage: 'Start voice dictation.' },
          { keys: 'Win + U', desc: 'Accessibility', usage: 'Open Accessibility settings.' },
          { keys: 'Win + +/-', desc: 'Magnifier', usage: 'Zoom in or out with screen magnifier.' },
          { keys: 'Win + Esc', desc: 'Exit Magnifier', usage: 'Exit screen magnifier.' },
        ]
      },
    ]
  },
  mac: {
    name: 'Mac',
    icon: 'fab fa-apple',
    categories: [
      {
        name: 'Basic Editing',
        shortcuts: [
          { keys: 'Cmd + C', desc: 'Copy', usage: 'Copy selected item to clipboard.' },
          { keys: 'Cmd + X', desc: 'Cut', usage: 'Cut selected item.' },
          { keys: 'Cmd + V', desc: 'Paste', usage: 'Paste clipboard content.' },
          { keys: 'Cmd + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Cmd + Shift + Z', desc: 'Redo', usage: 'Redo undone action.' },
          { keys: 'Cmd + A', desc: 'Select All', usage: 'Select all items in document.' },
          { keys: 'Cmd + S', desc: 'Save', usage: 'Save current document.' },
          { keys: 'Cmd + P', desc: 'Print', usage: 'Open print dialog.' },
          { keys: 'Cmd + F', desc: 'Find', usage: 'Open find dialog.' },
          { keys: 'Cmd + G', desc: 'Find Next', usage: 'Find next occurrence.' },
          { keys: 'Cmd + Shift + G', desc: 'Find Previous', usage: 'Find previous occurrence.' },
          { keys: 'Cmd + H', desc: 'Replace', usage: 'Find and replace text (in some apps).' },
        ]
      },
      {
        name: 'Text Editing',
        shortcuts: [
          { keys: 'Cmd + B', desc: 'Bold', usage: 'Make text bold.' },
          { keys: 'Cmd + I', desc: 'Italic', usage: 'Make text italic.' },
          { keys: 'Cmd + U', desc: 'Underline', usage: 'Underline text.' },
          { keys: 'Cmd + T', desc: 'Font', usage: 'Show font panel.' },
          { keys: 'Cmd + K', desc: 'Link', usage: 'Add or edit hyperlink.' },
          { keys: 'Cmd + Delete', desc: 'Delete Left', usage: 'Delete text to left of cursor.' },
          { keys: 'Option + Delete', desc: 'Delete Word', usage: 'Delete word to left.' },
          { keys: 'Ctrl + K', desc: 'Delete Right', usage: 'Delete text to right of cursor.' },
          { keys: 'Option + Cmd + C', desc: 'Copy Style', usage: 'Copy formatting style.' },
          { keys: 'Option + Cmd + V', desc: 'Paste Style', usage: 'Paste formatting style.' },
        ]
      },
      {
        name: 'Window Management',
        shortcuts: [
          { keys: 'Cmd + M', desc: 'Minimize', usage: 'Minimize current window.' },
          { keys: 'Cmd + W', desc: 'Close Window', usage: 'Close current window or tab.' },
          { keys: 'Cmd + Q', desc: 'Quit App', usage: 'Quit current application.' },
          { keys: 'Cmd + N', desc: 'New Window', usage: 'Open new window.' },
          { keys: 'Cmd + T', desc: 'New Tab', usage: 'Open new tab.' },
          { keys: 'Cmd + Option + W', desc: 'Close All', usage: 'Close all windows of app.' },
          { keys: 'Cmd + `', desc: 'Cycle Windows', usage: 'Switch between app windows.' },
          { keys: 'Cmd + H', desc: 'Hide App', usage: 'Hide current application.' },
          { keys: 'Cmd + Option + H', desc: 'Hide Others', usage: 'Hide all other applications.' },
          { keys: 'Cmd + Tab', desc: 'Switch Apps', usage: 'Switch between applications.' },
          { keys: 'Cmd + Shift + Tab', desc: 'Reverse Switch', usage: 'Switch apps in reverse.' },
          { keys: 'F3', desc: 'Mission Control', usage: 'View all open windows and desktops.' },
          { keys: 'Cmd + F3', desc: 'Show Desktop', usage: 'Show desktop.' },
        ]
      },
      {
        name: 'Finder',
        shortcuts: [
          { keys: 'Cmd + N', desc: 'New Window', usage: 'Open new Finder window.' },
          { keys: 'Cmd + Shift + N', desc: 'New Folder', usage: 'Create new folder.' },
          { keys: 'Cmd + Delete', desc: 'Move to Trash', usage: 'Move selected item to Trash.' },
          { keys: 'Cmd + Shift + Delete', desc: 'Empty Trash', usage: 'Empty Trash bin.' },
          { keys: 'Cmd + D', desc: 'Duplicate', usage: 'Duplicate selected item.' },
          { keys: 'Cmd + I', desc: 'Get Info', usage: 'Show item information.' },
          { keys: 'Cmd + R', desc: 'Show Original', usage: 'Show original of alias.' },
          { keys: 'Cmd + L', desc: 'Make Alias', usage: 'Create alias of item.' },
          { keys: 'Cmd + E', desc: 'Eject', usage: 'Eject selected disk.' },
          { keys: 'Cmd + 1/2/3/4', desc: 'Change View', usage: 'Change Finder view mode.' },
          { keys: 'Cmd + [', desc: 'Go Back', usage: 'Go to previous folder.' },
          { keys: 'Cmd + ]', desc: 'Go Forward', usage: 'Go to next folder.' },
          { keys: 'Cmd + Up', desc: 'Parent Folder', usage: 'Open parent folder.' },
          { keys: 'Cmd + Down', desc: 'Open Item', usage: 'Open selected item.' },
          { keys: 'Cmd + Shift + H', desc: 'Home', usage: 'Go to Home folder.' },
          { keys: 'Cmd + Shift + D', desc: 'Desktop', usage: 'Go to Desktop folder.' },
          { keys: 'Cmd + Shift + O', desc: 'Documents', usage: 'Go to Documents folder.' },
          { keys: 'Cmd + Shift + G', desc: 'Go to Folder', usage: 'Go to specific folder path.' },
          { keys: 'Cmd + Shift + .', desc: 'Show Hidden', usage: 'Show or hide hidden files.' },
          { keys: 'Space', desc: 'Quick Look', usage: 'Preview selected file.' },
        ]
      },
      {
        name: 'Screenshot',
        shortcuts: [
          { keys: 'Cmd + Shift + 3', desc: 'Full Screen', usage: 'Capture entire screen to file.' },
          { keys: 'Cmd + Shift + 4', desc: 'Area', usage: 'Capture selected area.' },
          { keys: 'Cmd + Shift + 4 + Space', desc: 'Window', usage: 'Capture specific window.' },
          { keys: 'Cmd + Shift + 5', desc: 'Screenshot Tool', usage: 'Open screenshot and recording tool.' },
          { keys: 'Cmd + Shift + 6', desc: 'Touch Bar', usage: 'Capture Touch Bar.' },
        ]
      },
      {
        name: 'Spotlight & Search',
        shortcuts: [
          { keys: 'Cmd + Space', desc: 'Spotlight', usage: 'Open Spotlight search.' },
          { keys: 'Cmd + Option + Space', desc: 'Finder Search', usage: 'Open Finder search window.' },
          { keys: 'Cmd + F', desc: 'In-App Find', usage: 'Find within current app.' },
          { keys: 'Cmd + Option + F', desc: 'Search Field', usage: 'Go to search field.' },
        ]
      },
      {
        name: 'System Functions',
        shortcuts: [
          { keys: 'Cmd + ,', desc: 'Preferences', usage: 'Open app preferences.' },
          { keys: 'Ctrl + Cmd + Q', desc: 'Lock Screen', usage: 'Lock the screen.' },
          { keys: 'Ctrl + Cmd + Power', desc: 'Restart', usage: 'Restart Mac.' },
          { keys: 'Ctrl + Option + Cmd + Power', desc: 'Shut Down', usage: 'Shut down Mac.' },
          { keys: 'Ctrl + Shift + Power', desc: 'Sleep Display', usage: 'Put display to sleep.' },
          { keys: 'Ctrl + Power', desc: 'Power Dialog', usage: 'Show restart/shutdown dialog.' },
          { keys: 'Cmd + Control + Power', desc: 'Force Restart', usage: 'Force restart Mac.' },
          { keys: 'Cmd + Option + Esc', desc: 'Force Quit', usage: 'Force quit unresponsive app.' },
          { keys: 'Cmd + Shift + Q', desc: 'Log Out', usage: 'Log out user account.' },
          { keys: 'Cmd + Shift + Option + Q', desc: 'Log Out Now', usage: 'Log out immediately without confirmation.' },
        ]
      },
      {
        name: 'Accessibility',
        shortcuts: [
          { keys: 'Cmd + Option + F5', desc: 'Accessibility', usage: 'Toggle accessibility options.' },
          { keys: 'Cmd + Option + 8', desc: 'Zoom Toggle', usage: 'Toggle zoom on/off.' },
          { keys: 'Cmd + Option + +/-', desc: 'Zoom In/Out', usage: 'Zoom in or out.' },
          { keys: 'Cmd + Option + \\', desc: 'Invert Colors', usage: 'Invert screen colors.' },
          { keys: 'Ctrl + Option + Cmd + 8', desc: 'Grayscale', usage: 'Toggle grayscale display.' },
        ]
      },
      {
        name: 'Other',
        shortcuts: [
          { keys: 'Cmd + Ctrl + Space', desc: 'Emoji Picker', usage: 'Open emoji and symbol picker.' },
          { keys: 'Cmd + Shift + /', desc: 'Help Menu', usage: 'Open Help menu.' },
          { keys: 'F11', desc: 'Show Desktop', usage: 'Show desktop (older Macs).' },
          { keys: 'F12', desc: 'Dashboard', usage: 'Show Dashboard (older Macs).' },
          { keys: 'Cmd + Option + D', desc: 'Dock Toggle', usage: 'Show or hide Dock.' },
          { keys: 'Cmd + Shift + ?', desc: 'App Help', usage: 'Open application help.' },
          { keys: 'Cmd + Option + I', desc: 'Show Inspector', usage: 'Display Finder Inspector window.' },
          { keys: 'Cmd + Option + Shift + Delete', desc: 'Empty Trash Now', usage: 'Empty Trash without confirmation.' },
          { keys: 'Cmd + K', desc: 'Ask Siri', usage: 'Activate Siri (on supported systems).' },
          { keys: 'Fn + F', desc: 'Fullscreen', usage: 'Toggle fullscreen mode.' },
          { keys: 'Ctrl + Cmd + F', desc: 'Fullscreen Toggle', usage: 'Enter/exit fullscreen.' },
          { keys: 'Cmd + Shift + T', desc: 'Show Fonts', usage: 'Show fonts panel (in compatible apps).' },
          { keys: 'Cmd + Shift + C', desc: 'Show Colors', usage: 'Show colors panel (in compatible apps).' },
          { keys: 'Cmd + Option + Esc', desc: 'Force Quit Dialog', usage: 'Open Force Quit Applications window.' },
          { keys: 'Cmd + Shift + A', desc: 'Applications', usage: 'Go to Applications folder in Finder.' },
          { keys: 'Cmd + Shift + U', desc: 'Utilities', usage: 'Go to Utilities folder in Finder.' },
          { keys: 'Cmd + Shift + K', desc: 'Network', usage: 'Open Network utility in Finder.' },
          { keys: 'Cmd + Option + L', desc: 'Downloads', usage: 'Go to Downloads folder.' },
          { keys: 'Cmd + Ctrl + D', desc: 'Dictionary', usage: 'Look up selected word in Dictionary.' },
          { keys: 'Cmd + Shift + 5', desc: 'Screenshot Toolbar', usage: 'Open screenshot and screen recording toolbar.' },
          { keys: 'Cmd + Option + Power', desc: 'Sleep', usage: 'Put Mac to sleep.' },
        ]
      },
    ]
  },
  chrome: {
    name: 'Chrome',
    icon: 'fab fa-chrome',
    categories: [
      {
        name: 'Tab Management',
        shortcuts: [
          { keys: 'Ctrl + T', desc: 'New Tab', usage: 'Open new tab.' },
          { keys: 'Ctrl + W', desc: 'Close Tab', usage: 'Close current tab.' },
          { keys: 'Ctrl + Shift + T', desc: 'Reopen Tab', usage: 'Reopen last closed tab.' },
          { keys: 'Ctrl + Tab', desc: 'Next Tab', usage: 'Switch to next tab.' },
          { keys: 'Ctrl + Shift + Tab', desc: 'Previous Tab', usage: 'Switch to previous tab.' },
          { keys: 'Ctrl + 1-8', desc: 'Go to Tab', usage: 'Jump to specific tab (1-8).' },
          { keys: 'Ctrl + 9', desc: 'Last Tab', usage: 'Jump to last tab.' },
          { keys: 'Ctrl + Shift + A', desc: 'Search Tabs', usage: 'Search through open tabs.' },
          { keys: 'Ctrl + N', desc: 'New Window', usage: 'Open new browser window.' },
          { keys: 'Ctrl + Shift + N', desc: 'Incognito', usage: 'Open incognito window.' },
        ]
      },
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Ctrl + L', desc: 'Address Bar', usage: 'Focus address bar.' },
          { keys: 'Ctrl + Enter', desc: 'Add .com', usage: 'Add www. and .com to text.' },
          { keys: 'Alt + Left', desc: 'Back', usage: 'Go back in history.' },
          { keys: 'Alt + Right', desc: 'Forward', usage: 'Go forward in history.' },
          { keys: 'F5', desc: 'Refresh', usage: 'Reload current page.' },
          { keys: 'Ctrl + F5', desc: 'Hard Refresh', usage: 'Reload bypassing cache.' },
          { keys: 'Ctrl + H', desc: 'History', usage: 'Open browsing history.' },
          { keys: 'Ctrl + J', desc: 'Downloads', usage: 'Open downloads page.' },
          { keys: 'Ctrl + D', desc: 'Bookmark', usage: 'Bookmark current page.' },
          { keys: 'Ctrl + Shift + B', desc: 'Bookmarks Bar', usage: 'Toggle bookmarks bar.' },
        ]
      },
      {
        name: 'Page Functions',
        shortcuts: [
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Find text on page.' },
          { keys: 'Ctrl + G', desc: 'Find Next', usage: 'Find next match.' },
          { keys: 'Ctrl + Shift + G', desc: 'Find Previous', usage: 'Find previous match.' },
          { keys: 'Ctrl + P', desc: 'Print', usage: 'Print current page.' },
          { keys: 'Ctrl + S', desc: 'Save Page', usage: 'Save page to disk.' },
          { keys: 'Ctrl + +/-', desc: 'Zoom', usage: 'Zoom in or out.' },
          { keys: 'Ctrl + 0', desc: 'Reset Zoom', usage: 'Reset zoom to 100%.' },
          { keys: 'Space', desc: 'Scroll Down', usage: 'Scroll down one page.' },
          { keys: 'Shift + Space', desc: 'Scroll Up', usage: 'Scroll up one page.' },
          { keys: 'Home', desc: 'Page Top', usage: 'Go to top of page.' },
          { keys: 'End', desc: 'Page Bottom', usage: 'Go to bottom of page.' },
          { keys: 'Esc', desc: 'Stop Loading', usage: 'Stop page from loading.' },
        ]
      },
      {
        name: 'Developer Tools',
        shortcuts: [
          { keys: 'F12', desc: 'DevTools', usage: 'Open Developer Tools.' },
          { keys: 'Ctrl + Shift + I', desc: 'Inspect', usage: 'Open Inspect Element.' },
          { keys: 'Ctrl + Shift + J', desc: 'Console', usage: 'Open JavaScript Console.' },
          { keys: 'Ctrl + Shift + C', desc: 'Select Element', usage: 'Inspect element tool.' },
          { keys: 'Ctrl + Shift + Delete', desc: 'Clear Data', usage: 'Clear browsing data.' },
          { keys: 'Ctrl + U', desc: 'View Source', usage: 'View page source code.' },
        ]
      },
      {
        name: 'Other',
        shortcuts: [
          { keys: 'Ctrl + Shift + M', desc: 'Profile Menu', usage: 'Open profile switching menu.' },
          { keys: 'Alt + F', desc: 'Chrome Menu', usage: 'Open Chrome menu.' },
          { keys: 'Ctrl + Shift + O', desc: 'Bookmark Manager', usage: 'Open Bookmark Manager.' },
          { keys: 'Ctrl + Shift + Delete', desc: 'Clear Data', usage: 'Clear browsing data dialog.' },
          { keys: 'Ctrl + Shift + N', desc: 'Incognito', usage: 'Open Incognito window.' },
          { keys: 'Ctrl + Shift + T', desc: 'Reopen Tab', usage: 'Reopen last closed tab.' },
          { keys: 'Ctrl + Shift + W', desc: 'Close Window', usage: 'Close current window.' },
          { keys: 'Alt + Home', desc: 'Home Page', usage: 'Go to home page.' },
          { keys: 'Ctrl + K', desc: 'Search', usage: 'Search with default search engine.' },
          { keys: 'Ctrl + E', desc: 'Search Bar', usage: 'Focus search bar.' },
          { keys: 'F6', desc: 'Focus Address Bar', usage: 'Focus address bar or search.' },
          { keys: 'Ctrl + L', desc: 'Address Bar', usage: 'Highlight URL in address bar.' },
        ]
      },
    ]
  },
  vscode: {
    name: 'VS Code',
    icon: 'fas fa-code',
    categories: [
      {
        name: 'Essential Editing',
        shortcuts: [
          { keys: 'Ctrl + X', desc: 'Cut Line', usage: 'Cut entire line if no selection.' },
          { keys: 'Ctrl + C', desc: 'Copy Line', usage: 'Copy entire line if no selection.' },
          { keys: 'Ctrl + /', desc: 'Toggle Comment', usage: 'Comment or uncomment selected lines.' },
          { keys: 'Ctrl + D', desc: 'Select Next Match', usage: 'Select next occurrence of current word.' },
          { keys: 'Ctrl + Shift + L', desc: 'Select All Matches', usage: 'Select all occurrences at once.' },
          { keys: 'Ctrl + Shift + K', desc: 'Delete Line', usage: 'Delete current line without selection.' },
          { keys: 'Ctrl + Enter', desc: 'Insert Line Below', usage: 'Insert new line below current line.' },
          { keys: 'Alt + Up/Down', desc: 'Move Line', usage: 'Move current line or selection up/down.' },
          { keys: 'Shift + Alt + Up/Down', desc: 'Copy Line', usage: 'Duplicate line or selection up/down.' },
          { keys: 'Ctrl + ]', desc: 'Indent', usage: 'Indent selected lines.' },
          { keys: 'Ctrl + [', desc: 'Outdent', usage: 'Outdent selected lines.' },
        ]
      },
      {
        name: 'Multi-cursor',
        shortcuts: [
          { keys: 'Alt + Click', desc: 'Add Cursor', usage: 'Add cursor at clicked position.' },
          { keys: 'Ctrl + Alt + Up/Down', desc: 'Add Cursor Above/Below', usage: 'Add cursor above or below current line.' },
          { keys: 'Shift + Alt + I', desc: 'Cursors at Line Ends', usage: 'Add cursors at end of each selected line.' },
          { keys: 'Ctrl + L', desc: 'Select Line', usage: 'Select entire current line.' },
        ]
      },
      {
        name: 'Search & Replace',
        shortcuts: [
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Search in current file.' },
          { keys: 'Ctrl + H', desc: 'Replace', usage: 'Find and replace in current file.' },
          { keys: 'Ctrl + Shift + F', desc: 'Find in Files', usage: 'Search across all files.' },
          { keys: 'Ctrl + Shift + H', desc: 'Replace in Files', usage: 'Replace across all files.' },
          { keys: 'F3', desc: 'Find Next', usage: 'Go to next search result.' },
          { keys: 'Shift + F3', desc: 'Find Previous', usage: 'Go to previous search result.' },
        ]
      },
      {
        name: 'Navigation & Files',
        shortcuts: [
          { keys: 'Ctrl + P', desc: 'Quick Open', usage: 'Quickly open file by name.' },
          { keys: 'Ctrl + Shift + P', desc: 'Command Palette', usage: 'Access all commands.' },
          { keys: 'Ctrl + Tab', desc: 'Next File', usage: 'Switch between open files.' },
          { keys: 'Ctrl + W', desc: 'Close Editor', usage: 'Close current editor tab.' },
          { keys: 'Ctrl + \\', desc: 'Split Editor', usage: 'Split editor horizontally.' },
          { keys: 'Ctrl + 1/2/3', desc: 'Focus Editor Group', usage: 'Focus on editor group 1, 2, or 3.' },
        ]
      },
      {
        name: 'Code Navigation',
        shortcuts: [
          { keys: 'F12', desc: 'Go to Definition', usage: 'Jump to symbol definition.' },
          { keys: 'Alt + F12', desc: 'Peek Definition', usage: 'View definition in popup.' },
          { keys: 'Shift + F12', desc: 'Show References', usage: 'Display all references to symbol.' },
          { keys: 'Ctrl + Shift + O', desc: 'Go to Symbol', usage: 'Navigate to symbol in current file.' },
          { keys: 'Ctrl + G', desc: 'Go to Line', usage: 'Jump to specific line number.' },
          { keys: 'F8', desc: 'Next Error', usage: 'Go to next error or warning.' },
        ]
      },
      {
        name: 'Views & Panels',
        shortcuts: [
          { keys: 'Ctrl + B', desc: 'Toggle Sidebar', usage: 'Show or hide sidebar.' },
          { keys: 'Ctrl + Shift + E', desc: 'Explorer', usage: 'Open file explorer.' },
          { keys: 'Ctrl + Shift + F', desc: 'Search', usage: 'Open search panel.' },
          { keys: 'Ctrl + Shift + G', desc: 'Git', usage: 'Open Git source control.' },
          { keys: 'Ctrl + Shift + D', desc: 'Debug', usage: 'Open debug panel.' },
          { keys: 'Ctrl + Shift + X', desc: 'Extensions', usage: 'Open extensions panel.' },
          { keys: 'Ctrl + `', desc: 'Toggle Terminal', usage: 'Open or close integrated terminal.' },
          { keys: 'Ctrl + J', desc: 'Toggle Panel', usage: 'Show or hide bottom panel.' },
        ]
      },
      {
        name: 'Debugging',
        shortcuts: [
          { keys: 'F5', desc: 'Start/Continue', usage: 'Start debugging or continue execution.' },
          { keys: 'Shift + F5', desc: 'Stop', usage: 'Stop debugging session.' },
          { keys: 'F9', desc: 'Toggle Breakpoint', usage: 'Add or remove breakpoint on current line.' },
          { keys: 'F10', desc: 'Step Over', usage: 'Step over to next line.' },
          { keys: 'F11', desc: 'Step Into', usage: 'Step into function.' },
        ]
      },
      {
        name: 'Basic Operations',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New File', usage: 'Create new file.' },
          { keys: 'Ctrl + O', desc: 'Open File', usage: 'Show file open dialog.' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save current file.' },
          { keys: 'Ctrl + Shift + S', desc: 'Save As', usage: 'Save current file with new name.' },
          { keys: 'Ctrl + ,', desc: 'Settings', usage: 'Open user settings.' },
        ]
      },
    ]
  },
  excel: {
    name: 'Excel',
    icon: 'fas fa-file-excel',
    categories: [
      {
        name: 'Cell Editing & Input',
        shortcuts: [
          { keys: 'F2', desc: 'Edit Cell', usage: 'Enter edit mode for selected cell.' },
          { keys: 'Enter', desc: 'Confirm & Move Down', usage: 'Confirm input and move down.' },
          { keys: 'Shift + Enter', desc: 'Confirm & Move Up', usage: 'Confirm input and move up.' },
          { keys: 'Tab', desc: 'Confirm & Move Right', usage: 'Confirm input and move right.' },
          { keys: 'Shift + Tab', desc: 'Confirm & Move Left', usage: 'Confirm input and move left.' },
          { keys: 'Ctrl + D', desc: 'Fill Down', usage: 'Copy top cell content down to selected range.' },
          { keys: 'Ctrl + R', desc: 'Fill Right', usage: 'Copy left cell content right to selected range.' },
          { keys: 'Ctrl + ;', desc: 'Today\'s Date', usage: 'Insert current date as fixed value.' },
          { keys: 'Ctrl + Shift + :', desc: 'Current Time', usage: 'Insert current time as fixed value.' },
          { keys: 'Alt + Enter', desc: 'New Line in Cell', usage: 'Insert line break within same cell.' },
          { keys: 'Ctrl + Enter', desc: 'Fill Selection', usage: 'Fill all selected cells with same value.' },
          { keys: 'Ctrl + Delete', desc: 'Delete to End', usage: 'Delete from cursor to end of cell.' },
          { keys: 'Delete', desc: 'Delete Content', usage: 'Delete content of selected cells.' },
          { keys: 'Ctrl + -', desc: 'Delete Cells/Rows/Columns', usage: 'Delete selected cells, rows, or columns.' },
          { keys: 'Ctrl + Shift + +', desc: 'Insert Cells/Rows/Columns', usage: 'Insert new cells, rows, or columns.' },
        ]
      },
      {
        name: 'Cell Formatting',
        shortcuts: [
          { keys: 'Ctrl + 1', desc: 'Format Cells', usage: 'Open Format Cells dialog for all formatting options.' },
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Make selected text bold or unbold.' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Make selected text italic or remove italic.' },
          { keys: 'Ctrl + U', desc: 'Underline', usage: 'Add or remove underline from text.' },
          { keys: 'Ctrl + 5', desc: 'Strikethrough', usage: 'Add or remove strikethrough from text.' },
          { keys: 'Ctrl + Shift + &', desc: 'Apply Border', usage: 'Apply border to selected cells.' },
          { keys: 'Ctrl + Shift + _', desc: 'Remove Border', usage: 'Remove borders from selected cells.' },
          { keys: 'Alt + H + H', desc: 'Fill Color', usage: 'Change cell background color.' },
          { keys: 'Alt + H + F + C', desc: 'Font Color', usage: 'Change font color.' },
        ]
      },
      {
        name: 'Number Formatting',
        shortcuts: [
          { keys: 'Ctrl + Shift + !', desc: 'Thousand Separator', usage: 'Add thousand separator to numbers.' },
          { keys: 'Ctrl + Shift + $', desc: 'Currency Format', usage: 'Apply currency format.' },
          { keys: 'Ctrl + Shift + %', desc: 'Percentage Format', usage: 'Apply percentage format.' },
          { keys: 'Ctrl + Shift + ^', desc: 'Scientific Format', usage: 'Apply scientific notation format.' },
          { keys: 'Ctrl + Shift + #', desc: 'Date Format', usage: 'Apply date format (day-month-year).' },
          { keys: 'Ctrl + Shift + @', desc: 'Time Format', usage: 'Apply time format.' },
          { keys: 'Ctrl + Shift + ~', desc: 'General Format', usage: 'Apply general number format.' },
        ]
      },
      {
        name: 'Navigation & Movement',
        shortcuts: [
          { keys: 'Ctrl + Home', desc: 'Go to A1', usage: 'Jump to cell A1 (start of worksheet).' },
          { keys: 'Ctrl + End', desc: 'Last Cell', usage: 'Jump to last used cell.' },
          { keys: 'Ctrl + Arrow', desc: 'Jump to Edge', usage: 'Jump to edge of data region in arrow direction.' },
          { keys: 'Home', desc: 'Start of Row', usage: 'Go to first column of current row.' },
          { keys: 'Ctrl + Page Up', desc: 'Previous Sheet', usage: 'Move to previous worksheet.' },
          { keys: 'Ctrl + Page Down', desc: 'Next Sheet', usage: 'Move to next worksheet.' },
          { keys: 'Ctrl + G', desc: 'Go To', usage: 'Open Go To dialog to jump to specific cell.' },
          { keys: 'F5', desc: 'Go To', usage: 'Same as Ctrl+G - opens Go To dialog.' },
          { keys: 'Ctrl + Backspace', desc: 'Show Active Cell', usage: 'Scroll to make active cell visible.' },
          { keys: 'Page Up/Down', desc: 'Screen Navigation', usage: 'Move one screen up or down.' },
        ]
      },
      {
        name: 'Selection',
        shortcuts: [
          { keys: 'Ctrl + A', desc: 'Select All', usage: 'Select entire worksheet.' },
          { keys: 'Ctrl + Space', desc: 'Select Column', usage: 'Select entire current column.' },
          { keys: 'Shift + Space', desc: 'Select Row', usage: 'Select entire current row.' },
          { keys: 'Ctrl + Shift + Space', desc: 'Select Data Region', usage: 'Select entire current data region.' },
          { keys: 'Shift + Arrow', desc: 'Extend Selection', usage: 'Extend selection in arrow direction.' },
          { keys: 'Ctrl + Shift + Arrow', desc: 'Extend to Edge', usage: 'Extend selection to edge of data.' },
          { keys: 'Shift + Home', desc: 'Select to Row Start', usage: 'Extend selection to start of row.' },
          { keys: 'Ctrl + Shift + Home', desc: 'Select to A1', usage: 'Select from current cell to A1.' },
          { keys: 'Ctrl + Shift + End', desc: 'Select to Last', usage: 'Select from current cell to last used cell.' },
        ]
      },
      {
        name: 'Formulas & Functions',
        shortcuts: [
          { keys: '=', desc: 'Start Formula', usage: 'Begin entering a formula.' },
          { keys: 'Alt + =', desc: 'AutoSum', usage: 'Automatically insert SUM function.' },
          { keys: 'F4', desc: 'Toggle Reference', usage: 'Toggle between absolute/relative reference types ($A$1, A$1, $A1, A1).' },
          { keys: 'Ctrl + `', desc: 'Show Formulas', usage: 'Toggle between showing values and formulas.' },
          { keys: 'F9', desc: 'Calculate All', usage: 'Calculate all worksheets in all open workbooks.' },
          { keys: 'Shift + F9', desc: 'Calculate Sheet', usage: 'Calculate only active worksheet.' },
          { keys: 'Ctrl + Alt + F9', desc: 'Force Calculate', usage: 'Force recalculation of all formulas.' },
        ]
      },
      {
        name: 'Data Management',
        shortcuts: [
          { keys: 'Ctrl + T', desc: 'Create Table', usage: 'Convert selected range to Excel table.' },
          { keys: 'Ctrl + Shift + L', desc: 'Toggle Filter', usage: 'Add or remove AutoFilter.' },
          { keys: 'Alt + Down', desc: 'Open Filter', usage: 'Open filter dropdown for selected column.' },
          { keys: 'Ctrl + Shift + O', desc: 'Select Comments', usage: 'Select all cells with comments.' },
          { keys: 'F3', desc: 'Paste Name', usage: 'Paste defined name into formula.' },
          { keys: 'Ctrl + F3', desc: 'Name Manager', usage: 'Open Name Manager to define/edit names.' },
        ]
      },
      {
        name: 'Find & Replace',
        shortcuts: [
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Open Find dialog to search for data.' },
          { keys: 'Ctrl + H', desc: 'Replace', usage: 'Open Find and Replace dialog.' },
          { keys: 'Shift + F4', desc: 'Find Next', usage: 'Find next occurrence of search term.' },
          { keys: 'Ctrl + Shift + F4', desc: 'Find Previous', usage: 'Find previous occurrence of search term.' },
        ]
      },
      {
        name: 'Row/Column Management',
        shortcuts: [
          { keys: 'Ctrl + 9', desc: 'Hide Rows', usage: 'Hide selected rows.' },
          { keys: 'Ctrl + Shift + 9', desc: 'Unhide Rows', usage: 'Unhide rows in selection.' },
          { keys: 'Ctrl + 0', desc: 'Hide Columns', usage: 'Hide selected columns.' },
          { keys: 'Ctrl + Shift + 0', desc: 'Unhide Columns', usage: 'Unhide columns in selection.' },
          { keys: 'Alt + H + O + I', desc: 'AutoFit Column', usage: 'Auto-fit column width to content.' },
          { keys: 'Alt + H + O + A', desc: 'AutoFit Row', usage: 'Auto-fit row height to content.' },
        ]
      },
      {
        name: 'Workbook Management',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New Workbook', usage: 'Create new workbook.' },
          { keys: 'Ctrl + O', desc: 'Open', usage: 'Open existing file.' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save current workbook.' },
          { keys: 'F12', desc: 'Save As', usage: 'Open Save As dialog.' },
          { keys: 'Ctrl + P', desc: 'Print', usage: 'Open Print dialog.' },
          { keys: 'Ctrl + W', desc: 'Close', usage: 'Close current workbook or document.' },
          { keys: 'Ctrl + F4', desc: 'Close Window', usage: 'Close current window.' },
          { keys: 'Alt + F4', desc: 'Exit Excel', usage: 'Quit Excel application.' },
          { keys: 'Ctrl + F6', desc: 'Next Window', usage: 'Switch to next window.' },
          { keys: 'Ctrl + Tab', desc: 'Switch Workbooks', usage: 'Switch between open workbooks.' },
          { keys: 'Alt + F11', desc: 'VBA Editor', usage: 'Open Visual Basic Editor.' },
          { keys: 'Ctrl + F1', desc: 'Toggle Ribbon', usage: 'Show or hide the ribbon.' },
          { keys: 'Alt + F1', desc: 'Chart', usage: 'Create chart from selected data.' },
          { keys: 'F2', desc: 'Edit Cell', usage: 'Edit active cell.' },
          { keys: 'Ctrl + F9', desc: 'Minimize', usage: 'Minimize workbook window.' },
          { keys: 'Ctrl + F10', desc: 'Maximize', usage: 'Maximize/restore workbook window.' },
          { keys: 'Shift + F11', desc: 'New Sheet', usage: 'Insert new worksheet.' },
        ]
      },
    ]
  },
  photoshop: {
    name: 'Photoshop',
    icon: 'fab fa-adobe',
    categories: [
      {
        name: 'Essential Tools',
        shortcuts: [
          { keys: 'V', desc: 'Move Tool', usage: 'Move layers or selections. Most fundamental tool.' },
          { keys: 'M', desc: 'Marquee Tool', usage: 'Select rectangular or elliptical areas. Hold Shift for square/circle.' },
          { keys: 'L', desc: 'Lasso Tool', usage: 'Select freeform areas. Hold Alt for Polygonal Lasso.' },
          { keys: 'W', desc: 'Quick Selection', usage: 'Automatically select similar colors and textures. Great for background removal.' },
          { keys: 'Q', desc: 'Quick Mask Mode', usage: 'Edit selections with red overlay for precision.' },
          { keys: 'C', desc: 'Crop Tool', usage: 'Crop image to desired size. Press Enter to apply.' },
          { keys: 'I', desc: 'Eyedropper', usage: 'Sample colors from image. Hold Alt to sample background color.' },
          { keys: 'J', desc: 'Spot Healing Brush', usage: 'Auto-remove small blemishes. Great for wrinkles and acne.' },
          { keys: 'B', desc: 'Brush Tool', usage: 'Paint with brush. [ ] for size, Shift+[ ] for hardness.' },
          { keys: 'S', desc: 'Clone Stamp', usage: 'Hold Alt to set source, then clone to another area.' },
          { keys: 'Y', desc: 'History Brush', usage: 'Selectively restore to previous state.' },
          { keys: 'E', desc: 'Eraser Tool', usage: 'Erase pixels. Layer masks are safer alternative.' },
          { keys: 'G', desc: 'Gradient Tool', usage: 'Create smooth color transitions. Hold Shift for straight lines.' },
          { keys: 'O', desc: 'Dodge/Burn', usage: 'Lighten (dodge) or darken (burn) areas.' },
          { keys: 'R', desc: 'Rotate View', usage: 'Rotate canvas for comfortable drawing angle. Esc to reset.' },
          { keys: 'T', desc: 'Type Tool', usage: 'Add text. Ctrl+T to transform.' },
          { keys: 'P', desc: 'Pen Tool', usage: 'Draw precise paths. Perfect for logos and selections.' },
          { keys: 'A', desc: 'Path Selection', usage: 'Select and edit existing paths.' },
          { keys: 'U', desc: 'Shape Tool', usage: 'Draw vector shapes: rectangles, circles, polygons.' },
          { keys: 'H', desc: 'Hand Tool', usage: 'Move canvas. Spacebar temporarily activates this.' },
          { keys: 'Z', desc: 'Zoom Tool', usage: 'Zoom in/out. Hold Alt to zoom out.' },
        ]
      },
      {
        name: 'Layer Management',
        shortcuts: [
          { keys: 'Ctrl + J', desc: 'Duplicate Layer', usage: 'Duplicate selected layer. Essential for non-destructive editing.' },
          { keys: 'Ctrl + Shift + N', desc: 'New Layer', usage: 'Create new layer with dialog for naming.' },
          { keys: 'Ctrl + Alt + Shift + N', desc: 'New Layer (Quick)', usage: 'Create new layer instantly without dialog.' },
          { keys: 'Ctrl + G', desc: 'Group Layers', usage: 'Group selected layers. Essential for organization.' },
          { keys: 'Ctrl + Shift + G', desc: 'Ungroup', usage: 'Ungroup layers.' },
          { keys: 'Ctrl + E', desc: 'Merge Down', usage: 'Merge layer with layer below.' },
          { keys: 'Ctrl + Shift + E', desc: 'Merge Visible', usage: 'Merge all visible layers. Duplicate first to preserve originals.' },
          { keys: 'Ctrl + Alt + E', desc: 'Stamp Visible', usage: 'Create new layer with all visible layers merged. Non-destructive.' },
          { keys: 'Ctrl + [', desc: 'Send Backward', usage: 'Move layer back one step.' },
          { keys: 'Ctrl + ]', desc: 'Bring Forward', usage: 'Move layer forward one step.' },
          { keys: 'Ctrl + Shift + [', desc: 'Send to Back', usage: 'Move layer to bottom.' },
          { keys: 'Ctrl + Shift + ]', desc: 'Bring to Front', usage: 'Move layer to top.' },
          { keys: 'Alt + [ ]', desc: 'Navigate Layers', usage: 'Alt+[ for previous, Alt+] for next layer.' },
          { keys: 'Ctrl + Alt + A', desc: 'Select All Layers', usage: 'Select all layers in document.' },
        ]
      },
      {
        name: 'Selection & Mask',
        shortcuts: [
          { keys: 'Ctrl + A', desc: 'Select All', usage: 'Select entire canvas.' },
          { keys: 'Ctrl + D', desc: 'Deselect', usage: 'Remove current selection.' },
          { keys: 'Ctrl + Shift + D', desc: 'Reselect', usage: 'Restore last deselected selection.' },
          { keys: 'Ctrl + Shift + I', desc: 'Inverse Selection', usage: 'Invert selection. Useful after background removal.' },
          { keys: 'Alt + Ctrl + R', desc: 'Select and Mask', usage: 'Open workspace for refining selections.' },
          { keys: 'Shift + F6', desc: 'Feather Selection', usage: 'Soften selection edges.' },
          { keys: 'Ctrl + Alt + D', desc: 'Feather (Dialog)', usage: 'Feather selection with specified radius.' },
        ]
      },
      {
        name: 'View & Navigation',
        shortcuts: [
          { keys: 'Ctrl + 0', desc: 'Fit on Screen', usage: 'Zoom to fit entire image on screen.' },
          { keys: 'Ctrl + 1', desc: '100% View', usage: 'View image at actual size (100%). See exact pixels.' },
          { keys: 'Ctrl + +', desc: 'Zoom In', usage: 'Zoom in on image.' },
          { keys: 'Ctrl + -', desc: 'Zoom Out', usage: 'Zoom out from image.' },
          { keys: 'Space + Drag', desc: 'Hand Tool (Temp)', usage: 'Hold Spacebar to temporarily use Hand tool.' },
          { keys: 'F', desc: 'Screen Mode', usage: 'Cycle through: Standard → Full with Menu → Full screen.' },
          { keys: 'Ctrl + R', desc: 'Show/Hide Rulers', usage: 'Toggle rulers for precise alignment.' },
          { keys: 'Ctrl + ;', desc: 'Show/Hide Guides', usage: 'Toggle guide visibility.' },
          { keys: 'Ctrl + \'', desc: 'Show/Hide Grid', usage: 'Toggle grid visibility.' },
          { keys: 'Ctrl + H', desc: 'Show/Hide Extras', usage: 'Toggle all extras: selections, guides, grid.' },
          { keys: 'Tab', desc: 'Hide/Show Panels', usage: 'Hide or show all panels. Maximize workspace.' },
          { keys: 'Shift + Tab', desc: 'Hide Panels (Keep Toolbox)', usage: 'Hide all panels except toolbox.' },
        ]
      },
      {
        name: 'Color & Adjustments',
        shortcuts: [
          { keys: 'D', desc: 'Default Colors', usage: 'Reset foreground to black, background to white.' },
          { keys: 'X', desc: 'Swap Colors', usage: 'Swap foreground and background colors.' },
          { keys: 'Ctrl + L', desc: 'Levels', usage: 'Open Levels dialog for brightness/contrast.' },
          { keys: 'Ctrl + M', desc: 'Curves', usage: 'Open Curves dialog for precise tonal control.' },
          { keys: 'Ctrl + U', desc: 'Hue/Saturation', usage: 'Adjust hue, saturation, and lightness.' },
          { keys: 'Ctrl + B', desc: 'Color Balance', usage: 'Adjust color balance.' },
          { keys: 'Ctrl + I', desc: 'Invert', usage: 'Invert image colors.' },
        ]
      },
      {
        name: 'Workflow',
        shortcuts: [
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Ctrl + Shift + Z', desc: 'Redo', usage: 'Redo undone action.' },
          { keys: 'Ctrl + Alt + Z', desc: 'Step Backward', usage: 'Step backward through multiple states.' },
          { keys: 'Ctrl + N', desc: 'New Document', usage: 'Create new document.' },
          { keys: 'Ctrl + O', desc: 'Open', usage: 'Open file dialog.' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save current document.' },
          { keys: 'Ctrl + Shift + S', desc: 'Save As', usage: 'Save with new name or format.' },
          { keys: 'Ctrl + W', desc: 'Close', usage: 'Close current document.' },
        ]
      },
    ]
  },
  figma: {
    name: 'Figma',
    icon: 'fas fa-pen-nib',
    categories: [
      {
        name: 'Essential Tools',
        shortcuts: [
          { keys: 'V', desc: 'Move Tool', usage: 'Select and move objects. Most basic tool.' },
          { keys: 'F', desc: 'Frame Tool', usage: 'Create frames. Basic container for designs.' },
          { keys: 'P', desc: 'Pen Tool', usage: 'Draw vector paths. For precise shapes.' },
          { keys: 'R', desc: 'Rectangle Tool', usage: 'Draw rectangles. Hold Shift for squares.' },
          { keys: 'O', desc: 'Ellipse Tool', usage: 'Draw circles. Hold Shift for perfect circles.' },
          { keys: 'L', desc: 'Line Tool', usage: 'Draw straight lines. Hold Shift for horizontal/vertical.' },
          { keys: 'Shift + L', desc: 'Arrow Tool', usage: 'Draw arrows.' },
          { keys: 'T', desc: 'Text Tool', usage: 'Add text. Click or drag to create text box.' },
          { keys: 'H', desc: 'Hand Tool', usage: 'Pan canvas. Spacebar for temporary use.' },
          { keys: 'C', desc: 'Comment Tool', usage: 'Add comments for collaboration.' },
          { keys: 'K', desc: 'Scale Tool', usage: 'Scale objects proportionally.' },
        ]
      },
      {
        name: 'Selection & Editing',
        shortcuts: [
          { keys: 'Cmd + A', desc: 'Select All', usage: 'Select all objects.' },
          { keys: 'Cmd + Click', desc: 'Deep Select', usage: 'Select object inside group/frame.' },
          { keys: 'Enter', desc: 'Enter Group', usage: 'Enter group or frame for editing.' },
          { keys: 'Shift + Enter', desc: 'Exit Group', usage: 'Exit group or frame.' },
          { keys: 'Tab', desc: 'Next Layer', usage: 'Select next sibling layer.' },
          { keys: 'Shift + Tab', desc: 'Previous Layer', usage: 'Select previous sibling layer.' },
          { keys: 'Cmd + G', desc: 'Group', usage: 'Group selected objects.' },
          { keys: 'Cmd + Shift + G', desc: 'Ungroup', usage: 'Ungroup selected group.' },
          { keys: 'Cmd + D', desc: 'Duplicate', usage: 'Duplicate selected objects.' },
          { keys: 'Cmd + R', desc: 'Rename', usage: 'Rename selected layer.' },
          { keys: 'Cmd + Option + C', desc: 'Copy Style', usage: 'Copy object style.' },
          { keys: 'Cmd + Option + V', desc: 'Paste Style', usage: 'Paste copied style.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete selected objects.' },
        ]
      },
      {
        name: 'Layering',
        shortcuts: [
          { keys: 'Cmd + ]', desc: 'Bring Forward', usage: 'Move layer forward one step.' },
          { keys: 'Cmd + [', desc: 'Send Backward', usage: 'Move layer backward one step.' },
          { keys: 'Cmd + Option + ]', desc: 'Bring to Front', usage: 'Move layer to front.' },
          { keys: 'Cmd + Option + [', desc: 'Send to Back', usage: 'Move layer to back.' },
          { keys: 'Option + H', desc: 'Distribute Horizontally', usage: 'Distribute objects horizontally.' },
          { keys: 'Option + V', desc: 'Distribute Vertically', usage: 'Distribute objects vertically.' },
        ]
      },
      {
        name: 'View & Navigate',
        shortcuts: [
          { keys: 'Cmd + 0', desc: 'Zoom to Fit', usage: 'Fit all objects on screen.' },
          { keys: 'Cmd + 1', desc: 'Zoom to 100%', usage: 'View at actual size.' },
          { keys: 'Shift + 1', desc: 'Zoom to Selection', usage: 'Fit selected objects on screen.' },
          { keys: 'Shift + 2', desc: 'Previous Frame', usage: 'Navigate to previous frame.' },
          { keys: 'N', desc: 'Next Frame', usage: 'Navigate to next frame.' },
          { keys: 'Cmd + +', desc: 'Zoom In', usage: 'Zoom in on canvas.' },
          { keys: 'Cmd + -', desc: 'Zoom Out', usage: 'Zoom out from canvas.' },
          { keys: 'Space + Drag', desc: 'Pan Canvas', usage: 'Move canvas view.' },
          { keys: 'Cmd + \\', desc: 'Toggle Layers', usage: 'Show/hide layers panel.' },
          { keys: 'Cmd + .', desc: 'Toggle Properties', usage: 'Show/hide properties panel.' },
          { keys: 'Cmd + Option + \\', desc: 'Hide UI', usage: 'Hide all UI panels.' },
          { keys: 'Ctrl + G', desc: 'Toggle Grid', usage: 'Show/hide grid.' },
          { keys: 'Ctrl + R', desc: 'Toggle Rulers', usage: 'Show/hide rulers.' },
        ]
      },
      {
        name: 'Components',
        shortcuts: [
          { keys: 'Cmd + Option + K', desc: 'Create Component', usage: 'Convert selection to component.' },
          { keys: 'Cmd + Option + B', desc: 'Detach Instance', usage: 'Detach instance from component.' },
          { keys: 'Option + 2', desc: 'Go to Main Component', usage: 'Navigate to main component.' },
          { keys: 'Cmd + Shift + O', desc: 'Team Library', usage: 'Open team library.' },
        ]
      },
      {
        name: 'Prototyping',
        shortcuts: [
          { keys: 'Cmd + Enter', desc: 'Presentation Mode', usage: 'Enter presentation mode.' },
          { keys: 'Shift + Space', desc: 'Play Prototype', usage: 'Play prototype from current frame.' },
        ]
      },
      {
        name: 'Other',
        shortcuts: [
          { keys: 'Cmd + /', desc: 'Quick Actions', usage: 'Open quick actions menu.' },
          { keys: 'Cmd + P', desc: 'Quick Action', usage: 'Quick action search.' },
          { keys: 'Cmd + Shift + ?', desc: 'Keyboard Shortcuts', usage: 'Show keyboard shortcuts list.' },
          { keys: 'Cmd + Option + P', desc: 'Run Last Plugin', usage: 'Run most recently used plugin.' },
        ]
      },
    ]
  },
  notion: {
    name: 'Notion',
    icon: 'fas fa-file-alt',
    categories: [
      {
        name: 'Basic Editing',
        shortcuts: [
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Make text bold' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Make text italic' },
          { keys: 'Ctrl + U', desc: 'Underline', usage: 'Underline text' },
          { keys: 'Ctrl + Shift + S', desc: 'Strikethrough', usage: 'Strike through text' },
          { keys: 'Ctrl + K', desc: 'Create Link', usage: 'Add link to selected text' },
          { keys: 'Ctrl + E', desc: 'Inline Code', usage: 'Format text as code' },
          { keys: 'Ctrl + Shift + M', desc: 'Comment', usage: 'Add comment' },
        ]
      },
      {
        name: 'Block Creation',
        shortcuts: [
          { keys: '/', desc: 'Block Menu', usage: 'Open block menu' },
          { keys: 'Ctrl + Enter', desc: 'Toggle Checkbox', usage: 'Add to-do checkbox' },
          { keys: 'Ctrl + Shift + 1-3', desc: 'Heading', usage: 'Create heading 1-3' },
          { keys: 'Ctrl + Shift + 7', desc: 'Numbered List', usage: 'Create numbered list' },
          { keys: 'Ctrl + Shift + 8', desc: 'Bullet List', usage: 'Create bullet list' },
          { keys: 'Ctrl + Shift + 9', desc: 'Toggle List', usage: 'Create toggle list' },
        ]
      },
      {
        name: 'Page Management',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New Page', usage: 'Create new page' },
          { keys: 'Ctrl + P', desc: 'Quick Find', usage: 'Quickly search pages' },
          { keys: 'Ctrl + Shift + P', desc: 'Recent Pages', usage: 'Open recently viewed pages' },
          { keys: 'Ctrl + [', desc: 'Back', usage: 'Go to previous page' },
          { keys: 'Ctrl + ]', desc: 'Forward', usage: 'Go to next page' },
        ]
      },
    ]
  },
  slack: {
    name: 'Slack',
    icon: 'fab fa-slack',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Ctrl + K', desc: 'Quick Switch', usage: 'Quickly search channels, DMs, files' },
          { keys: 'Ctrl + Shift + K', desc: 'Direct Messages', usage: 'Open DM list' },
          { keys: 'Alt + Up/Down', desc: 'Navigate Channels', usage: 'Move to previous/next channel' },
          { keys: 'Alt + Shift + Up/Down', desc: 'Unread Channels', usage: 'Jump to unread channels' },
          { keys: 'Ctrl + Shift + T', desc: 'Threads', usage: 'View all threads' },
          { keys: 'Ctrl + /', desc: 'Shortcuts List', usage: 'View all keyboard shortcuts' },
        ]
      },
      {
        name: 'Messaging',
        shortcuts: [
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Make text bold' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Make text italic' },
          { keys: 'Ctrl + Shift + X', desc: 'Strikethrough', usage: 'Strike through text' },
          { keys: 'Ctrl + Shift + C', desc: 'Code Block', usage: 'Insert code block' },
          { keys: 'Ctrl + U', desc: 'Upload File', usage: 'Upload file' },
          { keys: 'Up', desc: 'Edit Last Message', usage: 'Edit your last message' },
          { keys: 'Ctrl + Enter', desc: 'Send Message', usage: 'Send message being composed' },
        ]
      },
    ]
  },
  github: {
    name: 'GitHub',
    icon: 'fab fa-github',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'S', desc: 'Focus Search', usage: 'Jump to search bar' },
          { keys: 'G + N', desc: 'Notifications', usage: 'Go to notifications page' },
          { keys: 'G + C', desc: 'Code', usage: 'Go to Code tab' },
          { keys: 'G + I', desc: 'Issues', usage: 'Go to Issues tab' },
          { keys: 'G + P', desc: 'Pull Requests', usage: 'Go to Pull Requests tab' },
          { keys: 'G + B', desc: 'Projects', usage: 'Go to Projects tab' },
          { keys: 'G + W', desc: 'Wiki', usage: 'Go to Wiki tab' },
        ]
      },
      {
        name: 'Code',
        shortcuts: [
          { keys: 'T', desc: 'Find File', usage: 'Open file finder' },
          { keys: 'L', desc: 'Go to Line', usage: 'Jump to specific line' },
          { keys: 'W', desc: 'Switch Branch', usage: 'Switch branch or tag' },
          { keys: 'Y', desc: 'Permalink', usage: 'Create permanent link to file' },
          { keys: 'I', desc: 'Open Issue', usage: 'Open issue or PR' },
          { keys: 'B', desc: 'View Blame', usage: 'View Git Blame information' },
        ]
      },
      {
        name: 'Issue & PR',
        shortcuts: [
          { keys: 'C', desc: 'Create Issue', usage: 'Create new issue' },
          { keys: 'Ctrl + Enter', desc: 'Submit Comment', usage: 'Submit comment' },
          { keys: 'Ctrl + Shift + P', desc: 'Toggle Preview', usage: 'Toggle markdown preview' },
          { keys: 'Ctrl + K', desc: 'Insert Link', usage: 'Insert hyperlink' },
        ]
      },
    ]
  },
  colab: {
    name: 'Google Colab',
    icon: 'fas fa-flask',
    categories: [
      {
        name: 'Cell Execution',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Run Cell', usage: 'Execute current cell' },
          { keys: 'Shift + Enter', desc: 'Run & Select Next', usage: 'Execute cell and move to next' },
          { keys: 'Alt + Enter', desc: 'Run & Insert Below', usage: 'Execute cell and create new cell below' },
          { keys: 'Ctrl + Shift + Enter', desc: 'Run All', usage: 'Execute all cells' },
        ]
      },
      {
        name: 'Cell Management',
        shortcuts: [
          { keys: 'Ctrl + M + B', desc: 'Add Code Cell Below', usage: 'Insert code cell below current' },
          { keys: 'Ctrl + M + A', desc: 'Add Code Cell Above', usage: 'Insert code cell above current' },
          { keys: 'Ctrl + M + D', desc: 'Delete Cell', usage: 'Delete current cell' },
          { keys: 'Ctrl + M + Y', desc: 'Convert to Code', usage: 'Convert cell to code cell' },
          { keys: 'Ctrl + M + M', desc: 'Convert to Text', usage: 'Convert cell to text cell' },
          { keys: 'Ctrl + M + Up/Down', desc: 'Move Cell', usage: 'Move cell up or down' },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + /', desc: 'Toggle Comment', usage: 'Comment or uncomment lines' },
          { keys: 'Tab', desc: 'Indent', usage: 'Indent code' },
          { keys: 'Shift + Tab', desc: 'Dedent', usage: 'Dedent code' },
          { keys: 'Ctrl + ]', desc: 'Indent Selection', usage: 'Indent selected lines' },
          { keys: 'Ctrl + [', desc: 'Dedent Selection', usage: 'Dedent selected lines' },
        ]
      },
    ]
  },
  fusion360: {
    name: 'Fusion 360',
    icon: 'fas fa-cube',
    categories: [
      {
        name: 'View',
        shortcuts: [
          { keys: 'Home', desc: 'Fit View', usage: 'Fit model to screen' },
          { keys: 'Shift + Middle Mouse', desc: 'Pan', usage: 'Pan viewport' },
          { keys: 'Middle Mouse', desc: 'Orbit', usage: 'Orbit around model' },
          { keys: 'Scroll Wheel', desc: 'Zoom', usage: 'Zoom in/out' },
          { keys: 'F', desc: 'Full Screen', usage: 'Toggle fullscreen mode' },
        ]
      },
      {
        name: 'Sketch',
        shortcuts: [
          { keys: 'L', desc: 'Line', usage: 'Draw line' },
          { keys: 'C', desc: 'Circle', usage: 'Draw circle' },
          { keys: 'R', desc: 'Rectangle', usage: 'Draw rectangle' },
          { keys: 'P', desc: 'Project', usage: 'Project geometry' },
          { keys: 'D', desc: 'Dimension', usage: 'Add dimension' },
          { keys: 'X', desc: 'Trim', usage: 'Trim entities' },
        ]
      },
      {
        name: 'Modeling',
        shortcuts: [
          { keys: 'E', desc: 'Extrude', usage: 'Extrude profile' },
          { keys: 'Q', desc: 'Press Pull', usage: 'Press or pull faces' },
          { keys: 'J', desc: 'Join', usage: 'Join bodies' },
          { keys: 'M', desc: 'Move/Copy', usage: 'Move or copy objects' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete selected objects' },
        ]
      },
    ]
  },
  revit: {
    name: 'Revit',
    icon: 'fas fa-building',
    categories: [
      {
        name: 'View',
        shortcuts: [
          { keys: 'ZF', desc: 'Zoom to Fit', usage: 'Fit entire view on screen' },
          { keys: 'ZR', desc: 'Zoom Region', usage: 'Zoom to selected region' },
          { keys: 'ZE', desc: 'Zoom Extents', usage: 'Zoom to all elements' },
          { keys: 'WF', desc: 'Wireframe', usage: 'Wireframe display' },
          { keys: 'SD', desc: 'Shaded', usage: 'Shaded display' },
        ]
      },
      {
        name: 'Modeling',
        shortcuts: [
          { keys: 'WA', desc: 'Wall', usage: 'Draw wall' },
          { keys: 'DR', desc: 'Door', usage: 'Place door' },
          { keys: 'WN', desc: 'Window', usage: 'Place window' },
          { keys: 'CM', desc: 'Component', usage: 'Place component' },
          { keys: 'LI', desc: 'Line', usage: 'Draw line' },
        ]
      },
      {
        name: 'Annotation',
        shortcuts: [
          { keys: 'TX', desc: 'Text', usage: 'Add text' },
          { keys: 'DI', desc: 'Dimension', usage: 'Add dimension' },
          { keys: 'RM', desc: 'Room', usage: 'Place room' },
          { keys: 'RT', desc: 'Room Tag', usage: 'Add room tag' },
          { keys: 'AR', desc: 'Area', usage: 'Define area' },
        ]
      },
      {
        name: 'Modify',
        shortcuts: [
          { keys: 'CO', desc: 'Copy', usage: 'Copy elements' },
          { keys: 'MV', desc: 'Move', usage: 'Move elements' },
          { keys: 'RO', desc: 'Rotate', usage: 'Rotate elements' },
          { keys: 'MI', desc: 'Mirror', usage: 'Mirror elements' },
          { keys: 'TR', desc: 'Trim/Extend', usage: 'Trim or extend elements' },
        ]
      },
    ]
  },
  solidworks: {
    name: 'SolidWorks',
    icon: 'fas fa-cog',
    categories: [
      {
        name: 'View',
        shortcuts: [
          { keys: 'F', desc: 'Zoom to Fit', usage: 'Fit model to screen' },
          { keys: 'Z', desc: 'Zoom In/Out', usage: 'Zoom mode' },
          { keys: 'Ctrl + 7', desc: 'Isometric View', usage: 'Switch to isometric view' },
          { keys: 'Ctrl + 1', desc: 'Front View', usage: 'View from front' },
          { keys: 'Ctrl + 2', desc: 'Back View', usage: 'View from back' },
          { keys: 'Ctrl + 3', desc: 'Left View', usage: 'View from left' },
          { keys: 'Ctrl + 4', desc: 'Right View', usage: 'View from right' },
        ]
      },
      {
        name: 'Sketch',
        shortcuts: [
          { keys: 'L', desc: 'Line', usage: 'Draw line' },
          { keys: 'C', desc: 'Circle', usage: 'Draw circle' },
          { keys: 'A', desc: 'Arc', usage: 'Draw arc' },
          { keys: 'R', desc: 'Rectangle', usage: 'Draw rectangle' },
          { keys: 'P', desc: 'Point', usage: 'Place point' },
          { keys: 'D', desc: 'Smart Dimension', usage: 'Add dimension' },
        ]
      },
      {
        name: 'Features',
        shortcuts: [
          { keys: 'Ctrl + E', desc: 'Extrude', usage: 'Extrude sketch' },
          { keys: 'Ctrl + R', desc: 'Revolve', usage: 'Revolve sketch' },
          { keys: 'Ctrl + H', desc: 'Hide/Show', usage: 'Toggle visibility' },
          { keys: 'Insert', desc: 'Insert Component', usage: 'Insert part or assembly' },
        ]
      },
      {
        name: 'General',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New Document', usage: 'Create new document' },
          { keys: 'Ctrl + O', desc: 'Open', usage: 'Open file' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save document' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action' },
          { keys: 'Ctrl + Y', desc: 'Redo', usage: 'Redo action' },
        ]
      },
    ]
  },
  illustrator: {
    name: 'Illustrator',
    icon: 'fab fa-adobe',
    categories: [
      {
        name: 'Basic Tools',
        shortcuts: [
          { keys: 'V', desc: 'Selection Tool', usage: 'Select and move objects' },
          { keys: 'A', desc: 'Direct Selection', usage: 'Select anchor points' },
          { keys: 'P', desc: 'Pen Tool', usage: 'Draw paths' },
          { keys: 'T', desc: 'Type Tool', usage: 'Add text' },
          { keys: 'M', desc: 'Rectangle', usage: 'Draw rectangle' },
          { keys: 'L', desc: 'Ellipse', usage: 'Draw ellipse' },
          { keys: 'B', desc: 'Paintbrush', usage: 'Paint with brush' },
          { keys: 'N', desc: 'Pencil', usage: 'Draw freeform' },
          { keys: 'Shift + C', desc: 'Convert Anchor', usage: 'Convert anchor point type' },
          { keys: 'Shift + W', desc: 'Width Tool', usage: 'Adjust stroke width' },
        ]
      },
      {
        name: 'View & Navigation',
        shortcuts: [
          { keys: 'Ctrl + 0', desc: 'Fit Artboard', usage: 'Fit artboard on screen' },
          { keys: 'Ctrl + 1', desc: '100% View', usage: 'View at actual size' },
          { keys: 'Ctrl + +', desc: 'Zoom In', usage: 'Zoom in' },
          { keys: 'Ctrl + -', desc: 'Zoom Out', usage: 'Zoom out' },
          { keys: 'Ctrl + Y', desc: 'Outline Mode', usage: 'View outlines only' },
          { keys: 'Ctrl + H', desc: 'Hide/Show Guides', usage: 'Toggle guides' },
          { keys: 'Ctrl + R', desc: 'Show Rulers', usage: 'Display rulers' },
          { keys: 'Ctrl + ;', desc: 'Show Guides', usage: 'Display guides' },
          { keys: 'Ctrl + \'', desc: 'Show Grid', usage: 'Display grid' },
          { keys: 'Space + Drag', desc: 'Hand Tool', usage: 'Move artboard' },
        ]
      },
      {
        name: 'Object Editing',
        shortcuts: [
          { keys: 'Ctrl + G', desc: 'Group', usage: 'Group selected objects' },
          { keys: 'Ctrl + Shift + G', desc: 'Ungroup', usage: 'Ungroup objects' },
          { keys: 'Ctrl + 2', desc: 'Lock Object', usage: 'Lock selected object' },
          { keys: 'Ctrl + Alt + 2', desc: 'Unlock All', usage: 'Unlock all objects' },
          { keys: 'Ctrl + ]', desc: 'Bring Forward', usage: 'Move layer forward one step' },
          { keys: 'Ctrl + [', desc: 'Send Backward', usage: 'Move layer backward one step' },
          { keys: 'Ctrl + Shift + ]', desc: 'Bring to Front', usage: 'Move layer to front' },
          { keys: 'Ctrl + Shift + [', desc: 'Send to Back', usage: 'Move layer to back' },
          { keys: 'Shift + Ctrl + F7', desc: 'Pathfinder', usage: 'Open Pathfinder panel' },
          { keys: 'Ctrl + 8', desc: 'Compound Path', usage: 'Create compound path' },
        ]
      },
    ]
  },
  premiere: {
    name: 'Premiere Pro',
    icon: 'fas fa-film',
    categories: [
      {
        name: 'File & Project',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New Project', usage: 'Create new project' },
          { keys: 'Ctrl + O', desc: 'Open Project', usage: 'Open existing project' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save current project' },
          { keys: 'Ctrl + Shift + S', desc: 'Save As', usage: 'Save project with new name' },
          { keys: 'Ctrl + Alt + S', desc: 'Save Copy', usage: 'Save copy of project' },
          { keys: 'Ctrl + W', desc: 'Close Project', usage: 'Close current project' },
          { keys: 'Ctrl + Q', desc: 'Quit Premiere', usage: 'Exit Premiere Pro' },
          { keys: 'Ctrl + I', desc: 'Import Media', usage: 'Import media files' },
          { keys: 'Ctrl + M', desc: 'Export', usage: 'Open export dialog' },
        ]
      },
      {
        name: 'Basic Editing',
        shortcuts: [
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action' },
          { keys: 'Ctrl + Shift + Z', desc: 'Redo', usage: 'Redo undone action' },
          { keys: 'Ctrl + X', desc: 'Cut', usage: 'Cut selected clips' },
          { keys: 'Ctrl + C', desc: 'Copy', usage: 'Copy selected clips' },
          { keys: 'Ctrl + V', desc: 'Paste', usage: 'Paste clips' },
          { keys: 'Ctrl + Shift + V', desc: 'Paste Attributes', usage: 'Paste clip attributes only' },
          { keys: 'Ctrl + A', desc: 'Select All', usage: 'Select all clips in timeline' },
          { keys: 'Ctrl + Shift + A', desc: 'Deselect All', usage: 'Deselect all clips' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete clip keeping gap' },
          { keys: 'Shift + Delete', desc: 'Ripple Delete', usage: 'Delete clip and close gap' },
          { keys: 'Alt + Delete', desc: 'Delete Gap', usage: 'Delete gap only' },
        ]
      },
      {
        name: 'Timeline Navigation',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Pause', usage: 'Play or pause timeline' },
          { keys: 'L', desc: 'Fast Forward', usage: 'Fast forward. Press multiple times for faster speed' },
          { keys: 'J', desc: 'Rewind', usage: 'Rewind timeline' },
          { keys: 'K', desc: 'Stop', usage: 'Stop playback' },
          { keys: 'Left/Right', desc: 'Frame Step', usage: 'Move forward/back one frame' },
          { keys: 'Shift + Left/Right', desc: '5 Frame Step', usage: 'Move forward/back 5 frames' },
          { keys: 'Up/Down', desc: 'Clip Navigation', usage: 'Move to previous/next clip' },
          { keys: 'Shift + Up/Down', desc: 'Edit Point', usage: 'Move to previous/next edit point' },
          { keys: 'Home', desc: 'Go to Start', usage: 'Go to timeline start' },
          { keys: 'End', desc: 'Go to End', usage: 'Go to timeline end' },
          { keys: 'Shift + I', desc: 'Find In Point', usage: 'Go to In point' },
          { keys: 'Shift + O', desc: 'Find Out Point', usage: 'Go to Out point' },
          { keys: 'Ctrl + Shift + K', desc: 'Next Gap', usage: 'Go to next gap' },
        ]
      },
      {
        name: 'Markers & In/Out',
        shortcuts: [
          { keys: 'I', desc: 'Mark In', usage: 'Set In point' },
          { keys: 'O', desc: 'Mark Out', usage: 'Set Out point' },
          { keys: 'X', desc: 'Mark Clip', usage: 'Add marker at current position' },
          { keys: 'M', desc: 'Add Marker', usage: 'Add marker with name' },
          { keys: 'Shift + M', desc: 'Next Marker', usage: 'Go to next marker' },
          { keys: 'Ctrl + Shift + M', desc: 'Previous Marker', usage: 'Go to previous marker' },
          { keys: 'Ctrl + Alt + M', desc: 'Clear All Markers', usage: 'Remove all markers from selected clip' },
          { keys: 'Ctrl + Shift + X', desc: 'Clear In/Out', usage: 'Clear both In and Out points' },
          { keys: 'Ctrl + Shift + I', desc: 'Clear In', usage: 'Clear In point' },
          { keys: 'Ctrl + Shift + O', desc: 'Clear Out', usage: 'Clear Out point' },
        ]
      },
      {
        name: 'Clip Editing',
        shortcuts: [
          { keys: 'C', desc: 'Razor Tool', usage: 'Activate razor tool for cutting clips' },
          { keys: 'V', desc: 'Selection Tool', usage: 'Switch to selection tool' },
          { keys: 'A', desc: 'Track Select', usage: 'Activate track selection tool' },
          { keys: 'Y', desc: 'Slip Tool', usage: 'Activate slip editing tool' },
          { keys: 'U', desc: 'Slide Tool', usage: 'Activate slide editing tool' },
          { keys: 'N', desc: 'Ripple Edit', usage: 'Activate ripple edit tool' },
          { keys: 'B', desc: 'Rolling Edit', usage: 'Activate rolling edit tool' },
          { keys: 'P', desc: 'Pen Tool', usage: 'Activate pen tool' },
          { keys: 'H', desc: 'Hand Tool', usage: 'Activate hand tool for timeline' },
          { keys: 'Z', desc: 'Zoom Tool', usage: 'Activate timeline zoom tool' },
          { keys: 'Ctrl + K', desc: 'Cut', usage: 'Cut clip at playhead' },
          { keys: 'Ctrl + Shift + K', desc: 'Cut All Tracks', usage: 'Cut all tracks at playhead' },
          { keys: '[', desc: 'Trim In', usage: 'Trim clip start to playhead' },
          { keys: ']', desc: 'Trim Out', usage: 'Trim clip end to playhead' },
          { keys: 'Ctrl + R', desc: 'Speed/Duration', usage: 'Change clip speed and duration' },
          { keys: 'Ctrl + Shift + R', desc: 'Reverse', usage: 'Reverse clip playback' },
        ]
      },
      {
        name: 'Audio',
        shortcuts: [
          { keys: 'Shift + G', desc: 'Audio Gain', usage: 'Adjust audio gain' },
          { keys: 'Ctrl + Shift + G', desc: 'Audio Track Mixer', usage: 'Open audio track mixer' },
          { keys: 'S', desc: 'Audio Snap', usage: 'Enable audio snap' },
          { keys: 'Shift + A', desc: 'Unlink Audio', usage: 'Unlink video and audio' },
          { keys: 'Ctrl + L', desc: 'Link', usage: 'Link selected clips' },
        ]
      },
      {
        name: 'Effects',
        shortcuts: [
          { keys: 'Ctrl + D', desc: 'Apply Default', usage: 'Apply default transitions' },
          { keys: 'Shift + D', desc: 'Clear Effects', usage: 'Clear effects from clip' },
          { keys: 'Ctrl + U', desc: 'Make Subclip', usage: 'Create subclip from selection' },
        ]
      },
      {
        name: 'View',
        shortcuts: [
          { keys: '`', desc: 'Maximize Panel', usage: 'Maximize current panel' },
          { keys: '+', desc: 'Zoom In Timeline', usage: 'Zoom into timeline' },
          { keys: '-', desc: 'Zoom Out Timeline', usage: 'Zoom out of timeline' },
          { keys: '\\', desc: 'Fit Timeline', usage: 'Fit entire timeline on screen' },
          { keys: 'Shift + Z', desc: 'Fit Sequence', usage: 'Fit sequence in timeline' },
        ]
      },
      {
        name: 'Effects & Keyframes',
        shortcuts: [
          { keys: 'Ctrl + Shift + F', desc: 'Find Effect', usage: 'Search for effects' },
          { keys: 'Ctrl + Alt + V', desc: 'Copy Effects', usage: 'Copy effects from clip' },
          { keys: 'Ctrl + D', desc: 'Apply Default Transition', usage: 'Apply default transition' },
          { keys: 'Shift + D', desc: 'Default Video Transition', usage: 'Apply default video transition' },
          { keys: 'Ctrl + Shift + D', desc: 'Default Audio Transition', usage: 'Apply default audio transition' },
          { keys: 'Alt + Click', desc: 'Add/Remove Keyframe', usage: 'Add or remove keyframe' },
          { keys: 'Shift + <', desc: 'Previous Keyframe', usage: 'Go to previous keyframe' },
          { keys: 'Shift + >', desc: 'Next Keyframe', usage: 'Go to next keyframe' },
        ]
      },
      {
        name: 'Display & View',
        shortcuts: [
          { keys: '`', desc: 'Maximize Panel', usage: 'Toggle fullscreen for active panel' },
          { keys: 'Ctrl + \\', desc: 'Toggle Playback Quality', usage: 'Cycle through Full/Half/Quarter quality' },
          { keys: '+', desc: 'Zoom In Timeline', usage: 'Zoom into timeline' },
          { keys: '-', desc: 'Zoom Out Timeline', usage: 'Zoom out of timeline' },
          { keys: '\\', desc: 'Fit Sequence', usage: 'Fit entire sequence in timeline' },
          { keys: 'Shift + ;', desc: 'Safe Margins', usage: 'Show title and action safe margins' },
          { keys: 'Ctrl + `', desc: 'Maximize Program Monitor', usage: 'Maximize program monitor' },
          { keys: 'Ctrl + Shift + `', desc: 'Maximize Source Monitor', usage: 'Maximize source monitor' },
        ]
      },
      {
        name: 'Sequence & Tracks',
        shortcuts: [
          { keys: 'Ctrl + Shift + N', desc: 'New Sequence', usage: 'Create new sequence' },
          { keys: 'Ctrl + Shift + D', desc: 'Duplicate Sequence', usage: 'Duplicate current sequence' },
          { keys: 'Shift + 1-9', desc: 'Select Track', usage: 'Select specified track' },
          { keys: 'Shift + +', desc: 'Add Track', usage: 'Add new track' },
          { keys: 'Shift + -', desc: 'Delete Track', usage: 'Delete selected track' },
          { keys: 'Alt + Shift + Click', desc: 'Toggle Track Lock', usage: 'Lock or unlock track' },
          { keys: 'Ctrl + Alt + V', desc: 'Add Video Track', usage: 'Add video track' },
          { keys: 'Ctrl + Alt + A', desc: 'Add Audio Track', usage: 'Add audio track' },
        ]
      },
    ]
  },
  aftereffects: {
    name: 'After Effects',
    icon: 'fab fa-adobe',
    categories: [
      {
        name: 'Composition',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New Composition', usage: 'Create new composition' },
          { keys: 'Ctrl + K', desc: 'Composition Settings', usage: 'Open composition settings' },
          { keys: 'Ctrl + Shift + D', desc: 'Split Layer', usage: 'Split layer at current time' },
          { keys: 'Home', desc: 'Go to Start', usage: 'Go to timeline start' },
          { keys: 'End', desc: 'Go to End', usage: 'Go to timeline end' },
          { keys: 'Page Down', desc: 'Next Frame', usage: 'Move to next frame' },
          { keys: 'Page Up', desc: 'Previous Frame', usage: 'Move to previous frame' },
        ]
      },
      {
        name: 'Layers',
        shortcuts: [
          { keys: 'Ctrl + Y', desc: 'New Solid', usage: 'Create new solid layer' },
          { keys: 'Ctrl + Alt + Y', desc: 'Solid Settings', usage: 'Open solid settings' },
          { keys: 'Ctrl + Shift + C', desc: 'Pre-compose', usage: 'Pre-compose layers' },
          { keys: 'Ctrl + D', desc: 'Duplicate Layer', usage: 'Duplicate selected layer' },
          { keys: '[', desc: 'Trim In', usage: 'Set layer start to current time' },
          { keys: ']', desc: 'Trim Out', usage: 'Set layer end to current time' },
          { keys: 'Ctrl + ]', desc: 'Bring Forward', usage: 'Move layer forward' },
          { keys: 'Ctrl + [', desc: 'Send Backward', usage: 'Move layer backward' },
        ]
      },
      {
        name: 'Keyframes',
        shortcuts: [
          { keys: 'Alt + Shift + P', desc: 'Position Keyframe', usage: 'Add Position keyframe' },
          { keys: 'Alt + Shift + R', desc: 'Rotation Keyframe', usage: 'Add Rotation keyframe' },
          { keys: 'Alt + Shift + S', desc: 'Scale Keyframe', usage: 'Add Scale keyframe' },
          { keys: 'Alt + Shift + T', desc: 'Opacity Keyframe', usage: 'Add Opacity keyframe' },
          { keys: 'U', desc: 'Show Modified', usage: 'Show properties with keyframes' },
          { keys: 'UU', desc: 'Show All Modified', usage: 'Show all modified properties' },
          { keys: 'J', desc: 'Previous Keyframe', usage: 'Go to previous keyframe' },
          { keys: 'K', desc: 'Next Keyframe', usage: 'Go to next keyframe' },
        ]
      },
      {
        name: 'Playback',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Pause', usage: 'Play or pause playback' },
          { keys: '0 (Numpad)', desc: 'RAM Preview', usage: 'Start RAM preview' },
          { keys: '.', desc: 'Audio Preview', usage: 'Preview audio only' },
          { keys: 'Alt + .', desc: 'Work Area Preview', usage: 'Preview work area' },
        ]
      },
      {
        name: 'Effects',
        shortcuts: [
          { keys: 'Ctrl + Alt + Shift + E', desc: 'Effects', usage: 'Open Effects panel' },
          { keys: 'F3', desc: 'Effect Controls', usage: 'Open Effect Controls panel' },
          { keys: 'Ctrl + Shift + T', desc: 'Text', usage: 'Create text layer' },
        ]
      },
    ]
  },
  indesign: {
    name: 'InDesign',
    icon: 'fas fa-newspaper',
    categories: [
      {
        name: 'Selection Tools',
        shortcuts: [
          { keys: 'V', desc: 'Selection', usage: 'Activate selection tool' },
          { keys: 'A', desc: 'Direct Selection', usage: 'Select paths and anchor points' },
          { keys: 'Shift + A', desc: 'Page Tool', usage: 'Activate page tool' },
          { keys: 'P', desc: 'Pen', usage: 'Activate pen tool' },
        ]
      },
      {
        name: 'Frames',
        shortcuts: [
          { keys: 'F', desc: 'Rectangle Frame', usage: 'Draw rectangle frame' },
          { keys: 'M', desc: 'Rectangle', usage: 'Draw rectangle' },
          { keys: 'L', desc: 'Ellipse Frame', usage: 'Draw ellipse frame' },
          { keys: 'Ctrl + D', desc: 'Place', usage: 'Import file' },
          { keys: 'Ctrl + E', desc: 'Export', usage: 'Export document' },
        ]
      },
      {
        name: 'Text',
        shortcuts: [
          { keys: 'T', desc: 'Type Tool', usage: 'Activate type tool' },
          { keys: 'Shift + Ctrl + >', desc: 'Increase Size', usage: 'Increase font size' },
          { keys: 'Shift + Ctrl + <', desc: 'Decrease Size', usage: 'Decrease font size' },
          { keys: 'Alt + Left/Right', desc: 'Kerning', usage: 'Adjust letter spacing' },
          { keys: 'Alt + Up/Down', desc: 'Leading', usage: 'Adjust line spacing' },
          { keys: 'Ctrl + Alt + Shift + J', desc: 'Justify', usage: 'Justify paragraph' },
        ]
      },
      {
        name: 'Pages',
        shortcuts: [
          { keys: 'Ctrl + J', desc: 'Go to Page', usage: 'Jump to specific page' },
          { keys: 'Shift + Page Up', desc: 'Previous Page', usage: 'Go to previous page' },
          { keys: 'Shift + Page Down', desc: 'Next Page', usage: 'Go to next page' },
          { keys: 'Ctrl + Shift + P', desc: 'Add Page', usage: 'Add new page' },
        ]
      },
      {
        name: 'View',
        shortcuts: [
          { keys: 'W', desc: 'Preview', usage: 'Toggle preview mode' },
          { keys: 'Ctrl + Alt + ;', desc: 'Lock Guides', usage: 'Lock or unlock guides' },
          { keys: 'Ctrl + 0', desc: 'Fit Page', usage: 'Fit page to screen' },
          { keys: 'Ctrl + Alt + 0', desc: 'Fit Spread', usage: 'Fit spread to screen' },
        ]
      },
    ]
  },
  lightroom: {
    name: 'Lightroom',
    icon: 'fas fa-image',
    categories: [
      {
        name: 'Modules',
        shortcuts: [
          { keys: 'G', desc: 'Library', usage: 'Go to Library module' },
          { keys: 'D', desc: 'Develop', usage: 'Go to Develop module' },
          { keys: 'N', desc: 'Map', usage: 'Go to Map module' },
          { keys: 'Ctrl + Alt + 1', desc: 'Book', usage: 'Go to Book module' },
          { keys: 'Ctrl + Alt + 2', desc: 'Slideshow', usage: 'Go to Slideshow module' },
          { keys: 'Ctrl + Alt + 3', desc: 'Print', usage: 'Go to Print module' },
          { keys: 'Ctrl + Alt + 4', desc: 'Web', usage: 'Go to Web module' },
        ]
      },
      {
        name: 'Adjustments',
        shortcuts: [
          { keys: '[', desc: 'Decrease Exposure', usage: 'Decrease exposure' },
          { keys: ']', desc: 'Increase Exposure', usage: 'Increase exposure' },
          { keys: '0', desc: 'Remove Rating', usage: 'Remove star rating' },
          { keys: '1-5', desc: 'Star Rating', usage: 'Assign 1-5 star rating' },
          { keys: '6-9', desc: 'Color Label', usage: 'Apply color label' },
          { keys: 'Ctrl + U', desc: 'Auto Tone', usage: 'Auto adjust tone' },
          { keys: 'Ctrl + Shift + U', desc: 'Auto White Balance', usage: 'Auto adjust white balance' },
        ]
      },
      {
        name: 'Tools',
        shortcuts: [
          { keys: 'K', desc: 'Adjustment Brush', usage: 'Activate adjustment brush tool' },
          { keys: 'Q', desc: 'Spot Removal', usage: 'Activate spot removal tool' },
          { keys: 'M', desc: 'Graduated Filter', usage: 'Activate graduated filter' },
          { keys: 'R', desc: 'Crop', usage: 'Activate crop tool' },
          { keys: 'N', desc: 'Survey Removal', usage: 'Activate survey removal tool' },
        ]
      },
      {
        name: 'View',
        shortcuts: [
          { keys: 'E', desc: 'Loupe View', usage: 'Switch to loupe view' },
          { keys: 'L', desc: 'Lights Out', usage: 'Cycle lights out mode' },
          { keys: 'I', desc: 'Info Overlay', usage: 'Show info overlay' },
          { keys: 'J', desc: 'Clipping', usage: 'Show clipping warnings' },
          { keys: 'Ctrl + Shift + H', desc: 'Histogram', usage: 'Show or hide histogram' },
        ]
      },
    ]
  },
  word: {
    name: 'Microsoft Word',
    icon: 'fas fa-file-word',
    categories: [
      {
        name: 'File & Document',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New Document', usage: 'Create a new blank document' },
          { keys: 'Ctrl + O', desc: 'Open', usage: 'Open an existing document' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save the current document' },
          { keys: 'Ctrl + Shift + S', desc: 'Save As', usage: 'Save document with a new name or format' },
          { keys: 'Ctrl + P', desc: 'Print', usage: 'Open the print dialog' },
          { keys: 'Ctrl + W', desc: 'Close', usage: 'Close the current document' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last action' },
          { keys: 'Ctrl + Y', desc: 'Redo', usage: 'Redo the last undone action' },
          { keys: 'F12', desc: 'Save As Dialog', usage: 'Open Save As dialog directly' },
          { keys: 'Ctrl + F4', desc: 'Close Window', usage: 'Close the document window' },
        ]
      },
      {
        name: 'Text Editing',
        shortcuts: [
          { keys: 'Ctrl + C', desc: 'Copy', usage: 'Copy selected text to clipboard' },
          { keys: 'Ctrl + X', desc: 'Cut', usage: 'Cut selected text to clipboard' },
          { keys: 'Ctrl + V', desc: 'Paste', usage: 'Paste from clipboard' },
          { keys: 'Ctrl + A', desc: 'Select All', usage: 'Select all content in the document' },
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Open Find dialog to search text' },
          { keys: 'Ctrl + H', desc: 'Find & Replace', usage: 'Find and replace text in the document' },
          { keys: 'Ctrl + G', desc: 'Go To', usage: 'Go to a specific page, line, or bookmark' },
          { keys: 'Delete', desc: 'Delete Character', usage: 'Delete character to the right of cursor' },
          { keys: 'Backspace', desc: 'Delete Previous', usage: 'Delete character to the left of cursor' },
          { keys: 'Ctrl + Delete', desc: 'Delete Word Right', usage: 'Delete the word to the right of cursor' },
          { keys: 'Ctrl + Backspace', desc: 'Delete Word Left', usage: 'Delete the word to the left of cursor' },
          { keys: 'Ctrl + D', desc: 'Font Dialog', usage: 'Open Font dialog for detailed formatting' },
        ]
      },
      {
        name: 'Text Formatting',
        shortcuts: [
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Apply or remove bold formatting' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Apply or remove italic formatting' },
          { keys: 'Ctrl + U', desc: 'Underline', usage: 'Apply or remove underline formatting' },
          { keys: 'Ctrl + Shift + W', desc: 'Word Underline', usage: 'Underline words but not spaces' },
          { keys: 'Ctrl + Shift + D', desc: 'Double Underline', usage: 'Apply double underline formatting' },
          { keys: 'Ctrl + Shift + K', desc: 'Small Caps', usage: 'Format text as small capitals' },
          { keys: 'Ctrl + Shift + A', desc: 'All Caps', usage: 'Change text to all capitals' },
          { keys: 'Ctrl + =', desc: 'Subscript', usage: 'Apply subscript formatting' },
          { keys: 'Ctrl + Shift + =', desc: 'Superscript', usage: 'Apply superscript formatting' },
          { keys: 'Ctrl + Shift + C', desc: 'Copy Formatting', usage: 'Copy formatting from selected text' },
          { keys: 'Ctrl + Shift + V', desc: 'Paste Formatting', usage: 'Apply copied formatting to selected text' },
          { keys: 'Ctrl + Space', desc: 'Clear Formatting', usage: 'Remove all manual character formatting' },
          { keys: 'Ctrl + ]', desc: 'Increase Font Size', usage: 'Increase font size by 1 point' },
          { keys: 'Ctrl + [', desc: 'Decrease Font Size', usage: 'Decrease font size by 1 point' },
          { keys: 'Ctrl + Shift + >', desc: 'Increase Font Size', usage: 'Increase font size to next preset size' },
          { keys: 'Ctrl + Shift + <', desc: 'Decrease Font Size', usage: 'Decrease font size to previous preset size' },
        ]
      },
      {
        name: 'Paragraph & Alignment',
        shortcuts: [
          { keys: 'Ctrl + E', desc: 'Center Align', usage: 'Center-align the selected paragraph' },
          { keys: 'Ctrl + L', desc: 'Left Align', usage: 'Left-align the selected paragraph' },
          { keys: 'Ctrl + R', desc: 'Right Align', usage: 'Right-align the selected paragraph' },
          { keys: 'Ctrl + J', desc: 'Justify', usage: 'Justify-align the selected paragraph' },
          { keys: 'Ctrl + 1', desc: 'Single Spacing', usage: 'Set line spacing to single' },
          { keys: 'Ctrl + 2', desc: 'Double Spacing', usage: 'Set line spacing to double' },
          { keys: 'Ctrl + 5', desc: '1.5 Line Spacing', usage: 'Set line spacing to 1.5 lines' },
          { keys: 'Ctrl + 0', desc: 'Add/Remove Space Before', usage: 'Add or remove space before paragraph' },
          { keys: 'Ctrl + M', desc: 'Indent', usage: 'Indent paragraph from the left' },
          { keys: 'Ctrl + Shift + M', desc: 'Remove Indent', usage: 'Remove paragraph indent from the left' },
          { keys: 'Ctrl + T', desc: 'Hanging Indent', usage: 'Create a hanging indent' },
          { keys: 'Ctrl + Shift + T', desc: 'Remove Hanging Indent', usage: 'Remove a hanging indent' },
          { keys: 'Ctrl + Q', desc: 'Remove Paragraph Formatting', usage: 'Remove manual paragraph formatting' },
        ]
      },
      {
        name: 'Styles & Headings',
        shortcuts: [
          { keys: 'Ctrl + Alt + 1', desc: 'Heading 1', usage: 'Apply Heading 1 style' },
          { keys: 'Ctrl + Alt + 2', desc: 'Heading 2', usage: 'Apply Heading 2 style' },
          { keys: 'Ctrl + Alt + 3', desc: 'Heading 3', usage: 'Apply Heading 3 style' },
          { keys: 'Ctrl + Shift + N', desc: 'Normal Style', usage: 'Apply Normal paragraph style' },
          { keys: 'Ctrl + Shift + L', desc: 'List Bullet', usage: 'Apply List Bullet style' },
          { keys: 'Alt + Ctrl + K', desc: 'AutoFormat', usage: 'Start AutoFormat' },
          { keys: 'Ctrl + Shift + S', desc: 'Apply Style', usage: 'Open Apply Styles task pane' },
        ]
      },
      {
        name: 'Navigation & Selection',
        shortcuts: [
          { keys: 'Ctrl + Home', desc: 'Go to Beginning', usage: 'Move cursor to beginning of document' },
          { keys: 'Ctrl + End', desc: 'Go to End', usage: 'Move cursor to end of document' },
          { keys: 'Ctrl + Left', desc: 'Previous Word', usage: 'Move cursor one word to the left' },
          { keys: 'Ctrl + Right', desc: 'Next Word', usage: 'Move cursor one word to the right' },
          { keys: 'Ctrl + Up', desc: 'Previous Paragraph', usage: 'Move cursor to previous paragraph' },
          { keys: 'Ctrl + Down', desc: 'Next Paragraph', usage: 'Move cursor to next paragraph' },
          { keys: 'Shift + Arrow', desc: 'Extend Selection', usage: 'Extend selection character by character' },
          { keys: 'Ctrl + Shift + Arrow', desc: 'Select Word', usage: 'Extend selection word by word' },
          { keys: 'Shift + Home', desc: 'Select to Line Start', usage: 'Select from cursor to beginning of line' },
          { keys: 'Shift + End', desc: 'Select to Line End', usage: 'Select from cursor to end of line' },
          { keys: 'Ctrl + Shift + Home', desc: 'Select to Start', usage: 'Select from cursor to document start' },
          { keys: 'Ctrl + Shift + End', desc: 'Select to End', usage: 'Select from cursor to document end' },
          { keys: 'Page Up', desc: 'Page Up', usage: 'Move one screen up' },
          { keys: 'Page Down', desc: 'Page Down', usage: 'Move one screen down' },
        ]
      },
      {
        name: 'Tables',
        shortcuts: [
          { keys: 'Tab', desc: 'Next Cell', usage: 'Move to the next cell in a table' },
          { keys: 'Shift + Tab', desc: 'Previous Cell', usage: 'Move to the previous cell in a table' },
          { keys: 'Alt + Home', desc: 'First Cell in Row', usage: 'Move to the first cell in the current row' },
          { keys: 'Alt + End', desc: 'Last Cell in Row', usage: 'Move to the last cell in the current row' },
          { keys: 'Alt + Page Up', desc: 'First Row', usage: 'Move to the first row in the column' },
          { keys: 'Alt + Page Down', desc: 'Last Row', usage: 'Move to the last row in the column' },
          { keys: 'Ctrl + Shift + Enter', desc: 'Split Table', usage: 'Split the table at the cursor position' },
        ]
      },
      {
        name: 'Review & Track Changes',
        shortcuts: [
          { keys: 'Ctrl + Shift + E', desc: 'Track Changes', usage: 'Turn Track Changes on or off' },
          { keys: 'Ctrl + Shift + ;', desc: 'Insert Comment', usage: 'Insert a comment at the cursor' },
          { keys: 'Alt + Shift + C', desc: 'Close Comment Pane', usage: 'Close the Reviewing Pane' },
          { keys: 'Ctrl + Shift + *', desc: 'Show/Hide Marks', usage: 'Show or hide paragraph marks and formatting' },
          { keys: 'F7', desc: 'Spell Check', usage: 'Open spell check and grammar check' },
          { keys: 'Shift + F7', desc: 'Thesaurus', usage: 'Open the Thesaurus' },
          { keys: 'Alt + F7', desc: 'Find Spelling Error', usage: 'Find the next spelling or grammar error' },
        ]
      },
      {
        name: 'View & Window',
        shortcuts: [
          { keys: 'Ctrl + F2', desc: 'Print Preview', usage: 'Switch to Print Preview mode' },
          { keys: 'Alt + Ctrl + P', desc: 'Print Layout', usage: 'Switch to Print Layout view' },
          { keys: 'Alt + Ctrl + O', desc: 'Outline View', usage: 'Switch to Outline view' },
          { keys: 'Alt + Ctrl + N', desc: 'Draft View', usage: 'Switch to Draft view' },
          { keys: 'Ctrl + F1', desc: 'Ribbon Toggle', usage: 'Show or hide the Ribbon' },
          { keys: 'Ctrl + Shift + F6', desc: 'Previous Window', usage: 'Switch to the previous document window' },
          { keys: 'Ctrl + F10', desc: 'Maximize Window', usage: 'Maximize the document window' },
        ]
      },
    ]
  },
  sublime: {
    name: 'Sublime Text',
    icon: 'fas fa-file-code',
    categories: [
      {
        name: 'File & Navigation',
        shortcuts: [
          { keys: 'Ctrl + P', desc: 'Go to File', usage: 'Quick file open' },
          { keys: 'Ctrl + Shift + P', desc: 'Command Palette', usage: 'Open command palette' },
          { keys: 'Ctrl + R', desc: 'Go to Symbol', usage: 'Jump to symbol' },
          { keys: 'Ctrl + G', desc: 'Go to Line', usage: 'Jump to line' },
          { keys: 'Ctrl + Tab', desc: 'Next Tab', usage: 'Switch to next tab' },
          { keys: 'Ctrl + Shift + Tab', desc: 'Previous Tab', usage: 'Switch to previous tab' },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + D', desc: 'Select Word', usage: 'Select next occurrence of word' },
          { keys: 'Ctrl + L', desc: 'Select Line', usage: 'Select entire line' },
          { keys: 'Ctrl + Shift + K', desc: 'Delete Line', usage: 'Delete current line' },
          { keys: 'Ctrl + Shift + D', desc: 'Duplicate Line', usage: 'Duplicate current line' },
          { keys: 'Ctrl + /', desc: 'Toggle Comment', usage: 'Comment or uncomment line' },
          { keys: 'Ctrl + ]', desc: 'Indent', usage: 'Indent selection' },
          { keys: 'Ctrl + [', desc: 'Unindent', usage: 'Unindent selection' },
        ]
      },
      {
        name: 'Multi-cursor',
        shortcuts: [
          { keys: 'Ctrl + Alt + Up/Down', desc: 'Add Cursor', usage: 'Add cursor above/below' },
          { keys: 'Ctrl + Shift + L', desc: 'Split into Lines', usage: 'Split selection into lines' },
          { keys: 'Alt + F3', desc: 'Select All', usage: 'Select all occurrences' },
          { keys: 'Esc', desc: 'Single Cursor', usage: 'Return to single cursor' },
        ]
      },
      {
        name: 'Search',
        shortcuts: [
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Find in file' },
          { keys: 'Ctrl + H', desc: 'Replace', usage: 'Find and replace' },
          { keys: 'Ctrl + Shift + F', desc: 'Find in Files', usage: 'Search across files' },
          { keys: 'F3', desc: 'Find Next', usage: 'Find next occurrence' },
          { keys: 'Shift + F3', desc: 'Find Previous', usage: 'Find previous occurrence' },
        ]
      },
      {
        name: 'View',
        shortcuts: [
          { keys: 'Ctrl + K, Ctrl + B', desc: 'Toggle Sidebar', usage: 'Show/hide sidebar' },
          { keys: 'F11', desc: 'Fullscreen', usage: 'Toggle fullscreen mode' },
          { keys: 'Shift + F11', desc: 'Distraction Free', usage: 'Enter distraction free mode' },
        ]
      },
    ]
  },
  intellij: {
    name: 'IntelliJ IDEA',
    icon: 'fas fa-laptop-code',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'Go to Class', usage: 'Navigate to class' },
          { keys: 'Ctrl + Shift + N', desc: 'Go to File', usage: 'Navigate to file' },
          { keys: 'Ctrl + Alt + Shift + N', desc: 'Go to Symbol', usage: 'Navigate to symbol' },
          { keys: 'Ctrl + E', desc: 'Recent Files', usage: 'Open recent files' },
          { keys: 'Ctrl + Shift + E', desc: 'Recent Locations', usage: 'Show recent edit locations' },
          { keys: 'Ctrl + B', desc: 'Go to Declaration', usage: 'Jump to declaration' },
          { keys: 'Ctrl + Alt + Left/Right', desc: 'Navigate Back/Forward', usage: 'Navigate back/forward in history' },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + Space', desc: 'Code Completion', usage: 'Basic code completion' },
          { keys: 'Ctrl + Shift + Space', desc: 'Smart Completion', usage: 'Smart type-matching completion' },
          { keys: 'Ctrl + Alt + L', desc: 'Reformat Code', usage: 'Reformat code' },
          { keys: 'Ctrl + D', desc: 'Duplicate Line', usage: 'Duplicate current line' },
          { keys: 'Ctrl + Y', desc: 'Delete Line', usage: 'Delete current line' },
          { keys: 'Ctrl + /', desc: 'Comment Line', usage: 'Comment/uncomment line' },
          { keys: 'Ctrl + Shift + /', desc: 'Block Comment', usage: 'Comment/uncomment block' },
          { keys: 'Ctrl + W', desc: 'Extend Selection', usage: 'Expand selection' },
        ]
      },
      {
        name: 'Refactoring',
        shortcuts: [
          { keys: 'Shift + F6', desc: 'Rename', usage: 'Rename symbol' },
          { keys: 'Ctrl + Alt + M', desc: 'Extract Method', usage: 'Extract method' },
          { keys: 'Ctrl + Alt + V', desc: 'Extract Variable', usage: 'Extract variable' },
          { keys: 'Ctrl + Alt + C', desc: 'Extract Constant', usage: 'Extract constant' },
          { keys: 'Ctrl + Alt + F', desc: 'Extract Field', usage: 'Extract field' },
        ]
      },
      {
        name: 'Run & Debug',
        shortcuts: [
          { keys: 'Shift + F10', desc: 'Run', usage: 'Run program' },
          { keys: 'Shift + F9', desc: 'Debug', usage: 'Start debugging' },
          { keys: 'Ctrl + F2', desc: 'Stop', usage: 'Stop running program' },
          { keys: 'F8', desc: 'Step Over', usage: 'Step over in debugger' },
          { keys: 'F7', desc: 'Step Into', usage: 'Step into in debugger' },
          { keys: 'Shift + F8', desc: 'Step Out', usage: 'Step out in debugger' },
          { keys: 'F9', desc: 'Resume', usage: 'Resume program' },
        ]
      },
      {
        name: 'Tool Windows',
        shortcuts: [
          { keys: 'Alt + 1', desc: 'Project', usage: 'Focus Project window' },
          { keys: 'Alt + 7', desc: 'Structure', usage: 'Focus Structure window' },
          { keys: 'Alt + 9', desc: 'Git', usage: 'Focus Version Control window' },
          { keys: 'Ctrl + Shift + F12', desc: 'Maximize Editor', usage: 'Toggle maximize editor' },
        ]
      },
    ]
  },
  vim: {
    name: 'Vim',
    icon: 'fas fa-terminal',
    categories: [
      {
        name: 'Mode Switching',
        shortcuts: [
          { keys: 'i', desc: 'Insert Mode', usage: 'Enter insert mode before cursor' },
          { keys: 'a', desc: 'Append Mode', usage: 'Enter insert mode after cursor' },
          { keys: 'I', desc: 'Insert at Line Start', usage: 'Insert at beginning of line' },
          { keys: 'A', desc: 'Append at Line End', usage: 'Insert at end of line' },
          { keys: 'o', desc: 'Open Line Below', usage: 'Open new line below and enter insert mode' },
          { keys: 'O', desc: 'Open Line Above', usage: 'Open new line above and enter insert mode' },
          { keys: 'Esc', desc: 'Normal Mode', usage: 'Return to normal mode' },
          { keys: 'v', desc: 'Visual Mode', usage: 'Enter visual mode' },
          { keys: 'V', desc: 'Visual Line Mode', usage: 'Enter visual line mode' },
          { keys: 'Ctrl + v', desc: 'Visual Block Mode', usage: 'Enter visual block mode' },
        ]
      },
      {
        name: 'Movement',
        shortcuts: [
          { keys: 'h', desc: 'Left', usage: 'Move cursor left' },
          { keys: 'j', desc: 'Down', usage: 'Move cursor down' },
          { keys: 'k', desc: 'Up', usage: 'Move cursor up' },
          { keys: 'l', desc: 'Right', usage: 'Move cursor right' },
          { keys: 'w', desc: 'Next Word', usage: 'Jump to start of next word' },
          { keys: 'b', desc: 'Previous Word', usage: 'Jump to start of previous word' },
          { keys: 'e', desc: 'End of Word', usage: 'Jump to end of word' },
          { keys: '0', desc: 'Line Start', usage: 'Move to start of line' },
          { keys: '^', desc: 'First Non-blank', usage: 'Move to first non-blank character' },
          { keys: '$', desc: 'Line End', usage: 'Move to end of line' },
          { keys: 'gg', desc: 'File Start', usage: 'Go to first line' },
          { keys: 'G', desc: 'File End', usage: 'Go to last line' },
          { keys: 'Ctrl + f', desc: 'Page Down', usage: 'Scroll page down' },
          { keys: 'Ctrl + b', desc: 'Page Up', usage: 'Scroll page up' },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'x', desc: 'Delete Char', usage: 'Delete character under cursor' },
          { keys: 'dd', desc: 'Delete Line', usage: 'Delete current line' },
          { keys: 'dw', desc: 'Delete Word', usage: 'Delete word' },
          { keys: 'D', desc: 'Delete to End', usage: 'Delete from cursor to end of line' },
          { keys: 'yy', desc: 'Yank Line', usage: 'Copy current line' },
          { keys: 'yw', desc: 'Yank Word', usage: 'Copy word' },
          { keys: 'p', desc: 'Paste After', usage: 'Paste after cursor' },
          { keys: 'P', desc: 'Paste Before', usage: 'Paste before cursor' },
          { keys: 'u', desc: 'Undo', usage: 'Undo last change' },
          { keys: 'Ctrl + r', desc: 'Redo', usage: 'Redo change' },
          { keys: 'r', desc: 'Replace Char', usage: 'Replace single character' },
          { keys: 'R', desc: 'Replace Mode', usage: 'Enter replace mode' },
          { keys: 'J', desc: 'Join Lines', usage: 'Join current line with next' },
        ]
      },
      {
        name: 'Search',
        shortcuts: [
          { keys: '/', desc: 'Search Forward', usage: 'Search forward' },
          { keys: '?', desc: 'Search Backward', usage: 'Search backward' },
          { keys: 'n', desc: 'Next Match', usage: 'Go to next search match' },
          { keys: 'N', desc: 'Previous Match', usage: 'Go to previous search match' },
          { keys: '*', desc: 'Search Word', usage: 'Search for word under cursor' },
          { keys: '#', desc: 'Search Word Backward', usage: 'Search word backward' },
        ]
      },
      {
        name: 'File Operations',
        shortcuts: [
          { keys: ':w', desc: 'Save', usage: 'Save file' },
          { keys: ':q', desc: 'Quit', usage: 'Quit Vim' },
          { keys: ':wq', desc: 'Save & Quit', usage: 'Save and quit' },
          { keys: ':q!', desc: 'Force Quit', usage: 'Quit without saving' },
          { keys: ':e filename', desc: 'Edit File', usage: 'Open file for editing' },
          { keys: ':sp', desc: 'Split Horizontal', usage: 'Split window horizontally' },
          { keys: ':vsp', desc: 'Split Vertical', usage: 'Split window vertically' },
        ]
      },
      {
        name: 'Advanced',
        shortcuts: [
          { keys: '.', desc: 'Repeat', usage: 'Repeat last command' },
          { keys: '~', desc: 'Toggle Case', usage: 'Toggle case of character' },
          { keys: 'ci"', desc: 'Change in Quotes', usage: 'Change text inside quotes' },
          { keys: 'di"', desc: 'Delete in Quotes', usage: 'Delete text inside quotes' },
          { keys: 'qa', desc: 'Record Macro', usage: 'Record macro to register a' },
          { keys: 'q', desc: 'Stop Recording', usage: 'Stop recording macro' },
          { keys: '@a', desc: 'Run Macro', usage: 'Execute macro from register a' },
        ]
      },
    ]
  },
  linux: {
    name: 'Linux',
    icon: 'fab fa-linux',
    categories: [
      {
        name: 'System',
        shortcuts: [
          { keys: 'Ctrl + Alt + T', desc: 'Terminal', usage: 'Open terminal' },
          { keys: 'Alt + F2', desc: 'Run Command', usage: 'Open run command dialog' },
          { keys: 'Ctrl + Alt + L', desc: 'Lock Screen', usage: 'Lock the screen' },
          { keys: 'Ctrl + Alt + Delete', desc: 'Logout', usage: 'Open logout dialog' },
          { keys: 'Super', desc: 'Activities', usage: 'Open activities overview' },
          { keys: 'Alt + Tab', desc: 'Switch Windows', usage: 'Switch between windows' },
          { keys: 'Alt + `', desc: 'Switch in App', usage: 'Switch between windows of same app' },
        ]
      },
      {
        name: 'Desktop',
        shortcuts: [
          { keys: 'Ctrl + Alt + Up/Down', desc: 'Switch Workspace', usage: 'Switch workspaces' },
          { keys: 'Ctrl + Alt + Shift + Up/Down', desc: 'Move Window to Workspace', usage: 'Move window to workspace' },
          { keys: 'Super + D', desc: 'Show Desktop', usage: 'Minimize all windows' },
          { keys: 'Alt + F4', desc: 'Close Window', usage: 'Close active window' },
          { keys: 'Alt + F10', desc: 'Maximize', usage: 'Toggle maximize window' },
          { keys: 'Super + Left/Right', desc: 'Tile Window', usage: 'Tile window to left/right' },
        ]
      },
      {
        name: 'File Manager',
        shortcuts: [
          { keys: 'Ctrl + H', desc: 'Show Hidden', usage: 'Show hidden files' },
          { keys: 'Ctrl + L', desc: 'Location Bar', usage: 'Focus location bar' },
          { keys: 'Alt + Up', desc: 'Parent Folder', usage: 'Go to parent folder' },
          { keys: 'Alt + Left/Right', desc: 'Navigate', usage: 'Go backward/forward' },
          { keys: 'Ctrl + 1/2/3', desc: 'Change View', usage: 'Change view mode' },
          { keys: 'F2', desc: 'Rename', usage: 'Rename file' },
          { keys: 'Ctrl + Shift + N', desc: 'New Folder', usage: 'Create new folder' },
        ]
      },
      {
        name: 'Terminal',
        shortcuts: [
          { keys: 'Ctrl + C', desc: 'Cancel', usage: 'Cancel current command' },
          { keys: 'Ctrl + Z', desc: 'Suspend', usage: 'Suspend current process' },
          { keys: 'Ctrl + D', desc: 'Exit', usage: 'Exit terminal or end input' },
          { keys: 'Ctrl + L', desc: 'Clear', usage: 'Clear terminal screen' },
          { keys: 'Ctrl + R', desc: 'Search History', usage: 'Search command history' },
          { keys: 'Up/Down', desc: 'Command History', usage: 'Navigate command history' },
          { keys: 'Tab', desc: 'Auto-complete', usage: 'Auto-complete command or path' },
        ]
      },
      {
        name: 'Screenshot',
        shortcuts: [
          { keys: 'PrtScn', desc: 'Screenshot', usage: 'Capture entire screen' },
          { keys: 'Alt + PrtScn', desc: 'Window Screenshot', usage: 'Capture active window' },
          { keys: 'Shift + PrtScn', desc: 'Area Screenshot', usage: 'Capture selected area' },
          { keys: 'Ctrl + Alt + PrtScn', desc: 'Copy Screenshot', usage: 'Copy screenshot to clipboard' },
          { keys: 'Ctrl + Shift + PrtScn', desc: 'Record Screen', usage: 'Record screen video' },
        ]
      },
      {
        name: 'System',
        shortcuts: [
          { keys: 'Ctrl + Alt + Del', desc: 'Task Manager', usage: 'Open system monitor' },
          { keys: 'Ctrl + Alt + L', desc: 'Lock Screen', usage: 'Lock the screen' },
          { keys: 'Super + L', desc: 'Log Out', usage: 'Log out of session' },
        ]
      },
    ]
  },
  blender: {
    name: 'Blender',
    icon: 'fas fa-cube',
    categories: [
      {
        name: 'View',
        shortcuts: [
          { keys: 'Middle Mouse', desc: 'Rotate View', usage: 'Rotate viewport' },
          { keys: 'Shift + Middle Mouse', desc: 'Pan', usage: 'Pan viewport' },
          { keys: 'Scroll', desc: 'Zoom', usage: 'Zoom in/out' },
          { keys: 'Numpad 7', desc: 'Top View', usage: 'Switch to top view' },
          { keys: 'Numpad 1', desc: 'Front View', usage: 'Switch to front view' },
          { keys: 'Numpad 3', desc: 'Side View', usage: 'Switch to side view' },
          { keys: 'Numpad 0', desc: 'Camera View', usage: 'Switch to camera view' },
          { keys: 'Numpad .', desc: 'Frame Selected', usage: 'Frame selected objects' },
          { keys: 'Home', desc: 'View All', usage: 'Frame all objects' },
        ]
      },
      {
        name: 'Selection',
        shortcuts: [
          { keys: 'A', desc: 'Select All', usage: 'Select all objects' },
          { keys: 'Alt + A', desc: 'Deselect All', usage: 'Deselect all' },
          { keys: 'B', desc: 'Box Select', usage: 'Box selection' },
          { keys: 'C', desc: 'Circle Select', usage: 'Circle selection' },
          { keys: 'Ctrl + I', desc: 'Invert Selection', usage: 'Invert selection' },
        ]
      },
      {
        name: 'Basic Tools',
        shortcuts: [
          { keys: 'G', desc: 'Move', usage: 'Move selected object' },
          { keys: 'R', desc: 'Rotate', usage: 'Rotate selected object' },
          { keys: 'S', desc: 'Scale', usage: 'Scale selected object' },
          { keys: 'X', desc: 'Delete', usage: 'Delete selected object' },
          { keys: 'Shift + D', desc: 'Duplicate', usage: 'Duplicate object' },
          { keys: 'Alt + D', desc: 'Linked Duplicate', usage: 'Create linked duplicate' },
          { keys: 'Shift + A', desc: 'Add', usage: 'Add new object' },
          { keys: 'Tab', desc: 'Edit Mode', usage: 'Toggle edit mode' },
          { keys: 'Ctrl + Tab', desc: 'Mode Menu', usage: 'Open mode menu' },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'E', desc: 'Extrude', usage: 'Extrude selected faces' },
          { keys: 'I', desc: 'Inset', usage: 'Inset selected faces' },
          { keys: 'K', desc: 'Knife', usage: 'Activate knife tool' },
          { keys: 'Ctrl + R', desc: 'Loop Cut', usage: 'Add loop cut' },
          { keys: 'F', desc: 'Fill', usage: 'Create face from selected vertices' },
          { keys: 'P', desc: 'Separate', usage: 'Separate selected elements' },
          { keys: 'Ctrl + J', desc: 'Join', usage: 'Join selected objects' },
          { keys: 'Ctrl + A', desc: 'Apply', usage: 'Apply transformations' },
        ]
      },
      {
        name: 'Animation',
        shortcuts: [
          { keys: 'I', desc: 'Insert Keyframe', usage: 'Insert keyframe' },
          { keys: 'Alt + I', desc: 'Delete Keyframe', usage: 'Delete keyframe' },
          { keys: 'Space', desc: 'Play/Pause', usage: 'Play or pause animation' },
          { keys: 'Left/Right', desc: 'Frame Step', usage: 'Go to previous/next frame' },
          { keys: 'Shift + Left/Right', desc: 'First/Last Frame', usage: 'Jump to first/last frame' },
        ]
      },
    ]
  },
  unity: {
    name: 'Unity',
    icon: 'fab fa-unity',
    categories: [
      {
        name: 'View',
        shortcuts: [
          { keys: 'Right Mouse + Drag', desc: 'Rotate View', usage: 'Rotate scene view' },
          { keys: 'Middle Mouse + Drag', desc: 'Pan', usage: 'Pan scene view' },
          { keys: 'Scroll', desc: 'Zoom', usage: 'Zoom scene view' },
          { keys: 'F', desc: 'Frame Selected', usage: 'Frame selected object' },
          { keys: 'Alt + Left Mouse + Drag', desc: 'Orbit', usage: 'Orbit around object' },
          { keys: 'Shift + F', desc: 'Flythrough', usage: 'Flythrough mode' },
        ]
      },
      {
        name: 'GameObject',
        shortcuts: [
          { keys: 'Ctrl + Shift + N', desc: 'Empty Object', usage: 'Create empty GameObject' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate object' },
          { keys: 'Ctrl + Shift + D', desc: 'Duplicate at Origin', usage: 'Duplicate at same position' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete selected object' },
          { keys: 'Ctrl + P', desc: 'Set Parent', usage: 'Set parent for object' },
          { keys: 'Alt + Shift + P', desc: 'Unparent', usage: 'Remove parent relationship' },
        ]
      },
      {
        name: 'Scene Tools',
        shortcuts: [
          { keys: 'Q', desc: 'Pan Tool', usage: 'Activate pan tool' },
          { keys: 'W', desc: 'Move Tool', usage: 'Activate move tool' },
          { keys: 'E', desc: 'Rotate Tool', usage: 'Activate rotate tool' },
          { keys: 'R', desc: 'Scale Tool', usage: 'Activate scale tool' },
          { keys: 'T', desc: 'Rect Tool', usage: 'Activate rectangle tool' },
          { keys: 'Y', desc: 'Transform Tool', usage: 'Activate transform tool' },
          { keys: 'Z', desc: 'Toggle Pivot', usage: 'Toggle pivot/center mode' },
          { keys: 'X', desc: 'Toggle Rotation', usage: 'Toggle local/global rotation' },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action' },
          { keys: 'Ctrl + Y', desc: 'Redo', usage: 'Redo action' },
          { keys: 'Ctrl + A', desc: 'Select All', usage: 'Select all objects' },
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Open search' },
          { keys: 'Ctrl + Shift + F', desc: 'Find in Project', usage: 'Search in project' },
        ]
      },
      {
        name: 'Playback',
        shortcuts: [
          { keys: 'Ctrl + P', desc: 'Play', usage: 'Play or stop game' },
          { keys: 'Ctrl + Shift + P', desc: 'Pause', usage: 'Pause game' },
          { keys: 'Ctrl + Alt + P', desc: 'Step', usage: 'Step frame forward' },
        ]
      },
      {
        name: 'Windows',
        shortcuts: [
          { keys: 'Ctrl + 1', desc: 'Scene', usage: 'Open Scene view' },
          { keys: 'Ctrl + 2', desc: 'Game', usage: 'Open Game view' },
          { keys: 'Ctrl + 3', desc: 'Inspector', usage: 'Open Inspector' },
          { keys: 'Ctrl + 4', desc: 'Hierarchy', usage: 'Open Hierarchy' },
          { keys: 'Ctrl + 5', desc: 'Project', usage: 'Open Project window' },
          { keys: 'Ctrl + 9', desc: 'Console', usage: 'Open Console' },
        ]
      },
    ]
  },
  chatgpt: {
    name: 'ChatGPT',
    icon: 'fas fa-robot',
    categories: [
      {
        name: 'Chat Management',
        shortcuts: [
          { keys: 'Cmd/Ctrl + Shift + O', desc: 'New Chat', usage: 'Start new conversation' },
          { keys: 'Cmd/Ctrl + Shift + ;', desc: 'Toggle Sidebar', usage: 'Show/hide chat history sidebar' },
          { keys: 'Cmd/Ctrl + Shift + Backspace', desc: 'Delete Chat', usage: 'Delete current conversation' },
          { keys: 'Cmd/Ctrl + Shift + R', desc: 'Rename Chat', usage: 'Rename current conversation' },
          { keys: 'Cmd/Ctrl + Shift + C', desc: 'Copy Chat', usage: 'Copy conversation to clipboard' },
          { keys: 'Cmd/Ctrl + Shift + E', desc: 'Export Chat', usage: 'Export conversation to file' },
        ]
      },
      {
        name: 'Message Input',
        shortcuts: [
          { keys: 'Enter', desc: 'Send Message', usage: 'Send composed message' },
          { keys: 'Shift + Enter', desc: 'New Line', usage: 'Add new line in message' },
          { keys: 'Cmd/Ctrl + K', desc: 'Code Block', usage: 'Insert code block' },
          { keys: 'Up Arrow', desc: 'Edit Message', usage: 'Edit last sent message' },
          { keys: 'Esc', desc: 'Cancel Input', usage: 'Cancel current input' },
          { keys: 'Cmd/Ctrl + /', desc: 'Show Commands', usage: 'Display available commands' },
        ]
      },
      {
        name: 'Response Control',
        shortcuts: [
          { keys: 'Cmd/Ctrl + Shift + S', desc: 'Stop Response', usage: 'Stop ChatGPT response generation' },
          { keys: 'Cmd/Ctrl + R', desc: 'Regenerate', usage: 'Regenerate response' },
          { keys: 'Cmd/Ctrl + Shift + Up/Down', desc: 'Switch Response', usage: 'Switch between multiple responses' },
        ]
      },
      {
        name: 'Copy & Share',
        shortcuts: [
          { keys: 'Cmd/Ctrl + C', desc: 'Copy Code', usage: 'Copy code block content' },
          { keys: 'Cmd/Ctrl + Shift + L', desc: 'Copy Link', usage: 'Copy share link' },
          { keys: 'Cmd/Ctrl + Shift + P', desc: 'Share', usage: 'Open share settings' },
        ]
      },
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Cmd/Ctrl + F', desc: 'Search', usage: 'Search in conversation' },
          { keys: 'Cmd/Ctrl + G', desc: 'Find Next', usage: 'Go to next search result' },
          { keys: 'Cmd/Ctrl + Shift + G', desc: 'Find Previous', usage: 'Go to previous search result' },
          { keys: 'Cmd/Ctrl + Up/Down', desc: 'Navigate Chat', usage: 'Navigate up/down in chat history' },
          { keys: 'Home', desc: 'Chat Start', usage: 'Go to start of conversation' },
          { keys: 'End', desc: 'Chat End', usage: 'Go to end of conversation' },
        ]
      },
      {
        name: 'Settings & Other',
        shortcuts: [
          { keys: 'Cmd/Ctrl + ,', desc: 'Settings', usage: 'Open settings' },
          { keys: 'Cmd/Ctrl + Shift + ?', desc: 'Help', usage: 'Show help' },
          { keys: 'Cmd/Ctrl + Shift + M', desc: 'Select Model', usage: 'Select GPT-4, GPT-3.5 model' },
          { keys: 'Cmd/Ctrl + Shift + T', desc: 'Toggle Theme', usage: 'Switch light/dark theme' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'Role Assignment', desc: 'Set expert role', usage: 'Assign a specific role for more professional responses.' },
          { keys: 'Step-by-step', desc: 'Structured analysis', usage: 'Ask for step by step explanation for logical answers.' },
          { keys: 'Output Format', desc: 'Format specification', usage: 'Specify table, markdown, JSON or other formats.' },
          { keys: 'Few-shot', desc: 'Provide examples', usage: 'Give 1-3 examples for consistent pattern output.' },
          { keys: 'Constraints', desc: 'Set boundaries', usage: 'Add word limits or audience level constraints.' },
          { keys: 'Iterate', desc: 'Refine results', usage: 'Follow up with shorter, more professional, etc.' },
        ]
      },
    ]
  },
  cursor: {
    name: 'Cursor AI',
    icon: 'fas fa-wand-magic-sparkles',
    categories: [
      {
        name: 'AI Core Features',
        shortcuts: [
          { keys: 'Ctrl + K', desc: 'AI Inline Edit', usage: 'AI modifies selected code directly. Describe changes in natural language.' },
          { keys: 'Ctrl + L', desc: 'AI Chat', usage: 'Opens AI chat panel. Ask code questions, get explanations, or debug.' },
          { keys: 'Ctrl + I', desc: 'Open Composer', usage: 'Opens multi-file AI editing tool (Composer). Edit multiple files simultaneously.' },
          { keys: 'Ctrl + Shift + I', desc: 'Composer Fullscreen', usage: 'Opens Composer in fullscreen mode.' },
          { keys: 'Ctrl + Shift + L', desc: 'Add Selection to Chat', usage: 'Adds selected code to AI chat context.' },
          { keys: 'Ctrl + Shift + K', desc: 'Terminal AI (Cmd K)', usage: 'Invoke AI command generation in terminal.' },
          { keys: 'Tab', desc: 'Accept AI Completion', usage: 'Accept AI-suggested code autocomplete.' },
          { keys: 'Esc', desc: 'Dismiss AI Suggestion', usage: 'Dismiss AI autocomplete suggestion.' },
          { keys: 'Ctrl + Shift + Enter', desc: 'Accept AI Edit', usage: 'Accept AI-suggested inline edit.' },
          { keys: 'Ctrl + Backspace', desc: 'Reject AI Edit', usage: 'Reject AI-suggested inline edit.' },
          { keys: '@', desc: 'Context Mention', usage: 'Use @filename, @folder in chat to add context.' },
        ]
      },
      {
        name: 'Editing & Navigation',
        shortcuts: [
          { keys: 'Ctrl + P', desc: 'Quick Open File', usage: 'Quickly search and open files by name.' },
          { keys: 'Ctrl + Shift + P', desc: 'Command Palette', usage: 'Search and execute any command.' },
          { keys: 'Ctrl + /', desc: 'Toggle Comment', usage: 'Comment or uncomment selected lines.' },
          { keys: 'Ctrl + D', desc: 'Select Next Match', usage: 'Multi-select same word. Press multiple times to add selections.' },
          { keys: 'Alt + Up/Down', desc: 'Move Line', usage: 'Move current line up or down.' },
          { keys: 'Alt + Shift + Up/Down', desc: 'Duplicate Line', usage: 'Duplicate current line up or down.' },
          { keys: 'Ctrl + Shift + K', desc: 'Delete Line', usage: 'Delete current line.' },
          { keys: 'Ctrl + G', desc: 'Go to Line', usage: 'Jump to a specific line number.' },
          { keys: 'Ctrl + Shift + \\', desc: 'Go to Matching Bracket', usage: 'Move cursor to matching bracket.' },
          { keys: 'F12', desc: 'Go to Definition', usage: 'Navigate to function or variable definition.' },
          { keys: 'Alt + F12', desc: 'Peek Definition', usage: 'Preview definition in inline popup.' },
          { keys: 'Ctrl + Shift + F', desc: 'Search All Files', usage: 'Search text across entire project.' },
          { keys: 'Ctrl + H', desc: 'Find and Replace', usage: 'Find and replace text in current file.' },
          { keys: 'Ctrl + \\', desc: 'Split Editor', usage: 'Split editor view side by side.' },
          { keys: 'Ctrl + `', desc: 'Toggle Terminal', usage: 'Open or close integrated terminal.' },
          { keys: 'Ctrl + B', desc: 'Toggle Sidebar', usage: 'Show or hide left sidebar.' },
          { keys: 'Ctrl + Shift + E', desc: 'Open Explorer', usage: 'Open file explorer panel.' },
          { keys: 'Ctrl + Shift + X', desc: 'Extensions', usage: 'Open extensions panel.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: '@filename', desc: 'Reference file', usage: 'Reference specific files in questions.' },
          { keys: '@codebase', desc: 'Codebase context', usage: 'Reference entire project context.' },
          { keys: '@web', desc: 'Web search', usage: 'Search web for latest information.' },
          { keys: '@docs', desc: 'Documentation', usage: 'Reference official docs for code generation.' },
        ]
      },
    ]
  },
  jupyter: {
    name: 'Jupyter Notebook',
    icon: 'fas fa-book',
    categories: [
      {
        name: 'Cell Execution',
        shortcuts: [
          { keys: 'Shift + Enter', desc: 'Run & Select Next', usage: 'Run cell and select next' },
          { keys: 'Ctrl + Enter', desc: 'Run Cell', usage: 'Run current cell' },
          { keys: 'Alt + Enter', desc: 'Run & Insert', usage: 'Run cell and insert new cell below' },
        ]
      },
      {
        name: 'Cell Management',
        shortcuts: [
          { keys: 'A', desc: 'Insert Above', usage: 'Insert new cell above current' },
          { keys: 'B', desc: 'Insert Below', usage: 'Insert new cell below current' },
          { keys: 'DD', desc: 'Delete Cell', usage: 'Delete current cell' },
          { keys: 'M', desc: 'Markdown Cell', usage: 'Convert to markdown cell' },
          { keys: 'Y', desc: 'Code Cell', usage: 'Convert to code cell' },
          { keys: 'C', desc: 'Copy Cell', usage: 'Copy current cell' },
          { keys: 'X', desc: 'Cut Cell', usage: 'Cut current cell' },
          { keys: 'V', desc: 'Paste Cell', usage: 'Paste copied cell' },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Enter', desc: 'Edit Mode', usage: 'Enter edit mode for cell' },
          { keys: 'Esc', desc: 'Command Mode', usage: 'Enter command mode' },
          { keys: 'Ctrl + /', desc: 'Toggle Comment', usage: 'Comment/uncomment selected lines' },
          { keys: 'Tab', desc: 'Autocomplete', usage: 'Show code autocomplete' },
        ]
      },
    ]
  },
  autocad: {
    name: 'AutoCAD',
    icon: 'fas fa-drafting-compass',
    categories: [
      {
        name: 'Drawing Tools',
        shortcuts: [
          { keys: 'L', desc: 'Line', usage: 'Draw straight line' },
          { keys: 'C', desc: 'Circle', usage: 'Draw circle' },
          { keys: 'A', desc: 'Arc', usage: 'Draw arc' },
          { keys: 'REC', desc: 'Rectangle', usage: 'Draw rectangle' },
          { keys: 'POL', desc: 'Polygon', usage: 'Draw polygon' },
          { keys: 'EL', desc: 'Ellipse', usage: 'Draw ellipse' },
          { keys: 'PL', desc: 'Polyline', usage: 'Draw polyline as single object' },
          { keys: 'SPL', desc: 'Spline', usage: 'Draw smooth curve' },
          { keys: 'XL', desc: 'Construction Line', usage: 'Draw infinite construction line' },
          { keys: 'ML', desc: 'Multiline', usage: 'Draw multiple parallel lines' },
          { keys: 'H', desc: 'Hatch', usage: 'Fill closed area with pattern or color' },
          { keys: 'B', desc: 'Block', usage: 'Define block' },
          { keys: 'I', desc: 'Insert', usage: 'Insert block' },
          { keys: 'T', desc: 'Single Line Text', usage: 'Insert single line text' },
          { keys: 'MT', desc: 'Multiline Text', usage: 'Insert multiline text' },
        ]
      },
      {
        name: 'Modify Tools',
        shortcuts: [
          { keys: 'E', desc: 'Erase', usage: 'Delete selected objects' },
          { keys: 'M', desc: 'Move', usage: 'Move objects' },
          { keys: 'CO', desc: 'Copy', usage: 'Copy objects' },
          { keys: 'RO', desc: 'Rotate', usage: 'Rotate objects' },
          { keys: 'SC', desc: 'Scale', usage: 'Scale object size' },
          { keys: 'MI', desc: 'Mirror', usage: 'Mirror copy objects' },
          { keys: 'AR', desc: 'Array', usage: 'Array objects in pattern' },
          { keys: 'O', desc: 'Offset', usage: 'Copy object at specified distance' },
          { keys: 'TR', desc: 'Trim', usage: 'Trim object to another' },
          { keys: 'EX', desc: 'Extend', usage: 'Extend object to another' },
          { keys: 'CHA', desc: 'Chamfer', usage: 'Connect two lines with angled corner' },
          { keys: 'F', desc: 'Fillet', usage: 'Connect two lines with rounded corner' },
          { keys: 'BR', desc: 'Break', usage: 'Break object' },
          { keys: 'J', desc: 'Join', usage: 'Join multiple objects into one' },
          { keys: 'PE', desc: 'Polyline Edit', usage: 'Edit polyline' },
          { keys: 'X', desc: 'Explode', usage: 'Break block/polyline into individual objects' },
          { keys: 'S', desc: 'Stretch', usage: 'Stretch objects' },
        ]
      },
      {
        name: 'Layers & Properties',
        shortcuts: [
          { keys: 'LA', desc: 'Layer Properties', usage: 'Open layer properties manager' },
          { keys: 'LT', desc: 'Linetype', usage: 'Set linetype' },
          { keys: 'LW', desc: 'Lineweight', usage: 'Set line thickness' },
          { keys: 'COL', desc: 'Color', usage: 'Change object color' },
          { keys: 'MA', desc: 'Match Properties', usage: 'Apply properties from one object to another' },
          { keys: 'PR', desc: 'Properties', usage: 'View and modify object properties' },
          { keys: 'CH', desc: 'Change Properties', usage: 'Change object properties' },
        ]
      },
      {
        name: 'View & Navigation',
        shortcuts: [
          { keys: 'Z', desc: 'Zoom', usage: 'Zoom in/out' },
          { keys: 'Z + E', desc: 'Zoom Extents', usage: 'Zoom to show all objects' },
          { keys: 'Z + W', desc: 'Zoom Window', usage: 'Zoom to specified area' },
          { keys: 'Z + P', desc: 'Zoom Previous', usage: 'Return to previous view' },
          { keys: 'P', desc: 'Pan', usage: 'Move view. Same as mouse wheel press' },
          { keys: 'RE', desc: 'Regen', usage: 'Regenerate display' },
          { keys: 'REA', desc: 'Regen All', usage: 'Regenerate all viewports' },
          { keys: '3DO', desc: '3D Orbit', usage: 'Rotate 3D view' },
          { keys: 'V', desc: 'View', usage: 'Go to saved view' },
        ]
      },
      {
        name: 'Dimensions & Annotations',
        shortcuts: [
          { keys: 'DLI', desc: 'Linear Dimension', usage: 'Create linear dimension' },
          { keys: 'DAL', desc: 'Aligned Dimension', usage: 'Create aligned dimension' },
          { keys: 'DRA', desc: 'Radius Dimension', usage: 'Create radius dimension for circle/arc' },
          { keys: 'DDI', desc: 'Diameter Dimension', usage: 'Create diameter dimension' },
          { keys: 'DAN', desc: 'Angular Dimension', usage: 'Create angular dimension' },
          { keys: 'DBA', desc: 'Baseline Dimension', usage: 'Create baseline dimension from first extension line' },
          { keys: 'LE', desc: 'Leader', usage: 'Create leader line with text' },
          { keys: 'MLE', desc: 'Multileader', usage: 'Create multiple leader lines' },
        ]
      },
      {
        name: 'Selection & Snap',
        shortcuts: [
          { keys: 'Ctrl + A', desc: 'Select All', usage: 'Select all objects' },
          { keys: 'Ctrl + Shift + A', desc: 'Selection Cycling', usage: 'Cycle through overlapping objects' },
          { keys: 'F3', desc: 'Object Snap', usage: 'Toggle object snap on/off' },
          { keys: 'F8', desc: 'Ortho Mode', usage: 'Constrain to horizontal/vertical lines' },
          { keys: 'F9', desc: 'Grid', usage: 'Toggle grid display' },
          { keys: 'F10', desc: 'Polar Tracking', usage: 'Toggle polar tracking' },
          { keys: 'F11', desc: 'Object Snap Tracking', usage: 'Toggle object snap tracking' },
          { keys: 'F12', desc: 'Dynamic Input', usage: 'Toggle dynamic input mode' },
        ]
      },
      {
        name: 'File Operations',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New Drawing', usage: 'Create new drawing' },
          { keys: 'Ctrl + O', desc: 'Open', usage: 'Open existing drawing' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save current drawing' },
          { keys: 'Ctrl + Shift + S', desc: 'Save As', usage: 'Save drawing with new name' },
          { keys: 'QSAVE', desc: 'Quick Save', usage: 'Save drawing quickly' },
          { keys: 'SAVEAS', desc: 'Save As', usage: 'Save drawing with new name' },
          { keys: 'OPEN', desc: 'Open', usage: 'Open existing drawing' },
          { keys: 'NEW', desc: 'New', usage: 'Create new drawing' },
          { keys: 'PLOT', desc: 'Plot', usage: 'Print/plot drawing' },
          { keys: 'EXIT', desc: 'Exit', usage: 'Exit AutoCAD' },
        ]
      },
    ]
  },
  davinci: {
    name: 'DaVinci Resolve',
    icon: 'fas fa-video',
    categories: [
      {
        name: 'Playback',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Pause', usage: 'Play or pause timeline' },
          { keys: 'J', desc: 'Reverse', usage: 'Play in reverse' },
          { keys: 'K', desc: 'Stop', usage: 'Stop playback' },
          { keys: 'L', desc: 'Forward', usage: 'Play forward' },
          { keys: 'Left/Right', desc: 'Frame Step', usage: 'Move one frame forward/backward' },
          { keys: 'Shift + Left/Right', desc: '10 Frame Step', usage: 'Move 10 frames' },
          { keys: 'Up/Down', desc: 'Clip Navigation', usage: 'Move to previous/next clip' },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'I', desc: 'Mark In', usage: 'Set In point' },
          { keys: 'O', desc: 'Mark Out', usage: 'Set Out point' },
          { keys: 'X', desc: 'Clear In/Out', usage: 'Clear In/Out points' },
          { keys: 'M', desc: 'Marker', usage: 'Add marker' },
          { keys: 'Ctrl + B', desc: 'Blade', usage: 'Cut clip at playhead' },
          { keys: 'Ctrl + \\', desc: 'Blade All Tracks', usage: 'Cut all tracks' },
          { keys: 'F9', desc: 'Insert', usage: 'Insert clip to timeline' },
          { keys: 'F10', desc: 'Overwrite', usage: 'Overwrite clip' },
          { keys: 'F11', desc: 'Replace', usage: 'Replace clip keeping position' },
          { keys: 'F12', desc: 'Fit to Fill', usage: 'Fit clip to fill' },
        ]
      },
      {
        name: 'Timeline',
        shortcuts: [
          { keys: 'Ctrl + +/-', desc: 'Zoom', usage: 'Zoom timeline in/out' },
          { keys: 'Shift + Z', desc: 'Fit Timeline', usage: 'Fit timeline to screen' },
          { keys: 'A', desc: 'Selection Mode', usage: 'Activate selection mode' },
          { keys: 'T', desc: 'Trim Mode', usage: 'Activate trim mode' },
          { keys: 'B', desc: 'Blade Mode', usage: 'Activate blade mode' },
          { keys: 'Y', desc: 'Dynamic Trim', usage: 'Activate dynamic trim mode' },
        ]
      },
      {
        name: 'Pages',
        shortcuts: [
          { keys: 'Shift + 1', desc: 'Media', usage: 'Go to Media page' },
          { keys: 'Shift + 2', desc: 'Edit', usage: 'Go to Edit page' },
          { keys: 'Shift + 3', desc: 'Fusion', usage: 'Go to Fusion page' },
          { keys: 'Shift + 4', desc: 'Color', usage: 'Go to Color page' },
          { keys: 'Shift + 5', desc: 'Fairlight', usage: 'Go to Fairlight page' },
          { keys: 'Shift + 6', desc: 'Deliver', usage: 'Go to Deliver page' },
        ]
      },
    ]
  },
  spyder: {
    name: 'Spyder IDE',
    icon: 'fas fa-spider',
    categories: [
      {
        name: 'File & Editing',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New File', usage: 'Create new Python file.' },
          { keys: 'Ctrl + O', desc: 'Open File', usage: 'Open existing file.' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save current file.' },
          { keys: 'Ctrl + Shift + S', desc: 'Save As', usage: 'Save file with new name.' },
          { keys: 'Ctrl + W', desc: 'Close File', usage: 'Close current file.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Ctrl + Y', desc: 'Redo', usage: 'Redo undone action.' },
          { keys: 'Ctrl + X', desc: 'Cut', usage: 'Cut selected text.' },
          { keys: 'Ctrl + C', desc: 'Copy', usage: 'Copy selected text.' },
          { keys: 'Ctrl + V', desc: 'Paste', usage: 'Paste clipboard content.' },
          { keys: 'Ctrl + A', desc: 'Select All', usage: 'Select all text.' },
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Open find dialog.' },
          { keys: 'Ctrl + H', desc: 'Replace', usage: 'Open find and replace dialog.' },
          { keys: 'Ctrl + G', desc: 'Go to Line', usage: 'Jump to specific line number.' },
        ]
      },
      {
        name: 'Code Execution',
        shortcuts: [
          { keys: 'F5', desc: 'Run File', usage: 'Run current file.' },
          { keys: 'F9', desc: 'Run Selection', usage: 'Run selected code in console.' },
          { keys: 'Ctrl + Enter', desc: 'Run Cell', usage: 'Run current cell.' },
          { keys: 'Shift + Enter', desc: 'Run Cell & Advance', usage: 'Run cell and move to next.' },
          { keys: 'Alt + Enter', desc: 'Run Cell & Insert', usage: 'Run cell and insert new cell below.' },
          { keys: 'Ctrl + Shift + F5', desc: 'Debug File', usage: 'Run file in debug mode.' },
          { keys: 'Ctrl + F5', desc: 'Run Clean', usage: 'Remove console variables and run file.' },
        ]
      },
      {
        name: 'Debugging',
        shortcuts: [
          { keys: 'F12', desc: 'Toggle Breakpoint', usage: 'Set or remove breakpoint on current line.' },
          { keys: 'Ctrl + F12', desc: 'Conditional Breakpoint', usage: 'Set conditional breakpoint.' },
          { keys: 'Ctrl + Shift + F12', desc: 'Clear All Breakpoints', usage: 'Remove all breakpoints.' },
          { keys: 'Ctrl + F10', desc: 'Start Debug', usage: 'Start debugging.' },
          { keys: 'Ctrl + Shift + F10', desc: 'Stop Debug', usage: 'Stop debugging.' },
          { keys: 'Ctrl + F11', desc: 'Step Over', usage: 'Execute code line by line (Step Over).' },
          { keys: 'Ctrl + Shift + F11', desc: 'Step Into', usage: 'Step into function (Step Into).' },
          { keys: 'Ctrl + F12', desc: 'Continue', usage: 'Continue execution to next breakpoint.' },
        ]
      },
      {
        name: 'Code Editing',
        shortcuts: [
          { keys: 'Ctrl + /', desc: 'Toggle Comment', usage: 'Comment or uncomment selected lines.' },
          { keys: 'Tab', desc: 'Indent', usage: 'Indent selected lines.' },
          { keys: 'Shift + Tab', desc: 'Unindent', usage: 'Unindent selected lines.' },
          { keys: 'Ctrl + ]', desc: 'Indent', usage: 'Indent code.' },
          { keys: 'Ctrl + [', desc: 'Unindent', usage: 'Unindent code.' },
          { keys: 'Ctrl + D', desc: 'Delete Line', usage: 'Delete current line.' },
          { keys: 'Ctrl + Shift + D', desc: 'Duplicate Line', usage: 'Duplicate current line.' },
          { keys: 'Ctrl + L', desc: 'Select Line', usage: 'Select entire current line.' },
          { keys: 'Ctrl + Shift + Up/Down', desc: 'Move Line', usage: 'Move current line up/down.' },
          { keys: 'Ctrl + Space', desc: 'Auto-complete', usage: 'Open code completion.' },
          { keys: 'Ctrl + I', desc: 'Inspect Object', usage: 'Show object information.' },
        ]
      },
      {
        name: 'Panels & Views',
        shortcuts: [
          { keys: 'Ctrl + Shift + E', desc: 'Editor', usage: 'Focus editor panel.' },
          { keys: 'Ctrl + Shift + I', desc: 'IPython Console', usage: 'Focus IPython console.' },
          { keys: 'Ctrl + Shift + V', desc: 'Variable Explorer', usage: 'Open variable explorer.' },
          { keys: 'Ctrl + Shift + F', desc: 'File Explorer', usage: 'Open file explorer.' },
          { keys: 'Ctrl + Shift + H', desc: 'Help', usage: 'Open help panel.' },
          { keys: 'Ctrl + Shift + P', desc: 'Plots', usage: 'Open plots panel.' },
          { keys: 'Ctrl + Shift + C', desc: 'History', usage: 'Open command history.' },
          { keys: 'Ctrl + Shift + X', desc: 'Close All Files', usage: 'Close all open files.' },
          { keys: 'Ctrl + Tab', desc: 'Next Tab', usage: 'Switch to next editor tab.' },
          { keys: 'Ctrl + Shift + Tab', desc: 'Previous Tab', usage: 'Switch to previous editor tab.' },
          { keys: 'Ctrl + F4', desc: 'Close Tab', usage: 'Close current tab.' },
          { keys: 'F11', desc: 'Full Screen', usage: 'Toggle fullscreen mode.' },
        ]
      },
      {
        name: 'Search & Navigation',
        shortcuts: [
          { keys: 'Ctrl + P', desc: 'File Search', usage: 'Search for files in project.' },
          { keys: 'Ctrl + Shift + P', desc: 'Symbol Search', usage: 'Search for symbols in current file.' },
          { keys: 'Ctrl + G', desc: 'Go to Line', usage: 'Jump to specific line.' },
          { keys: 'Ctrl + Alt + Left', desc: 'Go Back', usage: 'Navigate to previous location.' },
          { keys: 'Ctrl + Alt + Right', desc: 'Go Forward', usage: 'Navigate to next location.' },
          { keys: 'F3', desc: 'Find Next', usage: 'Go to next search result.' },
          { keys: 'Shift + F3', desc: 'Find Previous', usage: 'Go to previous search result.' },
        ]
      },
    ]
  },
  anaconda: {
    name: 'Anaconda Navigator',
    icon: 'fas fa-database',
    categories: [
      {
        name: 'Environment Management',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New Environment', usage: 'Create new Conda environment.' },
          { keys: 'Ctrl + I', desc: 'Install Package', usage: 'Install selected package.' },
          { keys: 'Ctrl + U', desc: 'Update Package', usage: 'Update package.' },
          { keys: 'Ctrl + R', desc: 'Remove Package', usage: 'Remove selected package.' },
          { keys: 'Ctrl + E', desc: 'Export Environment', usage: 'Export environment to YAML file.' },
          { keys: 'Ctrl + Shift + I', desc: 'Import Environment', usage: 'Import environment from YAML file.' },
        ]
      },
      {
        name: 'Applications',
        shortcuts: [
          { keys: 'Ctrl + L', desc: 'Launch Jupyter Lab', usage: 'Launch Jupyter Lab.' },
          { keys: 'Ctrl + J', desc: 'Launch Jupyter Notebook', usage: 'Launch Jupyter Notebook.' },
          { keys: 'Ctrl + S', desc: 'Launch Spyder', usage: 'Launch Spyder IDE.' },
          { keys: 'Ctrl + V', desc: 'Launch VS Code', usage: 'Launch Visual Studio Code.' },
        ]
      },
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Ctrl + H', desc: 'Home', usage: 'Go to Home tab.' },
          { keys: 'Ctrl + Shift + E', desc: 'Environments', usage: 'Go to Environments tab.' },
          { keys: 'Ctrl + Shift + L', desc: 'Learning', usage: 'Go to Learning tab.' },
          { keys: 'Ctrl + Shift + C', desc: 'Community', usage: 'Go to Community tab.' },
          { keys: 'Ctrl + F', desc: 'Search', usage: 'Search for packages or environments.' },
          { keys: 'Ctrl + R', desc: 'Refresh', usage: 'Refresh current view.' },
        ]
      },
      {
        name: 'General',
        shortcuts: [
          { keys: 'Ctrl + Q', desc: 'Quit', usage: 'Quit Anaconda Navigator.' },
          { keys: 'F1', desc: 'Help', usage: 'Open help.' },
          { keys: 'Ctrl + ,', desc: 'Settings', usage: 'Open settings.' },
          { keys: 'Ctrl + Shift + R', desc: 'Restart', usage: 'Restart Navigator.' },
        ]
      },
    ]
  },
  powerpoint: {
    name: 'PowerPoint',
    icon: 'fas fa-file-powerpoint',
    categories: [
      {
        name: 'File & Presentation',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New Presentation', usage: 'Create a new blank presentation.' },
          { keys: 'Ctrl + O', desc: 'Open', usage: 'Open an existing presentation file.' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save the current presentation.' },
          { keys: 'Ctrl + Shift + S', desc: 'Save As', usage: 'Save with a new name or format.' },
          { keys: 'Ctrl + P', desc: 'Print', usage: 'Open the print dialog.' },
          { keys: 'F5', desc: 'Start Slideshow from Beginning', usage: 'Start presenting from the first slide.' },
          { keys: 'Shift + F5', desc: 'Start from Current Slide', usage: 'Start presenting from the current slide.' },
          { keys: 'Esc', desc: 'End Slideshow', usage: 'Exit presentation mode.' },
          { keys: 'Ctrl + W', desc: 'Close', usage: 'Close the current presentation.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last action.' },
          { keys: 'Ctrl + Y', desc: 'Redo', usage: 'Redo the last undone action.' },
          { keys: 'F12', desc: 'Save As Dialog', usage: 'Open Save As dialog directly.' },
        ]
      },
      {
        name: 'Slide Editing',
        shortcuts: [
          { keys: 'Ctrl + M', desc: 'New Slide', usage: 'Insert a new slide after the current one.' },
          { keys: 'Ctrl + D', desc: 'Duplicate Slide', usage: 'Duplicate the selected slide.' },
          { keys: 'Delete', desc: 'Delete Slide', usage: 'Delete the selected slide.' },
          { keys: 'Ctrl + C', desc: 'Copy', usage: 'Copy the selected object or text.' },
          { keys: 'Ctrl + X', desc: 'Cut', usage: 'Cut the selected object or text.' },
          { keys: 'Ctrl + V', desc: 'Paste', usage: 'Paste the copied content.' },
          { keys: 'Ctrl + A', desc: 'Select All', usage: 'Select all objects on the current slide.' },
          { keys: 'Ctrl + G', desc: 'Group', usage: 'Group the selected objects.' },
          { keys: 'Ctrl + Shift + G', desc: 'Ungroup', usage: 'Ungroup grouped objects.' },
          { keys: 'Tab', desc: 'Next Object', usage: 'Select the next object on the slide.' },
          { keys: 'Shift + Tab', desc: 'Previous Object', usage: 'Select the previous object on the slide.' },
          { keys: 'Ctrl + Enter', desc: 'Next Placeholder', usage: 'Move to the next text placeholder.' },
        ]
      },
      {
        name: 'Text Formatting',
        shortcuts: [
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Apply or remove bold formatting.' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Apply or remove italic formatting.' },
          { keys: 'Ctrl + U', desc: 'Underline', usage: 'Apply or remove underline.' },
          { keys: 'Ctrl + Shift + >', desc: 'Increase Font Size', usage: 'Increase the font size.' },
          { keys: 'Ctrl + Shift + <', desc: 'Decrease Font Size', usage: 'Decrease the font size.' },
          { keys: 'Ctrl + E', desc: 'Center Align', usage: 'Center-align the text.' },
          { keys: 'Ctrl + L', desc: 'Left Align', usage: 'Left-align the text.' },
          { keys: 'Ctrl + R', desc: 'Right Align', usage: 'Right-align the text.' },
          { keys: 'Ctrl + J', desc: 'Justify', usage: 'Justify-align the text.' },
          { keys: 'Ctrl + Space', desc: 'Clear Formatting', usage: 'Remove all text formatting.' },
          { keys: 'Ctrl + =', desc: 'Subscript', usage: 'Apply subscript formatting.' },
          { keys: 'Ctrl + Shift + =', desc: 'Superscript', usage: 'Apply superscript formatting.' },
        ]
      },
      {
        name: 'Navigation & View',
        shortcuts: [
          { keys: 'Page Up', desc: 'Previous Slide', usage: 'Go to the previous slide.' },
          { keys: 'Page Down', desc: 'Next Slide', usage: 'Go to the next slide.' },
          { keys: 'Ctrl + Home', desc: 'First Slide', usage: 'Go to the first slide.' },
          { keys: 'Ctrl + End', desc: 'Last Slide', usage: 'Go to the last slide.' },
          { keys: 'Alt + F9', desc: 'Toggle Guides', usage: 'Show or hide slide guides.' },
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Search for text.' },
          { keys: 'Ctrl + H', desc: 'Find & Replace', usage: 'Find and replace text.' },
        ]
      },
      {
        name: 'During Slideshow',
        shortcuts: [
          { keys: 'N or Right', desc: 'Next Slide', usage: 'Advance to the next slide during presentation.' },
          { keys: 'P or Left', desc: 'Previous Slide', usage: 'Go back to the previous slide.' },
          { keys: 'B', desc: 'Black Screen', usage: 'Toggle a black screen to pause attention.' },
          { keys: 'W', desc: 'White Screen', usage: 'Toggle a white screen.' },
          { keys: 'Ctrl + P', desc: 'Pen Tool', usage: 'Activate pen tool to draw on slides.' },
          { keys: 'E', desc: 'Erase Drawings', usage: 'Erase pen annotations.' },
          { keys: 'S', desc: 'Stop/Resume Auto Advance', usage: 'Pause or resume automatic slide advance.' },
        ]
      },
    ]
  },
  googlesheets: {
    name: 'Google Sheets',
    icon: 'fas fa-table',
    categories: [
      {
        name: 'Basic Editing',
        shortcuts: [
          { keys: 'Ctrl + C', desc: 'Copy', usage: 'Copy the selected cells.' },
          { keys: 'Ctrl + X', desc: 'Cut', usage: 'Cut the selected cells.' },
          { keys: 'Ctrl + V', desc: 'Paste', usage: 'Paste the copied content.' },
          { keys: 'Ctrl + Shift + V', desc: 'Paste Values Only', usage: 'Paste values without formatting.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last action.' },
          { keys: 'Ctrl + Y', desc: 'Redo', usage: 'Redo the last undone action.' },
          { keys: 'Ctrl + A', desc: 'Select All', usage: 'Select the entire sheet.' },
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Search cell contents.' },
          { keys: 'Ctrl + H', desc: 'Find & Replace', usage: 'Find and replace content.' },
          { keys: 'Delete', desc: 'Delete Content', usage: 'Delete the content of selected cells.' },
          { keys: 'F2', desc: 'Edit Cell', usage: 'Enter edit mode for the selected cell.' },
          { keys: 'Escape', desc: 'Cancel Edit', usage: 'Cancel the current edit.' },
        ]
      },
      {
        name: 'Cell Navigation',
        shortcuts: [
          { keys: 'Ctrl + Home', desc: 'Go to A1', usage: 'Jump to the first cell of the spreadsheet.' },
          { keys: 'Ctrl + End', desc: 'Go to Last Cell', usage: 'Jump to the last cell with data.' },
          { keys: 'Ctrl + Right', desc: 'Right Edge', usage: 'Jump to the right edge of the data range.' },
          { keys: 'Ctrl + Left', desc: 'Left Edge', usage: 'Jump to the left edge of the data range.' },
          { keys: 'Ctrl + Down', desc: 'Bottom Edge', usage: 'Jump to the bottom edge of the data range.' },
          { keys: 'Ctrl + Up', desc: 'Top Edge', usage: 'Jump to the top edge of the data range.' },
          { keys: 'Ctrl + G', desc: 'Go to Range', usage: 'Navigate to a specific cell address or range.' },
          { keys: 'Tab', desc: 'Move Right', usage: 'Move to the cell on the right.' },
          { keys: 'Shift + Tab', desc: 'Move Left', usage: 'Move to the cell on the left.' },
          { keys: 'Enter', desc: 'Move Down', usage: 'Move to the cell below after input.' },
        ]
      },
      {
        name: 'Rows & Columns',
        shortcuts: [
          { keys: 'Ctrl + Shift + +', desc: 'Insert Row/Column', usage: 'Insert a row or column at the selected position.' },
          { keys: 'Ctrl + -', desc: 'Delete Row/Column', usage: 'Delete the selected row or column.' },
          { keys: 'Ctrl + Space', desc: 'Select Column', usage: 'Select the entire current column.' },
          { keys: 'Shift + Space', desc: 'Select Row', usage: 'Select the entire current row.' },
          { keys: 'Ctrl + Shift + 9', desc: 'Hide Rows', usage: 'Hide the selected rows.' },
          { keys: 'Ctrl + Shift + 0', desc: 'Hide Columns', usage: 'Hide the selected columns.' },
        ]
      },
      {
        name: 'Formatting',
        shortcuts: [
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Apply or remove bold formatting.' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Apply or remove italic formatting.' },
          { keys: 'Ctrl + U', desc: 'Underline', usage: 'Apply or remove underline.' },
          { keys: 'Alt + Shift + 5', desc: 'Strikethrough', usage: 'Apply strikethrough to selected text.' },
          { keys: 'Ctrl + Shift + 1', desc: 'Number Format', usage: 'Apply number format with 2 decimal places.' },
          { keys: 'Ctrl + Shift + 3', desc: 'Date Format', usage: 'Apply date format.' },
          { keys: 'Ctrl + Shift + 4', desc: 'Currency Format', usage: 'Apply currency format.' },
          { keys: 'Ctrl + Shift + 5', desc: 'Percent Format', usage: 'Apply percentage format.' },
          { keys: 'Ctrl + D', desc: 'Fill Down', usage: 'Copy the content of the top cell downward.' },
          { keys: 'Ctrl + R', desc: 'Fill Right', usage: 'Copy the content of the left cell rightward.' },
          { keys: 'Ctrl + E', desc: 'Smart Fill', usage: 'Auto-fill based on detected patterns.' },
        ]
      },
      {
        name: 'Formulas',
        shortcuts: [
          { keys: 'F4', desc: 'Toggle Absolute/Relative Reference', usage: 'Cycle through $A$1 → A$1 → $A1 → A1.' },
          { keys: 'Ctrl + `', desc: 'Show Formulas', usage: 'Toggle between showing values and formulas.' },
          { keys: 'Ctrl + ;', desc: 'Insert Today\'s Date', usage: 'Insert the current date into the cell.' },
          { keys: 'Ctrl + Shift + :', desc: 'Insert Current Time', usage: 'Insert the current time into the cell.' },
          { keys: 'Ctrl + Shift + Enter', desc: 'Array Formula', usage: 'Enter as an array formula.' },
        ]
      },
    ]
  },
  zoom: {
    name: 'Zoom',
    icon: 'fas fa-video',
    categories: [
      {
        name: 'Audio & Video',
        shortcuts: [
          { keys: 'Alt + A', desc: 'Mute/Unmute Microphone', usage: 'Toggle your microphone on or off.' },
          { keys: 'Alt + V', desc: 'Start/Stop Camera', usage: 'Toggle your camera on or off.' },
          { keys: 'Space (hold)', desc: 'Push to Talk', usage: 'Temporarily unmute while holding Spacebar.' },
          { keys: 'Alt + M', desc: 'Mute All', usage: 'Host mutes all participants.' },
        ]
      },
      {
        name: 'Meeting Controls',
        shortcuts: [
          { keys: 'Alt + S', desc: 'Start/Stop Screen Share', usage: 'Start or stop sharing your screen.' },
          { keys: 'Alt + T', desc: 'Pause Screen Share', usage: 'Pause or resume screen sharing.' },
          { keys: 'Alt + F', desc: 'Full Screen', usage: 'Enter or exit full screen mode.' },
          { keys: 'Alt + H', desc: 'Toggle Chat', usage: 'Open or close the chat panel.' },
          { keys: 'Alt + U', desc: 'Participants List', usage: 'Show or hide the participants panel.' },
          { keys: 'Alt + Y', desc: 'Raise/Lower Hand', usage: 'Raise or lower your hand.' },
          { keys: 'Alt + I', desc: 'Invite', usage: 'Open the invite dialog.' },
          { keys: 'Alt + R', desc: 'Start/Stop Recording', usage: 'Start or stop recording the meeting.' },
          { keys: 'Alt + Q', desc: 'Leave Meeting', usage: 'Leave or end the meeting.' },
        ]
      },
      {
        name: 'View',
        shortcuts: [
          { keys: 'Alt + W', desc: 'Toggle Speaker/Gallery View', usage: 'Switch between speaker and gallery view.' },
          { keys: 'Alt + N', desc: 'Switch Camera', usage: 'Switch to another camera device.' },
        ]
      },
    ]
  },
  canva: {
    name: 'Canva',
    icon: 'fas fa-paint-brush',
    categories: [
      {
        name: 'Basic Editing',
        shortcuts: [
          { keys: 'Ctrl + C', desc: 'Copy', usage: 'Copy the selected element.' },
          { keys: 'Ctrl + V', desc: 'Paste', usage: 'Paste the copied element.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate the selected element.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last action.' },
          { keys: 'Ctrl + Shift + Z', desc: 'Redo', usage: 'Redo the last undone action.' },
          { keys: 'Ctrl + A', desc: 'Select All', usage: 'Select all elements on the current page.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete the selected element.' },
          { keys: 'Ctrl + G', desc: 'Group', usage: 'Group the selected elements.' },
          { keys: 'Ctrl + Shift + G', desc: 'Ungroup', usage: 'Ungroup grouped elements.' },
        ]
      },
      {
        name: 'Text',
        shortcuts: [
          { keys: 'T', desc: 'Add Text', usage: 'Add a text box.' },
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Apply or remove bold formatting.' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Apply or remove italic formatting.' },
          { keys: 'Ctrl + U', desc: 'Underline', usage: 'Apply or remove underline.' },
          { keys: 'Ctrl + E', desc: 'Center Align', usage: 'Center-align the text.' },
          { keys: 'Ctrl + L', desc: 'Left Align', usage: 'Left-align the text.' },
          { keys: 'Ctrl + R', desc: 'Right Align', usage: 'Right-align the text.' },
          { keys: 'Ctrl + Shift + .', desc: 'Increase Font Size', usage: 'Increase font size by 1pt.' },
          { keys: 'Ctrl + Shift + ,', desc: 'Decrease Font Size', usage: 'Decrease font size by 1pt.' },
        ]
      },
      {
        name: 'Elements & Layers',
        shortcuts: [
          { keys: 'Ctrl + ]', desc: 'Bring Forward', usage: 'Move the selected element one layer forward.' },
          { keys: 'Ctrl + [', desc: 'Send Backward', usage: 'Move the selected element one layer backward.' },
          { keys: 'Ctrl + Shift + ]', desc: 'Bring to Front', usage: 'Move the selected element to the top layer.' },
          { keys: 'Ctrl + Shift + [', desc: 'Send to Back', usage: 'Move the selected element to the bottom layer.' },
          { keys: 'Arrow', desc: 'Nudge (1px)', usage: 'Move the selected element by 1px.' },
          { keys: 'Shift + Arrow', desc: 'Nudge (10px)', usage: 'Move the selected element by 10px.' },
          { keys: 'Alt + Drag', desc: 'Duplicate & Move', usage: 'Duplicate the element while dragging.' },
        ]
      },
      {
        name: 'Pages & View',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Add Page', usage: 'Add a new page after the current one.' },
          { keys: 'Ctrl + Shift + P', desc: 'Presentation Mode', usage: 'Switch to presentation mode.' },
          { keys: 'Ctrl + +', desc: 'Zoom In', usage: 'Zoom in on the canvas.' },
          { keys: 'Ctrl + -', desc: 'Zoom Out', usage: 'Zoom out on the canvas.' },
          { keys: 'Ctrl + 0', desc: 'Fit to Screen', usage: 'Fit the canvas to the screen.' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save the design.' },
          { keys: 'Ctrl + P', desc: 'Print/Download', usage: 'Open print or download options.' },
        ]
      },
    ]
  },
  teams: {
    name: 'Microsoft Teams',
    icon: 'fas fa-users',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Ctrl + 1', desc: 'Activity', usage: 'Go to the Activity feed.' },
          { keys: 'Ctrl + 2', desc: 'Chat', usage: 'Go to the Chat list.' },
          { keys: 'Ctrl + 3', desc: 'Teams', usage: 'Go to the Teams list.' },
          { keys: 'Ctrl + 4', desc: 'Calendar', usage: 'Go to Calendar.' },
          { keys: 'Ctrl + 5', desc: 'Calls', usage: 'Go to Calls.' },
          { keys: 'Ctrl + 6', desc: 'Files', usage: 'Go to Files.' },
          { keys: 'Ctrl + ,', desc: 'Settings', usage: 'Open Settings.' },
          { keys: 'Ctrl + E', desc: 'Search', usage: 'Move focus to the search bar.' },
          { keys: 'Ctrl + N', desc: 'New Chat', usage: 'Start a new chat.' },
        ]
      },
      {
        name: 'Messages & Chat',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Send Message', usage: 'Send the composed message.' },
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Apply bold formatting.' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Apply italic formatting.' },
          { keys: 'Ctrl + U', desc: 'Underline', usage: 'Apply underline formatting.' },
          { keys: 'Shift + Enter', desc: 'New Line', usage: 'Add a new line without sending.' },
          { keys: 'Ctrl + Shift + X', desc: 'Expand Composer', usage: 'Open the expanded message composer.' },
        ]
      },
      {
        name: 'Meetings & Calls',
        shortcuts: [
          { keys: 'Ctrl + Shift + A', desc: 'Accept Call', usage: 'Accept an incoming call.' },
          { keys: 'Ctrl + Shift + D', desc: 'Decline Call', usage: 'Decline an incoming call.' },
          { keys: 'Ctrl + Shift + M', desc: 'Toggle Mute', usage: 'Mute or unmute your microphone in a meeting.' },
          { keys: 'Ctrl + Shift + O', desc: 'Toggle Camera', usage: 'Turn your camera on or off.' },
          { keys: 'Ctrl + Shift + H', desc: 'Raise Hand', usage: 'Raise or lower your hand.' },
          { keys: 'Ctrl + Shift + Space', desc: 'Push to Talk', usage: 'Temporarily unmute while held.' },
          { keys: 'Ctrl + Shift + E', desc: 'Share Screen', usage: 'Start screen sharing.' },
          { keys: 'Ctrl + Shift + B', desc: 'Toggle Chat', usage: 'Open or close in-meeting chat.' },
          { keys: 'Ctrl + Shift + P', desc: 'Participant List', usage: 'Open or close the participant list.' },
        ]
      },
    ]
  },
  googledocs: {
    name: 'Google Docs',
    icon: 'fas fa-file-alt',
    categories: [
      {
        name: 'Basic Editing',
        shortcuts: [
          { keys: 'Ctrl + C', desc: 'Copy', usage: 'Copy selected text or elements.' },
          { keys: 'Ctrl + X', desc: 'Cut', usage: 'Cut selected text or elements.' },
          { keys: 'Ctrl + V', desc: 'Paste', usage: 'Paste the copied content.' },
          { keys: 'Ctrl + Shift + V', desc: 'Paste Without Formatting', usage: 'Paste plain text without formatting.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last action.' },
          { keys: 'Ctrl + Y', desc: 'Redo', usage: 'Redo the last undone action.' },
          { keys: 'Ctrl + A', desc: 'Select All', usage: 'Select all content in the document.' },
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Search for text in the document.' },
          { keys: 'Ctrl + H', desc: 'Find & Replace', usage: 'Find and replace text.' },
          { keys: 'Ctrl + P', desc: 'Print', usage: 'Print the document.' },
        ]
      },
      {
        name: 'Text Formatting',
        shortcuts: [
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Apply or remove bold formatting.' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Apply or remove italic formatting.' },
          { keys: 'Ctrl + U', desc: 'Underline', usage: 'Apply or remove underline.' },
          { keys: 'Alt + Shift + 5', desc: 'Strikethrough', usage: 'Apply strikethrough to selected text.' },
          { keys: 'Ctrl + Shift + .', desc: 'Increase Font Size', usage: 'Increase font size by 1pt.' },
          { keys: 'Ctrl + Shift + ,', desc: 'Decrease Font Size', usage: 'Decrease font size by 1pt.' },
          { keys: 'Ctrl + E', desc: 'Center Align', usage: 'Center-align the selected paragraph.' },
          { keys: 'Ctrl + L', desc: 'Left Align', usage: 'Left-align the selected paragraph.' },
          { keys: 'Ctrl + R', desc: 'Right Align', usage: 'Right-align the selected paragraph.' },
          { keys: 'Ctrl + J', desc: 'Justify', usage: 'Justify-align the selected paragraph.' },
          { keys: 'Ctrl + Space', desc: 'Clear Formatting', usage: 'Remove all formatting from selected text.' },
          { keys: 'Ctrl + =', desc: 'Subscript', usage: 'Apply subscript formatting.' },
          { keys: 'Ctrl + .', desc: 'Superscript', usage: 'Apply superscript formatting.' },
        ]
      },
      {
        name: 'Headings & Styles',
        shortcuts: [
          { keys: 'Ctrl + Alt + 0', desc: 'Normal Text', usage: 'Apply Normal text style.' },
          { keys: 'Ctrl + Alt + 1', desc: 'Heading 1', usage: 'Apply Heading 1 style.' },
          { keys: 'Ctrl + Alt + 2', desc: 'Heading 2', usage: 'Apply Heading 2 style.' },
          { keys: 'Ctrl + Alt + 3', desc: 'Heading 3', usage: 'Apply Heading 3 style.' },
          { keys: 'Ctrl + Alt + 4', desc: 'Heading 4', usage: 'Apply Heading 4 style.' },
          { keys: 'Ctrl + Alt + 5', desc: 'Heading 5', usage: 'Apply Heading 5 style.' },
          { keys: 'Ctrl + Alt + 6', desc: 'Heading 6', usage: 'Apply Heading 6 style.' },
        ]
      },
      {
        name: 'Navigation & Insert',
        shortcuts: [
          { keys: 'Ctrl + K', desc: 'Insert Link', usage: 'Insert or edit a hyperlink.' },
          { keys: 'Ctrl + Enter', desc: 'Page Break', usage: 'Insert a page break at the cursor.' },
          { keys: 'Ctrl + Shift + C', desc: 'Word Count', usage: 'Check the document word count.' },
          { keys: 'Ctrl + Home', desc: 'Go to Beginning', usage: 'Jump to the start of the document.' },
          { keys: 'Ctrl + End', desc: 'Go to End', usage: 'Jump to the end of the document.' },
          { keys: 'Ctrl + Alt + M', desc: 'Insert Comment', usage: 'Add a comment at the current position.' },
          { keys: 'Ctrl + Shift + Y', desc: 'Define Word', usage: 'Look up the definition of the selected word.' },
        ]
      },
    ]
  },
  obsidian: {
    name: 'Obsidian',
    icon: 'fas fa-gem',
    categories: [
      {
        name: 'Editing & Notes',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New Note', usage: 'Create a new note.' },
          { keys: 'Ctrl + O', desc: 'Quick Open', usage: 'Quickly search and open a note.' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save the current note.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last edit.' },
          { keys: 'Ctrl + Y', desc: 'Redo', usage: 'Redo the last undone edit.' },
          { keys: 'Ctrl + E', desc: 'Toggle Edit/Preview', usage: 'Switch between editing and preview mode.' },
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Apply bold formatting.' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Apply italic formatting.' },
          { keys: 'Ctrl + K', desc: 'Insert Link', usage: 'Insert a Markdown link.' },
        ]
      },
      {
        name: 'Navigation & Links',
        shortcuts: [
          { keys: 'Ctrl + P', desc: 'Command Palette', usage: 'Search and run all available commands.' },
          { keys: 'Ctrl + Shift + F', desc: 'Global Search', usage: 'Search across all notes.' },
          { keys: 'Ctrl + G', desc: 'Graph View', usage: 'Open the note connection graph.' },
          { keys: 'Alt + Left', desc: 'Go Back', usage: 'Navigate to the previously opened note.' },
          { keys: 'Alt + Right', desc: 'Go Forward', usage: 'Navigate forward.' },
          { keys: 'Ctrl + T', desc: 'New Tab', usage: 'Open a new tab.' },
          { keys: 'Ctrl + W', desc: 'Close Tab', usage: 'Close the current tab.' },
        ]
      },
      {
        name: 'Markdown & Formatting',
        shortcuts: [
          { keys: 'Ctrl + Shift + K', desc: 'Code Block', usage: 'Insert a code block.' },
          { keys: 'Ctrl + Shift + H', desc: 'Highlight', usage: 'Highlight the selected text.' },
          { keys: 'Ctrl + Shift + S', desc: 'Strikethrough', usage: 'Apply strikethrough formatting.' },
          { keys: 'Tab', desc: 'Indent', usage: 'Indent a list item.' },
          { keys: 'Shift + Tab', desc: 'Unindent', usage: 'Unindent a list item.' },
          { keys: 'Ctrl + L', desc: 'Toggle Checkbox', usage: 'Create or toggle a checkbox.' },
        ]
      },
      {
        name: 'Panels & View',
        shortcuts: [
          { keys: 'Ctrl + \\', desc: 'Split Pane', usage: 'Split the current pane vertically.' },
          { keys: 'Ctrl + Shift + E', desc: 'File Explorer', usage: 'Toggle the file explorer panel.' },
          { keys: 'Ctrl + Shift + G', desc: 'Global Graph', usage: 'Open the global graph view.' },
          { keys: 'Ctrl + Shift + B', desc: 'Backlinks', usage: 'Show backlinks for the current note.' },
        ]
      },
    ]
  },
  pycharm: {
    name: 'PyCharm',
    icon: 'fas fa-code',
    categories: [
      {
        name: 'Editing & Code Generation',
        shortcuts: [
          { keys: 'Alt + Enter', desc: 'Quick Fix / Intention', usage: 'Show quick-fix options for errors or warnings.' },
          { keys: 'Ctrl + Space', desc: 'Basic Completion', usage: 'Show basic code completion suggestions.' },
          { keys: 'Ctrl + Shift + Space', desc: 'Smart Completion', usage: 'Show type-aware smart completion.' },
          { keys: 'Ctrl + /', desc: 'Line Comment', usage: 'Toggle line comment on current or selected lines.' },
          { keys: 'Ctrl + Shift + /', desc: 'Block Comment', usage: 'Apply block comment to selection.' },
          { keys: 'Ctrl + D', desc: 'Duplicate Line', usage: 'Duplicate the current line or selected block.' },
          { keys: 'Ctrl + Y', desc: 'Delete Line', usage: 'Delete the current line.' },
          { keys: 'Ctrl + Alt + L', desc: 'Reformat Code', usage: 'Reformat code according to style settings.' },
          { keys: 'Ctrl + Shift + Up/Down', desc: 'Move Line', usage: 'Move the current line or block up or down.' },
          { keys: 'Ctrl + Alt + T', desc: 'Surround With', usage: 'Surround selected code with if/try/for etc.' },
        ]
      },
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Ctrl + P', desc: 'Find File', usage: 'Quickly open a file by name.' },
          { keys: 'Shift + Shift', desc: 'Search Everywhere', usage: 'Search files, classes, symbols, and actions.' },
          { keys: 'Ctrl + Shift + F', desc: 'Find in Files', usage: 'Search text across the entire project.' },
          { keys: 'Ctrl + B', desc: 'Go to Definition', usage: 'Navigate to the definition of a symbol.' },
          { keys: 'Alt + F7', desc: 'Find Usages', usage: 'Find all usages of the current symbol.' },
          { keys: 'Ctrl + E', desc: 'Recent Files', usage: 'Show recently opened files.' },
          { keys: 'Ctrl + G', desc: 'Go to Line', usage: 'Jump to a specific line number.' },
          { keys: 'Ctrl + F12', desc: 'File Structure', usage: 'Show the class/method structure of the current file.' },
        ]
      },
      {
        name: 'Run & Debug',
        shortcuts: [
          { keys: 'Shift + F10', desc: 'Run', usage: 'Run the current configuration.' },
          { keys: 'Shift + F9', desc: 'Debug', usage: 'Start debugging the current configuration.' },
          { keys: 'Ctrl + F2', desc: 'Stop', usage: 'Stop the running program.' },
          { keys: 'F8', desc: 'Step Over', usage: 'Step over to the next line during debugging.' },
          { keys: 'F7', desc: 'Step Into', usage: 'Step into a function call.' },
          { keys: 'Shift + F8', desc: 'Step Out', usage: 'Step out of the current function.' },
          { keys: 'F9', desc: 'Resume', usage: 'Resume execution until the next breakpoint.' },
          { keys: 'Ctrl + F8', desc: 'Toggle Breakpoint', usage: 'Add or remove a breakpoint on the current line.' },
        ]
      },
      {
        name: 'Refactoring',
        shortcuts: [
          { keys: 'Shift + F6', desc: 'Rename', usage: 'Rename a variable, function, or class everywhere.' },
          { keys: 'Ctrl + Alt + M', desc: 'Extract Method', usage: 'Extract selected code into a new method.' },
          { keys: 'Ctrl + Alt + V', desc: 'Extract Variable', usage: 'Extract a selected expression into a variable.' },
          { keys: 'Ctrl + Alt + C', desc: 'Extract Constant', usage: 'Extract a value into a constant.' },
          { keys: 'Ctrl + Alt + N', desc: 'Inline Variable', usage: 'Inline a variable at its usage sites.' },
          { keys: 'F6', desc: 'Move', usage: 'Move a class or file to another package.' },
        ]
      },
    ]
  },
  finalcut: {
    name: 'Final Cut Pro',
    icon: 'fas fa-film',
    categories: [
      {
        name: 'Playback & Navigation',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Pause', usage: 'Start or pause timeline playback.' },
          { keys: 'L', desc: 'Play Forward (Fast)', usage: 'Press repeatedly to increase playback speed 2x, 4x, 8x.' },
          { keys: 'J', desc: 'Play Backward', usage: 'Press repeatedly to rewind at increasing speed.' },
          { keys: 'K', desc: 'Stop', usage: 'Stop playback.' },
          { keys: 'Left', desc: '1 Frame Back', usage: 'Move the playhead back 1 frame.' },
          { keys: 'Right', desc: '1 Frame Forward', usage: 'Move the playhead forward 1 frame.' },
          { keys: 'Shift + Left', desc: '10 Frames Back', usage: 'Move the playhead back 10 frames.' },
          { keys: 'Shift + Right', desc: '10 Frames Forward', usage: 'Move the playhead forward 10 frames.' },
          { keys: 'Home', desc: 'Go to Start', usage: 'Jump to the beginning of the timeline.' },
          { keys: 'End', desc: 'Go to End', usage: 'Jump to the end of the timeline.' },
          { keys: 'Up', desc: 'Previous Clip', usage: 'Move to the previous clip in the timeline.' },
          { keys: 'Down', desc: 'Next Clip', usage: 'Move to the next clip in the timeline.' },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Cmd + Z', desc: 'Undo', usage: 'Undo the last action.' },
          { keys: 'Delete', desc: 'Ripple Delete', usage: 'Delete the clip and close the gap.' },
          { keys: 'Shift + Delete', desc: 'Gap Delete', usage: 'Delete the clip leaving a gap.' },
          { keys: 'B', desc: 'Blade Tool', usage: 'Cut clips in the timeline.' },
          { keys: 'Cmd + B', desc: 'Cut at Playhead', usage: 'Cut the clip at the current playhead position.' },
          { keys: 'T', desc: 'Trim Tool', usage: 'Precisely trim clip edges.' },
          { keys: 'A', desc: 'Select Tool', usage: 'Switch to the default select tool.' },
          { keys: 'R', desc: 'Range Selection Tool', usage: 'Select a specific range in the timeline.' },
        ]
      },
      {
        name: 'Markers & In/Out',
        shortcuts: [
          { keys: 'I', desc: 'Set In Point', usage: 'Set the current position as the In point.' },
          { keys: 'O', desc: 'Set Out Point', usage: 'Set the current position as the Out point.' },
          { keys: 'M', desc: 'Add Marker', usage: 'Add a marker at the current playhead position.' },
          { keys: 'X', desc: 'Set Clip Range', usage: 'Set the clip or selection as In/Out range.' },
        ]
      },
      {
        name: 'Audio & Effects',
        shortcuts: [
          { keys: 'Cmd + +', desc: 'Zoom In Timeline', usage: 'Zoom in on the timeline.' },
          { keys: 'Cmd + -', desc: 'Zoom Out Timeline', usage: 'Zoom out on the timeline.' },
          { keys: 'Shift + Z', desc: 'Fit Timeline to Window', usage: 'Fit the entire timeline into view.' },
          { keys: 'Cmd + 4', desc: 'Toggle Inspector', usage: 'Open or close the Inspector panel.' },
          { keys: 'Cmd + 5', desc: 'Effects Browser', usage: 'Open or close the Effects Browser.' },
          { keys: 'Cmd + E', desc: 'Export', usage: 'Open the Share/Export dialog.' },
        ]
      },
    ]
  },
  obs: {
    name: 'OBS Studio',
    icon: 'fas fa-broadcast-tower',
    categories: [
      {
        name: 'Streaming & Recording',
        shortcuts: [
          { keys: 'Ctrl + Shift + S', desc: 'Start/Stop Streaming', usage: 'Start or stop live streaming.' },
          { keys: 'Ctrl + Shift + R', desc: 'Start/Stop Recording', usage: 'Start or stop screen recording.' },
          { keys: 'Ctrl + Shift + P', desc: 'Pause/Resume Recording', usage: 'Pause or resume the current recording.' },
          { keys: 'Ctrl + Shift + V', desc: 'Start/Stop Virtual Camera', usage: 'Toggle the OBS virtual camera.' },
          { keys: 'Ctrl + Shift + M', desc: 'Mute Mic', usage: 'Toggle microphone audio mute.' },
          { keys: 'Ctrl + Shift + A', desc: 'Mute Desktop Audio', usage: 'Toggle desktop audio mute.' },
        ]
      },
      {
        name: 'Scenes & Sources',
        shortcuts: [
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate the selected scene or source.' },
          { keys: 'Delete', desc: 'Remove', usage: 'Remove the selected source or scene.' },
          { keys: 'Ctrl + Up', desc: 'Move Source Up', usage: 'Move the selected source up in the source list.' },
          { keys: 'Ctrl + Down', desc: 'Move Source Down', usage: 'Move the selected source down in the source list.' },
          { keys: 'Ctrl + E', desc: 'Edit Source Properties', usage: 'Edit the properties of the selected source.' },
          { keys: 'Ctrl + F', desc: 'Edit Filters', usage: 'Edit filters for the selected source.' },
          { keys: 'Ctrl + C', desc: 'Copy Source', usage: 'Copy the selected source.' },
          { keys: 'Ctrl + V', desc: 'Paste Source', usage: 'Paste the copied source.' },
        ]
      },
      {
        name: 'Preview & Alignment',
        shortcuts: [
          { keys: 'Ctrl + Alt + F', desc: 'Fit Source to Screen', usage: 'Fit the selected source to the screen size.' },
          { keys: 'Ctrl + Alt + C', desc: 'Center Source', usage: 'Center the selected source on the canvas.' },
          { keys: 'Ctrl + R', desc: 'Reset Transform', usage: 'Reset position, size, and rotation of the source.' },
          { keys: 'F11', desc: 'Fullscreen Preview', usage: 'Show the OBS preview in fullscreen.' },
        ]
      },
      {
        name: 'Settings & Tools',
        shortcuts: [
          { keys: 'Ctrl + ,', desc: 'Open Settings', usage: 'Open the OBS Settings window.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last action.' },
          { keys: 'Ctrl + S', desc: 'Save Profile', usage: 'Save the current settings.' },
        ]
      },
    ]
  },
  claude: {
    name: 'Claude AI',
    icon: 'fas fa-brain',
    categories: [
      {
        name: 'Conversation Management',
        shortcuts: [
          { keys: 'Ctrl + Shift + O', desc: 'New Conversation', usage: 'Start a new conversation.' },
          { keys: 'Ctrl + Shift + ;', desc: 'New Chat (Model Select)', usage: 'Start a new conversation with model selection.' },
          { keys: 'Ctrl + Shift + Backspace', desc: 'Delete Conversation', usage: 'Delete the current conversation.' },
          { keys: 'Ctrl + Shift + C', desc: 'Copy Last Response', usage: 'Copy Claude\'s last response text to clipboard.' },
          { keys: 'Ctrl + Shift + E', desc: 'Copy Last Code Block', usage: 'Copy the last code block from Claude\'s response.' },
          { keys: 'Ctrl + .', desc: 'Toggle Sidebar', usage: 'Show or hide left sidebar (conversation list).' },
        ]
      },
      {
        name: 'Input & Send',
        shortcuts: [
          { keys: 'Enter', desc: 'Send Message', usage: 'Send the composed message.' },
          { keys: 'Shift + Enter', desc: 'New Line', usage: 'Add a new line without sending.' },
          { keys: 'Ctrl + Shift + .', desc: 'Select Model', usage: 'Change the AI model to use.' },
          { keys: '/', desc: 'Slash Commands', usage: 'Type slash in input to access commands.' },
          { keys: 'Ctrl + Shift + 1', desc: 'Toggle Artifacts', usage: 'Show or hide the artifacts (code, docs) panel.' },
          { keys: 'Esc', desc: 'Stop Response', usage: 'Stop Claude from generating a response.' },
        ]
      },
      {
        name: 'Search & Navigation',
        shortcuts: [
          { keys: 'Ctrl + K', desc: 'Search Conversations', usage: 'Search past conversations.' },
          { keys: 'Ctrl + Shift + S', desc: 'Rename Conversation', usage: 'Rename the current conversation.' },
          { keys: 'Up', desc: 'Edit Previous Message', usage: 'Edit previous message when input is empty.' },
          { keys: 'Ctrl + /', desc: 'View Shortcuts', usage: 'Display available keyboard shortcuts.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'XML Tags', desc: 'Structured input', usage: 'Use XML tags for structured, precise answers.' },
          { keys: 'Persona', desc: 'Set role', usage: 'Specify roles for domain expert responses.' },
          { keys: 'Chain of Thought', desc: 'Show reasoning', usage: 'Ask to show thinking process for visible reasoning.' },
          { keys: 'Artifacts', desc: 'Generate code/docs', usage: 'Request artifacts for standalone executable output.' },
          { keys: 'Projects', desc: 'Project context', usage: 'Upload docs to Projects for persistent context.' },
        ]
      },
    ]
  },
  copilot: {
    name: 'GitHub Copilot',
    icon: 'fas fa-robot',
    categories: [
      {
        name: 'AI Code Completion',
        shortcuts: [
          { keys: 'Tab', desc: 'Accept Suggestion', usage: 'Accept Copilot\'s code suggestion.' },
          { keys: 'Esc', desc: 'Dismiss Suggestion', usage: 'Dismiss Copilot suggestion.' },
          { keys: 'Alt + ]', desc: 'Next Suggestion', usage: 'View next alternative Copilot suggestion.' },
          { keys: 'Alt + [', desc: 'Previous Suggestion', usage: 'View previous alternative Copilot suggestion.' },
          { keys: 'Ctrl + Enter', desc: 'Open Suggestions List', usage: 'View 10 Copilot suggestions in a new tab.' },
          { keys: 'Alt + \\', desc: 'Manual Trigger', usage: 'Manually trigger Copilot when autocomplete doesn\'t appear.' },
          { keys: 'Ctrl + Right', desc: 'Accept Word by Word', usage: 'Partially accept suggestion word by word.' },
        ]
      },
      {
        name: 'Copilot Chat',
        shortcuts: [
          { keys: 'Ctrl + Shift + I', desc: 'Open Copilot Chat', usage: 'Open the Copilot Chat panel.' },
          { keys: 'Ctrl + I', desc: 'Inline Chat', usage: 'Open inline Copilot Chat in the editor.' },
          { keys: '/explain', desc: 'Explain Code', usage: 'Request explanation of selected code.' },
          { keys: '/fix', desc: 'Fix Code', usage: 'Fix issues in selected code.' },
          { keys: '/tests', desc: 'Generate Tests', usage: 'Generate tests for selected code.' },
          { keys: '/doc', desc: 'Generate Docs', usage: 'Generate documentation for selected code.' },
          { keys: '@workspace', desc: 'Workspace Context', usage: 'Ask questions with entire project as context.' },
          { keys: '#file', desc: 'File Reference', usage: 'Add a specific file as context.' },
          { keys: '#selection', desc: 'Selection Reference', usage: 'Add currently selected code as context.' },
        ]
      },
      {
        name: 'Copilot Edits',
        shortcuts: [
          { keys: 'Ctrl + Shift + Enter', desc: 'Accept Edit', usage: 'Accept Copilot\'s suggested edit.' },
          { keys: 'Ctrl + Backspace', desc: 'Reject Edit', usage: 'Reject Copilot\'s suggested edit.' },
          { keys: 'Ctrl + Shift + Alt + Enter', desc: 'Accept All Edits', usage: 'Accept all Copilot edits across all files.' },
        ]
      },
    ]
  },
  gmail: {
    name: 'Gmail',
    icon: 'fas fa-envelope',
    categories: [
      {
        name: 'Compose & Format',
        shortcuts: [
          { keys: 'C', desc: 'Compose', usage: 'Open new email compose window.' },
          { keys: 'D', desc: 'Compose in Tab', usage: 'Open compose in a new tab.' },
          { keys: 'Ctrl + Enter', desc: 'Send', usage: 'Send the email immediately.' },
          { keys: 'Ctrl + Shift + C', desc: 'Add CC', usage: 'Open CC field.' },
          { keys: 'Ctrl + Shift + B', desc: 'Add BCC', usage: 'Open BCC field.' },
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Bold selected text.' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Italicize selected text.' },
          { keys: 'Ctrl + U', desc: 'Underline', usage: 'Underline selected text.' },
          { keys: 'Ctrl + K', desc: 'Insert Link', usage: 'Insert a hyperlink.' },
          { keys: 'Ctrl + Shift + 7', desc: 'Numbered List', usage: 'Create a numbered list.' },
          { keys: 'Ctrl + Shift + 8', desc: 'Bulleted List', usage: 'Create a bulleted list.' },
        ]
      },
      {
        name: 'Navigation & Management',
        shortcuts: [
          { keys: 'G + I', desc: 'Go to Inbox', usage: 'Navigate to inbox.' },
          { keys: 'G + S', desc: 'Go to Starred', usage: 'Navigate to starred emails.' },
          { keys: 'G + T', desc: 'Go to Sent', usage: 'Navigate to sent mail.' },
          { keys: 'G + D', desc: 'Go to Drafts', usage: 'Navigate to drafts.' },
          { keys: '/', desc: 'Search', usage: 'Move cursor to search bar.' },
          { keys: 'E', desc: 'Archive', usage: 'Archive selected email.' },
          { keys: '#', desc: 'Delete', usage: 'Delete selected email.' },
          { keys: 'R', desc: 'Reply', usage: 'Reply to current email.' },
          { keys: 'A', desc: 'Reply All', usage: 'Reply to all recipients.' },
          { keys: 'F', desc: 'Forward', usage: 'Forward current email.' },
          { keys: 'S', desc: 'Toggle Star', usage: 'Add or remove star.' },
          { keys: 'J', desc: 'Older Email', usage: 'Move to older conversation.' },
          { keys: 'K', desc: 'Newer Email', usage: 'Move to newer conversation.' },
          { keys: 'O / Enter', desc: 'Open Email', usage: 'Open selected conversation.' },
          { keys: 'U', desc: 'Mark Unread', usage: 'Mark email as unread.' },
          { keys: '?', desc: 'Shortcuts Help', usage: 'Show keyboard shortcuts list.' },
        ]
      },
    ]
  },
  outlook: {
    name: 'Outlook',
    icon: 'fas fa-envelope-open-text',
    categories: [
      {
        name: 'Mail Management',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New Email', usage: 'Create a new email message.' },
          { keys: 'Ctrl + R', desc: 'Reply', usage: 'Reply to selected email.' },
          { keys: 'Ctrl + Shift + R', desc: 'Reply All', usage: 'Reply to all recipients.' },
          { keys: 'Ctrl + F', desc: 'Forward', usage: 'Forward selected email.' },
          { keys: 'Ctrl + Enter', desc: 'Send', usage: 'Send the email.' },
          { keys: 'Ctrl + E', desc: 'Search', usage: 'Activate search bar.' },
          { keys: 'Ctrl + Q', desc: 'Mark Read', usage: 'Mark email as read.' },
          { keys: 'Ctrl + U', desc: 'Mark Unread', usage: 'Mark email as unread.' },
          { keys: 'Ctrl + Shift + G', desc: 'Flag', usage: 'Flag email for follow-up.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete selected email.' },
          { keys: 'F9', desc: 'Send/Receive', usage: 'Send and receive all emails.' },
        ]
      },
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Ctrl + 1', desc: 'Switch to Mail', usage: 'Switch to mail view.' },
          { keys: 'Ctrl + 2', desc: 'Switch to Calendar', usage: 'Switch to calendar view.' },
          { keys: 'Ctrl + 3', desc: 'Switch to Contacts', usage: 'Switch to contacts view.' },
          { keys: 'Ctrl + 4', desc: 'Switch to Tasks', usage: 'Switch to tasks view.' },
          { keys: 'Ctrl + Y', desc: 'Go to Folder', usage: 'Navigate to a different folder.' },
          { keys: 'Alt + S', desc: 'Send', usage: 'Send the email.' },
        ]
      },
    ]
  },
  discord: {
    name: 'Discord',
    icon: 'fab fa-discord',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Ctrl + K', desc: 'Quick Switcher', usage: 'Search and jump to servers, channels, DMs.' },
          { keys: 'Alt + Up/Down', desc: 'Switch Channel', usage: 'Move to channel above/below.' },
          { keys: 'Ctrl + Alt + Up/Down', desc: 'Unread Channel', usage: 'Jump to unread channel.' },
          { keys: 'Ctrl + Tab', desc: 'Next Server', usage: 'Switch to next server.' },
          { keys: 'Ctrl + Shift + Tab', desc: 'Previous Server', usage: 'Switch to previous server.' },
        ]
      },
      {
        name: 'Messages & Calls',
        shortcuts: [
          { keys: 'Up', desc: 'Edit Message', usage: 'Edit your last sent message.' },
          { keys: 'Shift + Enter', desc: 'New Line', usage: 'Add new line without sending.' },
          { keys: 'Ctrl + Shift + M', desc: 'Toggle Mute', usage: 'Toggle microphone mute.' },
          { keys: 'Ctrl + Shift + D', desc: 'Toggle Deafen', usage: 'Toggle speaker deafen.' },
          { keys: 'Ctrl + E', desc: 'Emoji Picker', usage: 'Open emoji picker.' },
          { keys: 'Ctrl + Shift + U', desc: 'Upload File', usage: 'Upload a file.' },
          { keys: 'Ctrl + /', desc: 'Shortcuts List', usage: 'Show keyboard shortcuts.' },
        ]
      },
    ]
  },
  spotify: {
    name: 'Spotify',
    icon: 'fab fa-spotify',
    categories: [
      {
        name: 'Playback',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Pause', usage: 'Play or pause current track.' },
          { keys: 'Ctrl + Right', desc: 'Next Track', usage: 'Skip to next track.' },
          { keys: 'Ctrl + Left', desc: 'Previous Track', usage: 'Go to previous track.' },
          { keys: 'Ctrl + Up', desc: 'Volume Up', usage: 'Increase volume.' },
          { keys: 'Ctrl + Down', desc: 'Volume Down', usage: 'Decrease volume.' },
          { keys: 'Ctrl + S', desc: 'Toggle Shuffle', usage: 'Turn shuffle on or off.' },
          { keys: 'Ctrl + R', desc: 'Toggle Repeat', usage: 'Cycle through repeat modes.' },
          { keys: 'Shift + Left/Right', desc: 'Seek 5s', usage: 'Seek forward/backward 5 seconds.' },
        ]
      },
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Ctrl + L', desc: 'Search', usage: 'Go to search bar.' },
          { keys: 'Ctrl + N', desc: 'New Playlist', usage: 'Create a new playlist.' },
          { keys: 'Alt + Left', desc: 'Go Back', usage: 'Navigate back.' },
          { keys: 'Alt + Right', desc: 'Go Forward', usage: 'Navigate forward.' },
          { keys: 'Ctrl + F', desc: 'Filter', usage: 'Filter current view.' },
          { keys: 'Delete', desc: 'Remove from Playlist', usage: 'Remove track from playlist.' },
        ]
      },
    ]
  },
  firefox: {
    name: 'Firefox',
    icon: 'fab fa-firefox-browser',
    categories: [
      {
        name: 'Tabs & Windows',
        shortcuts: [
          { keys: 'Ctrl + T', desc: 'New Tab', usage: 'Open a new tab.' },
          { keys: 'Ctrl + W', desc: 'Close Tab', usage: 'Close current tab.' },
          { keys: 'Ctrl + Shift + T', desc: 'Reopen Tab', usage: 'Reopen recently closed tab.' },
          { keys: 'Ctrl + Tab', desc: 'Next Tab', usage: 'Switch to next tab.' },
          { keys: 'Ctrl + Shift + Tab', desc: 'Previous Tab', usage: 'Switch to previous tab.' },
          { keys: 'Ctrl + 1~8', desc: 'Go to Tab', usage: 'Switch to specific tab number.' },
          { keys: 'Ctrl + N', desc: 'New Window', usage: 'Open new browser window.' },
          { keys: 'Ctrl + Shift + P', desc: 'Private Window', usage: 'Open private browsing window.' },
        ]
      },
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Ctrl + L', desc: 'Address Bar', usage: 'Focus the address bar.' },
          { keys: 'Ctrl + F', desc: 'Find on Page', usage: 'Search text on current page.' },
          { keys: 'Ctrl + H', desc: 'History', usage: 'Open history sidebar.' },
          { keys: 'Ctrl + D', desc: 'Bookmark', usage: 'Bookmark current page.' },
          { keys: 'Ctrl + J', desc: 'Downloads', usage: 'Open downloads list.' },
          { keys: 'F5', desc: 'Refresh', usage: 'Refresh current page.' },
          { keys: 'Ctrl + Shift + R', desc: 'Hard Refresh', usage: 'Refresh ignoring cache.' },
          { keys: 'F11', desc: 'Fullscreen', usage: 'Toggle fullscreen mode.' },
        ]
      },
    ]
  },
  safari: {
    name: 'Safari',
    icon: 'fab fa-safari',
    categories: [
      {
        name: 'Tabs & Windows',
        shortcuts: [
          { keys: 'Cmd + T', desc: 'New Tab', usage: 'Open a new tab.' },
          { keys: 'Cmd + W', desc: 'Close Tab', usage: 'Close current tab.' },
          { keys: 'Cmd + Z', desc: 'Reopen Tab', usage: 'Reopen recently closed tab.' },
          { keys: 'Ctrl + Tab', desc: 'Next Tab', usage: 'Switch to next tab.' },
          { keys: 'Cmd + N', desc: 'New Window', usage: 'Open new browser window.' },
          { keys: 'Cmd + Shift + N', desc: 'Private Window', usage: 'Open private browsing window.' },
        ]
      },
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Cmd + L', desc: 'Address Bar', usage: 'Focus the address bar.' },
          { keys: 'Cmd + F', desc: 'Find on Page', usage: 'Search text on current page.' },
          { keys: 'Cmd + D', desc: 'Bookmark', usage: 'Bookmark current page.' },
          { keys: 'Cmd + Y', desc: 'History', usage: 'Show browsing history.' },
          { keys: 'Cmd + R', desc: 'Refresh', usage: 'Refresh current page.' },
          { keys: 'Cmd + Option + R', desc: 'Hard Refresh', usage: 'Refresh ignoring cache.' },
          { keys: 'Cmd + ,', desc: 'Preferences', usage: 'Open Safari preferences.' },
        ]
      },
    ]
  },
  youtube: {
    name: 'YouTube',
    icon: 'fab fa-youtube',
    categories: [
      {
        name: 'Playback',
        shortcuts: [
          { keys: 'K / Space', desc: 'Play/Pause', usage: 'Play or pause video.' },
          { keys: 'J', desc: 'Rewind 10s', usage: 'Rewind video 10 seconds.' },
          { keys: 'L', desc: 'Forward 10s', usage: 'Forward video 10 seconds.' },
          { keys: 'Left', desc: 'Rewind 5s', usage: 'Rewind video 5 seconds.' },
          { keys: 'Right', desc: 'Forward 5s', usage: 'Forward video 5 seconds.' },
          { keys: '0~9', desc: 'Seek to %', usage: 'Jump to 0%-90% of video.' },
          { keys: ', / .', desc: 'Frame Step', usage: 'Step one frame forward/backward when paused.' },
          { keys: 'Shift + > / <', desc: 'Playback Speed', usage: 'Increase or decrease playback speed.' },
        ]
      },
      {
        name: 'Display & Captions',
        shortcuts: [
          { keys: 'F', desc: 'Fullscreen', usage: 'Toggle fullscreen mode.' },
          { keys: 'T', desc: 'Theater Mode', usage: 'Toggle theater mode.' },
          { keys: 'I', desc: 'Mini Player', usage: 'Toggle mini player.' },
          { keys: 'M', desc: 'Mute', usage: 'Toggle mute.' },
          { keys: 'Up/Down', desc: 'Volume', usage: 'Adjust volume by 5%.' },
          { keys: 'C', desc: 'Toggle Captions', usage: 'Turn captions on or off.' },
          { keys: 'Shift + N', desc: 'Next Video', usage: 'Play next video in playlist.' },
          { keys: 'Shift + P', desc: 'Previous Video', usage: 'Play previous video in playlist.' },
          { keys: '/', desc: 'Search', usage: 'Focus the search bar.' },
        ]
      },
    ]
  },
  telegram: {
    name: "Telegram",
    icon: "fab fa-telegram",
    source: "https://github.com/telegramdesktop/tdesktop/wiki/Keyboard-Shortcuts",
    categories: [
      {
        name: "Chats",
        shortcuts: [
          { keys: "Ctrl + Tab", desc: "Next Chat", usage: "Move to the chat below in the list; Ctrl + PageDown and Alt + Down do the same." },
          { keys: "Ctrl + Shift + Tab", desc: "Previous Chat", usage: "Move to the chat above; Ctrl + PageUp and Alt + Up do the same." },
          { keys: "PageUp", desc: "Scroll Chat", usage: "Scroll up inside the open chat; PageDown and the arrow keys scroll too." },
          { keys: "Ctrl + O", desc: "Send File", usage: "Open the file picker to send a file to the current chat." },
          { keys: "Esc", desc: "Go Back / Cancel", usage: "Exit the chat or search, or cancel the current action." },
        ]
      },
      {
        name: "Folders & Jumping",
        shortcuts: [
          { keys: "Ctrl + Shift + Down", desc: "Next Folder", usage: "Move to the chat folder below." },
          { keys: "Ctrl + Shift + Up", desc: "Previous Folder", usage: "Move to the chat folder above." },
          { keys: "Ctrl + 1", desc: "Jump to Folder", usage: "Ctrl + 1 through Ctrl + 7 jump straight to that folder; with no folders they open pinned chats 1–5." },
          { keys: "Ctrl + 8", desc: "Last Folder", usage: "Jump to the last chat folder." },
          { keys: "Ctrl + 0", desc: "Saved Messages", usage: "Open your Saved Messages chat." },
          { keys: "Ctrl + 9", desc: "Archived Chats", usage: "Open the archived chats list." },
          { keys: "Alt + Enter", desc: "Jump to Bottom", usage: "Jump to the bottom of the chat, or scroll the chat list back to the top." },
        ]
      },
      {
        name: "Messages",
        shortcuts: [
          { keys: "Ctrl + Up", desc: "Reply to Message", usage: "Pick the message above to reply to; press again to move higher." },
          { keys: "Ctrl + Down", desc: "Reply Below / Cancel", usage: "Move the reply selection down; at the bottom it cancels the reply (Esc also cancels)." },
          { keys: "Up", desc: "Edit Last Message", usage: "Edit the last message you sent." },
          { keys: "Delete", desc: "Delete Message", usage: "Delete the currently selected message." },
          { keys: "Ctrl + +", desc: "Zoom Media In", usage: "Zoom into the opened image or video (numpad plus)." },
          { keys: "Ctrl + -", desc: "Zoom Media Out", usage: "Zoom out of the opened image or video (numpad minus)." },
        ]
      },
      {
        name: "Search",
        shortcuts: [
          { keys: "Ctrl + F", desc: "Search in Chat", usage: "Search the currently selected chat." },
          { keys: "Ctrl + J", desc: "Search Contact", usage: "Search your contacts." },
        ]
      },
      {
        name: "Window",
        shortcuts: [
          { keys: "Ctrl + W", desc: "Minimize to Tray", usage: "Hide Telegram to the system tray; Alt + F4 does the same." },
          { keys: "Ctrl + M", desc: "Minimize Window", usage: "Minimize the Telegram window." },
          { keys: "Ctrl + L", desc: "Lock Telegram", usage: "Lock the app with your local passcode." },
          { keys: "Ctrl + Q", desc: "Quit Telegram", usage: "Quit the application." },
        ]
      },
      {
        name: "Text Formatting",
        shortcuts: [
          { keys: "Ctrl + B", desc: "Bold", usage: "Make the selected text bold. macOS: Cmd + B." },
          { keys: "Ctrl + I", desc: "Italic", usage: "Make the selected text italic. macOS: Cmd + I." },
          { keys: "Ctrl + U", desc: "Underline", usage: "Underline the selected text." },
          { keys: "Ctrl + Shift + X", desc: "Strikethrough", usage: "Strike through the selected text." },
          { keys: "Ctrl + K", desc: "Create Link", usage: "Turn the selected text into a link." },
          { keys: "Ctrl + Shift + M", desc: "Monospace", usage: "Format the selection as monospace code." },
          { keys: "Ctrl + Shift + P", desc: "Spoiler", usage: "Hide the selection behind a spoiler." },
          { keys: "Ctrl + Shift + .", desc: "Quote", usage: "Format the selection as a quote block." },
          { keys: "Ctrl + Shift + N", desc: "Plain Text", usage: "Remove all formatting from the selection." },
        ]
      },
    ]
  },
  todoist: {
    name: 'Todoist',
    icon: 'fas fa-check-circle',
    categories: [
      {
        name: 'Task Management',
        shortcuts: [
          { keys: 'Q', desc: 'Quick Add', usage: 'Quickly add a new task.' },
          { keys: 'A', desc: 'Add Task Bottom', usage: 'Add task at the bottom.' },
          { keys: 'Shift + A', desc: 'Add Task Top', usage: 'Add task at the top.' },
          { keys: '/', desc: 'Search', usage: 'Search tasks, projects, labels.' },
          { keys: 'E', desc: 'Edit Task', usage: 'Edit selected task.' },
          { keys: 'Ctrl + Enter', desc: 'Complete Task', usage: 'Mark task as complete.' },
          { keys: '#', desc: 'Set Project', usage: 'Assign project to task.' },
          { keys: '@', desc: 'Set Label', usage: 'Add label to task.' },
          { keys: 'P1~P4', desc: 'Set Priority', usage: 'Set task priority level.' },
        ]
      },
    ]
  },
  miro: {
    name: 'Miro',
    icon: 'fas fa-chalkboard',
    categories: [
      {
        name: 'Board Editing',
        shortcuts: [
          { keys: 'V', desc: 'Select Tool', usage: 'Switch to selection tool.' },
          { keys: 'H', desc: 'Hand Tool', usage: 'Drag to pan the board.' },
          { keys: 'T', desc: 'Text Tool', usage: 'Add text.' },
          { keys: 'S', desc: 'Sticky Note', usage: 'Add a sticky note.' },
          { keys: 'R', desc: 'Rectangle', usage: 'Draw a rectangle.' },
          { keys: 'O', desc: 'Circle', usage: 'Draw a circle.' },
          { keys: 'L', desc: 'Connection Line', usage: 'Draw a connection line.' },
          { keys: 'P', desc: 'Pen Tool', usage: 'Freehand drawing.' },
          { keys: 'C', desc: 'Comment', usage: 'Add a comment.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate selected objects.' },
          { keys: 'Ctrl + G', desc: 'Group', usage: 'Group selected objects.' },
          { keys: 'Ctrl + Shift + 1', desc: 'Fit to Screen', usage: 'Fit board to screen.' },
        ]
      },
    ]
  },
  linear: {
    name: 'Linear',
    icon: 'fas fa-tasks',
    categories: [
      {
        name: 'Issue Management',
        shortcuts: [
          { keys: 'C', desc: 'New Issue', usage: 'Create a new issue.' },
          { keys: 'Ctrl + K', desc: 'Command Palette', usage: 'Search and execute commands.' },
          { keys: 'S', desc: 'Change Status', usage: 'Change issue status.' },
          { keys: 'A', desc: 'Change Assignee', usage: 'Change issue assignee.' },
          { keys: 'P', desc: 'Change Priority', usage: 'Change issue priority.' },
          { keys: 'L', desc: 'Add Label', usage: 'Add label to issue.' },
          { keys: 'D', desc: 'Set Due Date', usage: 'Set issue due date.' },
          { keys: 'J / K', desc: 'Navigate Issues', usage: 'Move to next/previous issue.' },
          { keys: 'X', desc: 'Select Issue', usage: 'Select/deselect issue.' },
          { keys: '?', desc: 'Shortcuts List', usage: 'Show keyboard shortcuts.' },
        ]
      },
    ]
  },
  notepadpp: {
    name: 'Notepad++',
    icon: 'fas fa-file-code',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + D', desc: 'Duplicate Line', usage: 'Duplicate current line.' },
          { keys: 'Ctrl + L', desc: 'Delete Line', usage: 'Delete current line.' },
          { keys: 'Ctrl + T', desc: 'Swap Lines', usage: 'Swap current and above line.' },
          { keys: 'Ctrl + Shift + Up/Down', desc: 'Move Line', usage: 'Move line up or down.' },
          { keys: 'Ctrl + Q', desc: 'Toggle Comment', usage: 'Comment/uncomment line.' },
          { keys: 'Ctrl + G', desc: 'Go to Line', usage: 'Jump to line number.' },
          { keys: 'Ctrl + H', desc: 'Find & Replace', usage: 'Find and replace text.' },
          { keys: 'Ctrl + Shift + F', desc: 'Find in Files', usage: 'Search across multiple files.' },
          { keys: 'Alt + Shift + Arrow', desc: 'Column Select', usage: 'Select text in column mode.' },
        ]
      },
      {
        name: 'Files & Tabs',
        shortcuts: [
          { keys: 'Ctrl + Tab', desc: 'Next Tab', usage: 'Switch to next document tab.' },
          { keys: 'Ctrl + W', desc: 'Close Tab', usage: 'Close current tab.' },
          { keys: 'Ctrl + Shift + S', desc: 'Save All', usage: 'Save all open files.' },
          { keys: 'Alt + 0', desc: 'Collapse All', usage: 'Collapse all code blocks.' },
          { keys: 'Alt + Shift + 0', desc: 'Expand All', usage: 'Expand all code blocks.' },
        ]
      },
    ]
  },
  gimp: {
    name: 'GIMP',
    icon: 'fas fa-paint-brush',
    categories: [
      {
        name: 'Tools',
        shortcuts: [
          { keys: 'R', desc: 'Rectangle Select', usage: 'Select rectangular area.' },
          { keys: 'E', desc: 'Ellipse Select', usage: 'Select elliptical area.' },
          { keys: 'P', desc: 'Pencil', usage: 'Draw with pencil tool.' },
          { keys: 'N', desc: 'Paintbrush', usage: 'Draw with paintbrush.' },
          { keys: 'Shift + E', desc: 'Eraser', usage: 'Erase with eraser tool.' },
          { keys: 'G', desc: 'Gradient', usage: 'Apply gradient fill.' },
          { keys: 'Shift + B', desc: 'Bucket Fill', usage: 'Fill area with color.' },
          { keys: 'T', desc: 'Text', usage: 'Add text.' },
          { keys: 'M', desc: 'Move', usage: 'Move layers or objects.' },
          { keys: '+/-', desc: 'Zoom', usage: 'Zoom in or out.' },
        ]
      },
      {
        name: 'Layers & Image',
        shortcuts: [
          { keys: 'Ctrl + Shift + N', desc: 'New Layer', usage: 'Add a new layer.' },
          { keys: 'Ctrl + Shift + E', desc: 'Export', usage: 'Export image to file.' },
          { keys: 'Ctrl + Shift + A', desc: 'Deselect', usage: 'Remove all selections.' },
          { keys: 'Ctrl + I', desc: 'Invert Colors', usage: 'Invert image colors.' },
        ]
      },
    ]
  },
  jira: {
    name: 'Jira',
    icon: 'fab fa-jira',
    categories: [
      {
        name: 'Issue Management',
        shortcuts: [
          { keys: 'C', desc: 'Create Issue', usage: 'Create a new issue.' },
          { keys: 'G + D', desc: 'Dashboard', usage: 'Go to dashboard.' },
          { keys: 'G + B', desc: 'Board', usage: 'Go to board view.' },
          { keys: '/', desc: 'Search', usage: 'Search issues.' },
          { keys: 'J', desc: 'Next Issue', usage: 'Move to next issue.' },
          { keys: 'K', desc: 'Previous Issue', usage: 'Move to previous issue.' },
          { keys: 'O', desc: 'Open Issue', usage: 'Open selected issue.' },
          { keys: 'A', desc: 'Assign', usage: 'Change issue assignee.' },
          { keys: 'M', desc: 'Comment', usage: 'Add a comment.' },
          { keys: 'E', desc: 'Edit Issue', usage: 'Edit the issue.' },
          { keys: '?', desc: 'Shortcuts List', usage: 'Show keyboard shortcuts.' },
        ]
      },
    ]
  },
  capcut: {
    name: 'CapCut',
    icon: 'fas fa-film',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + B', desc: 'Split', usage: 'Split clip at playhead position.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete selected clip.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate selected clip.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Ctrl + Y', desc: 'Redo', usage: 'Redo undone action.' },
          { keys: 'Space', desc: 'Play/Pause', usage: 'Toggle timeline playback.' },
          { keys: 'Left/Right', desc: 'Frame Step', usage: 'Move one frame forward/backward.' },
          { keys: 'Ctrl + +/-', desc: 'Timeline Zoom', usage: 'Zoom timeline in/out.' },
          { keys: 'Ctrl + S', desc: 'Save Project', usage: 'Save current project.' },
          { keys: 'Ctrl + E', desc: 'Export', usage: 'Export video.' },
        ]
      },
    ]
  },
  arc: {
    name: 'Arc Browser',
    icon: 'fas fa-compass',
    categories: [
      {
        name: 'Tabs & Spaces',
        shortcuts: [
          { keys: 'Cmd + T', desc: 'New Tab', usage: 'Open a new tab.' },
          { keys: 'Cmd + W', desc: 'Close Tab', usage: 'Close current tab.' },
          { keys: 'Cmd + S', desc: 'Pin Tab', usage: 'Pin tab to sidebar.' },
          { keys: 'Ctrl + 1~8', desc: 'Switch Space', usage: 'Switch to specific space.' },
          { keys: 'Cmd + D', desc: 'Split View', usage: 'Split screen with two tabs.' },
          { keys: 'Cmd + L', desc: 'Command Bar', usage: 'Open Arc command bar.' },
          { keys: 'Cmd + \\', desc: 'Toggle Sidebar', usage: 'Show or hide sidebar.' },
        ]
      },
    ]
  },
  warp: {
    name: 'Warp Terminal',
    icon: 'fas fa-terminal',
    categories: [
      {
        name: 'Terminal',
        shortcuts: [
          { keys: 'Ctrl + R', desc: 'Search Commands', usage: 'Search command history.' },
          { keys: 'Ctrl + Shift + R', desc: 'AI Search', usage: 'Search commands with AI.' },
          { keys: 'Ctrl + L', desc: 'Clear Screen', usage: 'Clear terminal screen.' },
          { keys: 'Ctrl + A', desc: 'Line Start', usage: 'Move cursor to line start.' },
          { keys: 'Ctrl + E', desc: 'Line End', usage: 'Move cursor to line end.' },
          { keys: 'Ctrl + W', desc: 'Delete Word', usage: 'Delete word before cursor.' },
          { keys: 'Ctrl + T', desc: 'New Tab', usage: 'Open new terminal tab.' },
          { keys: 'Ctrl + D', desc: 'Close Tab', usage: 'Close current tab.' },
          { keys: 'Ctrl + Shift + C', desc: 'Copy Output', usage: 'Copy last command output.' },
        ]
      },
    ]
  },
  ableton: {
    name: 'Ableton Live',
    icon: 'fas fa-music',
    categories: [
      {
        name: 'Playback & Recording',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Stop', usage: 'Start or stop playback.' },
          { keys: 'F9', desc: 'Record', usage: 'Start recording.' },
          { keys: 'Home', desc: 'Go to Start', usage: 'Go to arrangement start.' },
        ]
      },
      {
        name: 'Editing & View',
        shortcuts: [
          { keys: 'Ctrl + E', desc: 'Split', usage: 'Split clip at selection.' },
          { keys: 'Ctrl + J', desc: 'Consolidate', usage: 'Consolidate selected clips.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate clip or track.' },
          { keys: 'Ctrl + R', desc: 'Rename', usage: 'Rename selected item.' },
          { keys: 'Ctrl + T', desc: 'Add Audio Track', usage: 'Add new audio track.' },
          { keys: 'Ctrl + Shift + T', desc: 'Add MIDI Track', usage: 'Add new MIDI track.' },
          { keys: 'Tab', desc: 'Session/Arrange', usage: 'Toggle session and arrangement view.' },
          { keys: 'Ctrl + L', desc: 'Set Loop', usage: 'Set selection as loop.' },
          { keys: 'Ctrl + G', desc: 'Group Tracks', usage: 'Group selected tracks.' },
        ]
      },
    ]
  },
  openai_codex: {
    name: 'OpenAI Codex CLI',
    icon: 'fas fa-terminal',
    categories: [
      {
        name: 'Basic Commands',
        shortcuts: [
          { keys: 'Esc', desc: 'Stop response', usage: 'Stop the currently generating response.' },
          { keys: 'Up / Down', desc: 'Browse history', usage: 'Navigate through prompt history.' },
          { keys: 'Tab', desc: 'Autocomplete', usage: 'Autocomplete file names or commands.' },
          { keys: 'Ctrl + C', desc: 'Cancel', usage: 'Cancel the current operation.' },
          { keys: 'Ctrl + L', desc: 'Clear screen', usage: 'Clear the terminal screen.' },
          { keys: 'Ctrl + D', desc: 'Exit', usage: 'Exit Codex CLI.' },
        ]
      },
    ]
  },
  openclaw: {
    name: 'OpenClaw',
    icon: 'fas fa-robot',
    categories: [
      {
        name: 'Slash Commands',
        shortcuts: [
          { keys: '/help', desc: 'Help', usage: 'Display the core help menu.' },
          { keys: '/status', desc: 'Status', usage: 'Show channel health and recent sessions.' },
          { keys: '/compact', desc: 'Compact', usage: 'Summarize conversation and reset context.' },
          { keys: '/model', desc: 'Switch model', usage: 'Switch the active LLM model.' },
          { keys: '/commands', desc: 'List commands', usage: 'Show all available commands.' },
          { keys: '/usage', desc: 'Usage', usage: 'Check API usage and costs.' },
          { keys: '/restart', desc: 'Restart', usage: 'Restart the agent.' },
          { keys: '/btw', desc: 'Side question', usage: 'Quick side question during current task.' },
        ]
      },
      {
        name: 'TUI/CLI Shortcuts',
        shortcuts: [
          { keys: 'Ctrl + L', desc: 'Model picker', usage: 'Open LLM model selector.' },
          { keys: 'Ctrl + C', desc: 'Stop', usage: 'Stop current execution.' },
          { keys: 'openclaw onboard', desc: 'Setup', usage: 'Run the initial setup wizard.' },
          { keys: 'openclaw doctor', desc: 'Diagnose', usage: 'Diagnose configuration errors.' },
          { keys: 'openclaw tui', desc: 'Launch TUI', usage: 'Launch the terminal interface.' },
          { keys: 'openclaw skills list', desc: 'List skills', usage: 'Show installed skills.' },
        ]
      },
    ]
  },
  claude_code: {
    name: 'Claude Code',
    icon: 'fas fa-terminal',
    categories: [
      {
        name: 'Core Commands',
        shortcuts: [
          { keys: '/help', desc: 'Show help', usage: 'Display all available slash commands.' },
          { keys: '/clear', desc: 'Clear conversation', usage: 'Clear the current conversation history.' },
          { keys: '/compact', desc: 'Compact mode', usage: 'Compress conversation context to save tokens.' },
          { keys: '/cost', desc: 'Show token cost', usage: 'Display token usage and cost for the session.' },
          { keys: '/status', desc: 'Account status', usage: 'Show current account and API status.' },
          { keys: '/doctor', desc: 'Health check', usage: 'Diagnose configuration and environment issues.' },
          { keys: '/bug', desc: 'Report bug', usage: 'Open a pre-filled bug report.' },
          { keys: '/release-notes', desc: 'Release notes', usage: 'Show the latest Claude Code release notes.' },
          { keys: 'Esc', desc: 'Stop / interrupt', usage: 'Stop the current response or operation immediately.' },
          { keys: 'Ctrl + C', desc: 'Cancel', usage: 'Cancel the current operation or exit.' },
        ]
      },
      {
        name: 'File & Code Operations',
        shortcuts: [
          { keys: 'Tab', desc: 'Autocomplete path', usage: 'Autocomplete file names and directory paths.' },
          { keys: '/add-dir <path>', desc: 'Add directory', usage: 'Add an additional directory to the working context.' },
          { keys: '/diff', desc: 'Show diff', usage: 'Display pending file changes as a diff.' },
          { keys: '/undo', desc: 'Undo last edit', usage: 'Revert the most recent file modification.' },
          { keys: '/ls', desc: 'List files', usage: 'Show files in the current working directory.' },
        ]
      },
      {
        name: 'MCP & Integrations',
        shortcuts: [
          { keys: '/mcp', desc: 'MCP status', usage: 'Show connected MCP (Model Context Protocol) servers.' },
          { keys: '/mcp add <name>', desc: 'Add MCP server', usage: 'Connect a new MCP server by name or URL.' },
          { keys: '/permissions', desc: 'Edit permissions', usage: 'View and edit tool permission settings.' },
          { keys: '--allowedTools', desc: 'Allow specific tools', usage: 'Flag to whitelist specific tools when starting.' },
          { keys: '--dangerously-skip-permissions', desc: 'Skip permission prompts', usage: 'Skip all permission checks (use with caution).' },
        ]
      },
      {
        name: 'CLI Flags (Startup)',
        shortcuts: [
          { keys: 'claude --print', desc: 'Print mode (-p)', usage: 'Non-interactive mode: print response and exit.' },
          { keys: 'claude --model <id>', desc: 'Select model', usage: 'Specify which Claude model to use.' },
          { keys: 'claude --continue', desc: 'Continue last session', usage: 'Resume the most recent conversation.' },
          { keys: 'claude --resume <id>', desc: 'Resume by ID', usage: 'Resume a specific past conversation by session ID.' },
          { keys: 'cat file.py | claude', desc: 'Pipe input', usage: 'Pipe file or stdin content directly into Claude Code.' },
          { keys: 'claude --no-markdown', desc: 'Plain text output', usage: 'Disable Markdown formatting in responses.' },
          { keys: 'claude --output-format json', desc: 'JSON output', usage: 'Return structured JSON output for scripting.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'Think step by step', desc: 'Activate reasoning', usage: 'Triggers extended thinking for complex problems.' },
          { keys: 'Use ultrathink', desc: 'Deep reasoning mode', usage: 'Activates maximum thinking budget for hard tasks.' },
          { keys: 'Be concise', desc: 'Shorter responses', usage: 'Instructs Claude to give compact answers.' },
          { keys: 'Implement, do not explain', desc: 'Code-only mode', usage: 'Skip explanations and produce code directly.' },
          { keys: 'Run the tests after', desc: 'Auto-validate', usage: 'Tell Claude to run tests after making changes.' },
          { keys: 'Do not modify other files', desc: 'Scope limit', usage: 'Restrict changes to specified files only.' },
        ]
      },
    ]
  },
  gemini: {
    name: 'Gemini',
    icon: 'fas fa-gem',
    categories: [
      {
        name: 'Web Shortcuts',
        shortcuts: [
          { keys: 'Enter', desc: 'Send message', usage: 'Submit your prompt to Gemini.' },
          { keys: 'Shift + Enter', desc: 'New line', usage: 'Add a line break without sending.' },
          { keys: 'Ctrl + Shift + C', desc: 'Copy response', usage: 'Copy the last response to clipboard.' },
          { keys: 'Ctrl + Z', desc: 'Edit last message', usage: 'Edit your last sent message.' },
          { keys: 'Ctrl + /', desc: 'Keyboard shortcuts', usage: 'Display the keyboard shortcuts reference.' },
        ]
      },
      {
        name: 'Gemini CLI',
        shortcuts: [
          { keys: 'gemini', desc: 'Start interactive', usage: 'Launch interactive Gemini CLI session.' },
          { keys: 'gemini -p "prompt"', desc: 'One-shot prompt', usage: 'Send a single prompt and get a response.' },
          { keys: 'cat file | gemini', desc: 'Pipe input', usage: 'Pipe file content as context.' },
          { keys: '/help', desc: 'Show commands', usage: 'Display available CLI slash commands.' },
          { keys: '/clear', desc: 'Clear history', usage: 'Clear the conversation history.' },
          { keys: '/quit', desc: 'Exit', usage: 'Exit the Gemini CLI.' },
          { keys: '/tools', desc: 'List tools', usage: 'Show available integrated tools.' },
          { keys: '/mcp', desc: 'MCP status', usage: 'Show connected MCP servers.' },
          { keys: '--model gemini-2.0-flash', desc: 'Select model', usage: 'Specify model version on startup.' },
          { keys: '--yolo', desc: 'Auto-approve mode', usage: 'Skip confirmation prompts for file edits.' },
          { keys: '--debug', desc: 'Debug mode', usage: 'Show detailed debug output.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'Analyze this image: [upload]', desc: 'Vision input', usage: 'Use Gemini\'s multimodal capabilities with images.' },
          { keys: 'Summarize this document', desc: 'Long context', usage: 'Leverage Gemini\'s 1M+ token context window.' },
          { keys: 'Think step by step', desc: 'Reasoning mode', usage: 'Activate chain-of-thought reasoning.' },
          { keys: 'Use grounding (Google Search)', desc: 'Web grounding', usage: 'Ground responses with real-time Google Search data.' },
          { keys: 'Generate with code execution', desc: 'Code runner', usage: 'Ask Gemini to write and execute Python code.' },
          { keys: 'Compare these two files', desc: 'Multi-document', usage: 'Provide multiple documents for comparison.' },
          { keys: 'Respond in JSON format', desc: 'Structured output', usage: 'Request machine-readable JSON responses.' },
          { keys: 'Watch this video and summarize', desc: 'Video analysis', usage: 'Upload a video for Gemini to analyse.' },
        ]
      },
    ]
  },
  midjourney: {
    name: 'Midjourney',
    icon: 'fas fa-image',
    categories: [
      {
        name: 'Discord Commands',
        shortcuts: [
          { keys: '/imagine', desc: 'Generate image', usage: 'Generate an image from a text prompt.' },
          { keys: '/describe', desc: 'Describe image', usage: 'Describe an uploaded image in text.' },
          { keys: '/blend', desc: 'Blend images', usage: 'Blend 2-5 images together.' },
          { keys: '/settings', desc: 'Settings', usage: 'Configure model version, quality, etc.' },
          { keys: '/info', desc: 'Account info', usage: 'Check subscription and usage.' },
          { keys: 'U1~U4', desc: 'Upscale', usage: 'Upscale the selected image.' },
          { keys: 'V1~V4', desc: 'Create variation', usage: 'Generate a variation of the selected image.' },
        ]
      },
      {
        name: 'Prompt Parameters',
        shortcuts: [
          { keys: '--ar 16:9', desc: 'Wide aspect ratio', usage: 'Generate wide landscape images.' },
          { keys: '--ar 9:16', desc: 'Tall aspect ratio', usage: 'Generate tall portrait images.' },
          { keys: '--style raw', desc: 'Raw style', usage: 'Reduce default beautification.' },
          { keys: '--chaos 0~100', desc: 'Variation control', usage: 'Higher values = more diverse results.' },
          { keys: '--no [element]', desc: 'Negative prompt', usage: 'Exclude elements (e.g. --no text).' },
          { keys: '--q 2', desc: 'High quality', usage: 'Increase rendering quality.' },
          { keys: '--seed [number]', desc: 'Fix seed', usage: 'Reproduce similar compositions.' },
          { keys: '--tile', desc: 'Tile pattern', usage: 'Generate seamless tile patterns.' },
        ]
      },
    ]
  },
  perplexity: {
    name: 'Perplexity',
    icon: 'fas fa-magnifying-glass',
    categories: [
      {
        name: 'Web Shortcuts',
        shortcuts: [
          { keys: 'Ctrl + K', desc: 'New search', usage: 'Start a new Perplexity search from anywhere.' },
          { keys: 'Enter', desc: 'Submit query', usage: 'Send your search query.' },
          { keys: 'Ctrl + Enter', desc: 'New thread', usage: 'Start a fresh conversation thread.' },
          { keys: '/', desc: 'Focus search', usage: 'Move cursor to the search input.' },
        ]
      },
      {
        name: 'Search Operators',
        shortcuts: [
          { keys: 'site:example.com query', desc: 'Site search', usage: 'Search within a specific website.' },
          { keys: '"exact phrase"', desc: 'Exact match', usage: 'Search for an exact phrase in quotes.' },
          { keys: 'query filetype:pdf', desc: 'File type filter', usage: 'Find PDF documents about a topic.' },
          { keys: 'query after:2024', desc: 'Date filter', usage: 'Restrict results to after a specific year.' },
          { keys: '-exclude term', desc: 'Exclude term', usage: 'Remove a word from search results.' },
        ]
      },
      {
        name: 'Focus Modes',
        shortcuts: [
          { keys: 'Web (default)', desc: 'General web search', usage: 'Search across the entire web.' },
          { keys: 'Academic', desc: 'Research papers', usage: 'Search peer-reviewed academic sources.' },
          { keys: 'YouTube', desc: 'Video search', usage: 'Find and summarise YouTube videos.' },
          { keys: 'Reddit', desc: 'Community search', usage: 'Search Reddit discussions and threads.' },
          { keys: 'Writing', desc: 'Writing assistant', usage: 'Draft and edit text without web citations.' },
          { keys: 'Math', desc: 'Math solver', usage: 'Solve mathematical problems step by step.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'Explain like I\'m 5', desc: 'Simple explanation', usage: 'Get a simplified explanation of complex topics.' },
          { keys: 'What are the latest updates on...', desc: 'Real-time info', usage: 'Leverage Perplexity\'s real-time search capability.' },
          { keys: 'Compare X vs Y', desc: 'Comparison query', usage: 'Get a structured side-by-side comparison.' },
          { keys: 'Give me a step-by-step guide', desc: 'Tutorial mode', usage: 'Request numbered, actionable instructions.' },
          { keys: 'Cite your sources', desc: 'Source request', usage: 'Ask Perplexity to list its source references.' },
          { keys: 'Summarize this URL: <url>', desc: 'URL summary', usage: 'Summarise the content of any webpage.' },
          { keys: 'What do experts say about...', desc: 'Expert opinion', usage: 'Filter for authoritative expert sources.' },
        ]
      },
    ]
  },
  v0: {
    name: 'v0',
    icon: 'fas fa-code',
    categories: [
      {
        name: 'Editor Shortcuts',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Generate / Submit', usage: 'Submit prompt and generate UI component.' },
          { keys: 'Ctrl + K', desc: 'Command menu', usage: 'Open the quick command menu.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last generation or edit.' },
          { keys: 'Ctrl + Shift + Z', desc: 'Redo', usage: 'Redo the last undone generation.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'Use shadcn/ui', desc: 'Component library', usage: 'Specify shadcn/ui for styled components.' },
          { keys: 'Tailwind CSS only', desc: 'Styling constraint', usage: 'Limit styling to Tailwind utility classes.' },
          { keys: 'Mobile-first, responsive', desc: 'Responsive design', usage: 'Request layouts that work on all screen sizes.' },
          { keys: 'Dark mode support', desc: 'Theme toggle', usage: 'Ask for dark/light mode toggle implementation.' },
          { keys: 'Add TypeScript types', desc: 'Type safety', usage: 'Request fully typed components.' },
          { keys: 'No external dependencies', desc: 'Dependency control', usage: 'Keep the component dependency-free.' },
          { keys: 'Use lucide-react icons', desc: 'Icon library', usage: 'Specify lucide-react for consistent icon usage.' },
          { keys: 'Make it accessible (ARIA)', desc: 'Accessibility', usage: 'Request ARIA labels and keyboard navigation.' },
          { keys: 'Add loading and error states', desc: 'State handling', usage: 'Include skeleton loaders and error UI.' },
          { keys: 'Animate with Framer Motion', desc: 'Animations', usage: 'Use Framer Motion for smooth transitions.' },
          { keys: 'Export as named component', desc: 'Export style', usage: 'Request named exports instead of default.' },
        ]
      },
      {
        name: 'Iteration Commands',
        shortcuts: [
          { keys: 'Make it more minimal', desc: 'Simplify UI', usage: 'Reduce visual complexity.' },
          { keys: 'Add more interactivity', desc: 'Enhance UX', usage: 'Request hover effects and click animations.' },
          { keys: 'Fix the layout on mobile', desc: 'Mobile fix', usage: 'Target responsive layout issues.' },
          { keys: 'Split into subcomponents', desc: 'Refactor', usage: 'Decompose a large component into smaller ones.' },
          { keys: 'Add form validation', desc: 'Validation', usage: 'Add client-side form validation logic.' },
        ]
      },
    ]
  },
  windsurf: {
    name: 'Windsurf',
    icon: 'fas fa-wind',
    categories: [
      {
        name: 'Cascade AI Core',
        shortcuts: [
          { keys: 'Ctrl + L', desc: 'Open Cascade chat', usage: 'Open the Cascade AI chat panel.' },
          { keys: 'Ctrl + I', desc: 'Inline AI edit', usage: 'Trigger inline code generation or modification.' },
          { keys: 'Ctrl + Shift + L', desc: 'Cascade with selection', usage: 'Send selected code to Cascade with context.' },
          { keys: 'Tab', desc: 'Accept suggestion', usage: 'Accept the current AI inline suggestion.' },
          { keys: 'Esc', desc: 'Reject suggestion', usage: 'Dismiss the current AI suggestion.' },
          { keys: 'Alt + ]', desc: 'Next suggestion', usage: 'Cycle to the next AI suggestion.' },
          { keys: 'Alt + [', desc: 'Previous suggestion', usage: 'Cycle to the previous AI suggestion.' },
        ]
      },
      {
        name: 'Editor (VS Code Base)',
        shortcuts: [
          { keys: 'Ctrl + P', desc: 'Quick open file', usage: 'Fuzzy search and open any file in the project.' },
          { keys: 'Ctrl + Shift + P', desc: 'Command palette', usage: 'Open the command palette.' },
          { keys: 'Ctrl + `', desc: 'Toggle terminal', usage: 'Open or close the integrated terminal.' },
          { keys: 'Ctrl + /', desc: 'Toggle comment', usage: 'Comment or uncomment the selected lines.' },
          { keys: 'Ctrl + D', desc: 'Select next match', usage: 'Add next occurrence of selected text to selection.' },
          { keys: 'Alt + Up/Down', desc: 'Move line', usage: 'Move the current line up or down.' },
          { keys: 'Ctrl + Shift + K', desc: 'Delete line', usage: 'Delete the entire current line.' },
          { keys: 'Ctrl + B', desc: 'Toggle sidebar', usage: 'Show or hide the file explorer sidebar.' },
          { keys: 'F2', desc: 'Rename symbol', usage: 'Rename a variable or function across the project.' },
          { keys: 'F12', desc: 'Go to definition', usage: 'Jump to the definition of a symbol.' },
          { keys: 'Ctrl + Shift + F', desc: 'Search all files', usage: 'Search text across the entire project.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last change.' },
          { keys: 'Ctrl + Shift + Z', desc: 'Redo', usage: 'Redo the last undone change.' },
        ]
      },
      {
        name: 'Flows & Memories',
        shortcuts: [
          { keys: '/memory', desc: 'View memories', usage: 'List saved Cascade memories for the project.' },
          { keys: '/remember <text>', desc: 'Save memory', usage: 'Permanently save a fact or rule for future sessions.' },
          { keys: '@filename', desc: 'Mention file', usage: 'Reference a specific file in the Cascade prompt.' },
          { keys: '@codebase', desc: 'Full codebase context', usage: 'Give Cascade context of the entire codebase.' },
          { keys: 'Write mode', desc: 'Autonomous edits', usage: 'Cascade makes file changes automatically.' },
          { keys: 'Chat mode', desc: 'Ask only', usage: 'Cascade answers questions without editing files.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'Use @filename to focus', desc: 'File scoping', usage: 'Direct Cascade to a specific file for precise edits.' },
          { keys: 'Be specific about scope', desc: 'Precision', usage: 'Name the function or class you want changed.' },
          { keys: 'Ask for a plan first', desc: 'Plan before code', usage: 'Request a written plan before implementation.' },
        ]
      },
    ]
  },
  bolt: {
    name: 'Bolt.new',
    icon: 'fas fa-bolt',
    categories: [
      {
        name: 'Editor',
        shortcuts: [
          { keys: 'Enter', desc: 'Send prompt', usage: 'Send the prompt.' },
          { keys: 'Shift + Enter', desc: 'New line', usage: 'Add a new line without sending.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last change.' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save the current project.' },
          { keys: 'Ctrl + Shift + P', desc: 'Command palette', usage: 'Open command palette.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'Specify stack', desc: 'Framework choice', usage: 'Specify React, Next.js, Vue or other frameworks.' },
          { keys: 'UI library', desc: 'Design system', usage: 'Specify Tailwind, shadcn/ui or other UI libraries.' },
          { keys: 'Reference image', desc: 'Design reference', usage: 'Attach screenshots or URLs for design reference.' },
        ]
      },
    ]
  },
  replit_ai: {
    name: 'Replit AI',
    icon: 'fas fa-code',
    categories: [
      {
        name: 'Editor',
        shortcuts: [
          { keys: 'Ctrl + I', desc: 'AI Chat', usage: 'Open Replit AI chat.' },
          { keys: 'Tab', desc: 'Accept suggestion', usage: 'Accept AI code suggestion.' },
          { keys: 'Esc', desc: 'Dismiss', usage: 'Dismiss AI suggestion.' },
          { keys: 'Ctrl + Enter', desc: 'Run', usage: 'Run current code.' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save file.' },
          { keys: 'Ctrl + Shift + S', desc: 'Fork', usage: 'Fork the project.' },
        ]
      },
    ]
  },
  cline: {
    name: 'Cline',
    icon: 'fas fa-robot',
    categories: [
      {
        name: 'VS Code Commands',
        shortcuts: [
          { keys: 'Ctrl + Shift + P → Cline', desc: 'Open Cline', usage: 'Launch Cline from command palette.' },
          { keys: 'Ctrl + Shift + A', desc: 'Cline panel', usage: 'Toggle Cline sidebar panel.' },
          { keys: 'Enter', desc: 'Send message', usage: 'Send the prompt.' },
          { keys: 'Tab', desc: 'Approve changes', usage: 'Approve suggested code changes.' },
          { keys: 'Esc', desc: 'Cancel', usage: 'Cancel current operation.' },
          { keys: '@', desc: 'Mention context', usage: 'Reference files, folders, or URLs as context in your message.' },
          { keys: '/', desc: 'Slash commands', usage: 'Trigger commands like /newtask directly from the chat input.' },
          { keys: 'Shift + Enter', desc: 'New line', usage: 'Insert a line break in the chat input without sending.' },
          { keys: 'Ctrl + Shift + P → Cline: New Task', desc: 'New task', usage: 'Start a fresh Cline task from the command palette.' },
        ]
      },
    ]
  },
  aider: {
    name: 'Aider',
    icon: 'fas fa-terminal',
    categories: [
      {
        name: 'Terminal Commands',
        shortcuts: [
          { keys: '/add [file]', desc: 'Add file', usage: 'Add files to the chat for editing.' },
          { keys: '/drop [file]', desc: 'Drop file', usage: 'Remove files from the chat.' },
          { keys: '/run [cmd]', desc: 'Run command', usage: 'Execute a shell command.' },
          { keys: '/diff', desc: 'View changes', usage: 'View diff of last changes.' },
          { keys: '/undo', desc: 'Undo', usage: 'Revert the last change.' },
          { keys: '/model [name]', desc: 'Switch model', usage: 'Switch the AI model.' },
          { keys: '/architect', desc: 'Architect mode', usage: 'Switch to architect mode.' },
          { keys: 'Ctrl + C', desc: 'Stop', usage: 'Stop current operation.' },
        ]
      },
    ]
  },
  runway: {
    name: 'Runway ML',
    icon: 'fas fa-film',
    categories: [
      {
        name: 'Editor',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Pause', usage: 'Play or pause the preview.' },
          { keys: 'J / L', desc: 'Forward/Backward', usage: 'Navigate timeline forward and backward.' },
          { keys: 'I / O', desc: 'In/Out points', usage: 'Set clip start and end points.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Ctrl + E', desc: 'Export', usage: 'Export the video.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'Camera movement', desc: 'Camera control', usage: 'Specify pan left, zoom in, orbit for camera motion.' },
          { keys: 'Style reference', desc: 'Style control', usage: 'Specify cinematic, anime, watercolor styles.' },
          { keys: 'Image reference', desc: 'Start frame', usage: 'Upload a start image as the first frame.' },
        ]
      },
    ]
  },
  stable_diffusion: {
    name: 'Stable Diffusion',
    icon: 'fas fa-image',
    categories: [
      {
        name: 'Prompt Parameters',
        shortcuts: [
          { keys: '(keyword:1.5)', desc: 'Increase weight', usage: 'Increase keyword emphasis for stronger effect.' },
          { keys: '(keyword:0.5)', desc: 'Decrease weight', usage: 'Decrease keyword emphasis for weaker effect.' },
          { keys: '[keyword]', desc: 'Soft emphasis', usage: 'Bracket keyword for subtle emphasis.' },
          { keys: 'Negative prompt', desc: 'Negative prompt', usage: 'Specify elements to exclude (ugly, blurry, low quality).' },
          { keys: 'Steps: 20~50', desc: 'Sampling steps', usage: 'Higher = more detail but slower generation.' },
          { keys: 'CFG Scale: 7~12', desc: 'Prompt adherence', usage: 'Higher = more faithful to the prompt.' },
          { keys: 'Seed: [number]', desc: 'Fix seed', usage: 'Same seed reproduces consistent results.' },
          { keys: 'LoRA: <lora:name:1>', desc: 'Apply LoRA', usage: 'Apply a trained LoRA model.' },
        ]
      },
    ]
  },
  notebooklm: {
    name: 'NotebookLM',
    icon: 'fas fa-book-open',
    categories: [
      {
        name: 'Usage',
        shortcuts: [
          { keys: 'Add source', desc: 'Upload document', usage: 'Add PDFs, Google Docs, web URLs as sources.' },
          { keys: 'Ask question', desc: 'Source-based Q&A', usage: 'Ask questions based on uploaded sources.' },
          { keys: 'Create note', desc: 'Save note', usage: 'Save AI responses as notes.' },
          { keys: 'Audio Overview', desc: 'Generate podcast', usage: 'Generate AI podcast from sources.' },
          { keys: 'Generate FAQ', desc: 'Auto FAQ', usage: 'Auto-generate FAQs from sources.' },
          { keys: 'Summarize', desc: 'Document summary', usage: 'Summarize key content from uploaded docs.' },
        ]
      },
    ]
  },
  suno: {
    name: 'Suno AI',
    icon: 'fas fa-music',
    categories: [
      {
        name: 'Prompt Guide',
        shortcuts: [
          { keys: '[Verse]', desc: 'Verse section', usage: 'Specify a verse section in the song.' },
          { keys: '[Chorus]', desc: 'Chorus section', usage: 'Specify a chorus section.' },
          { keys: '[Bridge]', desc: 'Bridge section', usage: 'Specify a bridge section.' },
          { keys: '[Outro]', desc: 'Outro', usage: 'Specify the outro section.' },
          { keys: 'Genre tags', desc: 'Set genre', usage: 'Tag genres like pop, rock, jazz, hip-hop.' },
          { keys: 'BPM', desc: 'Set tempo', usage: 'Specify the song BPM (tempo).' },
        ]
      },
    ]
  },
  n8n: {
    name: 'n8n',
    icon: 'fas fa-project-diagram',
    categories: [
      {
        name: 'Workflow Editing',
        shortcuts: [
          { keys: 'Ctrl + S', desc: 'Save workflow', usage: 'Save the current workflow.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last action.' },
          { keys: 'Ctrl + Shift + Z', desc: 'Redo', usage: 'Redo the undone action.' },
          { keys: 'Ctrl + C', desc: 'Copy node', usage: 'Copy the selected node.' },
          { keys: 'Ctrl + V', desc: 'Paste node', usage: 'Paste the copied node.' },
          { keys: 'Ctrl + D', desc: 'Duplicate node', usage: 'Duplicate the selected node.' },
          { keys: 'Delete', desc: 'Delete node', usage: 'Delete the selected node.' },
          { keys: 'Tab', desc: 'Node panel', usage: 'Open or close the node panel.' },
          { keys: 'Ctrl + A', desc: 'Select all', usage: 'Select all nodes.' },
          { keys: 'F2', desc: 'Rename node', usage: 'Rename the selected node.' },
        ]
      },
      {
        name: 'Execution & Debug',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Run workflow', usage: 'Execute the entire workflow.' },
          { keys: 'Ctrl + Shift + Enter', desc: 'Run and continue', usage: 'Execute current node and continue.' },
          { keys: 'P', desc: 'Pin/Unpin data', usage: 'Pin or unpin node data.' },
          { keys: 'D', desc: 'Activate/Deactivate', usage: 'Toggle node active state.' },
          { keys: 'Ctrl + Shift + P', desc: 'Command palette', usage: 'Open command palette.' },
          { keys: 'Ctrl + K', desc: 'Command bar', usage: 'Open quick command bar.' },
        ]
      },
      {
        name: 'Canvas Navigation',
        shortcuts: [
          { keys: 'Ctrl + +/-', desc: 'Zoom in/out', usage: 'Zoom the canvas in or out.' },
          { keys: 'Ctrl + 0', desc: 'Fit all', usage: 'Fit all nodes in view.' },
          { keys: 'Ctrl + 1', desc: 'Zoom 100%', usage: 'Set canvas to 100% zoom.' },
          { keys: 'Space + Drag', desc: 'Pan canvas', usage: 'Drag to pan the canvas.' },
          { keys: 'Shift + Drag', desc: 'Multi-select', usage: 'Drag to select multiple nodes.' },
        ]
      },
    ]
  },
  make: {
    name: 'Make (Integromat)',
    icon: 'fas fa-cogs',
    categories: [
      {
        name: 'Scenario Editing',
        shortcuts: [
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save the current scenario.' },
          { keys: 'Ctrl + C', desc: 'Copy module', usage: 'Copy the selected module.' },
          { keys: 'Ctrl + V', desc: 'Paste module', usage: 'Paste the copied module.' },
          { keys: 'Ctrl + Enter', desc: 'Run once', usage: 'Run the scenario once.' },
          { keys: '+', desc: 'Zoom in', usage: 'Zoom in the canvas.' },
          { keys: '-', desc: 'Zoom out', usage: 'Zoom out the canvas.' },
          { keys: 'Space + Drag', desc: 'Pan canvas', usage: 'Move modules and canvas together.' },
          { keys: 'Shift + Drag', desc: 'Multi-select', usage: 'Drag to select multiple modules.' },
        ]
      },
    ]
  },
  zapier: {
    name: 'Zapier',
    icon: 'fas fa-bolt',
    categories: [
      {
        name: 'Canvas Editing',
        shortcuts: [
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last action.' },
          { keys: 'Ctrl + Shift + Z', desc: 'Redo', usage: 'Redo the undone action.' },
          { keys: 'Ctrl + C', desc: 'Copy', usage: 'Copy selected elements.' },
          { keys: 'Ctrl + V', desc: 'Paste', usage: 'Paste copied elements.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete selected elements.' },
          { keys: 'Ctrl + A', desc: 'Select all', usage: 'Select all elements.' },
          { keys: 'Ctrl + +/-', desc: 'Zoom in/out', usage: 'Zoom the canvas in or out.' },
          { keys: 'Space + Drag', desc: 'Pan canvas', usage: 'Drag to pan the canvas.' },
        ]
      },
    ]
  },
  power_automate: {
    name: 'Power Automate',
    icon: 'fas fa-bolt',
    categories: [
      {
        name: 'Flow Editing',
        shortcuts: [
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save the current flow.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last action.' },
          { keys: 'Ctrl + Y', desc: 'Redo', usage: 'Redo the undone action.' },
          { keys: 'Ctrl + C', desc: 'Copy', usage: 'Copy the selected step.' },
          { keys: 'Ctrl + V', desc: 'Paste', usage: 'Paste the copied step.' },
          { keys: 'F5', desc: 'Test run', usage: 'Test run the flow.' },
          { keys: 'Ctrl + Shift + P', desc: 'Command palette', usage: 'Open command palette.' },
          { keys: 'Ctrl + +/-', desc: 'Zoom in/out', usage: 'Zoom the designer in or out.' },
        ]
      },
    ]
  },
  retool: {
    name: 'Retool',
    icon: 'fas fa-th-large',
    categories: [
      {
        name: 'Editor',
        shortcuts: [
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save the current app.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last action.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate the selected component.' },
          { keys: 'Ctrl + E', desc: 'Preview', usage: 'Switch to app preview mode.' },
          { keys: 'Ctrl + B', desc: 'Edit mode', usage: 'Return to edit mode.' },
          { keys: 'Ctrl + K', desc: 'Search', usage: 'Search components and queries.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete the selected component.' },
          { keys: 'Ctrl + Enter', desc: 'Run query', usage: 'Execute the current query.' },
        ]
      },
    ]
  },
  airtable: {
    name: 'Airtable',
    icon: 'fas fa-table',
    categories: [
      {
        name: 'Table Editing',
        shortcuts: [
          { keys: 'Space', desc: 'Expand record', usage: 'Expand the selected record for detail view.' },
          { keys: 'Shift + Space', desc: 'Select row', usage: 'Select the current row.' },
          { keys: 'Ctrl + Shift + K', desc: 'Add record', usage: 'Add a new record.' },
          { keys: 'Ctrl + ;', desc: 'Today’s date', usage: 'Insert the current date.' },
          { keys: 'Ctrl + Shift + ;', desc: 'Current time', usage: 'Insert the current time.' },
          { keys: 'Ctrl + D', desc: 'Fill down', usage: 'Fill the cell below with the value above.' },
          { keys: 'Ctrl + C', desc: 'Copy', usage: 'Copy the selected cell.' },
          { keys: 'Ctrl + Shift + D', desc: 'Duplicate record', usage: 'Duplicate the current record.' },
          { keys: 'Ctrl + F', desc: 'Search', usage: 'Search in the table.' },
          { keys: 'Ctrl + Shift + F', desc: 'Filter', usage: 'Open filter menu.' },
          { keys: 'Ctrl + Shift + S', desc: 'Sort', usage: 'Open sort menu.' },
          { keys: 'Ctrl + Shift + G', desc: 'Group', usage: 'Open group menu.' },
        ]
      },
    ]
  },
  docker: {
    name: 'Docker',
    icon: 'fab fa-docker',
    categories: [
      {
        name: 'Container Management',
        shortcuts: [
          { keys: 'docker run [image]', desc: 'Run container', usage: 'Create and start a new container.' },
          { keys: 'docker ps', desc: 'List running', usage: 'List currently running containers.' },
          { keys: 'docker ps -a', desc: 'List all', usage: 'List all containers including stopped.' },
          { keys: 'docker stop [ID]', desc: 'Stop container', usage: 'Stop a running container.' },
          { keys: 'docker rm [ID]', desc: 'Remove container', usage: 'Remove a stopped container.' },
          { keys: 'docker exec -it [ID] bash', desc: 'Enter container', usage: 'Open a bash shell inside a running container.' },
          { keys: 'docker logs [ID]', desc: 'View logs', usage: 'View container logs.' },
          { keys: 'docker restart [ID]', desc: 'Restart', usage: 'Restart a container.' },
        ]
      },
      {
        name: 'Image Management',
        shortcuts: [
          { keys: 'docker images', desc: 'List images', usage: 'List locally stored images.' },
          { keys: 'docker pull [image]', desc: 'Pull image', usage: 'Download an image from Docker Hub.' },
          { keys: 'docker build -t [tag] .', desc: 'Build image', usage: 'Build an image from a Dockerfile.' },
          { keys: 'docker rmi [image]', desc: 'Remove image', usage: 'Remove a local image.' },
          { keys: 'docker push [image]', desc: 'Push image', usage: 'Push an image to a registry.' },
          { keys: 'docker tag [src] [dst]', desc: 'Tag image', usage: 'Assign a new tag to an image.' },
        ]
      },
      {
        name: 'Docker Compose',
        shortcuts: [
          { keys: 'docker compose up -d', desc: 'Start services', usage: 'Start all services in the background.' },
          { keys: 'docker compose down', desc: 'Stop services', usage: 'Stop and remove all service containers.' },
          { keys: 'docker compose logs -f', desc: 'Follow logs', usage: 'Follow service logs in real time.' },
          { keys: 'docker compose ps', desc: 'Service status', usage: 'Check service status.' },
          { keys: 'docker compose build', desc: 'Build services', usage: 'Build service images.' },
          { keys: 'docker compose restart', desc: 'Restart', usage: 'Restart all services.' },
        ]
      },
      {
        name: 'System',
        shortcuts: [
          { keys: 'docker system prune', desc: 'Cleanup', usage: 'Remove unused containers, images, and networks.' },
          { keys: 'docker volume ls', desc: 'List volumes', usage: 'List Docker volumes.' },
          { keys: 'docker network ls', desc: 'List networks', usage: 'List Docker networks.' },
          { keys: 'docker stats', desc: 'Resource usage', usage: 'Show real-time CPU and memory usage per container.' },
        ]
      },
    ]
  },
  git: {
    name: 'Git',
    icon: 'fab fa-git-alt',
    categories: [
      {
        name: 'Basic Commands',
        shortcuts: [
          { keys: 'git init', desc: 'Initialize repo', usage: 'Initialize a new Git repository.' },
          { keys: 'git clone [URL]', desc: 'Clone repo', usage: 'Clone a remote repository locally.' },
          { keys: 'git status', desc: 'Check status', usage: 'Show the status of changed files.' },
          { keys: 'git add .', desc: 'Stage all', usage: 'Stage all changed files.' },
          { keys: 'git add [file]', desc: 'Stage file', usage: 'Stage a specific file.' },
          { keys: 'git commit -m [msg]', desc: 'Commit', usage: 'Commit staged changes with a message.' },
          { keys: 'git push', desc: 'Push', usage: 'Push local commits to the remote repo.' },
          { keys: 'git pull', desc: 'Pull', usage: 'Fetch and merge remote changes.' },
          { keys: 'git fetch', desc: 'Fetch', usage: 'Fetch remote changes without merging.' },
        ]
      },
      {
        name: 'Branches',
        shortcuts: [
          { keys: 'git branch', desc: 'List branches', usage: 'List local branches.' },
          { keys: 'git branch [name]', desc: 'Create branch', usage: 'Create a new branch.' },
          { keys: 'git checkout [branch]', desc: 'Switch branch', usage: 'Switch to another branch.' },
          { keys: 'git checkout -b [name]', desc: 'Create & switch', usage: 'Create and switch to a new branch.' },
          { keys: 'git merge [branch]', desc: 'Merge', usage: 'Merge another branch into current.' },
          { keys: 'git branch -d [name]', desc: 'Delete branch', usage: 'Delete a local branch.' },
          { keys: 'git rebase [branch]', desc: 'Rebase', usage: 'Rebase current branch onto another.' },
        ]
      },
      {
        name: 'History & Undo',
        shortcuts: [
          { keys: 'git log', desc: 'Commit history', usage: 'Show commit history.' },
          { keys: 'git log --oneline', desc: 'One-line log', usage: 'Show commits in one-line format.' },
          { keys: 'git diff', desc: 'Show diff', usage: 'Show unstaged changes.' },
          { keys: 'git reset HEAD [file]', desc: 'Unstage', usage: 'Unstage a staged file.' },
          { keys: 'git reset --hard HEAD~1', desc: 'Undo last commit', usage: 'Completely undo the last commit.' },
          { keys: 'git stash', desc: 'Stash changes', usage: 'Temporarily save current changes.' },
          { keys: 'git stash pop', desc: 'Apply stash', usage: 'Restore stashed changes.' },
          { keys: 'git cherry-pick [hash]', desc: 'Cherry-pick', usage: 'Apply a specific commit to current branch.' },
        ]
      },
    ]
  },
  kubectl: {
    name: 'Kubernetes (kubectl)',
    icon: 'fas fa-dharmachakra',
    categories: [
      {
        name: 'View Resources',
        shortcuts: [
          { keys: 'kubectl get pods', desc: 'List pods', usage: 'List pods in current namespace.' },
          { keys: 'kubectl get svc', desc: 'List services', usage: 'List services.' },
          { keys: 'kubectl get nodes', desc: 'List nodes', usage: 'List cluster nodes.' },
          { keys: 'kubectl get all', desc: 'All resources', usage: 'List all resources.' },
          { keys: 'kubectl describe pod [name]', desc: 'Pod details', usage: 'Show detailed pod information.' },
          { keys: 'kubectl logs [pod]', desc: 'View logs', usage: 'View pod logs.' },
          { keys: 'kubectl logs -f [pod]', desc: 'Follow logs', usage: 'Follow pod logs in real time.' },
        ]
      },
      {
        name: 'Manage Resources',
        shortcuts: [
          { keys: 'kubectl apply -f [file]', desc: 'Apply resource', usage: 'Create/update resources from YAML.' },
          { keys: 'kubectl delete pod [name]', desc: 'Delete pod', usage: 'Delete a pod.' },
          { keys: 'kubectl scale deploy [name] --replicas=3', desc: 'Scale', usage: 'Change deployment replica count.' },
          { keys: 'kubectl exec -it [pod] -- bash', desc: 'Enter pod', usage: 'Open bash shell inside a pod.' },
          { keys: 'kubectl port-forward [pod] 8080:80', desc: 'Port forward', usage: 'Forward local port to pod port.' },
          { keys: 'kubectl rollout restart deploy [name]', desc: 'Rolling restart', usage: 'Rolling restart a deployment.' },
        ]
      },
      {
        name: 'Context & Namespace',
        shortcuts: [
          { keys: 'kubectl config get-contexts', desc: 'List contexts', usage: 'Show available contexts.' },
          { keys: 'kubectl config use-context [name]', desc: 'Switch context', usage: 'Switch to another cluster context.' },
          { keys: 'kubectl get ns', desc: 'List namespaces', usage: 'List namespaces.' },
          { keys: 'kubectl -n [NS] get pods', desc: 'Specify namespace', usage: 'Query resources in specific namespace.' },
        ]
      },
    ]
  },
  npm: {
    name: 'npm / yarn',
    icon: 'fab fa-npm',
    categories: [
      {
        name: 'Package Management',
        shortcuts: [
          { keys: 'npm init -y', desc: 'Init project', usage: 'Create package.json with defaults.' },
          { keys: 'npm install [pkg]', desc: 'Install package', usage: 'Install a package.' },
          { keys: 'npm install -D [pkg]', desc: 'Install dev dep', usage: 'Install as dev dependency.' },
          { keys: 'npm uninstall [pkg]', desc: 'Uninstall', usage: 'Remove a package.' },
          { keys: 'npm update', desc: 'Update all', usage: 'Update all packages.' },
          { keys: 'npm run [script]', desc: 'Run script', usage: 'Run a package.json script.' },
          { keys: 'npm start', desc: 'Start', usage: 'Run the start script.' },
          { keys: 'npm test', desc: 'Test', usage: 'Run the test script.' },
          { keys: 'npm list --depth=0', desc: 'List installed', usage: 'Show top-level installed packages.' },
          { keys: 'npx [cmd]', desc: 'Execute once', usage: 'Run a package without installing.' },
        ]
      },
    ]
  },
  bash: {
    name: 'Bash / Shell',
    icon: 'fas fa-terminal',
    categories: [
      {
        name: 'Files & Directories',
        shortcuts: [
          { keys: 'ls -la', desc: 'Detailed list', usage: 'Show detailed file list including hidden files.' },
          { keys: 'cd [path]', desc: 'Change directory', usage: 'Navigate to the specified directory.' },
          { keys: 'pwd', desc: 'Current path', usage: 'Print current working directory.' },
          { keys: 'mkdir -p [path]', desc: 'Create directory', usage: 'Create directories including parents.' },
          { keys: 'cp -r [src] [dst]', desc: 'Copy', usage: 'Copy files or directories.' },
          { keys: 'mv [src] [dst]', desc: 'Move/Rename', usage: 'Move or rename files.' },
          { keys: 'rm -rf [path]', desc: 'Force delete', usage: 'Force delete files or directories.' },
          { keys: 'find . -name [pattern]', desc: 'Find files', usage: 'Search for files by name pattern.' },
          { keys: 'chmod +x [file]', desc: 'Make executable', usage: 'Add execute permission to a file.' },
          { keys: 'chown [user]:[group] [file]', desc: 'Change owner', usage: 'Change file ownership.' },
        ]
      },
      {
        name: 'Text Processing',
        shortcuts: [
          { keys: 'cat [file]', desc: 'Print file', usage: 'Print file contents.' },
          { keys: 'grep [pattern] [file]', desc: 'Search text', usage: 'Search for patterns in files.' },
          { keys: 'head -n 20 [file]', desc: 'First N lines', usage: 'Show first 20 lines of a file.' },
          { keys: 'tail -f [file]', desc: 'Follow file', usage: 'Follow the end of a file in real time.' },
          { keys: 'wc -l [file]', desc: 'Count lines', usage: 'Count lines in a file.' },
          { keys: 'sort [file]', desc: 'Sort', usage: 'Sort file contents.' },
          { keys: 'sed ’s/old/new/g’ [file]', desc: 'Find & replace', usage: 'Find and replace text in files.' },
          { keys: 'awk ’{print $1}’ [file]', desc: 'Extract fields', usage: 'Extract specific fields from files.' },
        ]
      },
      {
        name: 'System & Processes',
        shortcuts: [
          { keys: 'ps aux', desc: 'List processes', usage: 'Show all running processes.' },
          { keys: 'top', desc: 'System monitor', usage: 'Show real-time system resource usage.' },
          { keys: 'kill -9 [PID]', desc: 'Force kill', usage: 'Force kill a process.' },
          { keys: 'df -h', desc: 'Disk usage', usage: 'Show disk usage in human-readable format.' },
          { keys: 'du -sh [path]', desc: 'Directory size', usage: 'Show total directory size.' },
          { keys: 'free -h', desc: 'Memory usage', usage: 'Show memory usage.' },
          { keys: 'curl [URL]', desc: 'HTTP request', usage: 'Send an HTTP request to a URL.' },
          { keys: 'ssh [user]@[host]', desc: 'SSH connect', usage: 'Connect to a remote server via SSH.' },
          { keys: 'scp [file] [user]@[host]:[path]', desc: 'Remote copy', usage: 'Copy files remotely via SSH.' },
        ]
      },
      {
        name: 'Pipes & Redirects',
        shortcuts: [
          { keys: '[cmd] | [cmd]', desc: 'Pipe', usage: 'Pass output of one command as input to another.' },
          { keys: '[cmd] > [file]', desc: 'Redirect output', usage: 'Save command output to file (overwrite).' },
          { keys: '[cmd] >> [file]', desc: 'Append output', usage: 'Append command output to file.' },
          { keys: '[cmd] 2>&1', desc: 'Redirect stderr', usage: 'Merge error output with standard output.' },
          { keys: 'xargs', desc: 'Pass arguments', usage: 'Convert stdin to arguments for a command.' },
        ]
      },
    ]
  },
  python_cli: {
    name: 'Python',
    icon: 'fab fa-python',
    categories: [
      {
        name: 'CLI & Packages',
        shortcuts: [
          { keys: 'python -m venv [name]', desc: 'Create virtualenv', usage: 'Create a Python virtual environment.' },
          { keys: 'source venv/bin/activate', desc: 'Activate venv', usage: 'Activate virtual environment (Linux/Mac).' },
          { keys: 'pip install [pkg]', desc: 'Install package', usage: 'Install a Python package.' },
          { keys: 'pip freeze > requirements.txt', desc: 'Save deps', usage: 'Save installed packages to file.' },
          { keys: 'pip install -r requirements.txt', desc: 'Install deps', usage: 'Install all packages from requirements.' },
          { keys: 'python -c [code]', desc: 'One-liner', usage: 'Execute Python code from command line.' },
          { keys: 'python -m http.server 8000', desc: 'Simple server', usage: 'Start HTTP server in current directory.' },
          { keys: 'python -m json.tool', desc: 'Format JSON', usage: 'Pretty-print JSON input.' },
        ]
      },
    ]
  },
  aws_cli: {
    name: 'AWS CLI',
    icon: 'fab fa-aws',
    categories: [
      {
        name: 'Key Commands',
        shortcuts: [
          { keys: 'aws configure', desc: 'Configure', usage: 'Set up AWS credentials and region.' },
          { keys: 'aws s3 ls', desc: 'List S3 buckets', usage: 'List S3 buckets.' },
          { keys: 'aws s3 cp [src] [dst]', desc: 'S3 copy', usage: 'Copy files between local and S3.' },
          { keys: 'aws s3 sync [src] [dst]', desc: 'S3 sync', usage: 'Sync local and S3.' },
          { keys: 'aws ec2 describe-instances', desc: 'List EC2', usage: 'Show EC2 instance info.' },
          { keys: 'aws ecs list-services', desc: 'List ECS', usage: 'List ECS services.' },
          { keys: 'aws lambda list-functions', desc: 'List Lambda', usage: 'List Lambda functions.' },
          { keys: 'aws cloudformation deploy', desc: 'CF deploy', usage: 'Deploy CloudFormation stack.' },
          { keys: 'aws sts get-caller-identity', desc: 'Check identity', usage: 'Check current authenticated AWS account.' },
        ]
      },
    ]
  },
  terraform: {
    name: 'Terraform',
    icon: 'fas fa-cubes',
    categories: [
      {
        name: 'Workflow Commands',
        shortcuts: [
          { keys: 'terraform init', desc: 'Initialize', usage: 'Initialize a Terraform working directory.' },
          { keys: 'terraform plan', desc: 'Plan', usage: 'Preview changes before applying.' },
          { keys: 'terraform apply', desc: 'Apply', usage: 'Apply infrastructure changes.' },
          { keys: 'terraform destroy', desc: 'Destroy', usage: 'Destroy all managed resources.' },
          { keys: 'terraform fmt', desc: 'Format', usage: 'Format Terraform files to standard style.' },
          { keys: 'terraform validate', desc: 'Validate', usage: 'Validate configuration files.' },
          { keys: 'terraform state list', desc: 'State list', usage: 'List managed resources.' },
          { keys: 'terraform output', desc: 'Show outputs', usage: 'Display output variable values.' },
          { keys: 'terraform import [resource] [ID]', desc: 'Import', usage: 'Import existing infrastructure into Terraform.' },
          { keys: 'terraform workspace list', desc: 'Workspaces', usage: 'List workspaces.' },
        ]
      },
    ]
  },
  nginx: {
    name: 'Nginx',
    icon: 'fas fa-server',
    categories: [
      {
        name: 'Server Management',
        shortcuts: [
          { keys: 'nginx -t', desc: 'Test config', usage: 'Test Nginx configuration syntax.' },
          { keys: 'nginx -s reload', desc: 'Reload config', usage: 'Reload config without downtime.' },
          { keys: 'nginx -s stop', desc: 'Stop server', usage: 'Stop Nginx server immediately.' },
          { keys: 'nginx -s quit', desc: 'Graceful stop', usage: 'Stop after processing current connections.' },
          { keys: 'systemctl status nginx', desc: 'Check status', usage: 'Check Nginx service status.' },
          { keys: 'systemctl restart nginx', desc: 'Restart', usage: 'Restart Nginx service.' },
          { keys: 'tail -f /var/log/nginx/access.log', desc: 'Access log', usage: 'Follow access log in real time.' },
          { keys: 'tail -f /var/log/nginx/error.log', desc: 'Error log', usage: 'Follow error log in real time.' },
        ]
      },
    ]
  },
  nvidia_smi: {
    name: 'nvidia-smi (GPU)',
    icon: 'fas fa-microchip',
    categories: [
      {
        name: 'GPU Monitoring',
        shortcuts: [
          { keys: 'nvidia-smi', desc: 'GPU status summary', usage: 'Show GPU utilization, temperature, memory, and processes.' },
          { keys: 'nvidia-smi -l 1', desc: 'Monitor every 1s', usage: 'Refresh GPU status every 1 second.' },
          { keys: 'watch -n 1 nvidia-smi', desc: 'Real-time monitor', usage: 'Real-time GPU monitoring with watch command.' },
          { keys: 'nvidia-smi -q', desc: 'Detailed info', usage: 'Show all detailed GPU information.' },
          { keys: 'nvidia-smi -L', desc: 'List GPUs', usage: 'List all GPUs with UUIDs.' },
          { keys: 'nvidia-smi pmon', desc: 'Process monitor', usage: 'Monitor per-process GPU usage.' },
          { keys: 'nvidia-smi dmon', desc: 'Device monitor', usage: 'Monitor device metrics every second.' },
          { keys: 'nvidia-smi topo -m', desc: 'Topology', usage: 'Show GPU NVLink/PCIe topology.' },
          { keys: 'nvidia-smi nvlink -s', desc: 'NVLink status', usage: 'Check NVLink connection status and bandwidth.' },
        ]
      },
      {
        name: 'GPU Management',
        shortcuts: [
          { keys: 'nvidia-smi -pm 1', desc: 'Persistence Mode ON', usage: 'Keep driver loaded to reduce GPU init latency.' },
          { keys: 'nvidia-smi -i 0 -pl 250', desc: 'Set power limit', usage: 'Limit GPU 0 max power to 250W.' },
          { keys: 'nvidia-smi -i 0 -ac 1215,1410', desc: 'Set clocks', usage: 'Set memory/graphics clock speeds.' },
          { keys: 'nvidia-smi -rgc', desc: 'Reset clocks', usage: 'Reset GPU clocks to default.' },
          { keys: 'nvidia-smi -r -i 0', desc: 'Reset GPU', usage: 'Reset GPU 0 (resolves ECC errors etc).' },
          { keys: 'nvidia-smi -e 1', desc: 'Enable ECC', usage: 'Enable ECC memory correction.' },
          { keys: 'nvidia-smi -q -d POWER', desc: 'Power details', usage: 'Show detailed GPU power information.' },
        ]
      },
      {
        name: 'Query & CSV',
        shortcuts: [
          { keys: 'nvidia-smi --query-gpu=name,memory.total,memory.used --format=csv', desc: 'CSV query', usage: 'Output GPU info in CSV format.' },
          { keys: 'nvidia-smi --query-gpu=utilization.gpu,temperature.gpu --format=csv -l 5', desc: '5s CSV logging', usage: 'Log utilization and temp every 5 seconds.' },
          { keys: 'nvidia-smi --query-compute-apps=pid,used_memory --format=csv', desc: 'Per-process memory', usage: 'Show memory usage per GPU process.' },
        ]
      },
    ]
  },
  dgx: {
    name: 'NVIDIA DGX',
    icon: 'fas fa-server',
    categories: [
      {
        name: 'System Management',
        shortcuts: [
          { keys: 'nvsm show health', desc: 'System health', usage: 'Check overall DGX system health.' },
          { keys: 'nvsm show gpu', desc: 'GPU status', usage: 'Check status of all GPUs.' },
          { keys: 'nvsm show nvswitch', desc: 'NVSwitch status', usage: 'Check NVSwitch connection status.' },
          { keys: 'nvsm show memory', desc: 'Memory status', usage: 'Check system memory status.' },
          { keys: 'nvsm dump', desc: 'Full dump', usage: 'Dump complete system information.' },
          { keys: 'nvidia-smi topo -m', desc: 'GPU topology', usage: 'Show GPU NVLink topology.' },
          { keys: 'dcgmi diag -r 3', desc: 'GPU diagnostics', usage: 'Run full GPU diagnostics with DCGM (Level 3).' },
          { keys: 'dcgmi health -c -g 0', desc: 'DCGM health check', usage: 'Check health of DCGM group 0.' },
        ]
      },
      {
        name: 'Network & Storage',
        shortcuts: [
          { keys: 'ibstat', desc: 'IB port status', usage: 'Check InfiniBand port status.' },
          { keys: 'ibstatus', desc: 'IB status summary', usage: 'Summarize InfiniBand interface status.' },
          { keys: 'nvidia-smi nvlink -s', desc: 'NVLink status', usage: 'Check NVLink link status and bandwidth.' },
          { keys: 'lspci | grep -i nvidia', desc: 'PCI GPU check', usage: 'List NVIDIA devices on the PCI bus.' },
        ]
      },
      {
        name: 'Hardware Health',
        shortcuts: [
          { keys: 'nvsm show psu', desc: 'PSU status', usage: 'Show power supply unit status and redundancy state.' },
          { keys: 'nvsm show fans', desc: 'Fan status', usage: 'Show fan module speed and health status.' },
          { keys: 'dmesg | grep -i xid', desc: 'XID error check', usage: 'Search the kernel log for NVIDIA XID GPU error codes.' },
          { keys: 'systemctl status nvsm', desc: 'NVSM service status', usage: 'Check whether the NVSM monitoring service is running.' },
        ]
      },
    ]
  },
  mellanox_ib: {
    name: 'Mellanox / InfiniBand',
    icon: 'fas fa-network-wired',
    categories: [
      {
        name: 'IB Status Check',
        shortcuts: [
          { keys: 'ibstat', desc: 'Port status', usage: 'Check detailed IB HCA port status.' },
          { keys: 'ibstatus', desc: 'Status summary', usage: 'Summarize all IB port status.' },
          { keys: 'ibv_devinfo', desc: 'Device info', usage: 'Show detailed IB device information.' },
          { keys: 'iblinkinfo', desc: 'Link info', usage: 'Show all link status in the subnet.' },
          { keys: 'ibhosts', desc: 'List hosts', usage: 'List all IB hosts in the subnet.' },
          { keys: 'ibswitches', desc: 'List switches', usage: 'List all IB switches in the subnet.' },
          { keys: 'perfquery', desc: 'Perf counters', usage: 'Query port performance counters.' },
          { keys: 'smpquery portinfo [LID] [port]', desc: 'Port detail', usage: 'Query SMP info for specific port.' },
        ]
      },
      {
        name: 'RDMA & Performance',
        shortcuts: [
          { keys: 'ib_write_bw', desc: 'Write bandwidth test', usage: 'Measure RDMA Write bandwidth.' },
          { keys: 'ib_read_bw', desc: 'Read bandwidth test', usage: 'Measure RDMA Read bandwidth.' },
          { keys: 'ib_send_lat', desc: 'Send latency test', usage: 'Measure RDMA Send latency.' },
          { keys: 'ibping [LID]', desc: 'IB ping', usage: 'Ping test InfiniBand connection.' },
          { keys: 'opensm', desc: 'Subnet manager', usage: 'Start OpenSM subnet manager.' },
          { keys: 'mlnx_tune', desc: 'Performance tuning', usage: 'Auto-tune Mellanox NIC performance.' },
        ]
      },
      {
        name: 'Firmware & Config',
        shortcuts: [
          { keys: 'mst start', desc: 'Start MST', usage: 'Start Mellanox Software Tools driver.' },
          { keys: 'mst status', desc: 'MST status', usage: 'Check MST device status.' },
          { keys: 'mlxconfig -d [dev] query', desc: 'Query NIC config', usage: 'Query NIC configuration.' },
          { keys: 'flint -d [dev] query', desc: 'Check firmware', usage: 'Check NIC firmware version.' },
          { keys: 'mlxfwmanager', desc: 'Firmware manager', usage: 'Manage and update Mellanox firmware.' },
        ]
      },
    ]
  },
  cisco: {
    name: 'Cisco IOS',
    icon: 'fas fa-network-wired',
    categories: [
      {
        name: 'Basic Commands',
        shortcuts: [
          { keys: 'enable', desc: 'Privileged mode', usage: 'Enter privileged EXEC mode.' },
          { keys: 'configure terminal', desc: 'Config mode', usage: 'Enter global configuration mode.' },
          { keys: 'show running-config', desc: 'Running config', usage: 'Show current running configuration.' },
          { keys: 'show startup-config', desc: 'Startup config', usage: 'Show saved startup configuration.' },
          { keys: 'copy running-config startup-config', desc: 'Save config', usage: 'Save current config to NVRAM.' },
          { keys: 'show version', desc: 'Version info', usage: 'Show IOS version and hardware info.' },
          { keys: 'show ip interface brief', desc: 'Interface summary', usage: 'Show IP and status of all interfaces.' },
          { keys: 'show interfaces', desc: 'Interface detail', usage: 'Show detailed interface status.' },
        ]
      },
      {
        name: 'VLAN & Switching',
        shortcuts: [
          { keys: 'show vlan brief', desc: 'VLAN list', usage: 'Show configured VLANs.' },
          { keys: 'vlan [number]', desc: 'Create VLAN', usage: 'Create a new VLAN.' },
          { keys: 'interface vlan [number]', desc: 'SVI config', usage: 'Configure a VLAN interface (SVI).' },
          { keys: 'switchport mode access', desc: 'Access mode', usage: 'Set port to access mode.' },
          { keys: 'switchport mode trunk', desc: 'Trunk mode', usage: 'Set port to trunk mode.' },
          { keys: 'switchport access vlan [num]', desc: 'Assign VLAN', usage: 'Assign VLAN to port.' },
          { keys: 'show mac address-table', desc: 'MAC table', usage: 'Show MAC address table.' },
        ]
      },
      {
        name: 'Routing',
        shortcuts: [
          { keys: 'show ip route', desc: 'Routing table', usage: 'Show IP routing table.' },
          { keys: 'ip route [net] [mask] [gw]', desc: 'Static route', usage: 'Add a static route.' },
          { keys: 'router ospf [process]', desc: 'OSPF config', usage: 'Configure OSPF routing.' },
          { keys: 'show ip ospf neighbor', desc: 'OSPF neighbors', usage: 'Check OSPF neighbor relationships.' },
          { keys: 'show ip bgp summary', desc: 'BGP summary', usage: 'Show BGP session status.' },
          { keys: 'ping [IP]', desc: 'Ping', usage: 'Run ICMP ping test.' },
          { keys: 'traceroute [IP]', desc: 'Traceroute', usage: 'Trace packet path.' },
        ]
      },
    ]
  },
  helm: {
    name: 'Helm',
    icon: 'fas fa-dharmachakra',
    categories: [
      {
        name: 'Chart Management',
        shortcuts: [
          { keys: 'helm install [name] [chart]', desc: 'Install chart', usage: 'Install a Helm chart.' },
          { keys: 'helm upgrade [name] [chart]', desc: 'Upgrade', usage: 'Upgrade an installed release.' },
          { keys: 'helm uninstall [name]', desc: 'Uninstall', usage: 'Delete a release.' },
          { keys: 'helm list', desc: 'List releases', usage: 'List installed releases.' },
          { keys: 'helm repo add [name] [URL]', desc: 'Add repo', usage: 'Add a chart repository.' },
          { keys: 'helm repo update', desc: 'Update repos', usage: 'Update repository index.' },
          { keys: 'helm search repo [keyword]', desc: 'Search charts', usage: 'Search charts in repositories.' },
          { keys: 'helm show values [chart]', desc: 'Show defaults', usage: 'Show chart default values.' },
          { keys: 'helm template [name] [chart]', desc: 'Template render', usage: 'Render chart templates to YAML.' },
          { keys: 'helm rollback [name] [rev]', desc: 'Rollback', usage: 'Rollback to a previous release.' },
        ]
      },
    ]
  },
  ansible: {
    name: 'Ansible',
    icon: 'fas fa-cog',
    categories: [
      {
        name: 'Key Commands',
        shortcuts: [
          { keys: 'ansible all -m ping', desc: 'Ping all', usage: 'Ping test all hosts.' },
          { keys: 'ansible-playbook [file.yml]', desc: 'Run playbook', usage: 'Execute an Ansible playbook.' },
          { keys: 'ansible-playbook -i [inv] [file]', desc: 'Run with inventory', usage: 'Run playbook with specific inventory.' },
          { keys: 'ansible-playbook --check [file]', desc: 'Dry run', usage: 'Preview changes without applying.' },
          { keys: 'ansible-playbook --tags [tag] [file]', desc: 'Run tagged', usage: 'Run only tasks with specific tags.' },
          { keys: 'ansible-vault encrypt [file]', desc: 'Encrypt file', usage: 'Encrypt a file with Ansible Vault.' },
          { keys: 'ansible-galaxy install [role]', desc: 'Install role', usage: 'Install a role from Galaxy.' },
          { keys: 'ansible-inventory --list', desc: 'List inventory', usage: 'Show all hosts in inventory.' },
        ]
      },
    ]
  },
  systemctl: {
    name: 'systemctl / systemd',
    icon: 'fas fa-cog',
    categories: [
      {
        name: 'Service Management',
        shortcuts: [
          { keys: 'systemctl start [svc]', desc: 'Start service', usage: 'Start a service.' },
          { keys: 'systemctl stop [svc]', desc: 'Stop service', usage: 'Stop a service.' },
          { keys: 'systemctl restart [svc]', desc: 'Restart', usage: 'Restart a service.' },
          { keys: 'systemctl status [svc]', desc: 'Check status', usage: 'Check service status.' },
          { keys: 'systemctl enable [svc]', desc: 'Enable autostart', usage: 'Enable service to start on boot.' },
          { keys: 'systemctl disable [svc]', desc: 'Disable autostart', usage: 'Disable autostart on boot.' },
          { keys: 'systemctl list-units --type=service', desc: 'List services', usage: 'List active services.' },
          { keys: 'systemctl daemon-reload', desc: 'Daemon reload', usage: 'Reload systemd configuration.' },
          { keys: 'journalctl -u [svc] -f', desc: 'Service logs', usage: 'Follow service logs in real time.' },
          { keys: 'journalctl --since today', desc: 'Today logs', usage: 'Show today system logs.' },
        ]
      },
    ]
  },
  iptables: {
    name: 'iptables / Firewall',
    icon: 'fas fa-shield-alt',
    categories: [
      {
        name: 'Firewall Management',
        shortcuts: [
          { keys: 'iptables -L -n -v', desc: 'List rules', usage: 'Show all firewall rules in detail.' },
          { keys: 'iptables -A INPUT -p tcp --dport 80 -j ACCEPT', desc: 'Allow port', usage: 'Allow inbound TCP port 80.' },
          { keys: 'iptables -A INPUT -s [IP] -j DROP', desc: 'Block IP', usage: 'Block access from specific IP.' },
          { keys: 'iptables -D INPUT [num]', desc: 'Delete rule', usage: 'Delete a specific rule by number.' },
          { keys: 'iptables -F', desc: 'Flush all', usage: 'Clear all rules.' },
          { keys: 'iptables-save > /etc/iptables.rules', desc: 'Save rules', usage: 'Save current rules to file.' },
          { keys: 'iptables-restore < /etc/iptables.rules', desc: 'Restore rules', usage: 'Restore rules from file.' },
          { keys: 'ufw enable', desc: 'Enable UFW', usage: 'Enable UFW firewall.' },
          { keys: 'ufw allow [port]', desc: 'UFW allow port', usage: 'Allow a port in UFW.' },
          { keys: 'ufw status verbose', desc: 'UFW status', usage: 'Show detailed UFW firewall status.' },
        ]
      },
    ]
  },
  runai: {
    name: 'Run:ai',
    icon: 'fas fa-microchip',
    categories: [
      {
        name: 'Jobs',
        shortcuts: [
          { keys: 'runai submit [job] -g 1', desc: 'Submit GPU job', usage: 'Submit a job requesting 1 GPU to the cluster scheduler.' },
          { keys: 'runai list jobs', desc: 'List jobs', usage: 'Show the current list of jobs and their status.' },
          { keys: 'runai describe job [name]', desc: 'Job details', usage: 'Show detailed status, events, and resource usage for a job.' },
          { keys: 'runai logs [job]', desc: 'View logs', usage: 'View a job\'s stdout/stderr logs.' },
          { keys: 'runai delete job [name]', desc: 'Delete job', usage: 'Delete a job and free its allocated GPUs.' },
          { keys: 'runai attach [job]', desc: 'Attach to job', usage: 'Attach your terminal to a running interactive job.' },
        ]
      },
      {
        name: 'Access & Config',
        shortcuts: [
          { keys: 'runai login', desc: 'Login', usage: 'Authenticate the CLI against the Run:ai control plane via browser SSO.' },
          { keys: 'runai whoami', desc: 'Current user', usage: 'Show the currently authenticated user and cluster context.' },
          { keys: 'runai config project [name]', desc: 'Set default project', usage: 'Set the default project so commands don\'t need -p on every call.' },
          { keys: 'runai exec [job] -it bash', desc: 'Enter job', usage: 'Open an interactive shell inside a running job container.' },
        ]
      },
      {
        name: 'Cluster & Projects',
        shortcuts: [
          { keys: 'runai top node', desc: 'Node GPU usage', usage: 'Show per-node GPU utilization across the cluster.' },
          { keys: 'runai list projects', desc: 'List projects', usage: 'Show projects and their GPU quota allocations.' },
          { keys: 'runai delete project [name]', desc: 'Delete project', usage: 'Remove a project and its resource quota (admin only).' },
          { keys: 'runai nodepool list', desc: 'List node pools', usage: 'List node pools available for scheduling, e.g. grouped by GPU type.' },
        ]
      },
    ]
  },
  ibm_storage: {
    name: 'IBM Spectrum Scale / ESS',
    icon: 'fas fa-database',
    categories: [
      {
        name: 'GPFS / Spectrum Scale',
        shortcuts: [
          { keys: 'mmlscluster', desc: 'Cluster info', usage: 'Show GPFS cluster information.' },
          { keys: 'mmlsfs all', desc: 'List filesystems', usage: 'List all GPFS filesystems.' },
          { keys: 'mmlsdisk [FS] -L', desc: 'Disk details', usage: 'Show filesystem disk details.' },
          { keys: 'mmlsnode -a', desc: 'List nodes', usage: 'List all nodes in cluster.' },
          { keys: 'mmhealth cluster show', desc: 'Cluster health', usage: 'Check overall cluster health.' },
          { keys: 'mmdiag --filesets', desc: 'Fileset diagnostics', usage: 'Diagnose fileset status.' },
          { keys: 'mmpmon -p -s n', desc: 'I/O monitoring', usage: 'Monitor per-node I/O performance.' },
          { keys: 'mmrepquota -j [FS]', desc: 'Check quota', usage: 'Check filesystem quota usage.' },
          { keys: 'mmcheckquota [FS]', desc: 'Verify quota', usage: 'Verify quota consistency.' },
          { keys: 'mmdf [FS]', desc: 'Disk usage', usage: 'Show filesystem disk usage.' },
        ]
      },
    ]
  },
  lvm: {
    name: 'LVM (Logical Volume)',
    icon: 'fas fa-hdd',
    categories: [
      {
        name: 'Volume Management',
        shortcuts: [
          { keys: 'pvs', desc: 'List PVs', usage: 'List Physical Volumes.' },
          { keys: 'vgs', desc: 'List VGs', usage: 'List Volume Groups.' },
          { keys: 'lvs', desc: 'List LVs', usage: 'List Logical Volumes.' },
          { keys: 'pvcreate [device]', desc: 'Create PV', usage: 'Initialize a device as Physical Volume.' },
          { keys: 'vgcreate [VG] [PV]', desc: 'Create VG', usage: 'Create a Volume Group.' },
          { keys: 'lvcreate -L [size] -n [LV] [VG]', desc: 'Create LV', usage: 'Create a Logical Volume.' },
          { keys: 'lvextend -L +[size] [LV]', desc: 'Extend LV', usage: 'Extend a Logical Volume.' },
          { keys: 'resize2fs [LV]', desc: 'Resize filesystem', usage: 'Resize filesystem to match extended LV.' },
        ]
      },
    ]
  },
  proxmox: {
    name: 'Proxmox VE',
    icon: 'fas fa-server',
    categories: [
      {
        name: 'VM/CT Management',
        shortcuts: [
          { keys: 'qm list', desc: 'List VMs', usage: 'List all virtual machines.' },
          { keys: 'qm start [VMID]', desc: 'Start VM', usage: 'Start a virtual machine.' },
          { keys: 'qm stop [VMID]', desc: 'Stop VM', usage: 'Stop a virtual machine.' },
          { keys: 'qm snapshot [VMID] [name]', desc: 'Create snapshot', usage: 'Create a VM snapshot.' },
          { keys: 'pct list', desc: 'List containers', usage: 'List all LXC containers.' },
          { keys: 'pct start [CTID]', desc: 'Start container', usage: 'Start an LXC container.' },
          { keys: 'pvecm status', desc: 'Cluster status', usage: 'Check Proxmox cluster status.' },
          { keys: 'pvesh get /nodes', desc: 'List nodes', usage: 'Query cluster nodes via API.' },
        ]
      },
    ]
  },
  inventor: {
    name: 'Autodesk Inventor',
    icon: 'fas fa-cog',
    categories: [
      {
        name: 'Sketch',
        shortcuts: [
          { keys: 'L', desc: 'Line', usage: 'Draw a line in sketch.' },
          { keys: 'C', desc: 'Circle', usage: 'Draw a circle with center and radius.' },
          { keys: 'R', desc: 'Rectangle', usage: 'Draw a rectangle.' },
          { keys: 'X', desc: 'Trim', usage: 'Trim at intersection points.' },
          { keys: 'D', desc: 'Dimension', usage: 'Add dimensions to sketch.' },
          { keys: 'F', desc: 'Fillet', usage: 'Apply fillet to edges.' },
          { keys: 'O', desc: 'Offset', usage: 'Offset copy of selected elements.' },
          { keys: 'S', desc: 'Start Sketch', usage: 'Start a 2D sketch.' },
        ]
      },
      {
        name: 'Modeling',
        shortcuts: [
          { keys: 'E', desc: 'Extrude', usage: 'Extrude sketch to create 3D shape.' },
          { keys: 'H', desc: 'Hole', usage: 'Create a hole feature.' },
          { keys: 'Ctrl + Shift + N', desc: 'New part', usage: 'Create a new part file.' },
          { keys: 'F5', desc: 'iProperties', usage: 'Open and edit file properties.' },
          { keys: 'F6', desc: 'Isometric view', usage: 'Switch to isometric view.' },
          { keys: 'Shift + MMB', desc: 'Pan', usage: 'Pan the view.' },
          { keys: 'F4', desc: 'Rotate', usage: 'Rotate the 3D view.' },
        ]
      },
      {
        name: 'Assembly',
        shortcuts: [
          { keys: 'P', desc: 'Place', usage: 'Place a component in assembly.' },
          { keys: 'C', desc: 'Constrain', usage: 'Add assembly constraints.' },
          { keys: 'Alt + Drag', desc: 'Move component', usage: 'Move component in assembly.' },
          { keys: 'G', desc: 'Ground/Unground', usage: 'Ground or unground a component.' },
        ]
      },
    ]
  },
  maya: {
    name: 'Autodesk Maya',
    icon: 'fas fa-cube',
    categories: [
      {
        name: 'Viewport Navigation',
        shortcuts: [
          { keys: 'Alt + LMB', desc: 'Orbit', usage: 'Orbit the viewport.' },
          { keys: 'Alt + MMB', desc: 'Pan', usage: 'Pan the viewport.' },
          { keys: 'Alt + RMB', desc: 'Zoom', usage: 'Zoom the viewport.' },
          { keys: 'F', desc: 'Frame selection', usage: 'Frame view to selected object.' },
          { keys: 'A', desc: 'Frame all', usage: 'Frame view to show all objects.' },
          { keys: 'Space', desc: 'Panel switch', usage: 'Switch viewport layout.' },
          { keys: '4', desc: 'Wireframe', usage: 'Switch to wireframe display.' },
          { keys: '5', desc: 'Shaded', usage: 'Switch to shaded display.' },
          { keys: '6', desc: 'Textured', usage: 'Switch to textured display.' },
          { keys: '7', desc: 'Lighting', usage: 'Switch to lighting display.' },
        ]
      },
      {
        name: 'Object Editing',
        shortcuts: [
          { keys: 'W', desc: 'Move', usage: 'Activate Move tool.' },
          { keys: 'E', desc: 'Rotate', usage: 'Activate Rotate tool.' },
          { keys: 'R', desc: 'Scale', usage: 'Activate Scale tool.' },
          { keys: 'Q', desc: 'Select', usage: 'Activate Select tool.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate selected objects.' },
          { keys: 'Shift + D', desc: 'Special duplicate', usage: 'Duplicate with options.' },
          { keys: 'Ctrl + G', desc: 'Group', usage: 'Group selected objects.' },
          { keys: 'P', desc: 'Parent', usage: 'Set parent-child relationship.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete selected objects.' },
          { keys: 'H', desc: 'Hide', usage: 'Hide selected objects.' },
          { keys: 'Shift + H', desc: 'Show', usage: 'Show hidden objects.' },
        ]
      },
      {
        name: 'Component Mode',
        shortcuts: [
          { keys: 'F8', desc: 'Object/Component toggle', usage: 'Toggle between object and component mode.' },
          { keys: 'F9', desc: 'Vertex mode', usage: 'Switch to vertex editing.' },
          { keys: 'F10', desc: 'Edge mode', usage: 'Switch to edge editing.' },
          { keys: 'F11', desc: 'Face mode', usage: 'Switch to face editing.' },
          { keys: 'Ctrl + F9', desc: 'UV mode', usage: 'Switch to UV editing.' },
          { keys: '3', desc: 'Smooth preview', usage: 'Show mesh smooth preview.' },
          { keys: '1', desc: 'Base mesh', usage: 'Show base polygon mesh.' },
        ]
      },
    ]
  },
  '3dsmax': {
    name: '3ds Max',
    icon: 'fas fa-cube',
    categories: [
      {
        name: 'Viewport',
        shortcuts: [
          { keys: 'Alt + MMB', desc: 'Orbit', usage: 'Orbit the viewport.' },
          { keys: 'MMB', desc: 'Pan', usage: 'Pan the viewport.' },
          { keys: 'Scroll', desc: 'Zoom', usage: 'Zoom the viewport.' },
          { keys: 'Z', desc: 'Zoom extents', usage: 'Zoom to fit selected objects.' },
          { keys: 'F3', desc: 'Wireframe toggle', usage: 'Toggle wireframe/shaded mode.' },
          { keys: 'F4', desc: 'Edge faces toggle', usage: 'Toggle edge faces display.' },
          { keys: 'G', desc: 'Grid toggle', usage: 'Show/hide viewport grid.' },
          { keys: 'Alt + W', desc: 'Maximize viewport', usage: 'Maximize current viewport.' },
        ]
      },
      {
        name: 'Object Editing',
        shortcuts: [
          { keys: 'W', desc: 'Move', usage: 'Activate Move gizmo.' },
          { keys: 'E', desc: 'Rotate', usage: 'Activate Rotate gizmo.' },
          { keys: 'R', desc: 'Scale', usage: 'Activate Scale gizmo.' },
          { keys: 'Q', desc: 'Select', usage: 'Switch to selection mode.' },
          { keys: 'Ctrl + V', desc: 'Clone', usage: 'Clone selected objects.' },
          { keys: 'Alt + A', desc: 'Align', usage: 'Open object align tool.' },
          { keys: 'Ctrl + G', desc: 'Group', usage: 'Group selected objects.' },
          { keys: 'S', desc: 'Snap toggle', usage: 'Toggle grid snap.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete selected objects.' },
        ]
      },
      {
        name: 'Rendering',
        shortcuts: [
          { keys: 'Shift + Q', desc: 'Quick render', usage: 'Quick render current viewport.' },
          { keys: 'F9', desc: 'Last render', usage: 'Re-render with last settings.' },
          { keys: 'F10', desc: 'Render setup', usage: 'Open render setup dialog.' },
          { keys: '8', desc: 'Environment', usage: 'Open environment and effects.' },
          { keys: 'M', desc: 'Material editor', usage: 'Open material editor.' },
        ]
      },
    ]
  },
  civil3d: {
    name: 'Civil 3D',
    icon: 'fas fa-road',
    categories: [
      {
        name: 'Key Shortcuts',
        shortcuts: [
          { keys: 'Ctrl + 1', desc: 'Properties palette', usage: 'Open object properties palette.' },
          { keys: 'Ctrl + 2', desc: 'Tool palette', usage: 'Open tool palette.' },
          { keys: 'Ctrl + 9', desc: 'Command line', usage: 'Show/hide command line.' },
          { keys: 'L', desc: 'Line', usage: 'Draw a line.' },
          { keys: 'PL', desc: 'Polyline', usage: 'Draw a polyline.' },
          { keys: 'CO', desc: 'Copy', usage: 'Copy objects.' },
          { keys: 'M', desc: 'Move', usage: 'Move objects.' },
          { keys: 'RO', desc: 'Rotate', usage: 'Rotate objects.' },
          { keys: 'TR', desc: 'Trim', usage: 'Trim objects at intersections.' },
          { keys: 'SC', desc: 'Scale', usage: 'Scale objects.' },
          { keys: 'DI', desc: 'Distance', usage: 'Measure distance between two points.' },
          { keys: 'PE', desc: 'Polyline edit', usage: 'Edit polylines.' },
        ]
      },
    ]
  },
  navisworks: {
    name: 'Navisworks',
    icon: 'fas fa-building',
    categories: [
      {
        name: 'Navigation & View',
        shortcuts: [
          { keys: 'Shift + W', desc: 'Fit all', usage: 'Fit entire model to view.' },
          { keys: 'Ctrl + Shift + V', desc: 'Save viewpoint', usage: 'Save current view as viewpoint.' },
          { keys: 'F5', desc: 'Refresh', usage: 'Refresh the scene.' },
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Search for objects in model.' },
          { keys: 'Ctrl + H', desc: 'Hide', usage: 'Hide selected objects.' },
          { keys: 'Ctrl + Shift + H', desc: 'Show all', usage: 'Show all hidden objects.' },
          { keys: 'F2', desc: 'Rename', usage: 'Rename selected item.' },
          { keys: 'Ctrl + Shift + C', desc: 'Clash detection', usage: 'Run clash detection.' },
        ]
      },
    ]
  },
  sketch: {
    name: 'Sketch',
    icon: 'fas fa-palette',
    categories: [
      {
        name: 'Tools & Editing',
        shortcuts: [
          { keys: 'R', desc: 'Rectangle', usage: 'Activate rectangle tool.' },
          { keys: 'O', desc: 'Oval', usage: 'Activate oval tool.' },
          { keys: 'V', desc: 'Vector', usage: 'Activate vector tool.' },
          { keys: 'T', desc: 'Text', usage: 'Activate text tool.' },
          { keys: 'A', desc: 'Artboard', usage: 'Activate artboard tool.' },
          { keys: 'Cmd + G', desc: 'Group', usage: 'Group selected elements.' },
          { keys: 'Cmd + Shift + G', desc: 'Ungroup', usage: 'Ungroup selection.' },
          { keys: 'Cmd + R', desc: 'Rename', usage: 'Rename selected layer.' },
        ]
      },
    ]
  },
  xcode: {
    name: "Xcode",
    icon: "fas fa-hammer",
    source: "https://developer.apple.com/library/archive/documentation/IDEs/Conceptual/xcode_help-command_shortcuts/MenuCommands/MenuCommands014.html",
    categories: [
      {
        name: "Build & Run",
        shortcuts: [
          { keys: "Cmd + B", desc: "Build", usage: "Build the current scheme without running it." },
          { keys: "Cmd + R", desc: "Run", usage: "Build and run the app in the simulator or on a device." },
          { keys: "Ctrl + Cmd + R", desc: "Run Without Building", usage: "Launch the last build again without rebuilding." },
          { keys: "Cmd + .", desc: "Stop", usage: "Stop the running app or the current build." },
          { keys: "Cmd + U", desc: "Test", usage: "Build and run the test suite for the current scheme." },
          { keys: "Ctrl + Cmd + U", desc: "Test Without Building", usage: "Re-run tests using the existing build products." },
          { keys: "Cmd + I", desc: "Profile", usage: "Build and launch the app in Instruments for profiling." },
          { keys: "Shift + Cmd + B", desc: "Analyze", usage: "Run the static analyzer to find potential bugs." },
          { keys: "Shift + Cmd + K", desc: "Clean", usage: "Clean the build products for the current scheme." },
          { keys: "Option + Shift + Cmd + K", desc: "Clean Build Folder", usage: "Delete the entire build folder, including derived data for the scheme." },
          { keys: "Cmd + <", desc: "Edit Scheme", usage: "Open the scheme editor to change run, test, and build settings." },
        ]
      },
      {
        name: "Navigation",
        shortcuts: [
          { keys: "Shift + Cmd + O", desc: "Open Quickly", usage: "Fuzzy-search files and symbols and jump straight to them." },
          { keys: "Cmd + L", desc: "Go to Line", usage: "Jump to a specific line number in the current file." },
          { keys: "Ctrl + Cmd + J", desc: "Jump to Definition", usage: "Go to the definition of the symbol under the cursor." },
          { keys: "Ctrl + Cmd + Left", desc: "Go Back", usage: "Go back to the previous location in your navigation history." },
          { keys: "Ctrl + Cmd + Right", desc: "Go Forward", usage: "Go forward again in your navigation history." },
          { keys: "Ctrl + Cmd + Up", desc: "Jump to Counterpart", usage: "Switch between a source file and its header or generated interface." },
          { keys: "Shift + Cmd + J", desc: "Reveal in Project Navigator", usage: "Highlight the current file in the project navigator." },
          { keys: "Cmd + '", desc: "Jump to Next Issue", usage: "Move to the next warning or error in the file." },
          { keys: "Cmd + \"", desc: "Jump to Previous Issue", usage: "Move to the previous warning or error in the file." },
          { keys: "Ctrl + 6", desc: "Show Document Items", usage: "Open the jump bar symbol list; type to filter methods in the file." },
        ]
      },
      {
        name: "Editor & Panels",
        shortcuts: [
          { keys: "Cmd + 0", desc: "Show/Hide Navigator", usage: "Toggle the left navigator panel." },
          { keys: "Cmd + 1", desc: "Project Navigator", usage: "Show the project navigator; Cmd + 1 through Cmd + 9 switch navigator tabs." },
          { keys: "Option + Cmd + 0", desc: "Show/Hide Inspectors", usage: "Toggle the right inspector panel." },
          { keys: "Shift + Cmd + Y", desc: "Show/Hide Debug Area", usage: "Toggle the debug area with console and variables view." },
          { keys: "Shift + Cmd + L", desc: "Show Library", usage: "Open the library of UI elements, snippets, and assets." },
          { keys: "Shift + Cmd + C", desc: "Activate Console", usage: "Move focus to the debug console." },
          { keys: "Shift + Cmd + 0", desc: "Developer Documentation", usage: "Open the developer documentation window." },
          { keys: "Cmd + Return", desc: "Editor Only", usage: "Close assistant and split panes and show a single editor." },
          { keys: "Ctrl + Option + Cmd + Return", desc: "Assistant Editor", usage: "Open the assistant editor pane beside the current file." },
          { keys: "Option + Cmd + Return", desc: "Show Canvas", usage: "Toggle the SwiftUI preview canvas." },
          { keys: "Option + Cmd + P", desc: "Resume Preview", usage: "Refresh and resume the SwiftUI canvas preview." },
        ]
      },
      {
        name: "Editing",
        shortcuts: [
          { keys: "Cmd + /", desc: "Comment Selection", usage: "Toggle line comments on the selected lines." },
          { keys: "Ctrl + I", desc: "Re-Indent", usage: "Re-indent the selected lines to match the surrounding structure." },
          { keys: "Cmd + ]", desc: "Shift Right", usage: "Indent the selected lines one level." },
          { keys: "Cmd + [", desc: "Shift Left", usage: "Outdent the selected lines one level." },
          { keys: "Option + Cmd + ]", desc: "Move Line Down", usage: "Move the current line or selection down." },
          { keys: "Option + Cmd + [", desc: "Move Line Up", usage: "Move the current line or selection up." },
          { keys: "Ctrl + Space", desc: "Show Completions", usage: "Trigger code completion at the cursor." },
          { keys: "Ctrl + Cmd + E", desc: "Edit All in Scope", usage: "Rename every occurrence of the symbol within the current scope." },
          { keys: "Option + Cmd + /", desc: "Add Documentation", usage: "Insert a documentation comment template above the declaration." },
          { keys: "Cmd + F", desc: "Find", usage: "Find text in the current file." },
          { keys: "Option + Cmd + F", desc: "Find and Replace", usage: "Find and replace text in the current file." },
          { keys: "Shift + Cmd + F", desc: "Find in Workspace", usage: "Search across the entire workspace." },
          { keys: "Cmd + G", desc: "Find Next", usage: "Jump to the next match; add Shift for the previous match." },
          { keys: "Cmd + E", desc: "Use Selection for Find", usage: "Put the current selection into the find field." },
        ]
      },
      {
        name: "Code Folding",
        shortcuts: [
          { keys: "Option + Cmd + Left", desc: "Fold", usage: "Fold the code block at the cursor." },
          { keys: "Option + Cmd + Right", desc: "Unfold", usage: "Unfold the code block at the cursor." },
          { keys: "Option + Shift + Cmd + Left", desc: "Fold Methods & Functions", usage: "Fold every method and function in the file." },
          { keys: "Option + Shift + Cmd + Right", desc: "Unfold Methods & Functions", usage: "Unfold every method and function in the file." },
        ]
      },
      {
        name: "Debugging",
        shortcuts: [
          { keys: "Cmd + \\", desc: "Toggle Breakpoint", usage: "Add or remove a breakpoint on the current line." },
          { keys: "Cmd + Y", desc: "Activate/Deactivate Breakpoints", usage: "Enable or disable all breakpoints at once." },
          { keys: "Ctrl + Cmd + Y", desc: "Pause/Continue", usage: "Pause the running process, or continue when stopped at a breakpoint." },
          { keys: "F6", desc: "Step Over", usage: "Execute the current line and stop at the next one." },
          { keys: "F7", desc: "Step Into", usage: "Step into the function call on the current line." },
          { keys: "F8", desc: "Step Out", usage: "Run until the current function returns." },
          { keys: "Cmd + K", desc: "Clear Console", usage: "Clear the debug console output." },
        ]
      },
      {
        name: "Files & Project",
        shortcuts: [
          { keys: "Cmd + N", desc: "New File", usage: "Create a new file from a template." },
          { keys: "Shift + Cmd + N", desc: "New Project", usage: "Create a new Xcode project." },
          { keys: "Option + Cmd + N", desc: "New Group", usage: "Create a new group in the project navigator." },
          { keys: "Option + Cmd + A", desc: "Add Files", usage: "Add existing files to the project." },
          { keys: "Cmd + S", desc: "Save", usage: "Save the current file." },
          { keys: "Option + Cmd + S", desc: "Save All", usage: "Save every modified file." },
          { keys: "Cmd + ,", desc: "Settings", usage: "Open Xcode settings, including key bindings." },
          { keys: "Cmd + T", desc: "New Tab", usage: "Open a new editor tab in the current window." },
          { keys: "Shift + Cmd + 2", desc: "Devices and Simulators", usage: "Open the window for managing devices and simulators." },
        ]
      },
    ]
  },
  android_studio: {
    name: "Android Studio",
    icon: "fab fa-android",
    source: "https://developer.android.com/studio/intro/keyboard-shortcuts",
    categories: [
      {
        name: "Search & Navigation",
        shortcuts: [
          { keys: "Shift + Shift", desc: "Search Everywhere", usage: "Press Shift twice to search code, files, actions, and settings." },
          { keys: "Ctrl + Shift + A", desc: "Find Action", usage: "Search and run any IDE action by name. macOS: Cmd + Shift + A." },
          { keys: "Ctrl + N", desc: "Find Class", usage: "Navigate to a class by name; supports camel-hump matching. macOS: Cmd + O." },
          { keys: "Ctrl + Shift + N", desc: "Find File", usage: "Navigate to a file or folder by name. macOS: Cmd + Shift + O." },
          { keys: "Ctrl + Alt + Shift + N", desc: "Find Symbol", usage: "Navigate to a method or field by name. macOS: Cmd + Option + O." },
          { keys: "Ctrl + F", desc: "Find", usage: "Find text in the current file. macOS: Cmd + F." },
          { keys: "F3", desc: "Find Next", usage: "Jump to the next match; Shift + F3 for the previous one. macOS: Cmd + G." },
          { keys: "Ctrl + R", desc: "Replace", usage: "Find and replace text in the current file. macOS: Cmd + R." },
          { keys: "Ctrl + Shift + F", desc: "Find in Path", usage: "Search text across the whole project. macOS: Cmd + Shift + F." },
          { keys: "Ctrl + G", desc: "Go to Line", usage: "Jump to a specific line and column. macOS: Cmd + L." },
          { keys: "Ctrl + E", desc: "Recent Files", usage: "Open the recently accessed files dialog. macOS: Cmd + E." },
          { keys: "Ctrl + Shift + Backspace", desc: "Last Edit Location", usage: "Jump back to the place you last edited. macOS: Cmd + Shift + Delete." },
        ]
      },
      {
        name: "Code Completion & Generation",
        shortcuts: [
          { keys: "Ctrl + Space", desc: "Basic Completion", usage: "Show completion suggestions; press twice for deeper results." },
          { keys: "Ctrl + Shift + Space", desc: "Smart Completion", usage: "Show completions filtered by the expected type." },
          { keys: "Ctrl + Shift + Enter", desc: "Complete Statement", usage: "Finish the statement, adding braces, parentheses, and formatting. macOS: Cmd + Shift + Enter." },
          { keys: "Alt + Enter", desc: "Quick Fix", usage: "Show intention actions and quick fixes for the code at the caret. macOS: Option + Enter." },
          { keys: "Alt + Insert", desc: "Generate Code", usage: "Generate getters, setters, constructors, overrides, and more. macOS: Cmd + N." },
          { keys: "Ctrl + O", desc: "Override Methods", usage: "Choose parent methods to override." },
          { keys: "Ctrl + I", desc: "Implement Methods", usage: "Implement methods required by an interface." },
          { keys: "Ctrl + Alt + T", desc: "Surround With", usage: "Wrap the selection in if, try/catch, loops, and similar templates. macOS: Cmd + Option + T." },
        ]
      },
      {
        name: "Editing",
        shortcuts: [
          { keys: "Ctrl + /", desc: "Line Comment", usage: "Comment or uncomment the current line. macOS: Cmd + /." },
          { keys: "Ctrl + Shift + /", desc: "Block Comment", usage: "Wrap the selection in a block comment. macOS: Cmd + Shift + /." },
          { keys: "Ctrl + D", desc: "Duplicate Line", usage: "Duplicate the current line or selection. macOS: Cmd + D." },
          { keys: "Ctrl + Y", desc: "Delete Line", usage: "Delete the line at the caret. macOS: Cmd + Delete." },
          { keys: "Ctrl + W", desc: "Extend Selection", usage: "Select successively larger code blocks. macOS: Option + Up." },
          { keys: "Ctrl + Shift + W", desc: "Shrink Selection", usage: "Shrink the selection back to the previous block. macOS: Option + Down." },
          { keys: "Ctrl + Alt + L", desc: "Reformat Code", usage: "Reformat the file or selection, including XML layouts. macOS: Cmd + Option + L." },
          { keys: "Ctrl + Alt + I", desc: "Auto-Indent Lines", usage: "Fix the indentation of the current lines. macOS: Ctrl + Option + I." },
          { keys: "Ctrl + Alt + O", desc: "Optimize Imports", usage: "Remove unused imports and reorder the rest. macOS: Ctrl + Option + O." },
          { keys: "Ctrl + Shift + J", desc: "Smart Line Join", usage: "Join the next line into the current one intelligently." },
          { keys: "Shift + Enter", desc: "Start New Line", usage: "Start a new line below without breaking the current one." },
          { keys: "F2", desc: "Next Highlighted Error", usage: "Jump to the next error; Shift + F2 goes to the previous one." },
        ]
      },
      {
        name: "Navigate Code",
        shortcuts: [
          { keys: "Ctrl + B", desc: "Go to Declaration", usage: "Jump to where the symbol is declared; Ctrl-click works too. macOS: Cmd + B." },
          { keys: "Ctrl + Alt + B", desc: "Go to Implementations", usage: "List and jump to implementations of the symbol. macOS: Cmd + Option + B." },
          { keys: "Ctrl + U", desc: "Go to Super Method", usage: "Jump to the supermethod or superclass. macOS: Cmd + U." },
          { keys: "Ctrl + F12", desc: "File Structure", usage: "Show the structure popup for the current file. macOS: Cmd + F12." },
          { keys: "Ctrl + H", desc: "Type Hierarchy", usage: "Open the type hierarchy for the class at the caret." },
          { keys: "Ctrl + Q", desc: "Quick Documentation", usage: "Show documentation for the symbol at the caret. macOS: Ctrl + J." },
          { keys: "Ctrl + P", desc: "Parameter Info", usage: "Show the parameters of the method being called. macOS: Cmd + P." },
          { keys: "Alt + F7", desc: "Find Usages", usage: "Find all code that references the symbol at the caret. macOS: Option + F7." },
        ]
      },
      {
        name: "Refactoring",
        shortcuts: [
          { keys: "Shift + F6", desc: "Rename", usage: "Rename the symbol and update every reference." },
          { keys: "Ctrl + Alt + M", desc: "Extract Method", usage: "Turn the selected code into a new method. macOS: Cmd + Option + M." },
          { keys: "Ctrl + Alt + V", desc: "Extract Variable", usage: "Turn the selected expression into a local variable. macOS: Cmd + Option + V." },
          { keys: "Ctrl + Alt + F", desc: "Extract Field", usage: "Turn the selected expression into a class field. macOS: Cmd + Option + F." },
          { keys: "Ctrl + Alt + C", desc: "Extract Constant", usage: "Turn the selected expression into a constant. macOS: Cmd + Option + C." },
          { keys: "Ctrl + Alt + P", desc: "Extract Parameter", usage: "Turn the selected expression into a method parameter. macOS: Cmd + Option + P." },
          { keys: "Ctrl + Alt + N", desc: "Inline", usage: "Inline the variable or method at the caret. macOS: Cmd + Option + N." },
          { keys: "F6", desc: "Move", usage: "Move a class, method, or file to another location; F5 copies it." },
        ]
      },
      {
        name: "Build, Run & Debug",
        shortcuts: [
          { keys: "Ctrl + F9", desc: "Build", usage: "Build the project. macOS: Cmd + F9." },
          { keys: "Shift + F10", desc: "Run", usage: "Build and run the app. macOS: Ctrl + R." },
          { keys: "Shift + F9", desc: "Debug", usage: "Run the app with the debugger attached. macOS: Ctrl + D." },
          { keys: "Ctrl + F10", desc: "Apply Changes", usage: "Apply changes and restart the activity without reinstalling. macOS: Ctrl + Cmd + R." },
          { keys: "F8", desc: "Step Over", usage: "Execute the current line and stop at the next one." },
          { keys: "F7", desc: "Step Into", usage: "Step into the method call on the current line." },
          { keys: "Shift + F8", desc: "Step Out", usage: "Run until the current method returns." },
          { keys: "Alt + F9", desc: "Run to Cursor", usage: "Continue execution until the line at the caret. macOS: Option + F9." },
          { keys: "F9", desc: "Resume Program", usage: "Continue running after a breakpoint. macOS: Cmd + Option + R." },
          { keys: "Ctrl + F8", desc: "Toggle Breakpoint", usage: "Add or remove a breakpoint on the current line. macOS: Cmd + F8." },
          { keys: "Alt + F8", desc: "Evaluate Expression", usage: "Evaluate an expression while paused at a breakpoint. macOS: Option + F8." },
          { keys: "Ctrl + Shift + F8", desc: "View Breakpoints", usage: "Open the breakpoints dialog to review conditions. macOS: Cmd + Shift + F8." },
        ]
      },
      {
        name: "Tool Windows",
        shortcuts: [
          { keys: "Alt + 1", desc: "Project Window", usage: "Toggle the Project tool window. macOS: Cmd + 1." },
          { keys: "Alt + 6", desc: "Logcat", usage: "Open the Logcat tool window. macOS: Cmd + 6." },
          { keys: "Alt + 9", desc: "Version Control", usage: "Open the Version Control tool window. macOS: Cmd + 9." },
          { keys: "Ctrl + Shift + F12", desc: "Hide All Tool Windows", usage: "Maximize the editor by hiding every tool window. macOS: Ctrl + Cmd + F12." },
          { keys: "Esc", desc: "Return to Editor", usage: "Move focus from a tool window back to the editor." },
          { keys: "Ctrl + Tab", desc: "Switcher", usage: "Switch between open tabs and tool windows." },
        ]
      },
    ]
  },
  postman: {
    name: "Postman",
    icon: "fas fa-paper-plane",
    source: "https://learning.postman.com/docs/getting-started/basics/navigating-postman",
    categories: [
      {
        name: "Requests & Tabs",
        shortcuts: [
          { keys: "Ctrl + Enter", desc: "Send Request", usage: "Send the current request; works from anywhere in the app. macOS: Cmd + Enter." },
          { keys: "Ctrl + S", desc: "Save", usage: "Save the current request or tab. macOS: Cmd + S." },
          { keys: "Ctrl + Shift + S", desc: "Save As", usage: "Save a copy of the current request. macOS: Cmd + Shift + S." },
          { keys: "Ctrl + T", desc: "New Tab", usage: "Open a new tab. macOS: Cmd + T." },
          { keys: "Ctrl + N", desc: "Create New", usage: "Open the dialog for creating requests, collections, and environments. macOS: Cmd + N." },
          { keys: "Ctrl + L", desc: "Jump to URL", usage: "Move focus to the request URL field. macOS: Cmd + L." },
          { keys: "Ctrl + 1", desc: "Focus First Tab", usage: "Focus the first tab; Ctrl + 1 through Ctrl + 9 focus the nth tab. macOS: Cmd + 1." },
        ]
      },
      {
        name: "Search & Command Palette",
        shortcuts: [
          { keys: "Ctrl + K", desc: "Search Postman", usage: "Search workspaces, collections, requests, and APIs. macOS: Cmd + K." },
          { keys: "Ctrl + Shift + P", desc: "Command Palette", usage: "Navigate features with keystrokes and natural language. macOS: Cmd + Shift + P." },
          { keys: "Ctrl + Shift + F", desc: "Find and Replace", usage: "Search the current workspace on the desktop app. macOS: Cmd + Shift + F." },
          { keys: "Ctrl + F", desc: "Search Sidebar", usage: "Filter items in the sidebar. macOS: Cmd + F." },
        ]
      },
      {
        name: "Sidebar Navigation",
        shortcuts: [
          { keys: "Ctrl + Alt + 1", desc: "Focus Sidebar", usage: "Move focus to the sidebar from anywhere. macOS: Cmd + Alt + 1." },
          { keys: "Ctrl + Alt + 2", desc: "Focus Builder", usage: "Move focus to the request builder. macOS: Cmd + Alt + 2." },
          { keys: "Down", desc: "Next Item", usage: "Move to the next item in the sidebar." },
          { keys: "Up", desc: "Previous Item", usage: "Move to the previous item in the sidebar." },
          { keys: "Right", desc: "Expand", usage: "Expand the selected collection or folder." },
          { keys: "Left", desc: "Collapse", usage: "Collapse the selected collection or folder." },
          { keys: "Shift + Down", desc: "Select Next Too", usage: "Select the current and next item." },
          { keys: "Shift + Up", desc: "Select Previous Too", usage: "Select the current and previous item." },
          { keys: "Enter", desc: "Open Request", usage: "Open the selected request in a tab, or rename the selected element." },
        ]
      },
      {
        name: "Manipulation",
        shortcuts: [
          { keys: "Ctrl + C", desc: "Copy", usage: "Copy the selected sidebar item. macOS: Cmd + C." },
          { keys: "Ctrl + V", desc: "Paste", usage: "Paste the copied item. macOS: Cmd + V." },
          { keys: "Ctrl + D", desc: "Duplicate", usage: "Duplicate the selected request or collection. macOS: Cmd + D." },
          { keys: "Ctrl + E", desc: "Edit / Rename", usage: "Rename the selected item. macOS: Cmd + E." },
          { keys: "Delete", desc: "Delete", usage: "Delete the selected item." },
        ]
      },
      {
        name: "Interface",
        shortcuts: [
          { keys: "Ctrl + \\", desc: "Toggle Sidebar", usage: "Show or hide the sidebar. macOS: Cmd + \\." },
          { keys: "Ctrl + Alt + C", desc: "Open Console", usage: "Open the Postman Console to inspect and debug requests. macOS: Cmd + Alt + C." },
        ]
      },
    ]
  },
  emacs: {
    name: 'Emacs',
    icon: 'fas fa-code',
    categories: [
      {
        name: 'Basic Editing',
        shortcuts: [
          { keys: 'C-x C-s', desc: 'Save', usage: 'Save the current file.' },
          { keys: 'C-x C-f', desc: 'Open file', usage: 'Open or create a file.' },
          { keys: 'C-x C-c', desc: 'Quit', usage: 'Quit Emacs.' },
          { keys: 'C-g', desc: 'Cancel', usage: 'Cancel current command.' },
          { keys: 'C-/', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'C-w', desc: 'Cut', usage: 'Cut selected region.' },
          { keys: 'M-w', desc: 'Copy', usage: 'Copy selected region.' },
          { keys: 'C-y', desc: 'Paste', usage: 'Paste (yank) killed text.' },
          { keys: 'C-s', desc: 'Search', usage: 'Start incremental search.' },
          { keys: 'M-x', desc: 'Execute command', usage: 'Run a command by name.' },
        ]
      },
    ]
  },
  edge: {
    name: 'Microsoft Edge',
    icon: 'fab fa-edge',
    categories: [
      {
        name: 'Tabs & Navigation',
        shortcuts: [
          { keys: 'Ctrl + T', desc: 'New tab', usage: 'Open a new tab.' },
          { keys: 'Ctrl + W', desc: 'Close tab', usage: 'Close the current tab.' },
          { keys: 'Ctrl + Shift + T', desc: 'Reopen tab', usage: 'Reopen the last closed tab.' },
          { keys: 'Ctrl + L', desc: 'Focus address bar', usage: 'Focus the address bar.' },
          { keys: 'Ctrl + Tab', desc: 'Next tab', usage: 'Switch to the next tab.' },
          { keys: 'Ctrl + D', desc: 'Bookmark', usage: 'Bookmark the current page.' },
          { keys: 'Ctrl + H', desc: 'History', usage: 'Open browser history.' },
          { keys: 'Ctrl + J', desc: 'Downloads', usage: 'Open downloads list.' },
          { keys: 'F12', desc: 'Dev tools', usage: 'Open developer tools.' },
          { keys: 'Ctrl + Shift + N', desc: 'InPrivate window', usage: 'Open InPrivate browsing window.' },
        ]
      },
    ]
  },
  powershell: {
    name: "PowerShell",
    icon: "fas fa-terminal",
    source: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_line_editing",
    categories: [
      {
        name: "Line Editing",
        shortcuts: [
          { keys: "Shift + Enter", desc: "Add Line", usage: "Start a new line without running the command; each new line shows the >> continuation prompt." },
          { keys: "Ctrl + Left", desc: "Word Left", usage: "Move the cursor one word to the left." },
          { keys: "Ctrl + Right", desc: "Word Right", usage: "Move the cursor one word to the right." },
          { keys: "Home", desc: "Line Start", usage: "Move to the beginning of the line; press twice in multi-line input to reach the first line." },
          { keys: "End", desc: "Line End", usage: "Move to the end of the line; press twice in multi-line input to reach the last line." },
          { keys: "Ctrl + Home", desc: "Delete to Start", usage: "Delete everything from the cursor to the beginning of the line." },
          { keys: "Ctrl + End", desc: "Delete to End", usage: "Delete everything from the cursor to the end of the line." },
          { keys: "Ctrl + Backspace", desc: "Delete Word Back", usage: "Delete the word before the cursor." },
          { keys: "Ctrl + Delete", desc: "Delete Word Forward", usage: "Delete the word after the cursor." },
          { keys: "Insert", desc: "Overstrike Mode", usage: "Toggle between insert and overwrite mode." },
        ]
      },
      {
        name: "Completion",
        shortcuts: [
          { keys: "Tab", desc: "Complete", usage: "Complete a cmdlet name, parameter, or path; press again to cycle through matches." },
          { keys: "Shift + Tab", desc: "Complete Backward", usage: "Cycle backward through the completion candidates." },
          { keys: "Ctrl + Space", desc: "Menu Complete", usage: "Show a menu of possible completions and pick with the arrow keys." },
        ]
      },
      {
        name: "History",
        shortcuts: [
          { keys: "Up", desc: "Previous Command", usage: "Recall the previous command from history." },
          { keys: "Down", desc: "Next Command", usage: "Recall the next command from history." },
          { keys: "Ctrl + R", desc: "Reverse History Search", usage: "Interactively search backward through your command history." },
          { keys: "Ctrl + S", desc: "Forward History Search", usage: "Interactively search forward through your command history." },
          { keys: "F8", desc: "History Search Backward", usage: "Recall the previous command that starts with what you've typed." },
          { keys: "Shift + F8", desc: "History Search Forward", usage: "Recall the next command that starts with what you've typed." },
          { keys: "Alt + .", desc: "Yank Last Argument", usage: "Insert the last argument of the previous command; press again to walk further back." },
        ]
      },
      {
        name: "Editing & Clipboard",
        shortcuts: [
          { keys: "Ctrl + C", desc: "Copy or Cancel", usage: "Copy the selection, or cancel the current input when nothing is selected." },
          { keys: "Ctrl + X", desc: "Cut", usage: "Cut the selected text." },
          { keys: "Ctrl + V", desc: "Paste", usage: "Paste from the clipboard." },
          { keys: "Ctrl + Z", desc: "Undo", usage: "Undo the last edit on the command line." },
          { keys: "Ctrl + Y", desc: "Redo", usage: "Redo the last undone edit." },
          { keys: "Ctrl + A", desc: "Select All", usage: "Select the entire command line." },
          { keys: "Esc", desc: "Revert Line", usage: "Clear the current input." },
          { keys: "Ctrl + L", desc: "Clear Screen", usage: "Clear the screen, like the cls or clear commands." },
        ]
      },
      {
        name: "Advanced",
        shortcuts: [
          { keys: "Alt + A", desc: "Select Command Argument", usage: "Cycle through the arguments on the line so you can replace each value quickly." },
          { keys: "Ctrl + ]", desc: "Go to Brace", usage: "Jump to the bracket, brace, or parenthesis matching the one at the cursor." },
          { keys: "Alt + 0", desc: "Digit Argument", usage: "Alt + 0 through Alt + 9 repeat the next keystroke that many times (e.g. Alt + 4 then # types ####)." },
          { keys: "F2", desc: "Switch Prediction View", usage: "Toggle the predictive IntelliSense display between inline and list view." },
          { keys: "Alt + ?", desc: "What Is Key", usage: "Show which function is bound to the next key you press." },
        ]
      },
    ]
  },
  audacity: {
    name: 'Audacity',
    icon: 'fas fa-headphones',
    categories: [
      {
        name: 'Editing & Playback',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Stop', usage: 'Play or stop audio playback.' },
          { keys: 'R', desc: 'Record', usage: 'Start recording.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Ctrl + X', desc: 'Cut', usage: 'Cut selected audio.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate selection to a new track.' },
          { keys: 'Ctrl + Shift + E', desc: 'Export audio', usage: 'Export project as audio file.' },
          { keys: 'Ctrl + L', desc: 'Silence', usage: 'Silence the selected region.' },
          { keys: 'Ctrl + I', desc: 'Split', usage: 'Split audio at the selection point.' },
        ]
      },
    ]
  },
  logic_pro: {
    name: 'Logic Pro',
    icon: 'fas fa-music',
    categories: [
      {
        name: 'Editing & Playback',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Stop', usage: 'Start or stop playback.' },
          { keys: 'R', desc: 'Record', usage: 'Start recording.' },
          { keys: 'Cmd + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Cmd + D', desc: 'Duplicate', usage: 'Duplicate selected regions.' },
          { keys: 'Cmd + T', desc: 'Split', usage: 'Split region at playhead.' },
          { keys: 'Cmd + J', desc: 'Join', usage: 'Join selected regions.' },
          { keys: 'X', desc: 'Toggle mixer', usage: 'Show or hide the mixer.' },
          { keys: 'Y', desc: 'Toggle library', usage: 'Toggle the sound library.' },
        ]
      },
    ]
  },
  fl_studio: {
    name: 'FL Studio',
    icon: 'fas fa-music',
    categories: [
      {
        name: 'Editing & Playback',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Stop', usage: 'Start or stop playback.' },
          { keys: 'Ctrl + R', desc: 'Record/Play', usage: 'Play in record mode.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'F5', desc: 'Playlist', usage: 'Open the playlist window.' },
          { keys: 'F6', desc: 'Channel rack', usage: 'Open the channel rack.' },
          { keys: 'F7', desc: 'Piano roll', usage: 'Open the piano roll.' },
          { keys: 'F9', desc: 'Mixer', usage: 'Open the mixer window.' },
          { keys: 'Ctrl + Shift + M', desc: 'Export MIDI', usage: 'Export project as MIDI.' },
        ]
      },
    ]
  },
  whatsapp: {
    name: 'WhatsApp',
    icon: 'fab fa-whatsapp',
    categories: [
      {
        name: 'Web/Desktop Shortcuts',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New chat', usage: 'Start a new chat.' },
          { keys: 'Ctrl + Shift + ]', desc: 'Next chat', usage: 'Go to next chat.' },
          { keys: 'Ctrl + Shift + [', desc: 'Previous chat', usage: 'Go to previous chat.' },
          { keys: 'Ctrl + E', desc: 'Archive chat', usage: 'Archive the current chat.' },
          { keys: 'Ctrl + Shift + M', desc: 'Mute', usage: 'Mute chat notifications.' },
          { keys: 'Ctrl + Backspace', desc: 'Delete chat', usage: 'Delete the current chat.' },
          { keys: 'Ctrl + Shift + N', desc: 'New group', usage: 'Create a new group.' },
          { keys: 'Ctrl + P', desc: 'Open profile', usage: 'Open your profile.' },
        ]
      },
    ]
  },
  trello: {
    name: "Trello",
    icon: "fab fa-trello",
    source: "https://support.atlassian.com/trello/docs/keyboard-shortcuts-in-trello/",
    categories: [
      {
        name: "Navigation",
        shortcuts: [
          { keys: "J", desc: "Next Card", usage: "Select the card below the current one; the Down arrow does the same." },
          { keys: "K", desc: "Previous Card", usage: "Select the card above the current one; the Up arrow does the same." },
          { keys: "B", desc: "Open Boards Menu", usage: "Search your boards by typing the first letters, then press Enter to open one." },
          { keys: "/", desc: "Search", usage: "Put the cursor in the Trello search box." },
          { keys: "Enter", desc: "Open Card", usage: "Open the currently selected card." },
          { keys: "Esc", desc: "Cancel", usage: "Close a dialog or cancel the current edit." },
          { keys: "W", desc: "Toggle Board Menu", usage: "Show or hide the board sidebar menu." },
          { keys: "Shift + ?", desc: "Show Shortcuts", usage: "Open the keyboard shortcuts reference." },
        ]
      },
      {
        name: "Cards",
        shortcuts: [
          { keys: "N", desc: "New Card", usage: "Open the card composer; hover over a card to insert the new card right below it." },
          { keys: "E", desc: "Quick Edit", usage: "Open quick edit for the card under the cursor." },
          { keys: "T", desc: "Edit Title", usage: "Edit the title of the hovered or open card." },
          { keys: "C", desc: "Archive Card", usage: "Archive the card under the cursor." },
          { keys: "D", desc: "Due Date", usage: "Open the due date picker for the card." },
          { keys: "L", desc: "Labels", usage: "Open the label menu for the card." },
          { keys: "M", desc: "Members", usage: "Open the member menu to add or remove people." },
          { keys: "Space", desc: "Assign Yourself", usage: "Add yourself to the card; press again to remove yourself." },
          { keys: "S", desc: "Watch Card", usage: "Watch or unwatch the card to get notified of changes." },
          { keys: ",", desc: "Move to Left List", usage: "Send the card to the adjacent list on the left." },
          { keys: ".", desc: "Move to Right List", usage: "Send the card to the adjacent list on the right." },
        ]
      },
      {
        name: "Actions",
        shortcuts: [
          { keys: "Z", desc: "Undo", usage: "Undo your last action (deletions can't be undone)." },
          { keys: "Shift + Z", desc: "Redo", usage: "Redo something you've undone." },
          { keys: "R", desc: "Repeat Action", usage: "Repeat your last action on the current selection." },
          { keys: "Ctrl + C", desc: "Copy Card", usage: "Copy the hovered card. macOS: Cmd + C." },
          { keys: "Ctrl + V", desc: "Paste Card", usage: "Paste the copied card where the cursor is. macOS: Cmd + V." },
          { keys: "Ctrl + Enter", desc: "Save Text", usage: "Submit a comment or save the text you're writing. macOS: Cmd + Enter." },
          { keys: "@", desc: "Mention", usage: "Mention a board member in a comment with autocomplete." },
        ]
      },
      {
        name: "Filtering",
        shortcuts: [
          { keys: "F", desc: "Filter Cards", usage: "Open the card filter for the board." },
          { keys: "X", desc: "Clear Filters", usage: "Remove all active filters." },
          { keys: "Q", desc: "My Cards Filter", usage: "Toggle showing only the cards assigned to you." },
        ]
      },
    ]
  },
  google_slides: {
    name: 'Google Slides',
    icon: 'fas fa-presentation',
    categories: [
      {
        name: 'Presentation',
        shortcuts: [
          { keys: 'Ctrl + M', desc: 'New slide', usage: 'Add a new slide.' },
          { keys: 'Ctrl + D', desc: 'Duplicate slide', usage: 'Duplicate the current slide.' },
          { keys: 'Ctrl + Shift + F', desc: 'Fullscreen', usage: 'Start fullscreen presentation.' },
          { keys: 'Ctrl + Enter', desc: 'Start presentation', usage: 'Start the slideshow.' },
          { keys: 'Ctrl + /', desc: 'Shortcuts list', usage: 'Show keyboard shortcuts.' },
          { keys: 'Tab', desc: 'Next element', usage: 'Move focus to next element.' },
        ]
      },
    ]
  },
  onenote: {
    name: 'OneNote',
    icon: 'fas fa-book',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + 1', desc: 'To-Do tag', usage: 'Add a checkbox tag.' },
          { keys: 'Ctrl + .', desc: 'Bullet list', usage: 'Create a bullet list.' },
          { keys: 'Ctrl + /', desc: 'Numbered list', usage: 'Create a numbered list.' },
          { keys: 'Ctrl + Shift + >', desc: 'Increase font', usage: 'Increase font size.' },
          { keys: 'Alt + =', desc: 'Insert equation', usage: 'Insert an equation.' },
          { keys: 'Ctrl + Alt + D', desc: 'Insert date', usage: 'Insert current date.' },
        ]
      },
    ]
  },
  asana: {
    name: 'Asana',
    icon: 'fas fa-check-circle',
    categories: [
      {
        name: 'Task Management',
        shortcuts: [
          { keys: 'Tab + Q', desc: 'Quick add', usage: 'Quickly add a task.' },
          { keys: 'Tab + Enter', desc: 'Open task', usage: 'Open selected task.' },
          { keys: 'Tab + C', desc: 'Comment', usage: 'Add a comment to task.' },
          { keys: 'Tab + A', desc: 'Assign to me', usage: 'Assign task to yourself.' },
          { keys: 'Tab + D', desc: 'Set due date', usage: 'Set a due date.' },
          { keys: 'Tab + H', desc: 'Mark complete', usage: 'Mark task as complete.' },
          { keys: 'Tab + /', desc: 'Search', usage: 'Search tasks.' },
        ]
      },
    ]
  },
  clickup: {
    name: 'ClickUp',
    icon: 'fas fa-check-double',
    categories: [
      {
        name: 'Task Management',
        shortcuts: [
          { keys: 'Q', desc: 'Quick create', usage: 'Quickly create a task.' },
          { keys: 'M', desc: 'Assign to me', usage: 'Assign task to me.' },
          { keys: 'D', desc: 'Set due date', usage: 'Set a due date.' },
          { keys: 'S', desc: 'Change status', usage: 'Change task status.' },
          { keys: 'P', desc: 'Set priority', usage: 'Set priority level.' },
          { keys: 'Ctrl + K', desc: 'Command center', usage: 'Open command center.' },
        ]
      },
    ]
  },
  monday: {
    name: 'Monday.com',
    icon: 'fas fa-calendar-check',
    categories: [
      {
        name: 'Board',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Add item', usage: 'Add a new item.' },
          { keys: 'Ctrl + C', desc: 'Copy', usage: 'Copy selected cell.' },
          { keys: 'Ctrl + V', desc: 'Paste', usage: 'Paste content.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Ctrl + F', desc: 'Search', usage: 'Search in the board.' },
          { keys: 'Arrow Keys', desc: 'Navigate cells', usage: 'Navigate cells with arrow keys.' },
        ]
      },
    ]
  },
  google_calendar: {
    name: "Google Calendar",
    icon: "fas fa-calendar",
    source: "https://support.google.com/calendar/answer/37034",
    categories: [
      {
        name: "Navigation",
        shortcuts: [
          { keys: "N", desc: "Next Date Range", usage: "Move to the next day, week, or month depending on your view; J does the same." },
          { keys: "P", desc: "Previous Date Range", usage: "Move to the previous day, week, or month; K does the same." },
          { keys: "T", desc: "Today", usage: "Jump back to the current day." },
          { keys: "G", desc: "Go to Date", usage: "Type a date and jump straight to it." },
          { keys: "R", desc: "Refresh", usage: "Refresh the calendar to show the latest synced events." },
          { keys: "/", desc: "Search", usage: "Put the cursor in the search box." },
          { keys: "+", desc: "Add Calendar", usage: "Move to the add-a-calendar section." },
          { keys: "S", desc: "Settings", usage: "Open the Settings page." },
        ]
      },
      {
        name: "Views",
        shortcuts: [
          { keys: "D", desc: "Day View", usage: "Switch to day view; pressing 1 does the same." },
          { keys: "W", desc: "Week View", usage: "Switch to week view; pressing 2 does the same." },
          { keys: "M", desc: "Month View", usage: "Switch to month view; pressing 3 does the same." },
          { keys: "X", desc: "Custom View", usage: "Switch to your custom view (set in settings); pressing 4 does the same." },
          { keys: "A", desc: "Agenda View", usage: "Switch to the agenda (schedule) view; pressing 5 does the same." },
        ]
      },
      {
        name: "Events",
        shortcuts: [
          { keys: "C", desc: "Create Event", usage: "Create a new event." },
          { keys: "E", desc: "Event Details", usage: "Open the details of the selected event." },
          { keys: "Backspace", desc: "Delete Event", usage: "Delete the selected event; Delete does the same." },
          { keys: "Z", desc: "Undo", usage: "Undo the last action, such as a deletion." },
          { keys: "Ctrl + S", desc: "Save Event", usage: "Save from the event details page. macOS: Cmd + S." },
          { keys: "Esc", desc: "Back to Calendar", usage: "Return to the calendar grid from an event details page." },
        ]
      },
      {
        name: "Side Panel",
        shortcuts: [
          { keys: "Ctrl + Alt + .", desc: "Next Side Panel App", usage: "Move to the Keep/Tasks side panel. macOS: Cmd + Option + . — Chromebook: Alt + Shift + ." },
          { keys: "Ctrl + Alt + ,", desc: "Previous Side Panel App", usage: "Cycle the side panel in the other direction. macOS: Cmd + Option + , — Chromebook: Alt + Shift + ,." },
        ]
      },
    ]
  },
  xd: {
    name: 'Adobe XD',
    icon: 'fas fa-palette',
    categories: [
      {
        name: 'Design',
        shortcuts: [
          { keys: 'R', desc: 'Rectangle', usage: 'Activate rectangle tool.' },
          { keys: 'E', desc: 'Ellipse', usage: 'Activate ellipse tool.' },
          { keys: 'T', desc: 'Text', usage: 'Activate text tool.' },
          { keys: 'P', desc: 'Pen', usage: 'Activate pen tool.' },
          { keys: 'A', desc: 'Artboard', usage: 'Activate artboard tool.' },
          { keys: 'Ctrl + G', desc: 'Group', usage: 'Group selected elements.' },
          { keys: 'Ctrl + K', desc: 'Component', usage: 'Make into component.' },
          { keys: 'Ctrl + Enter', desc: 'Preview prototype', usage: 'Preview the prototype.' },
        ]
      },
    ]
  },
  procreate: {
    name: 'Procreate',
    icon: 'fas fa-paint-brush',
    categories: [
      {
        name: 'Tools & Gestures',
        shortcuts: [
          { keys: 'E', desc: 'Eraser', usage: 'Activate eraser tool.' },
          { keys: 'B', desc: 'Brush', usage: 'Activate brush tool.' },
          { keys: 'S', desc: 'Smudge', usage: 'Activate smudge tool.' },
          { keys: 'Two-finger tap', desc: 'Undo', usage: 'Two-finger tap to undo.' },
          { keys: 'Three-finger tap', desc: 'Redo', usage: 'Three-finger tap to redo.' },
          { keys: 'Four-finger tap', desc: 'Fullscreen', usage: 'Four-finger tap to toggle fullscreen.' },
          { keys: 'Two-finger pinch', desc: 'Zoom', usage: 'Pinch to zoom canvas.' },
        ]
      },
    ]
  },
  neovim: {
    name: 'Neovim / Vim',
    icon: 'fas fa-code',
    categories: [
      {
        name: 'Mode Switching',
        shortcuts: [
          { keys: 'i', desc: 'Insert mode', usage: 'Enter insert mode at cursor.' },
          { keys: 'Esc', desc: 'Normal mode', usage: 'Return to normal mode.' },
          { keys: 'v', desc: 'Visual mode', usage: 'Enter visual (selection) mode.' },
          { keys: 'V', desc: 'Line visual', usage: 'Enter line-wise visual mode.' },
          { keys: 'dd', desc: 'Delete line', usage: 'Delete current line.' },
          { keys: 'yy', desc: 'Copy line', usage: 'Copy (yank) current line.' },
          { keys: 'p', desc: 'Paste', usage: 'Paste copied content.' },
          { keys: 'u', desc: 'Undo', usage: 'Undo last action.' },
          { keys: '/[pattern]', desc: 'Search', usage: 'Search for a pattern.' },
          { keys: ':%s/old/new/g', desc: 'Replace all', usage: 'Replace text throughout the file.' },
        ]
      },
    ]
  },
  webstorm: {
    name: "WebStorm",
    icon: "fas fa-code",
    source: "https://resources.jetbrains.com/storage/products/webstorm/docs/WebStorm_ReferenceCard.pdf",
    categories: [
      {
        name: "General",
        shortcuts: [
          { keys: "Shift + Shift", desc: "Search Everywhere", usage: "Press Shift twice to search files, classes, symbols, actions, and settings at once." },
          { keys: "Ctrl + Shift + A", desc: "Find Action", usage: "Search for any IDE command by name and run it." },
          { keys: "Alt + 1", desc: "Open Tool Window", usage: "Alt + 1 through Alt + 9 open the corresponding tool window, such as Project or Terminal." },
          { keys: "Ctrl + Shift + F12", desc: "Toggle Maximizing Editor", usage: "Hide all tool windows to give the editor the full window." },
          { keys: "Alt + Shift + F", desc: "Add to Favorites", usage: "Add the current file or symbol to your Favorites list." },
          { keys: "Alt + Shift + I", desc: "Inspect Current File", usage: "Run the current inspection profile against the open file." },
          { keys: "Ctrl + `", desc: "Quick Switch Scheme", usage: "Switch the color scheme, keymap, code style, or look and feel." },
          { keys: "Ctrl + Alt + S", desc: "Open Settings", usage: "Open the Settings dialog." },
          { keys: "Ctrl + Tab", desc: "Switcher", usage: "Switch between open editor tabs and tool windows." },
        ]
      },
      {
        name: "Editing",
        shortcuts: [
          { keys: "Ctrl + Space", desc: "Basic Code Completion", usage: "Complete the name of a class, method, or variable." },
          { keys: "Alt + Enter", desc: "Show Intention Actions", usage: "Show quick-fixes and intention actions for the code at the caret." },
          { keys: "Ctrl + P", desc: "Parameter Info", usage: "Show the parameters of the method call you are inside." },
          { keys: "Ctrl + Q", desc: "Quick Documentation", usage: "Look up the documentation for the symbol at the caret." },
          { keys: "Ctrl + F1", desc: "Show Error Description", usage: "Describe the error or warning at the caret." },
          { keys: "Alt + Insert", desc: "Generate Code", usage: "Generate constructors, getters, setters, and other boilerplate." },
          { keys: "Ctrl + Alt + T", desc: "Surround With", usage: "Wrap the selection in if..else, try..catch, for, and similar constructs." },
          { keys: "Ctrl + J", desc: "Insert Live Template", usage: "Insert a live template snippet at the caret." },
          { keys: "Ctrl + /", desc: "Line Comment", usage: "Comment or uncomment the current line or selection." },
          { keys: "Ctrl + Shift + /", desc: "Block Comment", usage: "Comment or uncomment the selection with a block comment." },
          { keys: "Ctrl + W", desc: "Extend Selection", usage: "Select successively increasing code blocks around the caret." },
          { keys: "Ctrl + Shift + W", desc: "Shrink Selection", usage: "Decrease the current selection to its previous state." },
          { keys: "Alt + Q", desc: "Context Info", usage: "Show the declaration of the class or method you are currently inside." },
          { keys: "Ctrl + Alt + L", desc: "Reformat Code", usage: "Reformat the current file or selection to the project code style." },
          { keys: "Ctrl + Alt + I", desc: "Auto-Indent Lines", usage: "Fix the indentation of the current line or selection." },
          { keys: "Tab", desc: "Indent Selection", usage: "Indent the selected lines by one level." },
          { keys: "Shift + Tab", desc: "Unindent Selection", usage: "Unindent the selected lines by one level." },
          { keys: "Ctrl + Shift + V", desc: "Paste from History", usage: "Paste from the list of recent clipboard buffers." },
          { keys: "Ctrl + D", desc: "Duplicate Line", usage: "Duplicate the current line or the selected block." },
          { keys: "Ctrl + Y", desc: "Delete Line", usage: "Delete the line at the caret." },
          { keys: "Alt + Shift + Up", desc: "Move Line Up", usage: "Move the current line up one position." },
          { keys: "Alt + Shift + Down", desc: "Move Line Down", usage: "Move the current line down one position." },
          { keys: "Ctrl + Shift + J", desc: "Join Lines", usage: "Join the current line with the one below it." },
          { keys: "Ctrl + Enter", desc: "Split Line", usage: "Split the line at the caret." },
          { keys: "Shift + Enter", desc: "Start New Line", usage: "Start a new line below the current one from anywhere in the line." },
          { keys: "Ctrl + Shift + U", desc: "Toggle Case", usage: "Switch the word or selection between upper and lower case." },
          { keys: "Ctrl + Shift + ]", desc: "Select to Block End", usage: "Extend the selection to the end of the current code block." },
          { keys: "Ctrl + Shift + [", desc: "Select to Block Start", usage: "Extend the selection to the start of the current code block." },
          { keys: "Ctrl + Delete", desc: "Delete to Word End", usage: "Delete from the caret to the end of the word." },
          { keys: "Ctrl + Backspace", desc: "Delete to Word Start", usage: "Delete from the caret to the start of the word." },
          { keys: "Ctrl + Numpad +", desc: "Expand Code Block", usage: "Expand the folded code block at the caret." },
          { keys: "Ctrl + Numpad -", desc: "Collapse Code Block", usage: "Fold the code block at the caret." },
          { keys: "Ctrl + Shift + Numpad +", desc: "Expand All", usage: "Expand every folded region in the file." },
          { keys: "Ctrl + Shift + Numpad -", desc: "Collapse All", usage: "Fold every foldable region in the file." },
          { keys: "Ctrl + F4", desc: "Close Editor Tab", usage: "Close the active editor tab." },
        ]
      },
      {
        name: "Navigation",
        shortcuts: [
          { keys: "Ctrl + B", desc: "Go to Declaration", usage: "Jump to the declaration of the symbol at the caret; Ctrl + Click does the same." },
          { keys: "Ctrl + N", desc: "Go to Class", usage: "Find and open a class by name." },
          { keys: "Ctrl + Shift + N", desc: "Go to File", usage: "Find and open a file by name." },
          { keys: "Ctrl + Alt + Shift + N", desc: "Go to Symbol", usage: "Find any symbol in the project by name." },
          { keys: "Alt + Right", desc: "Next Editor Tab", usage: "Move to the next open editor tab." },
          { keys: "Alt + Left", desc: "Previous Editor Tab", usage: "Move to the previous open editor tab." },
          { keys: "F12", desc: "Back to Tool Window", usage: "Return to the tool window you used last." },
          { keys: "Esc", desc: "Go to Editor", usage: "Move the focus from a tool window back to the editor." },
          { keys: "Ctrl + G", desc: "Go to Line", usage: "Jump to a specific line number." },
          { keys: "Ctrl + E", desc: "Recent Files", usage: "Show the popup of recently opened files." },
          { keys: "Ctrl + Alt + Right", desc: "Navigate Forward", usage: "Move forward through your navigation history." },
          { keys: "Ctrl + Alt + Left", desc: "Navigate Back", usage: "Move back through your navigation history." },
          { keys: "Ctrl + Shift + Backspace", desc: "Last Edit Location", usage: "Jump to the place where you last made a change." },
          { keys: "Alt + F1", desc: "Select In", usage: "Locate the current file or symbol in the Project view or another tool window." },
          { keys: "Ctrl + Alt + B", desc: "Go to Implementation", usage: "Jump to the implementations of the symbol at the caret." },
          { keys: "Ctrl + Shift + I", desc: "Quick Definition", usage: "Preview the definition of the symbol in a popup." },
          { keys: "Ctrl + Shift + B", desc: "Go to Type Declaration", usage: "Jump to the declaration of the symbol's type." },
          { keys: "Ctrl + U", desc: "Go to Super Method", usage: "Jump to the super-method or super-class." },
          { keys: "Alt + Up", desc: "Previous Method", usage: "Move the caret to the previous method." },
          { keys: "Alt + Down", desc: "Next Method", usage: "Move the caret to the next method." },
          { keys: "Ctrl + ]", desc: "Move to Block End", usage: "Move the caret to the end of the current code block." },
          { keys: "Ctrl + [", desc: "Move to Block Start", usage: "Move the caret to the start of the current code block." },
          { keys: "Ctrl + Shift + M", desc: "Go to Matching Brace", usage: "Move the caret to the brace matching the current one." },
          { keys: "Ctrl + F12", desc: "File Structure Popup", usage: "Show the file's members and jump to one by typing." },
          { keys: "Ctrl + H", desc: "Type Hierarchy", usage: "Show the type hierarchy for the symbol at the caret." },
          { keys: "Ctrl + Alt + H", desc: "Call Hierarchy", usage: "Show the call hierarchy for the method at the caret." },
          { keys: "F2", desc: "Next Highlighted Error", usage: "Jump to the next error or warning in the file." },
          { keys: "Shift + F2", desc: "Previous Highlighted Error", usage: "Jump to the previous error or warning in the file." },
          { keys: "F4", desc: "Jump to Source", usage: "Open the selected item's source in the editor." },
          { keys: "Alt + Home", desc: "Jump to Navigation Bar", usage: "Move the focus to the navigation bar." },
          { keys: "F11", desc: "Toggle Bookmark", usage: "Add or remove a bookmark on the current line." },
          { keys: "Ctrl + Shift + F11", desc: "Bookmark with Mnemonic", usage: "Add a bookmark identified by a digit or letter." },
          { keys: "Ctrl + 1", desc: "Go to Numbered Bookmark", usage: "Ctrl + 0 through Ctrl + 9 jump to the bookmark with that number." },
          { keys: "Shift + F11", desc: "Show Bookmarks", usage: "List all bookmarks in the project." },
        ]
      },
      {
        name: "Search & Replace",
        shortcuts: [
          { keys: "Ctrl + F", desc: "Find", usage: "Search inside the current file." },
          { keys: "F3", desc: "Find Next", usage: "Jump to the next match." },
          { keys: "Shift + F3", desc: "Find Previous", usage: "Jump to the previous match." },
          { keys: "Ctrl + R", desc: "Replace", usage: "Find and replace inside the current file." },
          { keys: "Ctrl + Shift + F", desc: "Find in Path", usage: "Search across the whole project or a chosen scope." },
          { keys: "Ctrl + Shift + R", desc: "Replace in Path", usage: "Find and replace across the whole project or a chosen scope." },
          { keys: "Alt + F7", desc: "Find Usages", usage: "List everywhere the symbol at the caret is used." },
          { keys: "Ctrl + F7", desc: "Find Usages in File", usage: "List usages of the symbol within the current file." },
          { keys: "Ctrl + Shift + F7", desc: "Highlight Usages in File", usage: "Highlight every usage of the symbol in the open file." },
          { keys: "Ctrl + Alt + F7", desc: "Show Usages", usage: "Show usages of the symbol in a popup list." },
        ]
      },
      {
        name: "Refactoring",
        shortcuts: [
          { keys: "Ctrl + Alt + Shift + T", desc: "Refactor This", usage: "Show every refactoring available at the caret." },
          { keys: "F5", desc: "Copy", usage: "Copy the selected class or file to another location." },
          { keys: "F6", desc: "Move", usage: "Move the selected class, file, or member." },
          { keys: "Alt + Delete", desc: "Safe Delete", usage: "Delete the symbol after checking for usages." },
          { keys: "Shift + F6", desc: "Rename", usage: "Rename the symbol and update every reference." },
          { keys: "Ctrl + F6", desc: "Change Signature", usage: "Change a function's parameters and update the call sites." },
          { keys: "Ctrl + Alt + N", desc: "Inline", usage: "Inline the variable or function at the caret." },
          { keys: "Ctrl + Alt + M", desc: "Extract Method", usage: "Turn the selected code into a new method." },
          { keys: "Ctrl + Alt + V", desc: "Extract Variable", usage: "Turn the selected expression into a variable." },
          { keys: "Ctrl + Alt + C", desc: "Extract Constant", usage: "Turn the selected expression into a constant." },
          { keys: "Ctrl + Alt + P", desc: "Extract Parameter", usage: "Turn the selected expression into a parameter." },
        ]
      },
      {
        name: "Running & Debugging",
        shortcuts: [
          { keys: "Alt + Shift + F10", desc: "Select Configuration and Run", usage: "Pick a run configuration and start it." },
          { keys: "Alt + Shift + F9", desc: "Select Configuration and Debug", usage: "Pick a run configuration and start debugging." },
          { keys: "Shift + F10", desc: "Run", usage: "Run the current configuration." },
          { keys: "Shift + F9", desc: "Debug", usage: "Debug the current configuration." },
          { keys: "Ctrl + Shift + F10", desc: "Run Context Configuration", usage: "Run the configuration for the file or test at the caret." },
          { keys: "Alt + Shift + R", desc: "Rerun Tests", usage: "Run the previous test session again." },
          { keys: "Alt + F11", desc: "Run npm Tasks", usage: "Open the task runner for npm, Gulp, or Grunt scripts." },
          { keys: "F8", desc: "Step Over", usage: "Run the current line and stop on the next one." },
          { keys: "F7", desc: "Step Into", usage: "Step into the function called on the current line." },
          { keys: "Shift + F7", desc: "Smart Step Into", usage: "Choose which call on the line to step into." },
          { keys: "Shift + F8", desc: "Step Out", usage: "Run until the current function returns." },
          { keys: "Alt + F9", desc: "Run to Cursor", usage: "Continue until execution reaches the caret." },
          { keys: "Alt + F8", desc: "Evaluate Expression", usage: "Evaluate an arbitrary expression in the current frame." },
          { keys: "F9", desc: "Resume Program", usage: "Continue running until the next breakpoint." },
          { keys: "Ctrl + F8", desc: "Toggle Breakpoint", usage: "Add or remove a breakpoint on the current line." },
          { keys: "Ctrl + Shift + F8", desc: "View Breakpoints", usage: "Open the breakpoints dialog." },
        ]
      },
      {
        name: "Version Control",
        shortcuts: [
          { keys: "Alt + `", desc: "VCS Operations Popup", usage: "Show the quick popup of version control actions." },
          { keys: "Ctrl + K", desc: "Commit", usage: "Commit the project changes to version control." },
          { keys: "Ctrl + T", desc: "Update Project", usage: "Update the project from version control." },
          { keys: "Alt + Shift + C", desc: "View Recent Changes", usage: "Show the list of recent changes." },
        ]
      },
      {
        name: "Multiple Carets",
        shortcuts: [
          { keys: "Ctrl + Alt + Shift + J", desc: "Select All Occurrences", usage: "Add a caret at every occurrence of the selected text." },
          { keys: "Alt + J", desc: "Select Next Occurrence", usage: "Add a caret at the next occurrence of the selection." },
          { keys: "Alt + Shift + J", desc: "Unselect Occurrence", usage: "Remove the caret from the last selected occurrence." },
        ]
      },
    ]
  },
  rider: {
    name: "JetBrains Rider",
    icon: "fas fa-code",
    source: "https://resources.jetbrains.com/storage/products/rider/docs/Rider_default_win_shortcuts.pdf",
    categories: [
      {
        name: "Create & Edit",
        shortcuts: [
          { keys: "Alt + Enter", desc: "Show Context Actions", usage: "Show quick-fixes and context actions at the caret." },
          { keys: "Ctrl + Space", desc: "Basic Code Completion", usage: "Complete the symbol you are typing." },
          { keys: "Ctrl + Shift + Space", desc: "Smart Code Completion", usage: "Complete with only the symbols that fit the expected type." },
          { keys: "Ctrl + Alt + Space", desc: "Type Name Completion", usage: "Complete a type name and add the import automatically." },
          { keys: "Ctrl + Shift + Enter", desc: "Complete Statement", usage: "Finish the current statement by adding the missing braces or semicolon." },
          { keys: "Ctrl + P", desc: "Parameter Information", usage: "Show the parameters of the call you are inside." },
          { keys: "Ctrl + Shift + I", desc: "Quick Definition", usage: "Preview the definition of the symbol in a popup." },
          { keys: "Ctrl + Q", desc: "Quick Documentation", usage: "Show the documentation for the symbol at the caret." },
          { keys: "Shift + F1", desc: "External Documentation", usage: "Open the external documentation for the symbol." },
          { keys: "Alt + Insert", desc: "Generate Code", usage: "Generate members or add a new file to the project." },
          { keys: "Ctrl + O", desc: "Override Members", usage: "Override a member from the base type." },
          { keys: "Ctrl + I", desc: "Implement Members", usage: "Implement the members required by an interface or abstract type." },
          { keys: "Ctrl + Alt + T", desc: "Surround With", usage: "Wrap the selection in a code construct such as if or try." },
          { keys: "Ctrl + Shift + Delete", desc: "Unwrap or Remove", usage: "Remove the surrounding construct from the selected code." },
          { keys: "Ctrl + /", desc: "Line Comment", usage: "Comment or uncomment the current line or selection." },
          { keys: "Ctrl + Shift + /", desc: "Block Comment", usage: "Comment or uncomment the selection with a block comment." },
          { keys: "Ctrl + W", desc: "Extend Selection", usage: "Grow the selection to the next enclosing code block." },
          { keys: "Ctrl + Shift + W", desc: "Shrink Selection", usage: "Shrink the selection back to its previous state." },
          { keys: "Alt + Q", desc: "Context Info", usage: "Show which declaration the caret is currently inside." },
          { keys: "Ctrl + Alt + O", desc: "Optimize Imports", usage: "Remove unused imports and sort the rest." },
          { keys: "Ctrl + Alt + I", desc: "Auto-Indent Lines", usage: "Fix the indentation of the current line or selection." },
          { keys: "Ctrl + X", desc: "Cut", usage: "Cut the selection to the clipboard." },
          { keys: "Ctrl + C", desc: "Copy", usage: "Copy the selection to the clipboard." },
          { keys: "Ctrl + V", desc: "Paste", usage: "Paste from the clipboard." },
          { keys: "Ctrl + Shift + C", desc: "Copy Document Path", usage: "Copy the full path of the current document." },
          { keys: "Ctrl + Shift + V", desc: "Paste from Clipboard History", usage: "Paste from the list of recent clipboard entries." },
          { keys: "Ctrl + D", desc: "Duplicate Line", usage: "Duplicate the current line or selection." },
          { keys: "Alt + Shift + Up", desc: "Move Line Up", usage: "Move the current line up one position." },
          { keys: "Alt + Shift + Down", desc: "Move Line Down", usage: "Move the current line down one position." },
          { keys: "Ctrl + Shift + Up", desc: "Move Statement Up", usage: "Move the whole statement or member up." },
          { keys: "Ctrl + Shift + Down", desc: "Move Statement Down", usage: "Move the whole statement or member down." },
          { keys: "Ctrl + Alt + Shift + Right", desc: "Move Element Right", usage: "Move the code element, such as an argument, to the right." },
          { keys: "Ctrl + Alt + Shift + Left", desc: "Move Element Left", usage: "Move the code element to the left." },
          { keys: "Ctrl + Y", desc: "Delete Line", usage: "Delete the line at the caret." },
          { keys: "Ctrl + Shift + J", desc: "Join Line", usage: "Join the current line with the one below." },
          { keys: "Ctrl + Enter", desc: "Split Line", usage: "Split the line at the caret." },
          { keys: "Ctrl + Alt + Enter", desc: "New Line Above", usage: "Start a new line above the current one." },
          { keys: "Shift + Enter", desc: "New Line Below", usage: "Start a new line below the current one." },
          { keys: "Ctrl + Shift + U", desc: "Toggle Case", usage: "Switch the word or selection between upper and lower case." },
          { keys: "Ctrl + Numpad +", desc: "Expand Code Block", usage: "Expand the folded code block at the caret." },
          { keys: "Ctrl + Numpad -", desc: "Collapse Code Block", usage: "Fold the code block at the caret." },
          { keys: "Ctrl + S", desc: "Save All", usage: "Save every modified file." },
        ]
      },
      {
        name: "Analyze & Explore",
        shortcuts: [
          { keys: "Alt + 6", desc: "Problems Tool Window", usage: "Open the Problems tool window." },
          { keys: "Ctrl + F1", desc: "Show Error Description", usage: "Describe the error or warning at the caret." },
          { keys: "F2", desc: "Next Highlighted Error", usage: "Jump to the next issue in the file." },
          { keys: "Shift + F2", desc: "Previous Highlighted Error", usage: "Jump to the previous issue in the file." },
          { keys: "Alt + F2", desc: "Next Error in Solution", usage: "Jump to the next error anywhere in the solution." },
          { keys: "Alt + Shift + F2", desc: "Previous Error in Solution", usage: "Jump to the previous error anywhere in the solution." },
          { keys: "Ctrl + Alt + Shift + 8", desc: "Toggle Code Inspection", usage: "Turn code inspection on or off for the current file." },
          { keys: "Ctrl + Alt + Shift + I", desc: "Run Inspection by Name", usage: "Run a single inspection chosen by name." },
          { keys: "Ctrl + Alt + Shift + A", desc: "Inspect This", usage: "Run an analysis on the symbol at the caret." },
          { keys: "Ctrl + H", desc: "Type Hierarchy", usage: "Show the type hierarchy for the symbol at the caret." },
          { keys: "Ctrl + Shift + H", desc: "Method Hierarchy", usage: "Show the method hierarchy for the member at the caret." },
          { keys: "Ctrl + Alt + H", desc: "Call Hierarchy", usage: "Show which methods call the one at the caret." },
        ]
      },
      {
        name: "Find Everything",
        shortcuts: [
          { keys: "Shift + Shift", desc: "Search Everywhere", usage: "Press Shift twice to search files, types, symbols, and actions at once." },
          { keys: "Ctrl + F", desc: "Find in File", usage: "Search inside the current file." },
          { keys: "Ctrl + R", desc: "Replace in File", usage: "Find and replace inside the current file." },
          { keys: "Ctrl + Shift + F", desc: "Find in Project", usage: "Search across the whole solution." },
          { keys: "Ctrl + Shift + R", desc: "Replace in Project", usage: "Find and replace across the whole solution." },
          { keys: "Ctrl + N", desc: "Go to Class", usage: "Find and open a type by name." },
          { keys: "Ctrl + F12", desc: "Go to File Member", usage: "Jump to a member inside the current file." },
          { keys: "Ctrl + Shift + N", desc: "Go to File", usage: "Find and open a file by name." },
          { keys: "Ctrl + Alt + Shift + N", desc: "Go to Symbol", usage: "Find any symbol in the solution by name." },
          { keys: "Ctrl + Alt + Shift + E", desc: "Go to Text", usage: "Search for plain text across the solution." },
        ]
      },
      {
        name: "Navigate from Symbols",
        shortcuts: [
          { keys: "Ctrl + Shift + G", desc: "Navigate To", usage: "Show every navigation option for the symbol at the caret." },
          { keys: "Ctrl + B", desc: "Go to Declaration or Usages", usage: "Jump to the declaration, or list the usages if you are already on it." },
          { keys: "Ctrl + Shift + B", desc: "Go to Type Declaration", usage: "Jump to the declaration of the symbol's type." },
          { keys: "Ctrl + U", desc: "Go to Base Symbols", usage: "Jump to the base type or overridden member." },
          { keys: "Ctrl + Alt + B", desc: "Go to Derived Symbols", usage: "Jump to the types or members that derive from this one." },
          { keys: "Alt + F7", desc: "Find Usages", usage: "List everywhere the symbol is used." },
          { keys: "Ctrl + Shift + F7", desc: "Highlight Usages in File", usage: "Highlight every usage of the symbol in the open file." },
          { keys: "Ctrl + Alt + F7", desc: "Show Usages", usage: "Show the usages of the symbol in a popup list." },
        ]
      },
      {
        name: "Navigate Context",
        shortcuts: [
          { keys: "Alt + F1", desc: "Select In", usage: "Locate the current file in the Explorer or another tool window." },
          { keys: "Ctrl + Tab", desc: "Switcher", usage: "Switch between open tabs and tool windows." },
          { keys: "Ctrl + E", desc: "Recent Files", usage: "Show recently viewed and changed files." },
          { keys: "Ctrl + Shift + Backspace", desc: "Last Edit Location", usage: "Jump to the place where you last made a change." },
          { keys: "Ctrl + Alt + Left", desc: "Navigate Back", usage: "Move back through your navigation history." },
          { keys: "Ctrl + Alt + Right", desc: "Navigate Forward", usage: "Move forward through your navigation history." },
          { keys: "Alt + Down", desc: "Next Method", usage: "Move the caret to the next method." },
          { keys: "Alt + Up", desc: "Previous Method", usage: "Move the caret to the previous method." },
          { keys: "Ctrl + G", desc: "Go to Line", usage: "Jump to a line and column number." },
          { keys: "Ctrl + ]", desc: "Go to Code Block End", usage: "Move the caret to the end of the current block." },
          { keys: "Ctrl + [", desc: "Go to Code Block Start", usage: "Move the caret to the start of the current block." },
          { keys: "F3", desc: "Next Occurrence", usage: "Jump to the next search match." },
          { keys: "Shift + F3", desc: "Previous Occurrence", usage: "Jump to the previous search match." },
          { keys: "Ctrl + F3", desc: "Next Word at Caret", usage: "Jump to the next occurrence of the word under the caret." },
          { keys: "Ctrl + Shift + F3", desc: "Previous Word at Caret", usage: "Jump to the previous occurrence of the word under the caret." },
          { keys: "F11", desc: "Toggle Bookmark", usage: "Add or remove a bookmark on the current line." },
          { keys: "Ctrl + F11", desc: "Bookmark with Mnemonic", usage: "Add a bookmark identified by a digit or letter." },
          { keys: "Ctrl + 1", desc: "Go to Numbered Bookmark", usage: "Ctrl + 0 through Ctrl + 9 jump to the bookmark with that number." },
          { keys: "Shift + F11", desc: "Show Bookmarks", usage: "List every bookmark in the solution." },
          { keys: "Alt + 3", desc: "Find Tool Window", usage: "Open the Find tool window." },
          { keys: "Alt + 2", desc: "Bookmarks Tool Window", usage: "Open the Bookmarks tool window." },
        ]
      },
      {
        name: "Build, Run & Debug",
        shortcuts: [
          { keys: "Ctrl + F9", desc: "Build", usage: "Build the solution; press it again while building to cancel." },
          { keys: "Ctrl + Ctrl", desc: "Run Anything", usage: "Press Ctrl twice to run any configuration, script, or command." },
          { keys: "Ctrl + Shift + F10", desc: "Run Context Configuration", usage: "Run the configuration for the file or test at the caret." },
          { keys: "Alt + Shift + F10", desc: "Run Selected Configuration", usage: "Pick a run configuration and start it." },
          { keys: "Alt + Shift + F9", desc: "Debug Selected Configuration", usage: "Pick a run configuration and start debugging." },
          { keys: "Shift + F10", desc: "Run Current Configuration", usage: "Run the configuration currently selected in the toolbar." },
          { keys: "Shift + F9", desc: "Debug Current Configuration", usage: "Debug the configuration currently selected in the toolbar." },
          { keys: "F8", desc: "Step Over", usage: "Run the current line and stop on the next one." },
          { keys: "F7", desc: "Step Into", usage: "Step into the call on the current line." },
          { keys: "Shift + F7", desc: "Smart Step Into", usage: "Choose which call on the line to step into." },
          { keys: "Shift + F8", desc: "Step Out", usage: "Run until the current method returns." },
          { keys: "Alt + F9", desc: "Run to Cursor", usage: "Continue until execution reaches the caret." },
          { keys: "Ctrl + Alt + F9", desc: "Force Run to Cursor", usage: "Run to the caret, ignoring any breakpoints on the way." },
          { keys: "Alt + F10", desc: "Show Execution Point", usage: "Scroll the editor back to the line being executed." },
          { keys: "Alt + F8", desc: "Evaluate Expression", usage: "Evaluate an arbitrary expression in the current frame." },
          { keys: "Ctrl + F2", desc: "Stop", usage: "Stop the running process." },
          { keys: "F9", desc: "Resume Program", usage: "Continue until the next breakpoint." },
          { keys: "Ctrl + F8", desc: "Toggle Line Breakpoint", usage: "Add or remove a breakpoint on the current line." },
          { keys: "Ctrl + Alt + Shift + F8", desc: "Toggle Temporary Breakpoint", usage: "Add a breakpoint that is removed after it is hit once." },
          { keys: "Ctrl + Shift + F8", desc: "View Breakpoints", usage: "Open the breakpoints dialog to edit or review them." },
          { keys: "Alt + 4", desc: "Run Tool Window", usage: "Open the Run tool window." },
          { keys: "Alt + 5", desc: "Debug Tool Window", usage: "Open the Debug tool window." },
          { keys: "Alt + 8", desc: "Services Tool Window", usage: "Open the Services tool window." },
        ]
      },
      {
        name: "Unit Tests",
        shortcuts: [
          { keys: "Alt + Shift + U", desc: "Unit Testing Quick List", usage: "Show the list of unit testing actions." },
          { keys: "Ctrl + ;, R", desc: "Run Unit Tests", usage: "Run the unit tests in the current context." },
          { keys: "Ctrl + ;, D", desc: "Debug Unit Tests", usage: "Debug the unit tests in the current context." },
          { keys: "Ctrl + ;, S", desc: "Stop Execution", usage: "Stop the running test session." },
          { keys: "Ctrl + ;, T", desc: "Repeat Previous Run", usage: "Run the previous test session again." },
          { keys: "Ctrl + ;, F", desc: "Rerun Failed Tests", usage: "Run only the tests that failed." },
          { keys: "Ctrl + ;, L", desc: "Run All Tests from Solution", usage: "Run every test in the solution." },
          { keys: "Ctrl + ;, N", desc: "Create New Session", usage: "Start a new unit test session." },
          { keys: "Ctrl + ;, A", desc: "Append Tests to Session", usage: "Add the selected tests to the current session." },
          { keys: "Ctrl + ;, Y", desc: "Run Current Session", usage: "Run the tests in the current session." },
          { keys: "Alt + Shift + R", desc: "Rerun Tests", usage: "Run the previous tests again." },
          { keys: "Ctrl + Shift + T", desc: "Go to Test", usage: "Jump between a type and its tests." },
          { keys: "Ctrl + Alt + F6", desc: "Show Coverage Data", usage: "Show the collected code coverage results." },
          { keys: "Alt + Shift + 8", desc: "Unit Tests Tool Window", usage: "Open the Unit Tests tool window." },
        ]
      },
      {
        name: "Refactor & Clean Up",
        shortcuts: [
          { keys: "Ctrl + Alt + Shift + T", desc: "Refactor This", usage: "Show every refactoring available at the caret." },
          { keys: "F5", desc: "Copy", usage: "Copy the selected type or file to another location." },
          { keys: "F6", desc: "Move", usage: "Move the selected type, file, or member." },
          { keys: "Alt + Delete", desc: "Safe Delete", usage: "Delete the symbol after checking for usages." },
          { keys: "Shift + F6", desc: "Rename", usage: "Rename the symbol and update every reference." },
          { keys: "Ctrl + F6", desc: "Change Signature", usage: "Change the parameters of a member and update the call sites." },
          { keys: "Ctrl + Alt + N", desc: "Inline", usage: "Inline the symbol at the caret." },
          { keys: "Ctrl + Alt + M", desc: "Extract Method", usage: "Turn the selected code into a new method." },
          { keys: "Ctrl + Alt + V", desc: "Introduce Variable", usage: "Turn the selected expression into a variable." },
          { keys: "Ctrl + Alt + F", desc: "Introduce Field", usage: "Turn the selected expression into a field." },
          { keys: "Ctrl + Alt + C", desc: "Introduce Constant", usage: "Turn the selected expression into a constant." },
          { keys: "Ctrl + Alt + P", desc: "Introduce Parameter", usage: "Turn the selected expression into a parameter." },
          { keys: "Ctrl + Alt + L", desc: "Reformat Code", usage: "Reformat the file or selection to the code style settings." },
        ]
      },
      {
        name: "Version Control",
        shortcuts: [
          { keys: "Alt + `", desc: "VCS Operations", usage: "Show the quick popup of version control actions." },
          { keys: "Ctrl + K", desc: "Commit", usage: "Commit your changes." },
          { keys: "Ctrl + T", desc: "Update Project", usage: "Update the project from version control." },
          { keys: "Alt + Shift + C", desc: "Recent Changes", usage: "Show the list of recent changes." },
          { keys: "Ctrl + Alt + Z", desc: "Rollback", usage: "Revert the selected changes." },
          { keys: "Ctrl + Shift + K", desc: "Push", usage: "Push your commits to the remote." },
          { keys: "Ctrl + Alt + Shift + Down", desc: "Next Change", usage: "Jump to the next change in the file." },
          { keys: "Ctrl + Alt + Shift + Up", desc: "Previous Change", usage: "Jump to the previous change in the file." },
          { keys: "Alt + 0", desc: "Commit Tool Window", usage: "Open the Commit tool window." },
        ]
      },
      {
        name: "Master Your IDE",
        shortcuts: [
          { keys: "Ctrl + Shift + A", desc: "Find Action", usage: "Search for any IDE command by name and run it." },
          { keys: "Ctrl + Shift + O", desc: "Open Solution or Project", usage: "Open another solution or project." },
          { keys: "Alt + 1", desc: "Explorer Tool Window", usage: "Open the Explorer tool window." },
          { keys: "Ctrl + Alt + Y", desc: "Reload All from Disk", usage: "Reload the files from disk to pick up external changes." },
          { keys: "Ctrl + `", desc: "Quick Switch Scheme", usage: "Switch the color scheme, keymap, or view mode." },
          { keys: "Ctrl + Alt + S", desc: "Open Settings", usage: "Open the Settings dialog." },
          { keys: "F4", desc: "Jump to Source", usage: "Open the selected item's source in the editor." },
          { keys: "F12", desc: "Jump to Last Tool Window", usage: "Return to the tool window you used last." },
          { keys: "Shift + Esc", desc: "Hide Active Tool Window", usage: "Close the tool window that currently has focus." },
          { keys: "Ctrl + Shift + F12", desc: "Hide All Tool Windows", usage: "Give the editor the whole window." },
          { keys: "Alt + Right", desc: "Next Editor Tab", usage: "Move to the next open editor tab." },
          { keys: "Alt + Left", desc: "Previous Editor Tab", usage: "Move to the previous open editor tab." },
          { keys: "Esc", desc: "Go to Editor", usage: "Move the focus from a tool window back to the editor." },
          { keys: "Ctrl + F4", desc: "Close Editor Tab", usage: "Close the active editor tab." },
        ]
      },
    ]
  },
  eclipse: {
    name: 'Eclipse',
    icon: 'fas fa-code',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + Space', desc: 'Code completion', usage: 'Show code completion.' },
          { keys: 'Ctrl + Shift + O', desc: 'Organize imports', usage: 'Remove unused imports.' },
          { keys: 'Ctrl + D', desc: 'Delete line', usage: 'Delete current line.' },
          { keys: 'Ctrl + Shift + F', desc: 'Format code', usage: 'Format the code.' },
          { keys: 'Alt + Shift + R', desc: 'Rename', usage: 'Rename a symbol.' },
          { keys: 'F11', desc: 'Debug run', usage: 'Run in debug mode.' },
          { keys: 'Ctrl + F11', desc: 'Run', usage: 'Run the program.' },
          { keys: 'Ctrl + Shift + T', desc: 'Open class', usage: 'Search and open a class by name.' },
        ]
      },
    ]
  },
  atom: {
    name: 'Atom',
    icon: 'fas fa-code',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + P', desc: 'Quick open', usage: 'Open a file by name.' },
          { keys: 'Ctrl + Shift + P', desc: 'Command palette', usage: 'Open command palette.' },
          { keys: 'Ctrl + /', desc: 'Toggle comment', usage: 'Toggle line comment.' },
          { keys: 'Ctrl + D', desc: 'Select word', usage: 'Select next occurrence of word.' },
          { keys: 'Ctrl + Shift + D', desc: 'Duplicate line', usage: 'Duplicate current line.' },
          { keys: 'Ctrl + Shift + K', desc: 'Delete line', usage: 'Delete current line.' },
          { keys: 'Ctrl + J', desc: 'Join lines', usage: 'Join next line with current.' },
          { keys: 'Ctrl + \\', desc: 'Toggle tree view', usage: 'Toggle sidebar file tree.' },
        ]
      },
    ]
  },
  cursor_rules: {
    name: 'Cursor Rules',
    icon: 'fas fa-brain',
    categories: [
      {
        name: 'Editor',
        shortcuts: [
          { keys: 'Ctrl + L', desc: 'AI Chat', usage: 'Open AI chat panel.' },
          { keys: 'Ctrl + I', desc: 'Inline edit', usage: 'Start AI inline editing.' },
          { keys: 'Ctrl + K', desc: 'Command palette', usage: 'Open command palette.' },
          { keys: 'Ctrl + Shift + I', desc: 'Composer', usage: 'Open Composer panel.' },
          { keys: 'Tab', desc: 'Accept suggestion', usage: 'Accept AI code suggestion.' },
          { keys: 'Ctrl + Shift + P', desc: 'Settings', usage: 'Search settings commands.' },
        ]
      },
    ]
  },
  camtasia: {
    name: 'Camtasia',
    icon: 'fas fa-video',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Pause', usage: 'Play or pause the timeline.' },
          { keys: 'S', desc: 'Split', usage: 'Split clip at playhead.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Ctrl + Shift + P', desc: 'Export', usage: 'Export the project.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate selected clip.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete selected clip.' },
        ]
      },
    ]
  },
  screenflow: {
    name: 'ScreenFlow',
    icon: 'fas fa-desktop',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Stop', usage: 'Play or stop playback.' },
          { keys: 'T', desc: 'Split', usage: 'Split clip at playhead.' },
          { keys: 'Cmd + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Cmd + Shift + E', desc: 'Export', usage: 'Export the project.' },
          { keys: 'Cmd + R', desc: 'Start recording', usage: 'Start a new recording.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete selected clip.' },
        ]
      },
    ]
  },
  brave: {
    name: 'Brave Browser',
    icon: 'fab fa-brave',
    categories: [
      {
        name: 'Tabs & Navigation',
        shortcuts: [
          { keys: 'Ctrl + T', desc: 'New tab', usage: 'Open a new tab.' },
          { keys: 'Ctrl + W', desc: 'Close tab', usage: 'Close current tab.' },
          { keys: 'Ctrl + Shift + T', desc: 'Reopen tab', usage: 'Reopen last closed tab.' },
          { keys: 'Ctrl + L', desc: 'Address bar', usage: 'Focus the address bar.' },
          { keys: 'Ctrl + Shift + N', desc: 'Private window', usage: 'Open private browsing window.' },
          { keys: 'Ctrl + Shift + B', desc: 'Bookmark bar', usage: 'Toggle bookmark bar.' },
          { keys: 'F12', desc: 'Dev tools', usage: 'Open developer tools.' },
        ]
      },
    ]
  },
  signal: {
    name: 'Signal',
    icon: 'fas fa-comment-dots',
    categories: [
      {
        name: 'Messaging',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New message', usage: 'Compose a new message.' },
          { keys: 'Ctrl + Shift + N', desc: 'New group', usage: 'Create a new group.' },
          { keys: 'Ctrl + F', desc: 'Search', usage: 'Search messages.' },
          { keys: 'Ctrl + Shift + X', desc: 'Strikethrough', usage: 'Apply strikethrough.' },
          { keys: 'Enter', desc: 'Send', usage: 'Send the message.' },
          { keys: 'Shift + Enter', desc: 'New line', usage: 'Add a line break without sending.' },
        ]
      },
    ]
  },
  notion_calendar: {
    name: 'Notion Calendar',
    icon: 'fas fa-calendar-alt',
    categories: [
      {
        name: 'Events',
        shortcuts: [
          { keys: 'C', desc: 'Create event', usage: 'Create a new event.' },
          { keys: 'N', desc: 'Next period', usage: 'Go to next week/month.' },
          { keys: 'P', desc: 'Previous period', usage: 'Go to previous week/month.' },
          { keys: 'T', desc: 'Today', usage: 'Jump to today.' },
          { keys: '1', desc: 'Day view', usage: 'Switch to day view.' },
          { keys: '3', desc: '3-day view', usage: 'Switch to 3-day view.' },
          { keys: '5', desc: 'Week view', usage: 'Switch to week view.' },
        ]
      },
    ]
  },
  tmux: {
    name: "tmux",
    icon: "fas fa-terminal",
    source: "https://man7.org/linux/man-pages/man1/tmux.1.html",
    categories: [
      {
        name: "Sessions",
        shortcuts: [
          { keys: "Ctrl + B, D", desc: "Detach client", usage: "Detach the current client, leaving the session running in the background." },
          { keys: "Ctrl + B, $", desc: "Rename session", usage: "Rename the current session." },
          { keys: "Ctrl + B, S", desc: "Choose session", usage: "Select a new session for the attached client interactively." },
          { keys: "Ctrl + B, (", desc: "Previous session", usage: "Switch the attached client to the previous session." },
          { keys: "Ctrl + B, )", desc: "Next session", usage: "Switch the attached client to the next session." },
          { keys: "Ctrl + B, Shift + L", desc: "Last session", usage: "Switch the attached client back to the last session (uppercase L)." },
          { keys: "Ctrl + B, Shift + D", desc: "Choose client to detach", usage: "Choose a client to detach (uppercase D)." },
          { keys: "Ctrl + B, Ctrl + Z", desc: "Suspend client", usage: "Suspend the tmux client." }
        ]
      },
      {
        name: "Windows",
        shortcuts: [
          { keys: "Ctrl + B, C", desc: "New window", usage: "Create a new window." },
          { keys: "Ctrl + B, &", desc: "Kill window", usage: "Kill the current window." },
          { keys: "Ctrl + B, ,", desc: "Rename window", usage: "Rename the current window." },
          { keys: "Ctrl + B, N", desc: "Next window", usage: "Change to the next window." },
          { keys: "Ctrl + B, P", desc: "Previous window", usage: "Change to the previous window." },
          { keys: "Ctrl + B, L", desc: "Last window", usage: "Move to the previously selected window (lowercase l)." },
          { keys: "Ctrl + B, 0-9", desc: "Select window by number", usage: "Select windows 0 to 9 directly." },
          { keys: "Ctrl + B, '", desc: "Select window by index", usage: "Prompt for a window index to select." },
          { keys: "Ctrl + B, W", desc: "Choose window", usage: "Choose the current window interactively from a list." },
          { keys: "Ctrl + B, .", desc: "Move window", usage: "Prompt for an index to move the current window to." },
          { keys: "Ctrl + B, F", desc: "Find window", usage: "Prompt to search for text in open windows." },
          { keys: "Ctrl + B, I", desc: "Window info", usage: "Display some information about the current window." },
          { keys: "Ctrl + B, Alt + N", desc: "Next window with activity", usage: "Move to the next window with a bell or activity marker." },
          { keys: "Ctrl + B, Alt + P", desc: "Previous window with activity", usage: "Move to the previous window with a bell or activity marker." }
        ]
      },
      {
        name: "Panes",
        shortcuts: [
          { keys: "Ctrl + B, %", desc: "Split left and right", usage: "Split the current pane into two, left and right." },
          { keys: "Ctrl + B, \"", desc: "Split top and bottom", usage: "Split the current pane into two, top and bottom." },
          { keys: "Ctrl + B, X", desc: "Kill pane", usage: "Kill the current pane." },
          { keys: "Ctrl + B, O", desc: "Next pane", usage: "Select the next pane in the current window." },
          { keys: "Ctrl + B, ;", desc: "Last pane", usage: "Move to the previously active pane." },
          { keys: "Ctrl + B, \u2191/\u2193/\u2190/\u2192", desc: "Select pane by direction", usage: "Change to the pane above, below, to the left, or to the right of the current pane." },
          { keys: "Ctrl + B, Q", desc: "Show pane numbers", usage: "Briefly display pane indexes; press a number to jump to that pane." },
          { keys: "Ctrl + B, Z", desc: "Zoom pane", usage: "Toggle zoom state of the current pane (fullscreen within the window)." },
          { keys: "Ctrl + B, {", desc: "Swap with previous pane", usage: "Swap the current pane with the previous pane." },
          { keys: "Ctrl + B, }", desc: "Swap with next pane", usage: "Swap the current pane with the next pane." },
          { keys: "Ctrl + B, Ctrl + O", desc: "Rotate panes forwards", usage: "Rotate the panes in the current window forwards." },
          { keys: "Ctrl + B, Alt + O", desc: "Rotate panes backwards", usage: "Rotate the panes in the current window backwards." },
          { keys: "Ctrl + B, !", desc: "Break pane to window", usage: "Break the current pane out of the window into its own window." },
          { keys: "Ctrl + B, M", desc: "Mark pane", usage: "Mark the current pane, used as the default source for join and swap." },
          { keys: "Ctrl + B, Shift + M", desc: "Clear marked pane", usage: "Clear the marked pane (uppercase M)." },
          { keys: "Ctrl + B, Space", desc: "Next layout", usage: "Arrange the current window in the next preset layout." },
          { keys: "Ctrl + B, Alt + 1-7", desc: "Preset layouts", usage: "Arrange panes in one of the seven preset layouts: even-horizontal, even-vertical, main-horizontal, main-horizontal-mirrored, main-vertical, main-vertical-mirrored, or tiled." }
        ]
      },
      {
        name: "Resizing Panes",
        shortcuts: [
          { keys: "Ctrl + B, Ctrl + \u2191/\u2193/\u2190/\u2192", desc: "Resize pane by one cell", usage: "Resize the current pane in steps of one cell." },
          { keys: "Ctrl + B, Alt + \u2191/\u2193/\u2190/\u2192", desc: "Resize pane by five cells", usage: "Resize the current pane in steps of five cells." }
        ]
      },
      {
        name: "Copy Mode & Buffers",
        shortcuts: [
          { keys: "Ctrl + B, [", desc: "Enter copy mode", usage: "Enter copy mode to copy text or view the scrollback history." },
          { keys: "Ctrl + B, ]", desc: "Paste buffer", usage: "Paste the most recently copied buffer of text." },
          { keys: "Ctrl + B, Page Up", desc: "Copy mode and scroll up", usage: "Enter copy mode and scroll one page up." },
          { keys: "Ctrl + B, #", desc: "List paste buffers", usage: "List all paste buffers." },
          { keys: "Ctrl + B, =", desc: "Choose buffer to paste", usage: "Choose which buffer to paste interactively from a list." },
          { keys: "Ctrl + B, -", desc: "Delete buffer", usage: "Delete the most recently copied buffer of text." }
        ]
      },
      {
        name: "Copy Mode Navigation (vi keys)",
        shortcuts: [
          { keys: "Q", desc: "Exit copy mode", usage: "Cancel and leave copy mode." },
          { keys: "Space", desc: "Begin selection", usage: "Start selecting text from the cursor position." },
          { keys: "Enter", desc: "Copy selection and exit", usage: "Copy the current selection and exit copy mode." },
          { keys: "V", desc: "Rectangle selection", usage: "Toggle rectangle (block) selection mode." },
          { keys: "Shift + V", desc: "Select line", usage: "Select the current line (uppercase V)." },
          { keys: "/", desc: "Search forward", usage: "Search forward for the specified text." },
          { keys: "?", desc: "Search backward", usage: "Search backwards for the specified text." },
          { keys: "N", desc: "Repeat search", usage: "Repeat the last search in the same direction." },
          { keys: "Shift + N", desc: "Repeat search reversed", usage: "Repeat the last search in the reverse direction (uppercase N)." },
          { keys: "G", desc: "Top of history", usage: "Scroll to the top of the history." },
          { keys: "Shift + G", desc: "Bottom of history", usage: "Scroll to the bottom of the history (uppercase G)." },
          { keys: "Ctrl + U", desc: "Half page up", usage: "Scroll up by half a page." },
          { keys: "Ctrl + D", desc: "Half page down", usage: "Scroll down by half a page." },
          { keys: "Ctrl + B", desc: "Page up", usage: "Scroll up by one page." },
          { keys: "Ctrl + F", desc: "Page down", usage: "Scroll down by one page." },
          { keys: "0", desc: "Start of line", usage: "Move the cursor to the start of the line." },
          { keys: "$", desc: "End of line", usage: "Move the cursor to the end of the line." },
          { keys: "W", desc: "Next word", usage: "Move to the next word." },
          { keys: "B", desc: "Previous word", usage: "Move to the start of the previous word." },
          { keys: "%", desc: "Matching bracket", usage: "Move to the next matching bracket." }
        ]
      },
      {
        name: "Prompt & Help",
        shortcuts: [
          { keys: "Ctrl + B, :", desc: "Command prompt", usage: "Enter the tmux command prompt to type commands directly." },
          { keys: "Ctrl + B, ?", desc: "List key bindings", usage: "List all key bindings." },
          { keys: "Ctrl + B, T", desc: "Show clock", usage: "Show the time in the current pane." },
          { keys: "Ctrl + B, R", desc: "Redraw client", usage: "Force redraw of the attached client." },
          { keys: "Ctrl + B, ~", desc: "Show messages", usage: "Show previous messages from tmux, if any." },
          { keys: "Ctrl + B, Ctrl + B", desc: "Send prefix", usage: "Send the prefix key through to the application running in the pane." }
        ]
      }
    ]
  },
  screen: {
    name: "GNU Screen",
    icon: "fas fa-terminal",
    source: "https://www.gnu.org/software/screen/manual/html_node/Default-Key-Bindings.html",
    categories: [
      {
        name: "Sessions",
        shortcuts: [
          { keys: "Ctrl + A, d", desc: "Detach", usage: "Detach screen from this terminal, leaving the programs running." },
          { keys: "Ctrl + A, D, D", desc: "Detach and Logout", usage: "Detach the session and log out of the terminal." },
          { keys: "Ctrl + A, z", desc: "Suspend", usage: "Suspend screen and return to the shell that started it." },
          { keys: "Ctrl + A, x", desc: "Lock Terminal", usage: "Lock the terminal until you enter your password." },
          { keys: "Ctrl + A, Ctrl + \\", desc: "Quit Screen", usage: "Kill every window and terminate screen." },
          { keys: "Ctrl + A, :", desc: "Command Line", usage: "Enter a screen command line to run any command by name." },
          { keys: "Ctrl + A, ?", desc: "Show Key Bindings", usage: "Display the help screen listing every binding." },
        ]
      },
      {
        name: "Windows",
        shortcuts: [
          { keys: "Ctrl + A, c", desc: "New Window", usage: "Create a new window running a shell and switch to it." },
          { keys: "Ctrl + A, n", desc: "Next Window", usage: "Switch to the next window; Space does the same." },
          { keys: "Ctrl + A, p", desc: "Previous Window", usage: "Switch to the previous window; Backspace does the same." },
          { keys: "Ctrl + A, Ctrl + A", desc: "Toggle Previous Window", usage: "Switch back to the window you were on before this one." },
          { keys: "Ctrl + A, 0", desc: "Select Window by Number", usage: "Ctrl + A followed by 0 through 9 switches to that window; - selects the blank window." },
          { keys: "Ctrl + A, '", desc: "Select Window by Name", usage: "Prompt for a window name or number and switch to it." },
          { keys: "Ctrl + A, \"", desc: "Window List", usage: "Show a list of all windows and pick one." },
          { keys: "Ctrl + A, w", desc: "Show Window List", usage: "Print the list of active windows in the message line." },
          { keys: "Ctrl + A, A", desc: "Rename Window", usage: "Enter a title for the current window." },
          { keys: "Ctrl + A, k", desc: "Kill Window", usage: "Destroy the current window." },
          { keys: "Ctrl + A, N", desc: "Show Window Number", usage: "Show the number and title of the current window." },
          { keys: "Ctrl + A, M", desc: "Toggle Monitoring", usage: "Watch the window for activity and notify you." },
          { keys: "Ctrl + A, _", desc: "Monitor for Silence", usage: "Start or stop watching the window for inactivity." },
        ]
      },
      {
        name: "Split Regions",
        shortcuts: [
          { keys: "Ctrl + A, S", desc: "Split Horizontally", usage: "Split the current region into two." },
          { keys: "Ctrl + A, Tab", desc: "Next Region", usage: "Move the input focus to the next region." },
          { keys: "Ctrl + A, Q", desc: "Only This Region", usage: "Remove every region except the current one." },
          { keys: "Ctrl + A, X", desc: "Kill Region", usage: "Close the current region." },
          { keys: "Ctrl + A, F", desc: "Fit Window to Region", usage: "Resize the window to the current region size." },
        ]
      },
      {
        name: "Copy & Paste",
        shortcuts: [
          { keys: "Ctrl + A, [", desc: "Copy Mode", usage: "Enter copy and scrollback mode; Escape does the same." },
          { keys: "Ctrl + A, ]", desc: "Paste", usage: "Write the paste buffer into the current window." },
          { keys: "Ctrl + A, {", desc: "Copy Previous Line", usage: "Copy and paste a previous command line from the history." },
          { keys: "Ctrl + A, >", desc: "Write Exchange File", usage: "Write the paste buffer out to the screen-exchange file." },
          { keys: "Ctrl + A, <", desc: "Read Exchange File", usage: "Read the screen-exchange file into the paste buffer." },
          { keys: "Ctrl + A, =", desc: "Delete Exchange File", usage: "Remove the screen-exchange file." },
        ]
      },
      {
        name: "Display",
        shortcuts: [
          { keys: "Ctrl + A, C", desc: "Clear Screen", usage: "Clear the current window's screen." },
          { keys: "Ctrl + A, l", desc: "Refresh", usage: "Fully redraw the current window." },
          { keys: "Ctrl + A, Z", desc: "Reset Terminal", usage: "Reset the virtual terminal to its power-on values." },
          { keys: "Ctrl + A, W", desc: "Toggle Column Width", usage: "Switch the window between 80 and 132 columns." },
          { keys: "Ctrl + A, r", desc: "Toggle Line Wrap", usage: "Turn the window's automatic margins on or off." },
          { keys: "Ctrl + A, Ctrl + G", desc: "Toggle Visual Bell", usage: "Switch between an audible and a visual bell." },
          { keys: "Ctrl + A, *", desc: "Show Attached Displays", usage: "List the displays currently attached to the session." },
        ]
      },
      {
        name: "Info & Logging",
        shortcuts: [
          { keys: "Ctrl + A, i", desc: "Window Info", usage: "Show information about the current window." },
          { keys: "Ctrl + A, t", desc: "Show Time and Load", usage: "Display the time, load average, and window title." },
          { keys: "Ctrl + A, m", desc: "Repeat Last Message", usage: "Show the last message again." },
          { keys: "Ctrl + A, v", desc: "Show Version", usage: "Display the screen version and compilation date." },
          { keys: "Ctrl + A, ,", desc: "Show Copyright", usage: "Display the copyright page." },
          { keys: "Ctrl + A, h", desc: "Write Hardcopy", usage: "Dump the current window's contents to a hardcopy file." },
          { keys: "Ctrl + A, H", desc: "Toggle Logging", usage: "Start or stop logging the window to a screenlog file." },
          { keys: "Ctrl + A, .", desc: "Dump Termcap", usage: "Write a .termcap file for the current terminal." },
        ]
      },
      {
        name: "Terminal Control",
        shortcuts: [
          { keys: "Ctrl + A, a", desc: "Send Command Character", usage: "Send a literal Ctrl + A to the program in the window." },
          { keys: "Ctrl + A, b", desc: "Send Break", usage: "Send a break signal to the tty." },
          { keys: "Ctrl + A, B", desc: "Reopen TTY", usage: "Close and reopen the tty line." },
          { keys: "Ctrl + A, f", desc: "Cycle Flow Control", usage: "Cycle flow control between on, off, and auto." },
          { keys: "Ctrl + A, q", desc: "Send XON", usage: "Send a Ctrl + Q (XON) to the current window." },
          { keys: "Ctrl + A, s", desc: "Send XOFF", usage: "Send a Ctrl + S (XOFF) to the current window." },
          { keys: "Ctrl + A, L", desc: "Toggle Login State", usage: "Turn the window's utmp login entry on or off." },
          { keys: "Ctrl + A, Ctrl + V", desc: "Enter Digraph", usage: "Insert a character by typing its digraph." },
        ]
      },
    ]
  },
  vim_advanced: {
    name: 'Vim (Advanced)',
    icon: 'fas fa-code',
    categories: [
      {
        name: 'Advanced Commands',
        shortcuts: [
          { keys: 'ci"', desc: 'Change inside quotes', usage: 'Change text inside quotes.' },
          { keys: 'di{', desc: 'Delete inside braces', usage: 'Delete text inside braces.' },
          { keys: 'gg=G', desc: 'Indent all', usage: 'Re-indent the entire file.' },
          { keys: 'Ctrl + V', desc: 'Block visual', usage: 'Enter block (column) selection.' },
          { keys: ':%s/foo/bar/gc', desc: 'Confirm replace', usage: 'Replace with confirmation.' },
          { keys: 'q[register]', desc: 'Record macro', usage: 'Record a key macro.' },
          { keys: '@[register]', desc: 'Play macro', usage: 'Execute a recorded macro.' },
          { keys: 'ZZ', desc: 'Save & quit', usage: 'Save file and quit.' },
        ]
      },
    ]
  },
  lazygit: {
    name: 'LazyGit',
    icon: 'fab fa-git-alt',
    categories: [
      {
        name: 'Git Management',
        shortcuts: [
          { keys: 'Space', desc: 'Stage/Unstage', usage: 'Stage or unstage a file.' },
          { keys: 'C', desc: 'Commit', usage: 'Write commit message.' },
          { keys: 'P', desc: 'Push', usage: 'Push to remote.' },
          { keys: 'p', desc: 'Pull', usage: 'Pull from remote.' },
          { keys: 'B', desc: 'Branch list', usage: 'Show branch list.' },
          { keys: 'N', desc: 'New branch', usage: 'Create a new branch.' },
          { keys: 'Enter', desc: 'Detail view', usage: 'View details of selected item.' },
          { keys: '?', desc: 'Help', usage: 'Show key bindings.' },
        ]
      },
    ]
  },
  vlc: {
    name: 'VLC Player',
    icon: 'fas fa-play-circle',
    categories: [
      {
        name: 'Playback',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Pause', usage: 'Play or pause media.' },
          { keys: 'F', desc: 'Fullscreen', usage: 'Toggle fullscreen.' },
          { keys: 'N', desc: 'Next track', usage: 'Go to next track.' },
          { keys: 'P', desc: 'Previous track', usage: 'Go to previous track.' },
          { keys: 'Shift + Right', desc: 'Skip 5s forward', usage: 'Skip 5 seconds forward.' },
          { keys: 'Shift + Left', desc: 'Skip 5s back', usage: 'Skip 5 seconds back.' },
          { keys: 'Ctrl + Up', desc: 'Volume up', usage: 'Increase volume.' },
          { keys: 'Ctrl + Down', desc: 'Volume down', usage: 'Decrease volume.' },
          { keys: 'M', desc: 'Mute', usage: 'Toggle mute.' },
          { keys: 'S', desc: 'Subtitles', usage: 'Toggle subtitles on/off.' },
        ]
      },
    ]
  },
  unreal: {
    name: 'Unreal Engine',
    icon: 'fas fa-gamepad',
    categories: [
      {
        name: 'Editor',
        shortcuts: [
          { keys: 'W', desc: 'Move tool', usage: 'Activate move tool.' },
          { keys: 'E', desc: 'Rotate tool', usage: 'Activate rotate tool.' },
          { keys: 'R', desc: 'Scale tool', usage: 'Activate scale tool.' },
          { keys: 'F', desc: 'Focus selection', usage: 'Focus camera on selected object.' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save current level.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Alt + P', desc: 'Play', usage: 'Play in editor.' },
          { keys: 'Ctrl + Shift + S', desc: 'Save all', usage: 'Save all changes.' },
        ]
      },
    ]
  },
  sketchup: {
    name: 'SketchUp',
    icon: 'fas fa-cube',
    categories: [
      {
        name: 'Tools',
        shortcuts: [
          { keys: 'L', desc: 'Line', usage: 'Activate line tool.' },
          { keys: 'R', desc: 'Rectangle', usage: 'Activate rectangle tool.' },
          { keys: 'C', desc: 'Circle', usage: 'Activate circle tool.' },
          { keys: 'P', desc: 'Push/Pull', usage: 'Activate push/pull tool.' },
          { keys: 'M', desc: 'Move', usage: 'Activate move tool.' },
          { keys: 'Q', desc: 'Rotate', usage: 'Activate rotate tool.' },
          { keys: 'S', desc: 'Scale', usage: 'Activate scale tool.' },
          { keys: 'Space', desc: 'Select', usage: 'Activate select tool.' },
        ]
      },
    ]
  },
  google_forms: {
    name: 'Google Forms',
    icon: 'fab fa-google',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Submit form', usage: 'Submit form in preview.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Ctrl + Shift + Enter', desc: 'Add section', usage: 'Add a new section.' },
          { keys: 'Tab', desc: 'Next item', usage: 'Move to next item.' },
          { keys: 'Ctrl + Y', desc: 'Redo', usage: 'Redo the last undone change in the form editor.' },
          { keys: 'Shift + Tab', desc: 'Previous item', usage: 'Move focus to the previous question or element.' },
          { keys: 'Esc', desc: 'Deselect item', usage: 'Exit the current question field without saving focus.' },
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Bold selected text in question or description fields.' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Italicize selected text in description fields.' },
          { keys: 'Ctrl + U', desc: 'Underline', usage: 'Underline selected text in description fields.' },
          { keys: 'Ctrl + K', desc: 'Insert link', usage: 'Add a hyperlink to selected text in a description.' },
        ]
      },
    ]
  },
  evernote: {
    name: "Evernote",
    icon: "fas fa-sticky-note",
    source: "https://help.evernote.com/hc/en-us/articles/34296687388307-Keyboard-shortcuts",
    categories: [
      {
        name: "Global (System-Wide)",
        shortcuts: [
          { keys: "Ctrl + Alt + N", desc: "New Note Window", usage: "Open a new note window from any application while Evernote runs." },
          { keys: "Ctrl + Alt + V", desc: "Paste to Evernote", usage: "Turn the clipboard contents into a new note from any app." },
          { keys: "Win + Shift + F", desc: "Search in Evernote", usage: "Search Evernote from anywhere in Windows." },
          { keys: "Ctrl + Alt + H", desc: "Open Evernote Helper", usage: "Open the quick-note helper." },
          { keys: "Ctrl + Alt + S", desc: "Capture Screen", usage: "Take a screenshot straight into Evernote." },
        ]
      },
      {
        name: "Create & App",
        shortcuts: [
          { keys: "Ctrl + N", desc: "New Note", usage: "Create a new note." },
          { keys: "Alt + Shift + N", desc: "New Notebook", usage: "Create a new notebook." },
          { keys: "Alt + T", desc: "New Task", usage: "Create a new task." },
          { keys: "Ctrl + Shift + T", desc: "New Tag", usage: "Create a new tag." },
          { keys: "Ctrl + E", desc: "New Event", usage: "Create a new calendar event." },
          { keys: "Ctrl + Shift + N", desc: "Scratch Pad to Note", usage: "Convert the home-screen Scratch Pad into a note." },
          { keys: "Ctrl + Shift + F", desc: "AI-Powered Search", usage: "Run Evernote's AI-powered search (Alt + Shift + Ctrl + F in some versions)." },
          { keys: "Ctrl + /", desc: "Keyboard Shortcuts", usage: "Open the shortcut drawer to view, edit, or disable shortcuts." },
          { keys: "Ctrl + ,", desc: "Settings", usage: "Open Evernote settings." },
          { keys: "Ctrl + W", desc: "Close Window", usage: "Close the current Evernote window." },
        ]
      },
      {
        name: "Navigation",
        shortcuts: [
          { keys: "Ctrl + Q", desc: "Quick Switch", usage: "Open the switcher to jump to any note, notebook, or tag." },
          { keys: "Ctrl + 1", desc: "Open Shortcut 1", usage: "Open your first saved shortcut; Ctrl + 1 through Ctrl + 9 open shortcuts 1–9." },
          { keys: "Ctrl + Alt + 1", desc: "Open Home", usage: "Jump to the Home screen." },
          { keys: "Ctrl + Alt + 2", desc: "Open Notes", usage: "Jump to the Notes list." },
          { keys: "Ctrl + Alt + 3", desc: "Open Tasks", usage: "Jump to Tasks." },
          { keys: "Ctrl + Alt + 6", desc: "Open Notebooks", usage: "Jump to the Notebooks list." },
          { keys: "Ctrl + Alt + 7", desc: "Open Tags", usage: "Jump to the Tags list." },
          { keys: "Alt + Left", desc: "Move Back", usage: "Go back to the previous view." },
          { keys: "Alt + Right", desc: "Move Forward", usage: "Go forward again." },
          { keys: "F5", desc: "Switch Note List View", usage: "Cycle the note list layout; Ctrl + F5–F8 pick snippet, card, top, or side list views." },
        ]
      },
      {
        name: "View",
        shortcuts: [
          { keys: "Ctrl + =", desc: "Zoom In", usage: "Make the note text larger." },
          { keys: "Ctrl + -", desc: "Zoom Out", usage: "Make the note text smaller." },
          { keys: "Ctrl + 0", desc: "Zoom to 100%", usage: "Reset the zoom level." },
          { keys: "F10", desc: "Toggle Sidebar", usage: "Expand or collapse the sidebar." },
          { keys: "F11", desc: "Full Screen", usage: "Toggle full-screen mode." },
        ]
      },
      {
        name: "Note Actions",
        shortcuts: [
          { keys: "Alt + O", desc: "Open in New Window", usage: "Open the current note in its own window." },
          { keys: "Alt + S", desc: "Share", usage: "Open the sharing options for the note." },
          { keys: "Shift + Alt + E", desc: "Email a Copy", usage: "Email a copy of the note." },
          { keys: "Alt + Shift + M", desc: "Move Note", usage: "Move the note to another notebook." },
          { keys: "F3", desc: "Add Tag", usage: "Add a tag to the current note." },
          { keys: "Ctrl + Alt + T", desc: "Edit Tags", usage: "Open the tag editor for the note." },
          { keys: "Ctrl + Alt + L", desc: "Copy Note Link", usage: "Copy a shareable link to the note." },
          { keys: "Ctrl + Shift + I", desc: "Note Info", usage: "Show the note's details and history." },
          { keys: "Ctrl + P", desc: "Print", usage: "Print the current note." },
          { keys: "F2", desc: "Rename", usage: "Rename the selected note or notebook." },
        ]
      },
      {
        name: "Editing",
        shortcuts: [
          { keys: "Ctrl + Z", desc: "Undo", usage: "Undo the last edit." },
          { keys: "Ctrl + Y", desc: "Redo", usage: "Redo the last undone edit." },
          { keys: "Ctrl + Shift + V", desc: "Paste and Match Style", usage: "Paste text using the note's formatting." },
          { keys: "Ctrl + F", desc: "Find Within Note", usage: "Search inside the current note." },
          { keys: "Ctrl + H", desc: "Find and Replace", usage: "Find and replace text inside the note." },
          { keys: "Ctrl + K", desc: "Add / Edit Link", usage: "Turn the selection into a hyperlink." },
          { keys: "Ctrl + Alt + K", desc: "Add Note Link", usage: "Link the selection to another note." },
          { keys: "Ctrl + Shift + -", desc: "Insert Divider", usage: "Insert a horizontal divider line." },
          { keys: "Ctrl + Shift + L", desc: "Insert Code Block", usage: "Insert a code block." },
          { keys: "Alt + Shift + D", desc: "Insert Date", usage: "Insert today's date; Ctrl + Shift + D inserts the time." },
        ]
      },
      {
        name: "Formatting",
        shortcuts: [
          { keys: "Ctrl + B", desc: "Bold", usage: "Make the selected text bold." },
          { keys: "Ctrl + I", desc: "Italic", usage: "Make the selected text italic." },
          { keys: "Ctrl + U", desc: "Underline", usage: "Underline the selected text." },
          { keys: "Ctrl + T", desc: "Strikethrough", usage: "Strike through the selected text." },
          { keys: "Ctrl + Shift + H", desc: "Highlight", usage: "Highlight the selected text." },
          { keys: "Ctrl + Shift + B", desc: "Bulleted List", usage: "Turn the selection into a bulleted list." },
          { keys: "Ctrl + Shift + O", desc: "Numbered List", usage: "Turn the selection into a numbered list." },
          { keys: "Ctrl + Shift + C", desc: "Checklist", usage: "Turn the selection into a checklist." },
          { keys: "Ctrl + M", desc: "Indent", usage: "Indent the current line or list item; Tab also works." },
          { keys: "Ctrl + Shift + M", desc: "Outdent", usage: "Outdent the current line; Shift + Tab also works." },
          { keys: "Ctrl + Shift + >", desc: "Increase Font Size", usage: "Make the selected text one size larger." },
          { keys: "Ctrl + Shift + <", desc: "Decrease Font Size", usage: "Make the selected text one size smaller." },
          { keys: "Ctrl + Space", desc: "Simplify Formatting", usage: "Strip complex formatting from the selection." },
          { keys: "Ctrl + Shift + X", desc: "Encrypt Text", usage: "Encrypt the selected text with a passphrase." },
        ]
      },
    ]
  },
  libreoffice_writer: {
    name: 'LibreOffice Writer',
    icon: 'fas fa-file-alt',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Bold text.' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Italic text.' },
          { keys: 'Ctrl + E', desc: 'Center', usage: 'Center align.' },
          { keys: 'Ctrl + F5', desc: 'Navigator', usage: 'Open navigator.' },
          { keys: 'F7', desc: 'Spell check', usage: 'Run spell check.' },
          { keys: 'Ctrl + F12', desc: 'Insert table', usage: 'Insert a table.' },
        ]
      },
    ]
  },
  libreoffice_calc: {
    name: 'LibreOffice Calc',
    icon: 'fas fa-table',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + ;', desc: 'Today date', usage: 'Insert current date.' },
          { keys: 'Ctrl + +', desc: 'Insert cell', usage: 'Insert new cell.' },
          { keys: 'Ctrl + -', desc: 'Delete cell', usage: 'Delete cell.' },
          { keys: 'F2', desc: 'Edit mode', usage: 'Enter cell edit mode.' },
          { keys: 'Ctrl + `', desc: 'Show formulas', usage: 'Show formulas.' },
          { keys: 'Alt + =', desc: 'Auto sum', usage: 'Insert auto sum.' },
        ]
      },
    ]
  },
  keynote: {
    name: 'Apple Keynote',
    icon: 'fas fa-tv',
    categories: [
      {
        name: 'Presentation',
        shortcuts: [
          { keys: 'Cmd + N', desc: 'New presentation', usage: 'Create a new presentation.' },
          { keys: 'Cmd + Shift + N', desc: 'New slide', usage: 'Add a new slide.' },
          { keys: 'Cmd + D', desc: 'Duplicate slide', usage: 'Duplicate the slide.' },
          { keys: 'Option + Cmd + P', desc: 'Start presentation', usage: 'Start the slideshow.' },
          { keys: 'Esc', desc: 'End presentation', usage: 'End the slideshow.' },
          { keys: 'Cmd + Shift + K', desc: 'Hyperlink', usage: 'Add a hyperlink.' },
        ]
      },
    ]
  },
  basecamp: {
    name: 'Basecamp',
    icon: 'fas fa-campground',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'J', desc: 'Next item', usage: 'Move to next item.' },
          { keys: 'K', desc: 'Previous item', usage: 'Move to previous item.' },
          { keys: 'Cmd + J', desc: 'Jump', usage: 'Quick jump between projects.' },
          { keys: '?', desc: 'Shortcuts', usage: 'Show keyboard shortcuts.' },
          { keys: 'Enter', desc: 'Open selected', usage: 'Open the currently highlighted item in a list.' },
          { keys: 'Esc', desc: 'Close / back', usage: 'Close the current dialog or jump menu.' },
        ]
      },
      {
        name: 'Writing',
        shortcuts: [
          { keys: 'Cmd + Enter', desc: 'Submit post', usage: 'Post your message or comment without clicking the button.' },
          { keys: 'Cmd + B', desc: 'Bold', usage: 'Bold selected text in the rich text editor.' },
          { keys: 'Cmd + I', desc: 'Italic', usage: 'Italicize selected text in the rich text editor.' },
          { keys: 'Cmd + K', desc: 'Insert link', usage: 'Turn selected text into a hyperlink.' },
        ]
      },
    ]
  },
  coda: {
    name: 'Coda',
    icon: 'fas fa-file-code',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + /', desc: 'Command palette', usage: 'Open command palette.' },
          { keys: 'Ctrl + K', desc: 'Insert link', usage: 'Insert a link.' },
          { keys: 'Ctrl + E', desc: 'Inline formula', usage: 'Insert inline formula.' },
          { keys: 'Ctrl + Shift + M', desc: 'Go to page', usage: 'Quick navigate to page.' },
          { keys: '/', desc: 'Slash command', usage: 'Select block type.' },
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Bold the selected text.' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Italicize the selected text.' },
          { keys: 'Ctrl + U', desc: 'Underline', usage: 'Underline the selected text.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last change in the doc.' },
          { keys: 'Ctrl + Shift + Z', desc: 'Redo', usage: 'Redo the last undone change.' },
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Search within the current doc.' },
          { keys: 'Ctrl + Alt + 1', desc: 'Heading 1', usage: 'Format the current line as a large heading.' },
          { keys: 'Ctrl + Alt + 2', desc: 'Heading 2', usage: 'Format the current line as a medium heading.' },
        ]
      },
    ]
  },
  craft: {
    name: 'Craft',
    icon: 'fas fa-feather',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Cmd + N', desc: 'New document', usage: 'Create a new document.' },
          { keys: 'Cmd + K', desc: 'Insert link', usage: 'Insert a link.' },
          { keys: 'Cmd + Shift + M', desc: 'Navigate', usage: 'Navigate to a page.' },
          { keys: '/', desc: 'Slash command', usage: 'Select block type.' },
          { keys: 'Cmd + D', desc: 'Duplicate', usage: 'Duplicate a block.' },
          { keys: 'Cmd + B', desc: 'Bold', usage: 'Bold the selected text.' },
          { keys: 'Cmd + I', desc: 'Italic', usage: 'Italicize the selected text.' },
          { keys: 'Cmd + U', desc: 'Underline', usage: 'Underline the selected text.' },
          { keys: 'Cmd + Z', desc: 'Undo', usage: 'Undo the last change.' },
          { keys: 'Cmd + Shift + Z', desc: 'Redo', usage: 'Redo the last undone change.' },
          { keys: 'Cmd + O', desc: 'Quick open', usage: 'Jump to any document by typing its name.' },
          { keys: 'Cmd + F', desc: 'Find in document', usage: 'Search text inside the current document.' },
          { keys: 'Tab', desc: 'Indent block', usage: 'Nest the current block one level deeper.' },
        ]
      },
    ]
  },
  raindrop: {
    name: 'Raindrop.io',
    icon: 'fas fa-cloud-rain',
    categories: [
      {
        name: 'Bookmarks',
        shortcuts: [
          { keys: 'D', desc: 'Add bookmark', usage: 'Bookmark current page.' },
          { keys: 'S', desc: 'Search', usage: 'Search bookmarks.' },
          { keys: 'Enter', desc: 'Open', usage: 'Open selected bookmark.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete selected bookmark.' },
          { keys: 'Ctrl + N', desc: 'New bookmark', usage: 'Create a new bookmark manually in the app.' },
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Focus the search field to filter bookmarks.' },
          { keys: '↑ / ↓', desc: 'Navigate list', usage: 'Move selection up or down through bookmarks.' },
          { keys: 'Esc', desc: 'Close editor', usage: 'Close the bookmark edit panel or search.' },
          { keys: 'Ctrl + A', desc: 'Select all', usage: 'Select all bookmarks in the current collection.' },
          { keys: 'Cmd + ,', desc: 'Preferences', usage: 'Open Raindrop.io app settings (macOS).' },
        ]
      },
    ]
  },
  apple_pages: {
    name: 'Apple Pages',
    icon: 'fas fa-file-alt',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Cmd + B', desc: 'Bold', usage: 'Bold text.' },
          { keys: 'Cmd + I', desc: 'Italic', usage: 'Italic text.' },
          { keys: 'Cmd + T', desc: 'Font panel', usage: 'Open font panel.' },
          { keys: 'Cmd + Shift + V', desc: 'Paste with style', usage: 'Paste matching style.' },
          { keys: 'Fn + Up', desc: 'Page up', usage: 'Page up.' },
          { keys: 'Cmd + U', desc: 'Underline', usage: 'Underline the selected text.' },
          { keys: 'Cmd + Z', desc: 'Undo', usage: 'Undo the last change.' },
          { keys: 'Cmd + Shift + Z', desc: 'Redo', usage: 'Redo the last undone change.' },
          { keys: 'Cmd + F', desc: 'Find', usage: 'Search text in the document.' },
          { keys: 'Cmd + G', desc: 'Find next', usage: 'Jump to the next search match.' },
          { keys: 'Cmd + P', desc: 'Print', usage: 'Open the print dialog.' },
          { keys: 'Cmd + S', desc: 'Save', usage: 'Save the document.' },
          { keys: 'Cmd + Option + C', desc: 'Copy style', usage: 'Copy character and paragraph formatting.' },
          { keys: 'Cmd + Option + V', desc: 'Paste style', usage: 'Apply copied formatting to the selection.' },
        ]
      },
    ]
  },
  apple_numbers: {
    name: 'Apple Numbers',
    icon: 'fas fa-table',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Cmd + =', desc: 'Auto sum', usage: 'Calculate sum of selected cells.' },
          { keys: 'Tab', desc: 'Next cell', usage: 'Move to next cell.' },
          { keys: 'Option + Tab', desc: 'New row', usage: 'Add a new row.' },
          { keys: 'Cmd + K', desc: 'Hyperlink', usage: 'Add a hyperlink.' },
          { keys: 'F2', desc: 'Edit cell', usage: 'Enter cell edit mode.' },
          { keys: 'Cmd + Z', desc: 'Undo', usage: 'Undo the last change.' },
          { keys: 'Cmd + Shift + Z', desc: 'Redo', usage: 'Redo the last undone change.' },
          { keys: 'Cmd + F', desc: 'Find', usage: 'Search values in the spreadsheet.' },
          { keys: 'Cmd + B', desc: 'Bold', usage: 'Bold text in the selected cells.' },
          { keys: 'Cmd + I', desc: 'Italic', usage: 'Italicize text in the selected cells.' },
          { keys: 'Cmd + U', desc: 'Underline', usage: 'Underline text in the selected cells.' },
          { keys: 'Option + Down', desc: 'Add row below', usage: 'Insert a new row below the current one.' },
          { keys: 'Option + Right', desc: 'Add column right', usage: 'Insert a new column to the right.' },
          { keys: 'Return', desc: 'Confirm & move down', usage: 'Apply the cell edit and move to the cell below.' },
        ]
      },
    ]
  },
  ms_access: {
    name: 'Microsoft Access',
    icon: 'fas fa-database',
    categories: [
      {
        name: 'Database',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New database', usage: 'Create a new database.' },
          { keys: 'F5', desc: 'Switch view', usage: 'Switch between form and design view.' },
          { keys: 'Ctrl + ;', desc: 'Current date', usage: 'Insert current date.' },
          { keys: 'Ctrl + :', desc: 'Current time', usage: 'Insert current time.' },
          { keys: 'Ctrl + F6', desc: 'Next window', usage: 'Switch to next database window.' },
          { keys: 'F11', desc: 'Navigation Pane', usage: 'Show or focus the Navigation Pane.' },
          { keys: 'F2', desc: 'Edit mode', usage: 'Toggle between edit and navigation mode in a field.' },
          { keys: 'Shift + F2', desc: 'Zoom box', usage: 'Open the Zoom window to edit long field content.' },
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Find records matching a value.' },
          { keys: 'Ctrl + H', desc: 'Replace', usage: 'Find and replace values in records.' },
          { keys: 'Ctrl + +', desc: 'New record', usage: 'Add a new record to the table or form.' },
          { keys: 'Ctrl + -', desc: 'Delete record', usage: 'Delete the current record.' },
          { keys: 'Ctrl + \'', desc: 'Copy from previous', usage: 'Insert the value from the same field in the previous record.' },
          { keys: 'F4', desc: 'Open dropdown', usage: 'Open a combo box or lookup list.' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save design changes to the current object.' },
        ]
      },
    ]
  },
  visual_studio: {
    name: "Visual Studio",
    icon: "fas fa-code",
    source: "https://learn.microsoft.com/en-us/visualstudio/ide/default-keyboard-shortcuts-in-visual-studio",
    categories: [
      {
        name: "Search & Navigation",
        shortcuts: [
          { keys: "Ctrl + T", desc: "Go To All", usage: "Search and jump to any file, type, member, or symbol; Ctrl + , also works." },
          { keys: "Ctrl + Q", desc: "Quick Launch", usage: "Search commands, settings, and documentation from one box." },
          { keys: "Ctrl + F", desc: "Find", usage: "Find text in the current file." },
          { keys: "Ctrl + H", desc: "Replace", usage: "Find and replace text in the current file." },
          { keys: "Ctrl + Shift + F", desc: "Find in Files", usage: "Search text across the entire solution." },
          { keys: "Ctrl + Shift + H", desc: "Replace in Files", usage: "Replace text across the entire solution." },
          { keys: "F3", desc: "Find Next", usage: "Jump to the next match; Shift + F3 goes to the previous one." },
          { keys: "Ctrl + F3", desc: "Find Next Selected", usage: "Search for the word or selection at the caret." },
          { keys: "Ctrl + G", desc: "Go To Line", usage: "Jump to a specific line number." },
          { keys: "Ctrl + -", desc: "Navigate Backward", usage: "Go back to the previous cursor location; Ctrl + Shift + - goes forward." },
        ]
      },
      {
        name: "Code Navigation",
        shortcuts: [
          { keys: "F12", desc: "Go To Definition", usage: "Jump to the definition of the symbol at the caret." },
          { keys: "Ctrl + F12", desc: "Go To Declaration", usage: "Jump to the declaration of the symbol." },
          { keys: "Alt + F12", desc: "Peek Definition", usage: "Show the definition inline without leaving the file." },
          { keys: "Shift + F12", desc: "Find All References", usage: "List everywhere the symbol is used." },
          { keys: "Shift + Alt + F12", desc: "Quick Find Symbol", usage: "Run a fast symbol search for the identifier at the caret." },
          { keys: "F8", desc: "Next Location", usage: "Go to the next item in the Error List or Output window." },
          { keys: "Shift + F8", desc: "Previous Location", usage: "Go to the previous item in the Error List or Output window." },
        ]
      },
      {
        name: "Editing",
        shortcuts: [
          { keys: "Ctrl + K, Ctrl + C", desc: "Comment Selection", usage: "Comment out the selected lines." },
          { keys: "Ctrl + K, Ctrl + U", desc: "Uncomment Selection", usage: "Uncomment the selected lines." },
          { keys: "Ctrl + /", desc: "Toggle Line Comment", usage: "Toggle line comments (Visual Studio 2022 17.11 and later)." },
          { keys: "Ctrl + K, Ctrl + D", desc: "Format Document", usage: "Reformat the whole document to the code style rules." },
          { keys: "Ctrl + K, Ctrl + F", desc: "Format Selection", usage: "Reformat only the selected code." },
          { keys: "Ctrl + D", desc: "Duplicate", usage: "Duplicate the current line or selection." },
          { keys: "Ctrl + L", desc: "Line Cut", usage: "Cut the entire current line." },
          { keys: "Ctrl + Enter", desc: "Line Open Above", usage: "Insert a blank line above the current one." },
          { keys: "Ctrl + Space", desc: "Complete Word", usage: "Trigger IntelliSense completion at the caret." },
          { keys: "Ctrl + Shift + Space", desc: "Parameter Info", usage: "Show the parameters of the method being called." },
          { keys: "Ctrl + K, Ctrl + X", desc: "Insert Snippet", usage: "Open the code snippet picker." },
          { keys: "Ctrl + M, Ctrl + O", desc: "Collapse to Definitions", usage: "Collapse all members to their signatures." },
          { keys: "Ctrl + M, Ctrl + M", desc: "Toggle Outlining", usage: "Expand or collapse the region at the caret." },
          { keys: "Ctrl + K, Ctrl + K", desc: "Toggle Bookmark", usage: "Add or remove a bookmark on the current line." },
          { keys: "Ctrl + R, Ctrl + G", desc: "Remove and Sort Usings", usage: "Remove unused using directives and sort the rest." },
        ]
      },
      {
        name: "Build",
        shortcuts: [
          { keys: "Ctrl + Shift + B", desc: "Build Solution", usage: "Build the entire solution." },
          { keys: "Ctrl + F7", desc: "Compile", usage: "Compile only the current file." },
          { keys: "Ctrl + Break", desc: "Cancel Build", usage: "Cancel the build in progress." },
          { keys: "Alt + F11", desc: "Run Code Analysis", usage: "Run code analysis on the solution." },
        ]
      },
      {
        name: "Debugging",
        shortcuts: [
          { keys: "F5", desc: "Start Debugging", usage: "Run the app with the debugger attached." },
          { keys: "Ctrl + F5", desc: "Start Without Debugging", usage: "Run the app without the debugger." },
          { keys: "Shift + F5", desc: "Stop Debugging", usage: "End the debugging session." },
          { keys: "Ctrl + Shift + F5", desc: "Restart", usage: "Restart the debugging session." },
          { keys: "F9", desc: "Toggle Breakpoint", usage: "Add or remove a breakpoint on the current line." },
          { keys: "Ctrl + Shift + F9", desc: "Delete All Breakpoints", usage: "Remove every breakpoint in the solution." },
          { keys: "F10", desc: "Step Over", usage: "Execute the current line and stop at the next one." },
          { keys: "F11", desc: "Step Into", usage: "Step into the method call on the current line." },
          { keys: "Shift + F11", desc: "Step Out", usage: "Run until the current method returns." },
          { keys: "Ctrl + F10", desc: "Run to Cursor", usage: "Continue execution until the line at the caret." },
          { keys: "Ctrl + Shift + F10", desc: "Set Next Statement", usage: "Move the execution point to the current line." },
          { keys: "Shift + F9", desc: "Quick Watch", usage: "Inspect the value of the expression at the caret; Ctrl + Alt + Q also works." },
          { keys: "Ctrl + Alt + B", desc: "Breakpoints Window", usage: "Open the window listing all breakpoints." },
          { keys: "Ctrl + Alt + I", desc: "Immediate Window", usage: "Open the Immediate window to evaluate expressions." },
        ]
      },
      {
        name: "Refactoring",
        shortcuts: [
          { keys: "Ctrl + R, Ctrl + R", desc: "Rename", usage: "Rename the symbol and update every reference." },
          { keys: "Ctrl + R, Ctrl + M", desc: "Extract Method", usage: "Turn the selected code into a new method." },
          { keys: "Ctrl + R, Ctrl + I", desc: "Extract Interface", usage: "Create an interface from the members of a class." },
          { keys: "Ctrl + R, Ctrl + E", desc: "Encapsulate Field", usage: "Wrap a field in a property." },
          { keys: "Ctrl + .", desc: "Quick Actions", usage: "Show refactorings and code fixes for the caret position." },
          { keys: "Ctrl + R, Ctrl + O", desc: "Reorder Parameters", usage: "Change the order of a method's parameters everywhere." },
        ]
      },
      {
        name: "Windows & Files",
        shortcuts: [
          { keys: "Ctrl + Alt + L", desc: "Solution Explorer", usage: "Open the Solution Explorer window." },
          { keys: "F4", desc: "Properties Window", usage: "Open the Properties window for the selection." },
          { keys: "Ctrl + Alt + O", desc: "Output Window", usage: "Open the Output window." },
          { keys: "Ctrl + \\, E", desc: "Error List", usage: "Open the Error List window." },
          { keys: "Ctrl + Alt + X", desc: "Toolbox", usage: "Open the Toolbox window." },
          { keys: "Ctrl + E, T", desc: "Test Explorer", usage: "Open the Test Explorer window." },
          { keys: "Ctrl + W", desc: "Close Document", usage: "Close the current document (General profile; Ctrl + F4 also works)." },
          { keys: "Ctrl + Tab", desc: "Switch Documents", usage: "Cycle through open document windows." },
          { keys: "Ctrl + N", desc: "New File", usage: "Create a new file." },
          { keys: "Ctrl + Shift + N", desc: "New Project", usage: "Create a new project." },
          { keys: "Ctrl + S", desc: "Save", usage: "Save the current file." },
          { keys: "Ctrl + Shift + S", desc: "Save All", usage: "Save every modified file." },
          { keys: "Shift + Alt + Enter", desc: "Full Screen", usage: "Toggle full-screen mode." },
        ]
      },
    ]
  },
  phpstorm: {
    name: "PhpStorm",
    icon: "fas fa-code",
    source: "https://resources.jetbrains.com/storage/products/phpstorm/docs/PhpStorm_ReferenceCard.pdf",
    categories: [
      {
        name: "General",
        shortcuts: [
          { keys: "Shift + Shift", desc: "Search Everywhere", usage: "Press Shift twice to search files, classes, symbols, and actions at once." },
          { keys: "Ctrl + Shift + A", desc: "Find Action", usage: "Search for any IDE command by name and run it." },
          { keys: "Alt + 1", desc: "Open Tool Window", usage: "Alt + 1 through Alt + 9 open the corresponding tool window." },
          { keys: "Ctrl + Alt + F11", desc: "Toggle Full Screen", usage: "Switch the IDE in and out of full screen mode." },
          { keys: "Ctrl + Shift + F12", desc: "Toggle Maximizing Editor", usage: "Hide the tool windows to give the editor the whole window." },
          { keys: "Alt + Shift + F", desc: "Add to Favorites", usage: "Add the current file or symbol to Favorites." },
          { keys: "Alt + Shift + I", desc: "Inspect Current File", usage: "Run the current inspection profile on the open file." },
          { keys: "Ctrl + Alt + S", desc: "Open Settings", usage: "Open the Settings dialog." },
          { keys: "Ctrl + Tab", desc: "Switcher", usage: "Switch between open editor tabs and tool windows." },
        ]
      },
      {
        name: "Editing",
        shortcuts: [
          { keys: "Ctrl + Space", desc: "Basic Code Completion", usage: "Complete the name of a class, method, or variable." },
          { keys: "Alt + Enter", desc: "Show Intention Actions", usage: "Show quick-fixes and intention actions at the caret." },
          { keys: "Ctrl + P", desc: "Parameter Info", usage: "Show the parameters of the method call you are inside." },
          { keys: "Ctrl + Q", desc: "Quick Documentation", usage: "Look up documentation for the symbol at the caret." },
          { keys: "Alt + Insert", desc: "Generate Code", usage: "Generate constructors, getters, and setters." },
          { keys: "Ctrl + O", desc: "Override Methods", usage: "Override a method from the parent class." },
          { keys: "Ctrl + I", desc: "Implement Methods", usage: "Implement the methods required by an interface." },
          { keys: "Ctrl + Alt + T", desc: "Surround With", usage: "Wrap the selection in if..else, try..catch, for, and similar constructs." },
          { keys: "Ctrl + J", desc: "Insert Live Template", usage: "Insert a live template such as fore or pubf at the caret." },
          { keys: "Ctrl + /", desc: "Line Comment", usage: "Comment or uncomment the current line or selection." },
          { keys: "Ctrl + Shift + /", desc: "Block Comment", usage: "Comment or uncomment the selection with a block comment." },
          { keys: "Ctrl + W", desc: "Extend Selection", usage: "Select successively increasing code blocks around the caret." },
          { keys: "Ctrl + Shift + W", desc: "Shrink Selection", usage: "Decrease the current selection to its previous state." },
          { keys: "Ctrl + Alt + L", desc: "Reformat Code", usage: "Reformat the file or selection to the project code style." },
          { keys: "Ctrl + Alt + I", desc: "Auto-Indent Lines", usage: "Fix the indentation of the current line or selection." },
          { keys: "Ctrl + D", desc: "Duplicate Line", usage: "Duplicate the current line or the selected block." },
          { keys: "Ctrl + Y", desc: "Delete Line", usage: "Delete the line at the caret." },
          { keys: "Ctrl + Shift + J", desc: "Smart Line Join", usage: "Join the current line with the next one, in HTML and JavaScript." },
          { keys: "Ctrl + Enter", desc: "Smart Line Split", usage: "Split the line at the caret, in HTML and JavaScript." },
          { keys: "Shift + Enter", desc: "Start New Line", usage: "Start a new line below the current one from anywhere in the line." },
          { keys: "Ctrl + Shift + U", desc: "Toggle Case", usage: "Switch the word or selection between upper and lower case." },
          { keys: "Ctrl + Shift + ]", desc: "Select to Block End", usage: "Extend the selection to the end of the code block." },
          { keys: "Ctrl + Shift + [", desc: "Select to Block Start", usage: "Extend the selection to the start of the code block." },
          { keys: "Ctrl + Delete", desc: "Delete to Word End", usage: "Delete from the caret to the end of the word." },
          { keys: "Ctrl + Backspace", desc: "Delete to Word Start", usage: "Delete from the caret to the start of the word." },
          { keys: "Ctrl + Numpad +", desc: "Expand Code Block", usage: "Expand the folded code block at the caret." },
          { keys: "Ctrl + Numpad -", desc: "Collapse Code Block", usage: "Fold the code block at the caret." },
          { keys: "Ctrl + Shift + V", desc: "Paste from History", usage: "Paste from the list of recent clipboard buffers." },
          { keys: "Ctrl + F4", desc: "Close Editor Tab", usage: "Close the active editor tab." },
        ]
      },
      {
        name: "Navigation",
        shortcuts: [
          { keys: "Ctrl + N", desc: "Go to Class", usage: "Find and open a class by name." },
          { keys: "Ctrl + Shift + N", desc: "Go to File", usage: "Find and open a file by name." },
          { keys: "Ctrl + Alt + Shift + N", desc: "Go to Symbol", usage: "Find any symbol in the project by name." },
          { keys: "Ctrl + G", desc: "Go to Line", usage: "Jump to a specific line number." },
          { keys: "Alt + Right", desc: "Next Editor Tab", usage: "Move to the next open editor tab." },
          { keys: "Alt + Left", desc: "Previous Editor Tab", usage: "Move to the previous open editor tab." },
          { keys: "Esc", desc: "Go to Editor", usage: "Move the focus from a tool window back to the editor." },
          { keys: "Ctrl + E", desc: "Recent Files", usage: "Show the popup of recently opened files." },
          { keys: "Ctrl + Alt + Left", desc: "Navigate Back", usage: "Move back through your navigation history." },
          { keys: "Ctrl + Alt + Right", desc: "Navigate Forward", usage: "Move forward through your navigation history." },
          { keys: "Ctrl + Shift + Backspace", desc: "Last Edit Location", usage: "Jump to the place where you last made a change." },
          { keys: "Alt + F1", desc: "Select In", usage: "Locate the current file or symbol in the Project view or another tool window." },
          { keys: "Ctrl + B", desc: "Go to Declaration", usage: "Jump to the declaration of the symbol; Ctrl + Click does the same." },
          { keys: "Ctrl + Alt + B", desc: "Go to Implementation", usage: "Jump to the implementations of the symbol at the caret." },
          { keys: "Ctrl + Shift + I", desc: "Quick Definition", usage: "Preview the definition of the symbol in a popup." },
          { keys: "Ctrl + Shift + B", desc: "Go to Type Declaration", usage: "Jump to the declaration of the symbol's type." },
          { keys: "Ctrl + U", desc: "Go to Super Method", usage: "Jump to the super-method or super-class." },
          { keys: "Alt + Up", desc: "Previous Method", usage: "Move the caret to the previous method." },
          { keys: "Alt + Down", desc: "Next Method", usage: "Move the caret to the next method." },
          { keys: "Ctrl + ]", desc: "Move to Block End", usage: "Move the caret to the end of the current code block." },
          { keys: "Ctrl + [", desc: "Move to Block Start", usage: "Move the caret to the start of the current code block." },
          { keys: "F2", desc: "Next Highlighted Error", usage: "Jump to the next error or warning in the file." },
          { keys: "Shift + F2", desc: "Previous Highlighted Error", usage: "Jump to the previous error or warning in the file." },
          { keys: "F4", desc: "Edit Source", usage: "Open the selected item's source in the editor." },
        ]
      },
      {
        name: "Search & Replace",
        shortcuts: [
          { keys: "Ctrl + F", desc: "Find", usage: "Search inside the current file." },
          { keys: "Ctrl + R", desc: "Replace", usage: "Find and replace inside the current file." },
          { keys: "F3", desc: "Find Next", usage: "Jump to the next match." },
          { keys: "Shift + F3", desc: "Find Previous", usage: "Jump to the previous match." },
          { keys: "Ctrl + Shift + F", desc: "Find in Path", usage: "Search across the whole project or a chosen scope." },
          { keys: "Ctrl + Shift + R", desc: "Replace in Path", usage: "Find and replace across the project or a chosen scope." },
          { keys: "Alt + F7", desc: "Find Usages", usage: "List everywhere the symbol at the caret is used." },
          { keys: "Ctrl + F7", desc: "Find Usages in File", usage: "List usages of the symbol within the current file." },
          { keys: "Ctrl + Shift + F7", desc: "Highlight Usages in File", usage: "Highlight every usage of the symbol in the open file." },
          { keys: "Ctrl + Alt + F7", desc: "Show Usages", usage: "Show usages of the symbol in a popup list." },
        ]
      },
      {
        name: "Refactoring",
        shortcuts: [
          { keys: "Ctrl + Alt + Shift + T", desc: "Refactor This", usage: "Show every refactoring available at the caret." },
          { keys: "F5", desc: "Copy", usage: "Copy the selected class or file to another location." },
          { keys: "F6", desc: "Move", usage: "Move the selected class, file, or member." },
          { keys: "Alt + Delete", desc: "Safe Delete", usage: "Delete the symbol after checking for usages." },
          { keys: "Shift + F6", desc: "Rename", usage: "Rename the symbol and update every reference." },
          { keys: "Ctrl + Alt + N", desc: "Inline Variable", usage: "Replace the variable with its value." },
          { keys: "Ctrl + Alt + M", desc: "Extract Method", usage: "Turn the selected code into a new method." },
          { keys: "Ctrl + Alt + V", desc: "Extract Variable", usage: "Turn the selected expression into a variable." },
          { keys: "Ctrl + Alt + F", desc: "Extract Field", usage: "Turn the selected expression into a class field." },
          { keys: "Ctrl + Alt + C", desc: "Extract Constant", usage: "Turn the selected expression into a constant." },
        ]
      },
      {
        name: "Running & Debugging",
        shortcuts: [
          { keys: "Shift + F10", desc: "Run", usage: "Run the current configuration." },
          { keys: "Shift + F9", desc: "Debug", usage: "Debug the current configuration." },
          { keys: "Ctrl + Shift + F10", desc: "Run Context Configuration", usage: "Run the configuration for the file or test at the caret." },
          { keys: "Ctrl + Shift + X", desc: "Run Command Line", usage: "Open the PhpStorm command line tool." },
          { keys: "F8", desc: "Step Over", usage: "Run the current line and stop on the next one." },
          { keys: "F7", desc: "Step Into", usage: "Step into the function called on the current line." },
          { keys: "Shift + F8", desc: "Step Out", usage: "Run until the current function returns." },
          { keys: "Alt + F8", desc: "Evaluate Expression", usage: "Evaluate an arbitrary expression in the current frame." },
          { keys: "F9", desc: "Resume Program", usage: "Continue running until the next breakpoint." },
          { keys: "Ctrl + F8", desc: "Toggle Breakpoint", usage: "Add or remove a breakpoint on the current line." },
          { keys: "Ctrl + Shift + F8", desc: "View Breakpoints", usage: "Open the breakpoints dialog." },
        ]
      },
      {
        name: "Version Control",
        shortcuts: [
          { keys: "Alt + `", desc: "VCS Operations Popup", usage: "Show the quick popup of version control actions." },
          { keys: "Ctrl + K", desc: "Commit", usage: "Commit the project changes to version control." },
          { keys: "Ctrl + T", desc: "Update Project", usage: "Update the project from version control." },
          { keys: "Alt + Shift + C", desc: "View Recent Changes", usage: "Show the list of recent changes." },
        ]
      },
    ]
  },
  goland: {
    name: 'GoLand',
    icon: 'fas fa-code',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Shift + Shift', desc: 'Search everywhere', usage: 'Search everything.' },
          { keys: 'Alt + Enter', desc: 'Quick fix', usage: 'Show quick fixes.' },
          { keys: 'Ctrl + Shift + T', desc: 'Generate test', usage: 'Generate test.' },
          { keys: 'Ctrl + Shift + F10', desc: 'Run', usage: 'Run current file.' },
          { keys: 'Ctrl + B', desc: 'Go to definition', usage: 'Go to definition.' },
          { keys: 'Ctrl + Shift + A', desc: 'Find action', usage: 'Search any IDE action or setting by name.' },
          { keys: 'Ctrl + E', desc: 'Recent files', usage: 'Open the recently used files popup.' },
          { keys: 'Ctrl + Shift + N', desc: 'Go to file', usage: 'Open any file in the project by name.' },
          { keys: 'Alt + F7', desc: 'Find usages', usage: 'Show all usages of the symbol under the caret.' },
          { keys: 'Shift + F6', desc: 'Rename', usage: 'Rename the symbol and all its references safely.' },
          { keys: 'Ctrl + Alt + L', desc: 'Reformat code', usage: 'Reformat the file with gofmt-style formatting.' },
          { keys: 'Ctrl + /', desc: 'Comment line', usage: 'Toggle line comment for the current line or selection.' },
          { keys: 'Ctrl + D', desc: 'Duplicate line', usage: 'Duplicate the current line or selection.' },
          { keys: 'F2', desc: 'Next error', usage: 'Jump to the next error or warning in the file.' },
          { keys: 'Ctrl + F12', desc: 'File structure', usage: 'Show the structure popup for quick navigation.' },
        ]
      },
    ]
  },
  datagrip: {
    name: 'DataGrip',
    icon: 'fas fa-database',
    categories: [
      {
        name: 'Database',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Execute query', usage: 'Execute current query.' },
          { keys: 'Ctrl + Shift + Enter', desc: 'Execute all', usage: 'Execute entire script.' },
          { keys: 'Ctrl + /', desc: 'Toggle comment', usage: 'Toggle line comment.' },
          { keys: 'Ctrl + Shift + F', desc: 'Find in path', usage: 'Search across project.' },
          { keys: 'Ctrl + Alt + L', desc: 'Format code', usage: 'Format SQL.' },
          { keys: 'Shift + Shift', desc: 'Search everywhere', usage: 'Search files, tables, actions, and symbols at once.' },
          { keys: 'Ctrl + Shift + A', desc: 'Find action', usage: 'Search any IDE action or setting by name.' },
          { keys: 'Ctrl + E', desc: 'Recent files', usage: 'Open the recently used consoles and files popup.' },
          { keys: 'Ctrl + D', desc: 'Duplicate line', usage: 'Duplicate the current line or selection in the editor.' },
          { keys: 'Shift + F6', desc: 'Rename', usage: 'Rename a table, column, or alias with references updated.' },
          { keys: 'Ctrl + Q', desc: 'Quick documentation', usage: 'Show documentation for the object under the caret.' },
          { keys: 'Alt + F7', desc: 'Find usages', usage: 'Show where the table or column is referenced.' },
          { keys: 'F4', desc: 'Edit data', usage: 'Open the selected table in the data editor.' },
          { keys: 'Ctrl + F5', desc: 'Refresh', usage: 'Refresh the database schema information.' },
          { keys: 'F2', desc: 'Next error', usage: 'Jump to the next SQL error in the console.' },
        ]
      },
    ]
  },
  clion: {
    name: 'CLion',
    icon: 'fas fa-code',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Shift + Shift', desc: 'Search everywhere', usage: 'Search everything.' },
          { keys: 'Alt + Enter', desc: 'Quick fix', usage: 'Show quick fixes.' },
          { keys: 'Ctrl + Shift + F10', desc: 'Run', usage: 'Run.' },
          { keys: 'Shift + F9', desc: 'Debug', usage: 'Run in debug mode.' },
          { keys: 'Ctrl + B', desc: 'Go to definition', usage: 'Go to definition.' },
          { keys: 'Ctrl + Shift + A', desc: 'Find action', usage: 'Search any IDE action or setting by name.' },
          { keys: 'Ctrl + E', desc: 'Recent files', usage: 'Open the recently used files popup.' },
          { keys: 'Ctrl + Shift + N', desc: 'Go to file', usage: 'Open any file in the project by name.' },
          { keys: 'Alt + F7', desc: 'Find usages', usage: 'Show all usages of the symbol under the caret.' },
          { keys: 'Shift + F6', desc: 'Rename', usage: 'Rename the symbol and all its references safely.' },
          { keys: 'Ctrl + Alt + L', desc: 'Reformat code', usage: 'Reformat the file according to code style settings.' },
          { keys: 'Ctrl + /', desc: 'Comment line', usage: 'Toggle line comment for the current line or selection.' },
          { keys: 'Ctrl + D', desc: 'Duplicate line', usage: 'Duplicate the current line or selection.' },
          { keys: 'F2', desc: 'Next error', usage: 'Jump to the next error or warning in the file.' },
          { keys: 'Ctrl + F12', desc: 'File structure', usage: 'Show the structure popup for quick navigation.' },
        ]
      },
    ]
  },
  zed: {
    name: 'Zed Editor',
    icon: 'fas fa-bolt',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Cmd + P', desc: 'Quick open', usage: 'Search and open files.' },
          { keys: 'Cmd + Shift + P', desc: 'Command palette', usage: 'Open command palette.' },
          { keys: 'Cmd + /', desc: 'Toggle comment', usage: 'Toggle line comment.' },
          { keys: 'Cmd + D', desc: 'Select next', usage: 'Select next occurrence.' },
          { keys: 'Cmd + Shift + K', desc: 'Delete line', usage: 'Delete current line.' },
          { keys: 'Ctrl + `', desc: 'Toggle terminal', usage: 'Toggle integrated terminal.' },
          { keys: 'Cmd + Shift + E', desc: 'AI panel', usage: 'Open AI assistant panel.' },
        ]
      },
    ]
  },
  helix: {
    name: "Helix Editor",
    icon: "fas fa-code",
    source: "https://docs.helix-editor.com/keymap.html",
    categories: [
      {
        name: "Movement (Normal Mode)",
        shortcuts: [
          { keys: "h", desc: "Move Left", usage: "Move one character to the left; the Left arrow does the same." },
          { keys: "j", desc: "Move Down", usage: "Move one visual line down; the Down arrow does the same." },
          { keys: "k", desc: "Move Up", usage: "Move one visual line up; the Up arrow does the same." },
          { keys: "l", desc: "Move Right", usage: "Move one character to the right; the Right arrow does the same." },
          { keys: "w", desc: "Next Word Start", usage: "Move to the start of the next word." },
          { keys: "b", desc: "Previous Word Start", usage: "Move to the start of the previous word." },
          { keys: "e", desc: "Next Word End", usage: "Move to the end of the next word." },
          { keys: "W", desc: "Next WORD Start", usage: "Move to the start of the next WORD, which ignores punctuation." },
          { keys: "B", desc: "Previous WORD Start", usage: "Move to the start of the previous WORD." },
          { keys: "E", desc: "Next WORD End", usage: "Move to the end of the next WORD." },
          { keys: "f", desc: "Find Next Char", usage: "Select forward to the next occurrence of a character; unlike Vim it is not limited to the current line." },
          { keys: "t", desc: "Find Till Next Char", usage: "Select forward up to, but not including, the next occurrence of a character." },
          { keys: "F", desc: "Find Previous Char", usage: "Select backward to the previous occurrence of a character." },
          { keys: "T", desc: "Find Till Previous Char", usage: "Select backward up to the previous occurrence of a character." },
          { keys: "G", desc: "Go to Line Number", usage: "Jump to the line number you type before the key." },
          { keys: "Alt + .", desc: "Repeat Last Motion", usage: "Repeat the last f, t, m, [ or ] motion." },
          { keys: "Home", desc: "Start of Line", usage: "Move to the beginning of the line." },
          { keys: "End", desc: "End of Line", usage: "Move to the end of the line." },
          { keys: "Ctrl + B", desc: "Page Up", usage: "Move one page up; PageUp does the same." },
          { keys: "Ctrl + F", desc: "Page Down", usage: "Move one page down; PageDown does the same." },
          { keys: "Ctrl + U", desc: "Half Page Up", usage: "Move the cursor and the view half a page up." },
          { keys: "Ctrl + D", desc: "Half Page Down", usage: "Move the cursor and the view half a page down." },
          { keys: "Ctrl + I", desc: "Jump Forward", usage: "Move forward through the jumplist." },
          { keys: "Ctrl + O", desc: "Jump Backward", usage: "Move backward through the jumplist." },
          { keys: "Ctrl + S", desc: "Save Selection to Jumplist", usage: "Store the current selection in the jumplist." },
        ]
      },
      {
        name: "Changes",
        shortcuts: [
          { keys: "r", desc: "Replace Character", usage: "Replace the selection with the character you type next." },
          { keys: "R", desc: "Replace with Yanked", usage: "Replace the selection with the yanked text." },
          { keys: "~", desc: "Switch Case", usage: "Toggle the case of the selected text." },
          { keys: "`", desc: "To Lower Case", usage: "Convert the selection to lower case." },
          { keys: "Alt + `", desc: "To Upper Case", usage: "Convert the selection to upper case." },
          { keys: "i", desc: "Insert Before", usage: "Enter insert mode before the selection." },
          { keys: "a", desc: "Append", usage: "Enter insert mode after the selection." },
          { keys: "I", desc: "Insert at Line Start", usage: "Enter insert mode at the beginning of the line." },
          { keys: "A", desc: "Insert at Line End", usage: "Enter insert mode at the end of the line." },
          { keys: "o", desc: "Open Line Below", usage: "Open a new line below the selection and start typing." },
          { keys: "O", desc: "Open Line Above", usage: "Open a new line above the selection and start typing." },
          { keys: ".", desc: "Repeat Last Insert", usage: "Repeat the last insertion." },
          { keys: "u", desc: "Undo", usage: "Undo the last change." },
          { keys: "U", desc: "Redo", usage: "Redo the last undone change." },
          { keys: "Alt + u", desc: "Earlier in History", usage: "Move backward through the edit history." },
          { keys: "Alt + U", desc: "Later in History", usage: "Move forward through the edit history." },
          { keys: "y", desc: "Yank", usage: "Copy the selection into a register." },
          { keys: "p", desc: "Paste After", usage: "Paste after the selection." },
          { keys: "P", desc: "Paste Before", usage: "Paste before the selection." },
          { keys: ">", desc: "Indent", usage: "Indent the selection." },
          { keys: "<", desc: "Unindent", usage: "Unindent the selection." },
          { keys: "=", desc: "Format Selection", usage: "Format the selection using the language server." },
          { keys: "d", desc: "Delete Selection", usage: "Delete the selection and yank it." },
          { keys: "Alt + d", desc: "Delete without Yanking", usage: "Delete the selection without touching the register." },
          { keys: "c", desc: "Change Selection", usage: "Delete the selection and enter insert mode." },
          { keys: "Alt + c", desc: "Change without Yanking", usage: "Change the selection without touching the register." },
          { keys: "Ctrl + A", desc: "Increment Number", usage: "Increase the number under the cursor." },
          { keys: "Ctrl + X", desc: "Decrement Number", usage: "Decrease the number under the cursor." },
          { keys: "Q", desc: "Record Macro", usage: "Start or stop recording a macro into the selected register." },
          { keys: "q", desc: "Replay Macro", usage: "Play back the macro stored in the selected register." },
        ]
      },
      {
        name: "Shell",
        shortcuts: [
          { keys: "|", desc: "Pipe Through Shell", usage: "Pipe each selection through a shell command and replace it with the output." },
          { keys: "Alt + |", desc: "Pipe To Shell", usage: "Pipe each selection into a shell command and ignore the output." },
          { keys: "!", desc: "Insert Command Output", usage: "Run a shell command and insert its output before each selection." },
          { keys: "Alt + !", desc: "Append Command Output", usage: "Run a shell command and append its output after each selection." },
          { keys: "$", desc: "Keep Piped Selections", usage: "Pipe each selection into a command and keep the ones where it returned 0." },
        ]
      },
      {
        name: "Selection",
        shortcuts: [
          { keys: "s", desc: "Select Regex Matches", usage: "Select every regex match inside the current selection." },
          { keys: "S", desc: "Split on Regex", usage: "Split the selection into sub-selections on regex matches." },
          { keys: "Alt + s", desc: "Split on Newlines", usage: "Split the selection at each newline." },
          { keys: "Alt + -", desc: "Merge Selections", usage: "Merge all selections into one." },
          { keys: "Alt + _", desc: "Merge Consecutive", usage: "Merge selections that touch each other." },
          { keys: "&", desc: "Align Selections", usage: "Align the selections in columns." },
          { keys: "_", desc: "Trim Whitespace", usage: "Trim the whitespace from the selection." },
          { keys: ";", desc: "Collapse Selection", usage: "Collapse the selection down to a single cursor." },
          { keys: "Alt + ;", desc: "Flip Selection", usage: "Swap the cursor and the anchor of the selection." },
          { keys: "Alt + :", desc: "Ensure Forward Direction", usage: "Make sure the selection points forward." },
          { keys: ",", desc: "Keep Primary Selection", usage: "Drop every selection except the primary one." },
          { keys: "Alt + ,", desc: "Remove Primary Selection", usage: "Remove the primary selection and keep the rest." },
          { keys: "C", desc: "Add Cursor Below", usage: "Copy the selection onto the next line." },
          { keys: "Alt + C", desc: "Add Cursor Above", usage: "Copy the selection onto the previous line." },
          { keys: "(", desc: "Rotate Selection Backward", usage: "Make the previous selection the primary one." },
          { keys: ")", desc: "Rotate Selection Forward", usage: "Make the next selection the primary one." },
          { keys: "Alt + (", desc: "Rotate Contents Backward", usage: "Rotate the contents of the selections backward." },
          { keys: "Alt + )", desc: "Rotate Contents Forward", usage: "Rotate the contents of the selections forward." },
          { keys: "%", desc: "Select Entire File", usage: "Select the whole file." },
          { keys: "x", desc: "Select Line", usage: "Select the current line; press again to extend to the next one." },
          { keys: "X", desc: "Extend to Line Bounds", usage: "Extend the selection to whole lines." },
          { keys: "Alt + x", desc: "Shrink to Line Bounds", usage: "Shrink the selection to whole lines." },
          { keys: "J", desc: "Join Lines", usage: "Join the lines inside the selection." },
          { keys: "Alt + J", desc: "Join and Select Space", usage: "Join the lines and select the inserted space." },
          { keys: "K", desc: "Keep Matching Selections", usage: "Keep only the selections that match a regex." },
          { keys: "Alt + K", desc: "Remove Matching Selections", usage: "Remove the selections that match a regex." },
          { keys: "Ctrl + C", desc: "Toggle Comments", usage: "Comment or uncomment the selections." },
          { keys: "Alt + o", desc: "Expand Selection", usage: "Grow the selection to the parent syntax node; Alt + Up does the same." },
          { keys: "Alt + i", desc: "Shrink Selection", usage: "Shrink the selection to a child syntax node; Alt + Down does the same." },
          { keys: "Alt + p", desc: "Previous Sibling Node", usage: "Select the previous sibling in the syntax tree; Alt + Left does the same." },
          { keys: "Alt + n", desc: "Next Sibling Node", usage: "Select the next sibling in the syntax tree; Alt + Right does the same." },
          { keys: "Alt + a", desc: "Select All Siblings", usage: "Select every sibling node in the syntax tree." },
          { keys: "Alt + I", desc: "Select All Children", usage: "Select every child node in the syntax tree." },
          { keys: "Alt + e", desc: "End of Parent Node", usage: "Move to the end of the parent syntax node." },
          { keys: "Alt + b", desc: "Start of Parent Node", usage: "Move to the start of the parent syntax node." },
        ]
      },
      {
        name: "Search",
        shortcuts: [
          { keys: "/", desc: "Search", usage: "Search forward for a regex pattern." },
          { keys: "?", desc: "Search Backward", usage: "Search backward for a pattern." },
          { keys: "n", desc: "Next Match", usage: "Select the next search match." },
          { keys: "N", desc: "Previous Match", usage: "Select the previous search match." },
          { keys: "*", desc: "Search Selection", usage: "Use the selection as the search pattern, wrapping it in word boundaries." },
          { keys: "Alt + *", desc: "Search Selection Literally", usage: "Use the selection as the search pattern without word boundaries." },
        ]
      },
      {
        name: "Minor Modes",
        shortcuts: [
          { keys: "v", desc: "Select Mode", usage: "Enter select mode, where movements extend the selection." },
          { keys: "g", desc: "Goto Mode", usage: "Enter goto mode for jumping around the file and project." },
          { keys: "m", desc: "Match Mode", usage: "Enter match mode for brackets, surrounds, and text objects." },
          { keys: ":", desc: "Command Mode", usage: "Enter command mode to type a typable command." },
          { keys: "z", desc: "View Mode", usage: "Enter view mode to scroll without moving the selection." },
          { keys: "Z", desc: "Sticky View Mode", usage: "Enter a view mode that stays active until you press Escape." },
          { keys: "Ctrl + W", desc: "Window Mode", usage: "Enter window mode to split and navigate windows." },
          { keys: "Space", desc: "Space Mode", usage: "Enter space mode, which holds the pickers and LSP actions." },
        ]
      },
      {
        name: "View Mode (z)",
        shortcuts: [
          { keys: "zz", desc: "Center Line", usage: "Center the current line vertically; zc does the same." },
          { keys: "zt", desc: "Align to Top", usage: "Scroll so the current line is at the top of the screen." },
          { keys: "zb", desc: "Align to Bottom", usage: "Scroll so the current line is at the bottom of the screen." },
          { keys: "zm", desc: "Align to Middle", usage: "Center the line horizontally." },
          { keys: "zj", desc: "Scroll Down", usage: "Scroll the view down without moving the selection." },
          { keys: "zk", desc: "Scroll Up", usage: "Scroll the view up without moving the selection." },
        ]
      },
      {
        name: "Goto Mode (g)",
        shortcuts: [
          { keys: "gg", desc: "Go to File Start", usage: "Jump to the line number you typed, or to the start of the file." },
          { keys: "ge", desc: "Go to File End", usage: "Jump to the end of the file." },
          { keys: "gf", desc: "Go to File", usage: "Open the file whose path is selected." },
          { keys: "gh", desc: "Go to Line Start", usage: "Move to the start of the line." },
          { keys: "gl", desc: "Go to Line End", usage: "Move to the end of the line." },
          { keys: "gs", desc: "First Non-Whitespace", usage: "Move to the first non-whitespace character of the line." },
          { keys: "gt", desc: "Top of Screen", usage: "Move to the top of the visible screen." },
          { keys: "gc", desc: "Middle of Screen", usage: "Move to the middle of the visible screen." },
          { keys: "gb", desc: "Bottom of Screen", usage: "Move to the bottom of the visible screen." },
          { keys: "gd", desc: "Go to Definition", usage: "Jump to the definition of the symbol using the language server." },
          { keys: "gy", desc: "Go to Type Definition", usage: "Jump to the type definition of the symbol." },
          { keys: "gr", desc: "Go to References", usage: "List the references to the symbol." },
          { keys: "gi", desc: "Go to Implementation", usage: "Jump to the implementation of the symbol." },
          { keys: "ga", desc: "Alternate File", usage: "Switch to the last accessed file." },
          { keys: "gm", desc: "Last Modified File", usage: "Switch to the last modified file." },
          { keys: "gn", desc: "Next Buffer", usage: "Move to the next open buffer." },
          { keys: "gp", desc: "Previous Buffer", usage: "Move to the previous open buffer." },
          { keys: "g.", desc: "Last Modification", usage: "Jump to the last change in the current file." },
          { keys: "gw", desc: "Go to Word", usage: "Show a label on each word and jump to the one you type." },
        ]
      },
      {
        name: "Match Mode (m)",
        shortcuts: [
          { keys: "mm", desc: "Matching Bracket", usage: "Jump to the bracket that matches the one under the cursor." },
          { keys: "ms", desc: "Surround Add", usage: "Surround the selection with the character you type next." },
          { keys: "mr", desc: "Surround Replace", usage: "Replace one surrounding character with another." },
          { keys: "md", desc: "Surround Delete", usage: "Delete the surrounding character you type next." },
          { keys: "ma", desc: "Select Around Object", usage: "Select around a text object such as a word, paragraph, or function." },
          { keys: "mi", desc: "Select Inside Object", usage: "Select inside a text object." },
        ]
      },
      {
        name: "Window Mode (Ctrl + W)",
        shortcuts: [
          { keys: "Ctrl + W, W", desc: "Next Window", usage: "Switch to the next window." },
          { keys: "Ctrl + W, V", desc: "Vertical Split", usage: "Split the view vertically to the right." },
          { keys: "Ctrl + W, S", desc: "Horizontal Split", usage: "Split the view horizontally below." },
          { keys: "Ctrl + W, F", desc: "Open File in Split", usage: "Open the selected file path in a horizontal split." },
          { keys: "Ctrl + W, H", desc: "Move to Left Split", usage: "Move the focus to the split on the left." },
          { keys: "Ctrl + W, J", desc: "Move to Split Below", usage: "Move the focus to the split below." },
          { keys: "Ctrl + W, K", desc: "Move to Split Above", usage: "Move the focus to the split above." },
          { keys: "Ctrl + W, L", desc: "Move to Right Split", usage: "Move the focus to the split on the right." },
          { keys: "Ctrl + W, Q", desc: "Close Window", usage: "Close the current window." },
          { keys: "Ctrl + W, O", desc: "Only This Window", usage: "Close every window except the current one." },
        ]
      },
      {
        name: "Space Mode",
        shortcuts: [
          { keys: "Space, f", desc: "File Picker", usage: "Open the file picker at the workspace root." },
          { keys: "Space, F", desc: "File Picker (cwd)", usage: "Open the file picker at the current working directory." },
          { keys: "Space, b", desc: "Buffer Picker", usage: "Pick from the open buffers." },
          { keys: "Space, j", desc: "Jumplist Picker", usage: "Pick from the jumplist." },
          { keys: "Space, g", desc: "Changed File Picker", usage: "Pick from the files changed in version control." },
          { keys: "Space, k", desc: "Show Documentation", usage: "Show the documentation for the symbol under the cursor." },
          { keys: "Space, s", desc: "Document Symbols", usage: "Pick from the symbols in the current document." },
          { keys: "Space, S", desc: "Workspace Symbols", usage: "Pick from the symbols across the workspace." },
          { keys: "Space, d", desc: "Document Diagnostics", usage: "Pick from the diagnostics in the current document." },
          { keys: "Space, D", desc: "Workspace Diagnostics", usage: "Pick from the diagnostics across the workspace." },
          { keys: "Space, r", desc: "Rename Symbol", usage: "Rename the symbol using the language server." },
          { keys: "Space, a", desc: "Code Action", usage: "Apply a code action at the cursor." },
          { keys: "Space, h", desc: "Select References", usage: "Select the references to the symbol under the cursor." },
          { keys: "Space, '", desc: "Last Picker", usage: "Reopen the picker you used last." },
          { keys: "Space, c", desc: "Toggle Comments", usage: "Comment or uncomment the selections." },
          { keys: "Space, C", desc: "Toggle Block Comments", usage: "Add or remove block comments around the selections." },
          { keys: "Space, p", desc: "Paste Clipboard After", usage: "Paste the system clipboard after the selections." },
          { keys: "Space, P", desc: "Paste Clipboard Before", usage: "Paste the system clipboard before the selections." },
          { keys: "Space, y", desc: "Yank to Clipboard", usage: "Copy the selections to the system clipboard." },
          { keys: "Space, Y", desc: "Yank Main Selection", usage: "Copy only the primary selection to the system clipboard." },
          { keys: "Space, R", desc: "Replace with Clipboard", usage: "Replace the selections with the clipboard contents." },
          { keys: "Space, /", desc: "Global Search", usage: "Search across the whole workspace folder." },
          { keys: "Space, ?", desc: "Command Palette", usage: "Open the command palette." },
        ]
      },
      {
        name: "Unimpaired",
        shortcuts: [
          { keys: "]d", desc: "Next Diagnostic", usage: "Jump to the next diagnostic reported by the language server." },
          { keys: "[d", desc: "Previous Diagnostic", usage: "Jump to the previous diagnostic." },
          { keys: "]D", desc: "Last Diagnostic", usage: "Jump to the last diagnostic in the document." },
          { keys: "[D", desc: "First Diagnostic", usage: "Jump to the first diagnostic in the document." },
          { keys: "]f", desc: "Next Function", usage: "Jump to the next function." },
          { keys: "[f", desc: "Previous Function", usage: "Jump to the previous function." },
          { keys: "]t", desc: "Next Type Definition", usage: "Jump to the next type definition." },
          { keys: "[t", desc: "Previous Type Definition", usage: "Jump to the previous type definition." },
          { keys: "]a", desc: "Next Parameter", usage: "Jump to the next argument or parameter." },
          { keys: "[a", desc: "Previous Parameter", usage: "Jump to the previous argument or parameter." },
          { keys: "]c", desc: "Next Comment", usage: "Jump to the next comment." },
          { keys: "[c", desc: "Previous Comment", usage: "Jump to the previous comment." },
          { keys: "]T", desc: "Next Test", usage: "Jump to the next test." },
          { keys: "[T", desc: "Previous Test", usage: "Jump to the previous test." },
          { keys: "]p", desc: "Next Paragraph", usage: "Jump to the next paragraph." },
          { keys: "[p", desc: "Previous Paragraph", usage: "Jump to the previous paragraph." },
          { keys: "]g", desc: "Next Change", usage: "Jump to the next version control change." },
          { keys: "[g", desc: "Previous Change", usage: "Jump to the previous change." },
          { keys: "]G", desc: "Last Change", usage: "Jump to the last change in the file." },
          { keys: "[G", desc: "First Change", usage: "Jump to the first change in the file." },
          { keys: "]Space", desc: "Add Newline Below", usage: "Insert an empty line below without leaving normal mode." },
          { keys: "[Space", desc: "Add Newline Above", usage: "Insert an empty line above without leaving normal mode." },
        ]
      },
      {
        name: "Insert Mode",
        shortcuts: [
          { keys: "Escape", desc: "Back to Normal Mode", usage: "Leave insert mode and save an undo checkpoint." },
          { keys: "Ctrl + R", desc: "Insert Register", usage: "Insert the contents of a register." },
          { keys: "Ctrl + K", desc: "Delete to Line End", usage: "Delete from the cursor to the end of the line." },
          { keys: "Ctrl + H", desc: "Delete Previous Char", usage: "Delete the character before the cursor; Backspace does the same." },
          { keys: "Ctrl + J", desc: "Insert New Line", usage: "Insert a line break; Enter does the same." },
          { keys: "Alt + Backspace", desc: "Delete Previous Word", usage: "Delete the word before the cursor." },
          { keys: "Alt + Delete", desc: "Delete Next Word", usage: "Delete the word after the cursor." },
        ]
      },
    ]
  },
  nano: {
    name: "Nano",
    icon: "fas fa-terminal",
    source: "https://www.nano-editor.org/dist/latest/cheatsheet.html",
    categories: [
      {
        name: "File Handling",
        shortcuts: [
          { keys: "Ctrl + S", desc: "Save File", usage: "Save the current file without being asked for a name." },
          { keys: "Ctrl + O", desc: "Save As", usage: "Write the buffer to a file, offering the filename for editing." },
          { keys: "Ctrl + R", desc: "Insert File", usage: "Read another file into the current one." },
          { keys: "Ctrl + X", desc: "Exit", usage: "Close the buffer and leave nano." },
          { keys: "Ctrl + G", desc: "Display Help", usage: "Show the built-in help text." },
        ]
      },
      {
        name: "Editing",
        shortcuts: [
          { keys: "Ctrl + K", desc: "Cut Line", usage: "Cut the current line into the cutbuffer." },
          { keys: "Alt + 6", desc: "Copy Line", usage: "Copy the current line into the cutbuffer." },
          { keys: "Ctrl + U", desc: "Paste", usage: "Paste the contents of the cutbuffer." },
          { keys: "Ctrl + ]", desc: "Complete Word", usage: "Complete the word being typed from words in the buffer." },
          { keys: "Alt + 3", desc: "Comment Line", usage: "Comment or uncomment the current line or marked region." },
          { keys: "Alt + U", desc: "Undo", usage: "Undo the last action." },
          { keys: "Alt + E", desc: "Redo", usage: "Redo the last undone action." },
        ]
      },
      {
        name: "Deletion",
        shortcuts: [
          { keys: "Ctrl + H", desc: "Delete Character Left", usage: "Delete the character before the cursor." },
          { keys: "Ctrl + D", desc: "Delete Character", usage: "Delete the character under the cursor." },
          { keys: "Alt + Backspace", desc: "Delete Word Left", usage: "Delete the word to the left of the cursor." },
          { keys: "Ctrl + Delete", desc: "Delete Word Right", usage: "Delete the word to the right of the cursor." },
          { keys: "Alt + Delete", desc: "Delete Line", usage: "Delete the current line." },
        ]
      },
      {
        name: "Search & Replace",
        shortcuts: [
          { keys: "Ctrl + F", desc: "Search Forward", usage: "Start a forward search." },
          { keys: "Ctrl + B", desc: "Search Backward", usage: "Start a backward search." },
          { keys: "Alt + F", desc: "Find Next Forward", usage: "Jump to the next occurrence going forward." },
          { keys: "Alt + B", desc: "Find Next Backward", usage: "Jump to the next occurrence going backward." },
          { keys: "Alt + R", desc: "Replace", usage: "Start a search and replace session." },
        ]
      },
      {
        name: "Operations",
        shortcuts: [
          { keys: "Ctrl + T", desc: "Execute Command", usage: "Run an external command and use its output." },
          { keys: "Ctrl + T, Ctrl + S", desc: "Spell Check", usage: "Run a spell check on the buffer." },
          { keys: "Ctrl + T, Ctrl + Y", desc: "Syntax Check", usage: "Run a syntax check on the buffer." },
          { keys: "Ctrl + T, Ctrl + O", desc: "Run Formatter", usage: "Run the configured formatter on the buffer." },
          { keys: "Tab", desc: "Indent Region", usage: "Indent the marked region by one level." },
          { keys: "Shift + Tab", desc: "Unindent Region", usage: "Unindent the marked region by one level." },
          { keys: "Ctrl + J", desc: "Justify Paragraph", usage: "Justify the current paragraph or the marked region." },
          { keys: "Alt + J", desc: "Justify Buffer", usage: "Justify the entire buffer." },
          { keys: "Alt + T", desc: "Cut to End of Buffer", usage: "Cut everything from the cursor to the end of the buffer." },
          { keys: "Alt + V", desc: "Verbatim Input", usage: "Insert the next keystroke literally instead of running it." },
          { keys: "Alt + :", desc: "Record Macro", usage: "Start or stop recording a macro." },
          { keys: "Alt + ;", desc: "Replay Macro", usage: "Replay the recorded macro." },
        ]
      },
      {
        name: "Moving Around",
        shortcuts: [
          { keys: "Ctrl + Left", desc: "Word Backward", usage: "Move the cursor one word to the left." },
          { keys: "Ctrl + Right", desc: "Word Forward", usage: "Move the cursor one word to the right." },
          { keys: "Ctrl + A", desc: "Start of Line", usage: "Move to the beginning of the current line." },
          { keys: "Ctrl + E", desc: "End of Line", usage: "Move to the end of the current line." },
          { keys: "Ctrl + P", desc: "Line Up", usage: "Move the cursor one line up." },
          { keys: "Ctrl + N", desc: "Line Down", usage: "Move the cursor one line down." },
          { keys: "Ctrl + Up", desc: "Previous Block", usage: "Jump to the previous block of text." },
          { keys: "Ctrl + Down", desc: "Next Block", usage: "Jump to the next block of text." },
          { keys: "Alt + Home", desc: "First Row in View", usage: "Move to the first row shown on screen." },
          { keys: "Alt + End", desc: "Last Row in View", usage: "Move to the last row shown on screen." },
          { keys: "Ctrl + Y", desc: "Page Up", usage: "Scroll one page up." },
          { keys: "Ctrl + V", desc: "Page Down", usage: "Scroll one page down." },
          { keys: "Alt + \\", desc: "Top of Buffer", usage: "Jump to the very beginning of the file." },
          { keys: "Alt + /", desc: "End of Buffer", usage: "Jump to the very end of the file." },
        ]
      },
      {
        name: "Special Movement",
        shortcuts: [
          { keys: "Alt + G", desc: "Go to Line", usage: "Jump to a specified line number." },
          { keys: "Alt + ]", desc: "Matching Bracket", usage: "Jump to the bracket that matches the one at the cursor." },
          { keys: "Alt + <", desc: "Scroll Left", usage: "Scroll the viewport to the left." },
          { keys: "Alt + >", desc: "Scroll Right", usage: "Scroll the viewport to the right." },
          { keys: "Alt + Up", desc: "Scroll Viewport Up", usage: "Scroll the view up without moving the cursor off screen." },
          { keys: "Alt + Down", desc: "Scroll Viewport Down", usage: "Scroll the view down without moving the cursor off screen." },
          { keys: "Ctrl + L", desc: "Center Line", usage: "Redraw the screen with the current line centered." },
          { keys: "Alt + Left", desc: "Previous Buffer", usage: "Switch to the preceding open buffer." },
          { keys: "Alt + Right", desc: "Next Buffer", usage: "Switch to the succeeding open buffer." },
        ]
      },
      {
        name: "Information",
        shortcuts: [
          { keys: "Ctrl + C", desc: "Report Cursor Position", usage: "Show the current line, column, and character position." },
          { keys: "Alt + D", desc: "Report Counts", usage: "Show the number of lines, words, and characters." },
        ]
      },
      {
        name: "Toggles",
        shortcuts: [
          { keys: "Alt + A", desc: "Set Mark", usage: "Set or unset the mark so you can select a region." },
          { keys: "Alt + C", desc: "Constant Position Info", usage: "Turn the constant cursor position display on or off." },
          { keys: "Alt + N", desc: "Line Numbers", usage: "Turn line numbers on or off." },
          { keys: "Alt + P", desc: "Visible Whitespace", usage: "Turn the display of whitespace characters on or off." },
          { keys: "Alt + S", desc: "Soft Wrapping", usage: "Turn soft wrapping of long lines on or off." },
          { keys: "Alt + X", desc: "Hide Help Lines", usage: "Show or hide the two help lines at the bottom." },
          { keys: "Alt + Z", desc: "Hide Info Bars", usage: "Show or hide the informational bars." },
        ]
      },
    ]
  },
  dbeaver: {
    name: 'DBeaver',
    icon: 'fas fa-database',
    categories: [
      {
        name: 'Database',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Execute query', usage: 'Execute selected query.' },
          { keys: 'Ctrl + Shift + E', desc: 'Execution plan', usage: 'Show execution plan.' },
          { keys: 'Ctrl + /', desc: 'Toggle comment', usage: 'Toggle line comment.' },
          { keys: 'Ctrl + Shift + F', desc: 'Format code', usage: 'Format SQL.' },
          { keys: 'F4', desc: 'Open editor', usage: 'Open table editor.' },
          { keys: 'Ctrl + Shift + U', desc: 'Uppercase', usage: 'Convert to uppercase.' },
        ]
      },
    ]
  },
  tableplus: {
    name: 'TablePlus',
    icon: 'fas fa-database',
    categories: [
      {
        name: 'Database',
        shortcuts: [
          { keys: 'Cmd + N', desc: 'New connection', usage: 'Create a new connection.' },
          { keys: 'Cmd + T', desc: 'New tab', usage: 'Open a new tab.' },
          { keys: 'Cmd + R', desc: 'Refresh', usage: 'Refresh the table.' },
          { keys: 'Cmd + S', desc: 'Save changes', usage: 'Save changes.' },
          { keys: 'Cmd + E', desc: 'Query editor', usage: 'Open SQL query editor.' },
          { keys: 'Cmd + Enter', desc: 'Run query', usage: 'Execute the current SQL statement in the editor.' },
          { keys: 'Cmd + P', desc: 'Open anything', usage: 'Quick open a table, view, or function by name.' },
          { keys: 'Cmd + F', desc: 'Filter', usage: 'Filter rows in the current table view.' },
          { keys: 'Cmd + W', desc: 'Close tab', usage: 'Close the current tab.' },
          { keys: 'Cmd + ,', desc: 'Preferences', usage: 'Open TablePlus settings.' },
        ]
      },
    ]
  },
  insomnia: {
    name: 'Insomnia',
    icon: 'fas fa-paper-plane',
    categories: [
      {
        name: 'API Testing',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Send request', usage: 'Send API request.' },
          { keys: 'Ctrl + N', desc: 'New request', usage: 'Create new request.' },
          { keys: 'Ctrl + E', desc: 'Switch env', usage: 'Switch environment.' },
          { keys: 'Ctrl + Shift + P', desc: 'Command palette', usage: 'Open command palette.' },
          { keys: 'Ctrl + T', desc: 'New tab', usage: 'Open new tab.' },
          { keys: 'Ctrl + P', desc: 'Quick switch', usage: 'Jump to any request by typing its name.' },
          { keys: 'Ctrl + L', desc: 'Focus URL', usage: 'Move the cursor to the request URL bar.' },
          { keys: 'Ctrl + D', desc: 'Duplicate request', usage: 'Duplicate the current request.' },
          { keys: 'Ctrl + ,', desc: 'Preferences', usage: 'Open Insomnia settings.' },
        ]
      },
    ]
  },
  github_desktop: {
    name: 'GitHub Desktop',
    icon: 'fab fa-github',
    categories: [
      {
        name: 'Git Management',
        shortcuts: [
          { keys: 'Ctrl + Shift + N', desc: 'New branch', usage: 'Create a new branch.' },
          { keys: 'Ctrl + B', desc: 'Switch branch', usage: 'Switch branches.' },
          { keys: 'Ctrl + Enter', desc: 'Commit', usage: 'Commit changes.' },
          { keys: 'Ctrl + P', desc: 'Push', usage: 'Push to remote.' },
          { keys: 'Ctrl + Shift + P', desc: 'Pull', usage: 'Pull from remote.' },
          { keys: 'Ctrl + Shift + A', desc: 'Commit all', usage: 'Stage all and commit.' },
        ]
      },
    ]
  },
  sourcetree: {
    name: 'Sourcetree',
    icon: 'fab fa-git-alt',
    categories: [
      {
        name: 'Git Management',
        shortcuts: [
          { keys: 'Ctrl + Shift + C', desc: 'Commit', usage: 'Open commit dialog.' },
          { keys: 'Ctrl + Shift + P', desc: 'Push', usage: 'Push changes.' },
          { keys: 'Ctrl + Shift + L', desc: 'Pull', usage: 'Pull from remote.' },
          { keys: 'Ctrl + Shift + B', desc: 'New branch', usage: 'Create new branch.' },
          { keys: 'Ctrl + Shift + F', desc: 'Fetch', usage: 'Fetch from remote.' },
          { keys: 'F5', desc: 'Refresh', usage: 'Refresh the repository status (Windows).' },
          { keys: 'Ctrl + T', desc: 'New tab', usage: 'Open a new repository tab.' },
          { keys: 'Ctrl + W', desc: 'Close tab', usage: 'Close the current repository tab.' },
          { keys: 'Ctrl + Tab', desc: 'Switch tabs', usage: 'Cycle between open repository tabs.' },
          { keys: 'Ctrl + F', desc: 'Search', usage: 'Focus the search field to filter commits or files.' },
        ]
      },
    ]
  },
  regex: {
    name: 'Regex (Regular Expressions)',
    icon: 'fas fa-code',
    categories: [
      {
        name: 'Patterns',
        shortcuts: [
          { keys: '.', desc: 'Any character', usage: 'Match any character except newline.' },
          { keys: '\\\\d', desc: 'Digit', usage: 'Match a digit (0-9).' },
          { keys: '\\\\w', desc: 'Word char', usage: 'Match letter, digit, or underscore.' },
          { keys: '\\\\s', desc: 'Whitespace', usage: 'Match whitespace character.' },
          { keys: '^', desc: 'Start of line', usage: 'Match start of line.' },
          { keys: '$', desc: 'End of line', usage: 'Match end of line.' },
          { keys: '*', desc: 'Zero or more', usage: 'Match zero or more of preceding.' },
          { keys: '+ ', desc: 'One or more', usage: 'Match one or more of preceding.' },
          { keys: '?', desc: 'Zero or one', usage: 'Match zero or one of preceding.' },
          { keys: '[abc]', desc: 'Char class', usage: 'Match one of a, b, or c.' },
          { keys: '(group)', desc: 'Group', usage: 'Group and capture a pattern.' },
          { keys: 'a|b', desc: 'OR', usage: 'Match a or b.' },
        ]
      },
    ]
  },
  gcloud: {
    name: 'Google Cloud CLI',
    icon: 'fab fa-google',
    categories: [
      {
        name: 'Commands',
        shortcuts: [
          { keys: 'gcloud auth login', desc: 'Login', usage: 'Log in to Google Cloud.' },
          { keys: 'gcloud config set project [ID]', desc: 'Set project', usage: 'Set default project.' },
          { keys: 'gcloud compute instances list', desc: 'List VMs', usage: 'List Compute Engine instances.' },
          { keys: 'gcloud run deploy', desc: 'Deploy Cloud Run', usage: 'Deploy to Cloud Run.' },
          { keys: 'gcloud storage ls', desc: 'List buckets', usage: 'List Cloud Storage buckets.' },
          { keys: 'gcloud functions list', desc: 'List functions', usage: 'List Cloud Functions.' },
        ]
      },
    ]
  },
  azure_cli: {
    name: 'Azure CLI',
    icon: 'fab fa-microsoft',
    categories: [
      {
        name: 'Commands',
        shortcuts: [
          { keys: 'az login', desc: 'Login', usage: 'Log in to Azure.' },
          { keys: 'az account show', desc: 'Show account', usage: 'Show current subscription.' },
          { keys: 'az group list', desc: 'Resource groups', usage: 'List resource groups.' },
          { keys: 'az vm list', desc: 'List VMs', usage: 'List virtual machines.' },
          { keys: 'az webapp list', desc: 'List web apps', usage: 'List web apps.' },
          { keys: 'az storage account list', desc: 'Storage', usage: 'List storage accounts.' },
        ]
      },
    ]
  },
  podman: {
    name: 'Podman',
    icon: 'fas fa-cube',
    categories: [
      {
        name: 'Commands',
        shortcuts: [
          { keys: 'podman run [image]', desc: 'Run container', usage: 'Run a container.' },
          { keys: 'podman ps', desc: 'List', usage: 'List running containers.' },
          { keys: 'podman build -t [tag] .', desc: 'Build', usage: 'Build an image.' },
          { keys: 'podman images', desc: 'List images', usage: 'List local images.' },
          { keys: 'podman compose up', desc: 'Start services', usage: 'Start Compose services.' },
          { keys: 'podman pod list', desc: 'List pods', usage: 'List pods.' },
        ]
      },
    ]
  },
  cron: {
    name: 'Cron / Crontab',
    icon: 'fas fa-clock',
    categories: [
      {
        name: 'Syntax',
        shortcuts: [
          { keys: '* * * * *', desc: 'min hr day mon dow', usage: 'Cron expression format.' },
          { keys: '0 9 * * *', desc: 'Daily 9AM', usage: 'Run daily at 9 AM.' },
          { keys: '*/5 * * * *', desc: 'Every 5 min', usage: 'Run every 5 minutes.' },
          { keys: '0 0 * * 0', desc: 'Every Sunday', usage: 'Run every Sunday at midnight.' },
          { keys: '0 0 1 * *', desc: 'Monthly 1st', usage: 'Run 1st of every month.' },
          { keys: 'crontab -e', desc: 'Edit', usage: 'Edit the crontab.' },
          { keys: 'crontab -l', desc: 'List', usage: 'List current cron jobs.' },
          { keys: 'crontab -r', desc: 'Remove', usage: 'Remove the crontab.' },
        ]
      },
    ]
  },
  wget: {
    name: 'wget',
    icon: 'fas fa-download',
    categories: [
      {
        name: 'Download',
        shortcuts: [
          { keys: 'wget [URL]', desc: 'Download file', usage: 'Download a file from URL.' },
          { keys: 'wget -O [name] [URL]', desc: 'Set filename', usage: 'Specify download filename.' },
          { keys: 'wget -r [URL]', desc: 'Recursive', usage: 'Download site recursively.' },
          { keys: 'wget -c [URL]', desc: 'Resume', usage: 'Resume interrupted download.' },
          { keys: 'wget -b [URL]', desc: 'Background', usage: 'Download in background.' },
          { keys: 'wget -q [URL]', desc: 'Quiet mode', usage: 'Download without printing progress output.' },
          { keys: 'wget -P [dir] [URL]', desc: 'Target directory', usage: 'Save the downloaded file into a specific directory.' },
          { keys: 'wget -i list.txt', desc: 'Download from list', usage: 'Download every URL listed in a text file.' },
          { keys: 'wget --limit-rate=200k [URL]', desc: 'Limit speed', usage: 'Cap download bandwidth, e.g. at 200 KB/s.' },
          { keys: 'wget --mirror [URL]', desc: 'Mirror site', usage: 'Mirror a website with recursion and timestamping.' },
          { keys: 'wget -np -r [URL]', desc: 'No parent', usage: 'Recurse without ascending to the parent directory.' },
          { keys: 'wget -A pdf -r [URL]', desc: 'Accept extension', usage: 'Only download files matching an extension during recursion.' },
          { keys: 'wget --user=U --password=P [URL]', desc: 'HTTP auth', usage: 'Authenticate with username and password.' },
          { keys: 'wget --no-check-certificate [URL]', desc: 'Skip TLS check', usage: 'Ignore certificate validation (use with caution).' },
        ]
      },
    ]
  },
  sed_cmd: {
    name: 'sed',
    icon: 'fas fa-terminal',
    categories: [
      {
        name: 'Text Processing',
        shortcuts: [
          { keys: 'sed ’s/old/new/’ [file]', desc: 'First replace', usage: 'Replace first match per line.' },
          { keys: 'sed ’s/old/new/g’ [file]', desc: 'Replace all', usage: 'Replace all matches.' },
          { keys: 'sed -i ’s/old/new/g’ [file]', desc: 'In-place edit', usage: 'Modify file directly.' },
          { keys: 'sed -n ’5,10p’ [file]', desc: 'Print range', usage: 'Print lines 5-10.' },
          { keys: 'sed ’/pattern/d’ [file]', desc: 'Delete pattern', usage: 'Delete lines matching pattern.' },
          { keys: 'sed ’3a\\\\text’ [file]', desc: 'Append line', usage: 'Append text after line 3.' },
        ]
      },
    ]
  },
  awk_cmd: {
    name: 'awk',
    icon: 'fas fa-terminal',
    categories: [
      {
        name: 'Text Processing',
        shortcuts: [
          { keys: 'awk ’{print $1}’ [file]', desc: 'First field', usage: 'Print first field.' },
          { keys: 'awk -F’,’ ’{print $2}’ [file]', desc: 'CSV field', usage: 'Print second field from CSV.' },
          { keys: 'awk ’/pattern/’ [file]', desc: 'Pattern match', usage: 'Print lines matching pattern.' },
          { keys: 'awk ’{sum+=$1} END {print sum}’', desc: 'Sum', usage: 'Calculate sum of first field.' },
          { keys: 'awk ’NR==5’ [file]', desc: 'Specific line', usage: 'Print line 5.' },
          { keys: 'awk ’{print NR, $0}’ [file]', desc: 'Line numbers', usage: 'Print with line numbers.' },
        ]
      },
    ]
  },
  jq_cmd: {
    name: 'jq (JSON)',
    icon: 'fas fa-code',
    categories: [
      {
        name: 'JSON Processing',
        shortcuts: [
          { keys: 'jq ’.’ [file]', desc: 'Pretty print', usage: 'Pretty-print JSON.' },
          { keys: 'jq ’.key’ [file]', desc: 'Extract key', usage: 'Extract a specific key value.' },
          { keys: 'jq ’.array[]’ [file]', desc: 'Iterate array', usage: 'Print each array element.' },
          { keys: 'jq ’.[] | .name’ [file]', desc: 'Extract field', usage: 'Extract name field from each.' },
          { keys: 'jq ’length’ [file]', desc: 'Length', usage: 'Get array or object length.' },
          { keys: 'jq ’select(.age > 30)’ [file]', desc: 'Filter', usage: 'Filter elements by condition.' },
        ]
      },
    ]
  },
  openssl_cmd: {
    name: 'OpenSSL',
    icon: 'fas fa-lock',
    categories: [
      {
        name: 'Certificate Management',
        shortcuts: [
          { keys: 'openssl req -new -x509 -newkey rsa:2048', desc: 'Self-signed cert', usage: 'Generate self-signed SSL certificate.' },
          { keys: 'openssl x509 -in cert.pem -text', desc: 'View cert', usage: 'View certificate contents.' },
          { keys: 'openssl s_client -connect host:443', desc: 'Test SSL', usage: 'Test SSL connection.' },
          { keys: 'openssl rsa -in key.pem -check', desc: 'Verify key', usage: 'Verify RSA key.' },
          { keys: 'openssl rand -base64 32', desc: 'Generate random', usage: 'Generate 32-byte random string.' },
          { keys: 'openssl genrsa -out key.pem 2048', desc: 'Generate RSA key', usage: 'Create a new 2048-bit RSA private key.' },
          { keys: 'openssl req -new -key key.pem -out csr.pem', desc: 'Create CSR', usage: 'Generate a certificate signing request from a key.' },
          { keys: 'openssl x509 -req -in csr.pem -signkey key.pem -out cert.pem', desc: 'Sign CSR', usage: 'Self-sign a CSR to produce a certificate.' },
          { keys: 'openssl x509 -enddate -noout -in cert.pem', desc: 'Check expiry', usage: 'Print the certificate expiration date.' },
          { keys: 'openssl verify cert.pem', desc: 'Verify cert', usage: 'Verify a certificate against the trust store.' },
          { keys: 'openssl dgst -sha256 [file]', desc: 'SHA-256 checksum', usage: 'Compute the SHA-256 digest of a file.' },
          { keys: 'openssl enc -aes-256-cbc -in f -out f.enc', desc: 'Encrypt file', usage: 'Encrypt a file with AES-256-CBC.' },
          { keys: 'openssl enc -d -aes-256-cbc -in f.enc -out f', desc: 'Decrypt file', usage: 'Decrypt an AES-256-CBC encrypted file.' },
          { keys: 'openssl pkcs12 -export -out bundle.p12 -inkey key.pem -in cert.pem', desc: 'PKCS#12 bundle', usage: 'Bundle a key and certificate into a .p12 file.' },
        ]
      },
    ]
  },
  tcpdump_cmd: {
    name: 'tcpdump',
    icon: 'fas fa-network-wired',
    categories: [
      {
        name: 'Packet Capture',
        shortcuts: [
          { keys: 'tcpdump -i eth0', desc: 'Capture interface', usage: 'Capture packets on eth0.' },
          { keys: 'tcpdump -i any port 80', desc: 'Filter port', usage: 'Capture only port 80 packets.' },
          { keys: 'tcpdump -w capture.pcap', desc: 'Save to file', usage: 'Save capture to file.' },
          { keys: 'tcpdump -r capture.pcap', desc: 'Read file', usage: 'Read saved capture.' },
          { keys: 'tcpdump host 192.168.1.1', desc: 'Filter host', usage: 'Capture packets for specific host.' },
          { keys: 'tcpdump -c 100', desc: 'Limit count', usage: 'Capture only 100 packets.' },
        ]
      },
    ]
  },
  wireshark: {
    name: 'Wireshark Filters',
    icon: 'fas fa-filter',
    categories: [
      {
        name: 'Display Filters',
        shortcuts: [
          { keys: 'ip.addr == 192.168.1.1', desc: 'IP filter', usage: 'Show packets for specific IP.' },
          { keys: 'tcp.port == 443', desc: 'Port filter', usage: 'Show TCP port 443 packets.' },
          { keys: 'http', desc: 'HTTP filter', usage: 'Show only HTTP protocol.' },
          { keys: 'dns', desc: 'DNS filter', usage: 'Show only DNS queries.' },
          { keys: 'tcp.flags.syn == 1', desc: 'SYN packets', usage: 'Show TCP SYN packets only.' },
          { keys: 'frame.len > 1000', desc: 'Size filter', usage: 'Show packets over 1000 bytes.' },
          { keys: '!(arp or dns)', desc: 'Exclude filter', usage: 'Exclude ARP and DNS.' },
        ]
      },
    ]
  },
  ss_cmd: {
    name: 'ss / netstat',
    icon: 'fas fa-plug',
    categories: [
      {
        name: 'Network Status',
        shortcuts: [
          { keys: 'ss -tlnp', desc: 'Listening ports', usage: 'Show open TCP listening ports.' },
          { keys: 'ss -ulnp', desc: 'UDP listening', usage: 'Show open UDP ports.' },
          { keys: 'ss -s', desc: 'Statistics', usage: 'Show socket statistics summary.' },
          { keys: 'ss -t state established', desc: 'Connections', usage: 'Show active TCP connections.' },
          { keys: 'netstat -rn', desc: 'Routing table', usage: 'Show routing table.' },
          { keys: 'netstat -i', desc: 'Interface stats', usage: 'Show network interface stats.' },
        ]
      },
    ]
  },
  rsync_cmd: {
    name: 'rsync',
    icon: 'fas fa-sync',
    categories: [
      {
        name: 'Sync',
        shortcuts: [
          { keys: 'rsync -avz src/ dest/', desc: 'Local sync', usage: 'Sync local directories.' },
          { keys: 'rsync -avz src/ user@host:dest/', desc: 'Remote sync', usage: 'Sync to remote server.' },
          { keys: 'rsync -avz --delete src/ dest/', desc: 'Mirror', usage: 'Mirror including deletions.' },
          { keys: 'rsync -avz --exclude=’*.log’', desc: 'Exclude', usage: 'Exclude specific patterns.' },
          { keys: 'rsync -avzn src/ dest/', desc: 'Dry run', usage: 'Preview without changes.' },
          { keys: 'rsync -avz -e ssh src/ user@host:dest/', desc: 'Sync over SSH', usage: 'Force rsync to use SSH as the transport.' },
          { keys: 'rsync -avz --progress src/ dest/', desc: 'Show progress', usage: 'Display per-file transfer progress.' },
          { keys: 'rsync -avz --bwlimit=1000 src/ dest/', desc: 'Bandwidth limit', usage: 'Limit transfer speed in KB/s.' },
          { keys: 'rsync -avz --partial src/ dest/', desc: 'Keep partial', usage: 'Keep partially transferred files for resuming.' },
          { keys: 'rsync -avz --backup --backup-dir=old src/ dest/', desc: 'Backup replaced', usage: 'Move replaced files into a backup directory.' },
          { keys: 'rsync -avz --size-only src/ dest/', desc: 'Size-only compare', usage: 'Skip files that match in size, ignoring timestamps.' },
          { keys: 'rsync -avz --max-size=100m src/ dest/', desc: 'Max file size', usage: 'Skip files larger than the given size.' },
          { keys: 'rsync -a --list-only user@host:dest/', desc: 'List remote', usage: 'List remote files without transferring.' },
        ]
      },
    ]
  },
  vagrant: {
    name: 'Vagrant',
    icon: 'fas fa-cube',
    categories: [
      {
        name: 'VM Management',
        shortcuts: [
          { keys: 'vagrant init', desc: 'Initialize', usage: 'Create a Vagrantfile.' },
          { keys: 'vagrant up', desc: 'Start', usage: 'Start the VM.' },
          { keys: 'vagrant ssh', desc: 'Connect', usage: 'SSH into the VM.' },
          { keys: 'vagrant halt', desc: 'Stop', usage: 'Stop the VM.' },
          { keys: 'vagrant destroy', desc: 'Destroy', usage: 'Delete the VM.' },
          { keys: 'vagrant reload', desc: 'Reload', usage: 'Restart the VM.' },
        ]
      },
    ]
  },
  htop_cmd: {
    name: 'htop',
    icon: 'fas fa-chart-bar',
    categories: [
      {
        name: 'System Monitor',
        shortcuts: [
          { keys: 'F1', desc: 'Help', usage: 'Show help.' },
          { keys: 'F2', desc: 'Setup', usage: 'Change htop settings.' },
          { keys: 'F3', desc: 'Search', usage: 'Search processes.' },
          { keys: 'F4', desc: 'Filter', usage: 'Filter processes.' },
          { keys: 'F5', desc: 'Tree view', usage: 'Show process tree.' },
          { keys: 'F6', desc: 'Sort', usage: 'Change sort order.' },
          { keys: 'F9', desc: 'Signal', usage: 'Send signal to process.' },
          { keys: 'F10', desc: 'Quit', usage: 'Exit htop.' },
        ]
      },
    ]
  },
  juniper: {
    name: 'Juniper JunOS',
    icon: 'fas fa-network-wired',
    categories: [
      {
        name: 'Basic Commands',
        shortcuts: [
          { keys: 'show interfaces terse', desc: 'Interface summary', usage: 'Summarize interface status.' },
          { keys: 'show route', desc: 'Routing table', usage: 'Show routing table.' },
          { keys: 'show configuration', desc: 'Show config', usage: 'Show current configuration.' },
          { keys: 'configure', desc: 'Config mode', usage: 'Enter configuration mode.' },
          { keys: 'commit', desc: 'Apply config', usage: 'Apply configuration.' },
          { keys: 'rollback 1', desc: 'Rollback', usage: 'Rollback to previous config.' },
        ]
      },
    ]
  },
  pfsense: {
    name: 'pfSense',
    icon: 'fas fa-shield-alt',
    categories: [
      {
        name: 'CLI Commands',
        shortcuts: [
          { keys: 'pfctl -sr', desc: 'Show rules', usage: 'Show current firewall rules.' },
          { keys: 'pfctl -ss', desc: 'Connection state', usage: 'Show active connection state.' },
          { keys: 'pfctl -d', desc: 'Disable firewall', usage: 'Disable packet filtering.' },
          { keys: 'pfctl -e', desc: 'Enable firewall', usage: 'Enable packet filtering.' },
          { keys: 'pfctl -f /etc/pf.conf', desc: 'Reload rules', usage: 'Reload firewall rules.' },
          { keys: 'pfctl -sn', desc: 'Show NAT rules', usage: 'Display currently loaded NAT rules.' },
          { keys: 'pfctl -si', desc: 'Filter stats', usage: 'Show packet filter statistics and counters.' },
          { keys: 'pfctl -k [host]', desc: 'Kill states', usage: 'Kill all states for a specific host.' },
          { keys: 'pfSsh.php', desc: 'PHP shell', usage: 'Open the pfSense developer PHP shell.' },
        ]
      },
      {
        name: 'Console Menu',
        shortcuts: [
          { keys: 'Option 1', desc: 'Assign interfaces', usage: 'Re-assign WAN/LAN network interfaces from the console.' },
          { keys: 'Option 2', desc: 'Set interface IP', usage: 'Configure an interface IP address from the console.' },
          { keys: 'Option 5', desc: 'Reboot', usage: 'Reboot the firewall from the console menu.' },
          { keys: 'Option 8', desc: 'Shell', usage: 'Drop to a root shell from the console menu.' },
        ]
      },
    ]
  },
  mikrotik: {
    name: 'MikroTik RouterOS',
    icon: 'fas fa-network-wired',
    categories: [
      {
        name: 'Commands',
        shortcuts: [
          { keys: '/interface print', desc: 'List interfaces', usage: 'List interfaces.' },
          { keys: '/ip address print', desc: 'IP addresses', usage: 'Show IP addresses.' },
          { keys: '/ip firewall filter print', desc: 'Firewall rules', usage: 'Show firewall rules.' },
          { keys: '/ip route print', desc: 'Routing', usage: 'Show routing table.' },
          { keys: '/system resource print', desc: 'Resources', usage: 'Show system resources.' },
          { keys: '/export', desc: 'Export config', usage: 'Export full configuration.' },
        ]
      },
    ]
  },
  esxi: {
    name: 'VMware ESXi',
    icon: 'fas fa-server',
    categories: [
      {
        name: 'esxcli Commands',
        shortcuts: [
          { keys: 'esxcli system version get', desc: 'Version', usage: 'Check ESXi version.' },
          { keys: 'esxcli vm process list', desc: 'List VMs', usage: 'List running VMs.' },
          { keys: 'esxcli network ip interface list', desc: 'Network', usage: 'List network interfaces.' },
          { keys: 'esxcli storage filesystem list', desc: 'Storage', usage: 'List filesystems.' },
          { keys: 'esxcli hardware cpu list', desc: 'CPU', usage: 'List CPU info.' },
          { keys: 'esxcli hardware memory get', desc: 'Memory', usage: 'Get memory info.' },
        ]
      },
    ]
  },
  ipmitool: {
    name: 'ipmitool',
    icon: 'fas fa-server',
    categories: [
      {
        name: 'Power & Chassis',
        shortcuts: [
          { keys: 'ipmitool power status', desc: 'Power status', usage: 'Show the current chassis power state (on or off).' },
          { keys: 'ipmitool power on', desc: 'Power on', usage: 'Power on the server chassis.' },
          { keys: 'ipmitool power off', desc: 'Power off', usage: 'Hard power off the server immediately.' },
          { keys: 'ipmitool power cycle', desc: 'Power cycle', usage: 'Power off, wait briefly, then power back on — the standard remote reboot.' },
          { keys: 'ipmitool power reset', desc: 'Hard reset', usage: 'Issue a hard reset without a graceful OS shutdown.' },
          { keys: 'ipmitool power soft', desc: 'Soft shutdown', usage: 'Initiate a graceful ACPI shutdown instead of a hard power-off.' },
          { keys: 'ipmitool chassis identify', desc: 'Identify light', usage: 'Blink the front-panel identify LED for 15 seconds to locate the physical server.' },
        ]
      },
      {
        name: 'Sensors & Logs',
        shortcuts: [
          { keys: 'ipmitool sensor list', desc: 'Sensor readings', usage: 'List detailed readings for every sensor: temperature, voltage, and fan speed.' },
          { keys: 'ipmitool sdr list', desc: 'Sensor data records', usage: 'List all Sensor Data Repository entries, a different view from \'sensor list\'.' },
          { keys: 'ipmitool sel list', desc: 'Event log', usage: 'Print the System Event Log (SEL) history.' },
          { keys: 'ipmitool sel clear', desc: 'Clear event log', usage: 'Clear the System Event Log after reviewing and resolving issues.' },
          { keys: 'ipmitool fru print', desc: 'Hardware inventory', usage: 'Print field-replaceable-unit info: serial number, part number, and manufacturer.' },
        ]
      },
      {
        name: 'Network & Access',
        shortcuts: [
          { keys: 'ipmitool lan print', desc: 'Network config', usage: 'Show the BMC\'s LAN channel configuration: IP address, MAC, and VLAN.' },
          { keys: 'ipmitool user list', desc: 'List users', usage: 'List configured BMC user accounts and their privilege levels.' },
          { keys: 'ipmitool mc info', desc: 'Controller info', usage: 'Show the management controller (BMC) firmware version and capabilities.' },
          { keys: 'ipmitool sol activate', desc: 'Serial-over-LAN', usage: 'Open a remote serial console session to the server over the network.' },
        ]
      },
    ]
  },
  ceph_cmd: {
    name: 'Ceph',
    icon: 'fas fa-database',
    categories: [
      {
        name: 'Cluster Management',
        shortcuts: [
          { keys: 'ceph status', desc: 'Cluster status', usage: 'Check Ceph cluster status.' },
          { keys: 'ceph osd tree', desc: 'OSD tree', usage: 'Show OSD tree structure.' },
          { keys: 'ceph df', desc: 'Disk usage', usage: 'Show cluster disk usage.' },
          { keys: 'ceph health detail', desc: 'Health detail', usage: 'Check detailed health status.' },
          { keys: 'rados lspools', desc: 'List pools', usage: 'List RADOS pools.' },
          { keys: 'ceph -w', desc: 'Watch events', usage: 'Stream live cluster events to the terminal.' },
          { keys: 'ceph osd df', desc: 'OSD usage', usage: 'Show per-OSD disk utilization and weight.' },
          { keys: 'ceph osd pool ls detail', desc: 'Pool details', usage: 'List pools with replication and pg settings.' },
          { keys: 'ceph osd pool create [name]', desc: 'Create pool', usage: 'Create a new storage pool.' },
          { keys: 'ceph pg stat', desc: 'PG status', usage: 'Show placement group state summary.' },
          { keys: 'ceph osd out [id]', desc: 'Mark OSD out', usage: 'Remove an OSD from data placement before maintenance.' },
          { keys: 'ceph osd in [id]', desc: 'Mark OSD in', usage: 'Return an OSD to data placement.' },
          { keys: 'ceph auth list', desc: 'List auth keys', usage: 'Show cluster authentication keys and capabilities.' },
          { keys: 'ceph mon stat', desc: 'Monitor status', usage: 'Show monitor quorum status.' },
        ]
      },
    ]
  },
  grafana: {
    name: 'Grafana',
    icon: 'fas fa-chart-line',
    categories: [
      {
        name: 'Shortcuts',
        shortcuts: [
          { keys: 'D', desc: 'Cycle dashboards', usage: 'Auto-cycle dashboards.' },
          { keys: 'F', desc: 'Fullscreen', usage: 'View panel fullscreen.' },
          { keys: 'E', desc: 'Edit panel', usage: 'Edit the panel.' },
          { keys: 'V', desc: 'View panel', usage: 'Zoom in on panel.' },
          { keys: 'Ctrl + S', desc: 'Save dashboard', usage: 'Save the dashboard.' },
          { keys: 'Esc', desc: 'Back', usage: 'Return to previous view.' },
        ]
      },
    ]
  },
  elasticsearch: {
    name: 'Elasticsearch',
    icon: 'fas fa-search',
    categories: [
      {
        name: 'API Commands',
        shortcuts: [
          { keys: 'GET /_cluster/health', desc: 'Cluster health', usage: 'Check cluster health.' },
          { keys: 'GET /_cat/indices', desc: 'List indices', usage: 'List all indices.' },
          { keys: 'GET /_cat/nodes', desc: 'List nodes', usage: 'List cluster nodes.' },
          { keys: 'PUT /index_name', desc: 'Create index', usage: 'Create a new index.' },
          { keys: 'DELETE /index_name', desc: 'Delete index', usage: 'Delete an index.' },
          { keys: 'GET /index/_search', desc: 'Search', usage: 'Search an index.' },
        ]
      },
    ]
  },
  mdadm_cmd: {
    name: 'mdadm (RAID)',
    icon: 'fas fa-hdd',
    categories: [
      {
        name: 'RAID Management',
        shortcuts: [
          { keys: 'mdadm --detail /dev/md0', desc: 'RAID detail', usage: 'Show RAID array details.' },
          { keys: 'cat /proc/mdstat', desc: 'RAID status', usage: 'Check RAID status.' },
          { keys: 'mdadm --create /dev/md0 --level=1 --raid-devices=2', desc: 'Create RAID', usage: 'Create RAID1 array.' },
          { keys: 'mdadm --add /dev/md0 /dev/sdc', desc: 'Add disk', usage: 'Add disk to array.' },
          { keys: 'mdadm --fail /dev/md0 /dev/sdb', desc: 'Fail disk', usage: 'Mark disk as failed.' },
          { keys: 'mdadm --stop /dev/md0', desc: 'Stop array', usage: 'Stop a running RAID array.' },
          { keys: 'mdadm --assemble --scan', desc: 'Assemble arrays', usage: 'Assemble all arrays found in the config or superblocks.' },
          { keys: 'mdadm --remove /dev/md0 /dev/sdb', desc: 'Remove disk', usage: 'Remove a failed disk from the array.' },
          { keys: 'mdadm --detail --scan >> /etc/mdadm/mdadm.conf', desc: 'Save config', usage: 'Persist array configuration for boot-time assembly.' },
          { keys: 'mdadm --grow /dev/md0 --raid-devices=3', desc: 'Grow array', usage: 'Change the number of active devices in the array.' },
          { keys: 'mdadm --examine /dev/sdb', desc: 'Examine disk', usage: 'Show RAID superblock metadata on a member disk.' },
          { keys: 'echo check > /sys/block/md0/md/sync_action', desc: 'Start check', usage: 'Trigger a consistency check of the array.' },
          { keys: 'mdadm --monitor --daemonise /dev/md0', desc: 'Monitor array', usage: 'Run background monitoring with email alerts.' },
        ]
      },
    ]
  },
  racadm: {
    name: 'Dell iDRAC (racadm)',
    icon: 'fas fa-server',
    categories: [
      {
        name: 'Power & Server Control',
        shortcuts: [
          { keys: 'racadm getsysinfo', desc: 'System info', usage: 'Check RAC, chassis, and system information in one summary.' },
          { keys: 'racadm serveraction poweron', desc: 'Power on', usage: 'Turn the server on.' },
          { keys: 'racadm serveraction poweroff', desc: 'Power off', usage: 'Turn the server off.' },
          { keys: 'racadm serveraction hardreset', desc: 'Hard reset', usage: 'Force an immediate reboot of the server.' },
        ]
      },
      {
        name: 'Monitoring & Diagnostics',
        shortcuts: [
          { keys: 'racadm getsel', desc: 'Event log', usage: 'Check the iDRAC system event log.' },
          { keys: 'racadm raid status', desc: 'RAID status', usage: 'Check the health and state of RAID controllers and virtual disks.' },
          { keys: 'racadm getsvctag', desc: 'Service tag', usage: 'Get the server\'s Dell service tag (serial number).' },
          { keys: 'racadm hwinventory', desc: 'Hardware inventory', usage: 'List all detected hardware components and their firmware versions.' },
          { keys: 'racadm techsupreport', desc: 'Support report', usage: 'Generate a full TechSupport diagnostic bundle for Dell support cases.' },
        ]
      },
      {
        name: 'iDRAC Configuration',
        shortcuts: [
          { keys: 'racadm racreset soft', desc: 'Reset iDRAC', usage: 'Restart the iDRAC controller itself without power-cycling the host server.' },
          { keys: 'racadm racresetcfg', desc: 'Factory reset iDRAC', usage: 'Reset iDRAC to factory default settings, clearing custom configuration.' },
          { keys: 'racadm getniccfg', desc: 'iDRAC network config', usage: 'Show the iDRAC\'s current IP address, netmask, and gateway.' },
          { keys: 'racadm setniccfg -s ip mask gw', desc: 'Set static IP', usage: 'Configure a static IP address for the iDRAC network port.' },
          { keys: 'racadm jobqueue view', desc: 'View jobs', usage: 'List pending and completed configuration or firmware update jobs.' },
          { keys: 'racadm sslcertview', desc: 'View SSL cert', usage: 'Display the certificate currently installed on the iDRAC web interface.' },
        ]
      },
    ]
  },
  paloalto: {
    name: 'Palo Alto PAN-OS',
    icon: 'fas fa-shield-alt',
    categories: [
      {
        name: 'CLI Commands',
        shortcuts: [
          { keys: 'show system info', desc: 'System info', usage: 'Show system information.' },
          { keys: 'show interface all', desc: 'Interfaces', usage: 'Show all interfaces.' },
          { keys: 'show running security-policy', desc: 'Security policy', usage: 'Show running security policies.' },
          { keys: 'show session all', desc: 'Session list', usage: 'Show all sessions.' },
          { keys: 'commit', desc: 'Apply config', usage: 'Apply configuration changes.' },
          { keys: 'show log traffic', desc: 'Traffic log', usage: 'Show traffic logs.' },
        ]
      },
    ]
  },
  arista: {
    name: 'Arista EOS',
    icon: 'fas fa-network-wired',
    categories: [
      {
        name: 'Commands',
        shortcuts: [
          { keys: 'show version', desc: 'Version', usage: 'Check system version.' },
          { keys: 'show interfaces status', desc: 'Interface status', usage: 'Show interface status.' },
          { keys: 'show ip route', desc: 'Routing table', usage: 'Show routing table.' },
          { keys: 'show vlan', desc: 'VLAN list', usage: 'List VLANs.' },
          { keys: 'configure terminal', desc: 'Config mode', usage: 'Enter configuration mode.' },
          { keys: 'write memory', desc: 'Save config', usage: 'Save configuration.' },
        ]
      },
    ]
  },
  prometheus: {
    name: 'Prometheus',
    icon: 'fas fa-fire',
    categories: [
      {
        name: 'PromQL',
        shortcuts: [
          { keys: 'up', desc: 'Target status', usage: 'Check monitoring target status.' },
          { keys: 'rate(http_requests_total[5m])', desc: 'Request rate', usage: 'Calculate 5-min HTTP request rate.' },
          { keys: 'increase(errors_total[1h])', desc: 'Increase', usage: 'Calculate error increase over 1 hour.' },
          { keys: 'histogram_quantile(0.95, ...)', desc: '95th percentile', usage: 'Calculate 95th percentile.' },
          { keys: 'sum by (job) (rate(...))', desc: 'Sum by group', usage: 'Sum rate grouped by job.' },
          { keys: 'avg_over_time(metric[1h])', desc: 'Average over time', usage: 'Average of a metric across a time window.' },
          { keys: 'topk(5, metric)', desc: 'Top K series', usage: 'Show the five highest-valued series.' },
          { keys: 'count by (job)(up)', desc: 'Count by label', usage: 'Count targets grouped by a label.' },
          { keys: 'delta(gauge[1h])', desc: 'Delta', usage: 'Difference in a gauge value over a window.' },
          { keys: 'absent(metric)', desc: 'Absence check', usage: 'Alert when a metric is missing entirely.' },
          { keys: 'sum without (instance)(rate(m[5m]))', desc: 'Sum without label', usage: 'Aggregate rates dropping one label dimension.' },
        ]
      },
      {
        name: 'promtool',
        shortcuts: [
          { keys: 'promtool check config prometheus.yml', desc: 'Check config', usage: 'Validate the Prometheus configuration file.' },
          { keys: 'promtool check rules rules.yml', desc: 'Check rules', usage: 'Validate recording and alerting rule files.' },
          { keys: 'promtool query instant http://localhost:9090 up', desc: 'Instant query', usage: 'Run a PromQL query from the command line.' },
        ]
      },
    ]
  },
  affinity_designer: {
    name: 'Affinity Designer',
    icon: 'fas fa-bezier-curve',
    categories: [
      {
        name: 'Tools',
        shortcuts: [
          { keys: 'V', desc: 'Move', usage: 'Activate move tool.' },
          { keys: 'P', desc: 'Pen', usage: 'Activate pen tool.' },
          { keys: 'N', desc: 'Pencil', usage: 'Activate pencil tool.' },
          { keys: 'B', desc: 'Brush', usage: 'Activate paint brush.' },
          { keys: 'M', desc: 'Rectangle', usage: 'Activate rectangle tool.' },
          { keys: 'Ctrl + G', desc: 'Group', usage: 'Group selected.' },
          { keys: 'Ctrl + J', desc: 'Duplicate', usage: 'Duplicate selection.' },
        ]
      },
    ]
  },
  affinity_photo: {
    name: 'Affinity Photo',
    icon: 'fas fa-camera',
    categories: [
      {
        name: 'Tools',
        shortcuts: [
          { keys: 'B', desc: 'Paint brush', usage: 'Activate brush tool.' },
          { keys: 'E', desc: 'Eraser', usage: 'Activate eraser tool.' },
          { keys: 'J', desc: 'Patch', usage: 'Activate patch tool.' },
          { keys: 'W', desc: 'Selection brush', usage: 'Activate selection brush.' },
          { keys: 'Ctrl + Shift + N', desc: 'New layer', usage: 'Create new raster layer.' },
          { keys: 'Ctrl + J', desc: 'Duplicate layer', usage: 'Duplicate the layer.' },
        ]
      },
    ]
  },
  framer: {
    name: 'Framer',
    icon: 'fas fa-desktop',
    categories: [
      {
        name: 'Editor',
        shortcuts: [
          { keys: 'F', desc: 'Frame', usage: 'Activate frame tool.' },
          { keys: 'T', desc: 'Text', usage: 'Activate text tool.' },
          { keys: 'R', desc: 'Rectangle', usage: 'Draw a rectangle.' },
          { keys: 'P', desc: 'Preview', usage: 'Open preview.' },
          { keys: 'Cmd + D', desc: 'Duplicate', usage: 'Duplicate element.' },
          { keys: 'Cmd + G', desc: 'Group', usage: 'Group elements.' },
        ]
      },
    ]
  },
  spline: {
    name: 'Spline 3D',
    icon: 'fas fa-cube',
    categories: [
      {
        name: 'Editor',
        shortcuts: [
          { keys: 'V', desc: 'Move', usage: 'Activate move tool.' },
          { keys: 'R', desc: 'Rotate', usage: 'Activate rotate tool.' },
          { keys: 'S', desc: 'Scale', usage: 'Activate scale tool.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate object.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete selected object.' },
          { keys: 'Space', desc: 'Play', usage: 'Play animation.' },
        ]
      },
    ]
  },
  lunacy: {
    name: 'Lunacy',
    icon: 'fas fa-palette',
    categories: [
      {
        name: 'Editor',
        shortcuts: [
          { keys: 'R', desc: 'Rectangle', usage: 'Draw a rectangle.' },
          { keys: 'O', desc: 'Oval', usage: 'Draw an oval.' },
          { keys: 'T', desc: 'Text', usage: 'Add text.' },
          { keys: 'V', desc: 'Select', usage: 'Activate select tool.' },
          { keys: 'Ctrl + G', desc: 'Group', usage: 'Group elements.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate elements.' },
        ]
      },
    ]
  },
  penpot: {
    name: 'Penpot',
    icon: 'fas fa-pen-nib',
    categories: [
      {
        name: 'Editor',
        shortcuts: [
          { keys: 'R', desc: 'Rectangle', usage: 'Draw a rectangle.' },
          { keys: 'E', desc: 'Ellipse', usage: 'Draw an ellipse.' },
          { keys: 'T', desc: 'Text', usage: 'Add text.' },
          { keys: 'P', desc: 'Pen', usage: 'Activate pen tool.' },
          { keys: 'Ctrl + G', desc: 'Group', usage: 'Group elements.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate elements.' },
        ]
      },
    ]
  },
  figjam: {
    name: 'FigJam',
    icon: 'fas fa-sticky-note',
    categories: [
      {
        name: 'Whiteboard',
        shortcuts: [
          { keys: 'S', desc: 'Sticky note', usage: 'Add a sticky note.' },
          { keys: 'R', desc: 'Shape', usage: 'Add a shape.' },
          { keys: 'T', desc: 'Text', usage: 'Add text.' },
          { keys: 'L', desc: 'Connector', usage: 'Draw a connector line.' },
          { keys: 'C', desc: 'Comment', usage: 'Add a comment.' },
          { keys: 'E', desc: 'Emoji', usage: 'Add an emoji stamp.' },
        ]
      },
    ]
  },
  descript: {
    name: 'Descript',
    icon: 'fas fa-microphone',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Stop', usage: 'Play or stop playback.' },
          { keys: 'Ctrl + Shift + K', desc: 'Split', usage: 'Split the clip.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Ctrl + E', desc: 'Export', usage: 'Export the project.' },
          { keys: 'Ctrl + J', desc: 'Join', usage: 'Join clips.' },
          { keys: 'Cmd + F', desc: 'Find', usage: 'Search the transcript text.' },
          { keys: 'Cmd + A', desc: 'Select all', usage: 'Select the entire transcript.' },
          { keys: 'Cmd + C', desc: 'Copy', usage: 'Copy selected transcript (and its media).' },
          { keys: 'Cmd + X', desc: 'Cut', usage: 'Cut selected transcript — removes the audio too.' },
          { keys: 'Cmd + V', desc: 'Paste', usage: 'Paste transcript and media at the cursor.' },
          { keys: 'Cmd + Shift + Z', desc: 'Redo', usage: 'Redo the last undone edit.' },
          { keys: '← / →', desc: 'Move playhead', usage: 'Step the cursor/playhead through the transcript.' },
        ]
      },
    ]
  },
  reaper: {
    name: 'Reaper',
    icon: 'fas fa-music',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Stop', usage: 'Play or stop playback.' },
          { keys: 'R', desc: 'Record', usage: 'Start recording.' },
          { keys: 'S', desc: 'Split', usage: 'Split item at cursor.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate selection.' },
          { keys: 'M', desc: 'Mixer', usage: 'Toggle mixer.' },
          { keys: 'Ctrl + T', desc: 'New track', usage: 'Add a new track.' },
        ]
      },
    ]
  },
  pro_tools: {
    name: 'Pro Tools',
    icon: 'fas fa-headphones-alt',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Stop', usage: 'Play or stop playback.' },
          { keys: 'Ctrl + Space', desc: 'Record', usage: 'Start recording.' },
          { keys: 'Cmd + E', desc: 'Separate', usage: 'Separate selection.' },
          { keys: 'Cmd + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Cmd + D', desc: 'Duplicate', usage: 'Duplicate selection.' },
          { keys: 'Cmd + =', desc: 'Zoom in', usage: 'Zoom in timeline.' },
        ]
      },
    ]
  },
  cubase: {
    name: 'Cubase',
    icon: 'fas fa-music',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Space', desc: 'Play/Stop', usage: 'Play or stop playback.' },
          { keys: '*', desc: 'Record', usage: 'Start recording.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate event.' },
          { keys: 'P', desc: 'Left locator', usage: 'Set left locator.' },
          { keys: 'X', desc: 'Split', usage: 'Split with scissors tool.' },
        ]
      },
    ]
  },
  ollama: {
    name: 'Ollama',
    icon: 'fas fa-circle-nodes',
    categories: [
      {
        name: 'Model Management',
        shortcuts: [
          { keys: 'ollama pull <model>', desc: 'Download model', usage: 'Download a model. e.g. ollama pull llama3.2' },
          { keys: 'ollama pull <model>:<tag>', desc: 'Pull specific version', usage: 'Pull a specific model version. e.g. llama3.2:1b' },
          { keys: 'ollama list', desc: 'List local models', usage: 'Show all downloaded models.' },
          { keys: 'ollama rm <model>', desc: 'Remove model', usage: 'Delete a downloaded model to free disk space.' },
          { keys: 'ollama show <model>', desc: 'Model info', usage: 'Show model parameters, template, and system prompt.' },
          { keys: 'ollama cp <src> <dst>', desc: 'Copy model', usage: 'Duplicate a model under a new name.' },
          { keys: 'ollama push <model>', desc: 'Publish model', usage: 'Push a custom model to the Ollama registry.' },
        ]
      },
      {
        name: 'Running & Inference',
        shortcuts: [
          { keys: 'ollama run <model>', desc: 'Run interactive', usage: 'Start an interactive chat with the model.' },
          { keys: 'ollama run <model> "prompt"', desc: 'Single prompt', usage: 'Run a one-shot prompt and exit.' },
          { keys: 'cat file.txt | ollama run <model>', desc: 'Pipe input', usage: 'Pipe file content as the model input.' },
          { keys: '/bye', desc: 'Exit chat', usage: 'Exit the interactive chat session.' },
          { keys: '/clear', desc: 'Clear history', usage: 'Clear the current conversation history.' },
          { keys: '/set system <text>', desc: 'Set system prompt', usage: 'Assign a system prompt during chat.' },
          { keys: '/show info', desc: 'Model details', usage: 'Display current model information mid-session.' },
          { keys: '/show modelfile', desc: 'Show Modelfile', usage: 'Print the Modelfile for the current model.' },
        ]
      },
      {
        name: 'Server & API',
        shortcuts: [
          { keys: 'ollama serve', desc: 'Start server', usage: 'Start the Ollama API server on port 11434.' },
          { keys: 'OLLAMA_HOST=0.0.0.0 ollama serve', desc: 'Expose server', usage: 'Allow external connections to the Ollama server.' },
          { keys: 'curl localhost:11434/api/generate', desc: 'Generate API', usage: 'Call the REST API to generate a response.' },
          { keys: 'curl localhost:11434/api/chat', desc: 'Chat API', usage: 'Call the REST API for a chat conversation.' },
          { keys: 'curl localhost:11434/api/tags', desc: 'List models API', usage: 'List all available models via REST API.' },
          { keys: 'OLLAMA_MODELS=<path>', desc: 'Custom model dir', usage: 'Set a custom path for storing model files.' },
          { keys: 'OLLAMA_NUM_PARALLEL=4', desc: 'Parallel requests', usage: 'Set number of concurrent inference requests.' },
          { keys: 'OLLAMA_MAX_LOADED_MODELS=2', desc: 'Max loaded models', usage: 'Set maximum models kept in GPU memory.' },
        ]
      },
      {
        name: 'Modelfile',
        shortcuts: [
          { keys: 'FROM <model>', desc: 'Base model', usage: 'Specify the base model to build from.' },
          { keys: 'SYSTEM "<text>"', desc: 'System prompt', usage: 'Set a custom system prompt for the model.' },
          { keys: 'PARAMETER temperature 0.7', desc: 'Temperature', usage: 'Set response creativity (0.0–1.0).' },
          { keys: 'PARAMETER num_ctx 4096', desc: 'Context length', usage: 'Set the context window size in tokens.' },
          { keys: 'TEMPLATE "{{ .Prompt }}"', desc: 'Prompt template', usage: 'Define a custom prompt formatting template.' },
          { keys: 'ollama create <name> -f Modelfile', desc: 'Build model', usage: 'Create a custom model from a Modelfile.' },
        ]
      },
    ]
  },
  comfyui: {
    name: 'ComfyUI',
    icon: 'fas fa-project-diagram',
    categories: [
      {
        name: 'Canvas & View',
        shortcuts: [
          { keys: 'Ctrl + Scroll', desc: 'Zoom in/out', usage: 'Zoom the node canvas in or out.' },
          { keys: 'Middle click + drag', desc: 'Pan canvas', usage: 'Pan around the canvas.' },
          { keys: 'Space + drag', desc: 'Pan canvas', usage: 'Hold Space and drag to pan the canvas.' },
          { keys: 'Ctrl + Shift + H', desc: 'Fit to screen', usage: 'Reset view to fit all nodes.' },
          { keys: 'H', desc: 'Center view', usage: 'Center the canvas on the current workflow.' },
          { keys: 'F', desc: 'Focus selection', usage: 'Center view on the selected node(s).' },
          { keys: 'Ctrl + A', desc: 'Select all nodes', usage: 'Select every node in the workflow.' },
        ]
      },
      {
        name: 'Node Operations',
        shortcuts: [
          { keys: 'Double click (canvas)', desc: 'Add node menu', usage: 'Open the node search popup on empty canvas.' },
          { keys: 'Right click (node)', desc: 'Node context menu', usage: 'Open options for the selected node.' },
          { keys: 'Ctrl + C', desc: 'Copy node(s)', usage: 'Copy selected nodes to clipboard.' },
          { keys: 'Ctrl + V', desc: 'Paste node(s)', usage: 'Paste copied nodes onto the canvas.' },
          { keys: 'Ctrl + D', desc: 'Duplicate node', usage: 'Duplicate the selected node in place.' },
          { keys: 'Delete', desc: 'Delete node', usage: 'Remove the selected node(s) from the canvas.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last action.' },
          { keys: 'Ctrl + Y', desc: 'Redo', usage: 'Redo the last undone action.' },
          { keys: 'Ctrl + G', desc: 'Group nodes', usage: 'Wrap selected nodes in a group frame.' },
          { keys: 'Ctrl + M', desc: 'Mute/unmute node', usage: 'Toggle a node on or off without deleting it.' },
          { keys: 'Ctrl + B', desc: 'Pass data through without processing (bypass).', usage: 'Pass data through without processing (bypass).' },
        ]
      },
      {
        name: 'Workflow & Queue',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Queue prompt', usage: 'Add the current workflow to the generation queue.' },
          { keys: 'Ctrl + Shift + Enter', desc: 'Queue first', usage: 'Add to the front of the queue (priority).' },
          { keys: 'Ctrl + S', desc: 'Save workflow', usage: 'Save the current workflow as a JSON file.' },
          { keys: 'Ctrl + O', desc: 'Load workflow', usage: 'Load a workflow from a JSON file.' },
          { keys: 'Ctrl + Shift + S', desc: 'Save as image', usage: 'Save workflow embedded in a PNG file.' },
          { keys: 'Drag PNG onto canvas', desc: 'Import workflow', usage: 'Drop a ComfyUI-generated PNG to load its workflow.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: '(keyword:1.3)', desc: 'Increase weight', usage: 'Boost the influence of a keyword above 1.0.' },
          { keys: '(keyword:0.7)', desc: 'Decrease weight', usage: 'Reduce the influence of a keyword below 1.0.' },
          { keys: '[keyword]', desc: 'Decrease weight (alt)', usage: 'Alternate syntax to slightly decrease keyword weight.' },
          { keys: 'masterpiece, best quality', desc: 'Quality boosters', usage: 'Standard quality tags for better outputs.' },
          { keys: 'negative: nsfw, blurry, bad anatomy', desc: 'Negative prompt', usage: 'Common negative prompt terms to avoid artifacts.' },
          { keys: 'BREAK', desc: 'Attention separator', usage: 'Split prompt into independently weighted sections.' },
          { keys: 'Steps: 20–30', desc: 'Optimal steps', usage: '20 steps for speed, 30+ for quality.' },
          { keys: 'CFG Scale: 7', desc: 'Guidance scale', usage: 'Balance between prompt adherence and creativity.' },
        ]
      },
    ]
  },
  huggingface: {
    name: 'Hugging Face CLI',
    icon: 'fas fa-robot',
    categories: [
      {
        name: 'Commands',
        shortcuts: [
          { keys: 'huggingface-cli login', desc: 'Login', usage: 'Log in to HuggingFace.' },
          { keys: 'huggingface-cli download [model]', desc: 'Download model', usage: 'Download a model.' },
          { keys: 'huggingface-cli upload [path]', desc: 'Upload', usage: 'Upload model or dataset.' },
          { keys: 'huggingface-cli repo create', desc: 'Create repo', usage: 'Create a new repository.' },
          { keys: 'huggingface-cli env', desc: 'Environment', usage: 'Show environment info.' },
          { keys: 'huggingface-cli whoami', desc: 'Current user', usage: 'Show which account is currently logged in.' },
          { keys: 'huggingface-cli logout', desc: 'Logout', usage: 'Remove the stored access token.' },
          { keys: 'huggingface-cli scan-cache', desc: 'Scan cache', usage: 'List cached models and their disk usage.' },
          { keys: 'huggingface-cli delete-cache', desc: 'Clean cache', usage: 'Interactively delete cached model revisions.' },
          { keys: 'huggingface-cli download [model] --include "*.safetensors"', desc: 'Pattern download', usage: 'Download only files matching a pattern.' },
          { keys: 'huggingface-cli version', desc: 'CLI version', usage: 'Print the installed CLI version.' },
          { keys: 'git clone https://huggingface.co/[model]', desc: 'Clone repo', usage: 'Clone a model repository with git.' },
          { keys: 'huggingface-cli lfs-enable-largefiles .', desc: 'Enable large files', usage: 'Allow files over 5GB in a local repo.' },
        ]
      },
    ]
  },
  lm_studio: {
    name: 'LM Studio',
    icon: 'fas fa-flask',
    categories: [
      {
        name: 'UI Shortcuts',
        shortcuts: [
          { keys: 'Ctrl + N', desc: 'New chat', usage: 'Start a new conversation.' },
          { keys: 'Ctrl + Shift + N', desc: 'New window', usage: 'Open a new LM Studio window.' },
          { keys: 'Ctrl + ,', desc: 'Settings', usage: 'Open application settings.' },
          { keys: 'Ctrl + Enter', desc: 'Send message', usage: 'Send the current message.' },
          { keys: 'Shift + Enter', desc: 'New line', usage: 'Insert a line break without sending.' },
          { keys: 'Ctrl + K', desc: 'Clear chat', usage: 'Clear the current chat history.' },
          { keys: 'Ctrl + F', desc: 'Find models', usage: 'Search available models in the browser.' },
          { keys: 'Ctrl + D', desc: 'Model details', usage: 'View details of the selected model.' },
        ]
      },
      {
        name: 'Server & API',
        shortcuts: [
          { keys: 'lms server start', desc: 'Start server', usage: 'Start the local LM Studio API server (CLI).' },
          { keys: 'lms server stop', desc: 'Stop server', usage: 'Stop the running API server.' },
          { keys: 'lms server status', desc: 'Server status', usage: 'Check whether the server is running.' },
          { keys: 'lms ls', desc: 'List models', usage: 'List all downloaded models via CLI.' },
          { keys: 'lms load <model>', desc: 'Load model', usage: 'Load a specific model into memory.' },
          { keys: 'lms unload', desc: 'Unload model', usage: 'Unload the currently active model.' },
          { keys: 'GET /v1/models', desc: 'List models (API)', usage: 'OpenAI-compatible endpoint to list loaded models.' },
          { keys: 'POST /v1/chat/completions', desc: 'Chat API', usage: 'OpenAI-compatible chat completions endpoint.' },
          { keys: 'POST /v1/completions', desc: 'Completion API', usage: 'OpenAI-compatible text completion endpoint.' },
        ]
      },
      {
        name: 'Model Parameters',
        shortcuts: [
          { keys: 'Temperature', desc: 'Creativity (0–1)', usage: 'Higher = more creative, lower = more deterministic.' },
          { keys: 'Context Length', desc: 'Token window', usage: 'Max tokens for input + output combined.' },
          { keys: 'Top P', desc: 'Nucleus sampling', usage: 'Probability mass threshold for token selection.' },
          { keys: 'Repeat Penalty', desc: 'Avoid repetition', usage: 'Penalise recently used tokens to reduce repetition.' },
          { keys: 'GPU Layers', desc: 'GPU offload', usage: 'Number of model layers to offload to GPU.' },
        ]
      },
    ]
  },
  godot: {
    name: 'Godot Engine',
    icon: 'fas fa-gamepad',
    categories: [
      {
        name: 'Editor',
        shortcuts: [
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save the scene.' },
          { keys: 'F5', desc: 'Run project', usage: 'Run the project.' },
          { keys: 'F6', desc: 'Run scene', usage: 'Run current scene.' },
          { keys: 'Ctrl + A', desc: 'Add node', usage: 'Add a new node.' },
          { keys: 'Ctrl + D', desc: 'Duplicate', usage: 'Duplicate selected node.' },
          { keys: 'Delete', desc: 'Delete', usage: 'Delete selected node.' },
          { keys: 'W', desc: 'Move', usage: 'Activate move tool.' },
          { keys: 'E', desc: 'Rotate', usage: 'Activate rotate tool.' },
        ]
      },
    ]
  },
  cinema4d: {
    name: 'Cinema 4D',
    icon: 'fas fa-cube',
    categories: [
      {
        name: 'Editor',
        shortcuts: [
          { keys: 'E', desc: 'Move', usage: 'Activate move tool.' },
          { keys: 'R', desc: 'Rotate', usage: 'Activate rotate tool.' },
          { keys: 'T', desc: 'Scale', usage: 'Activate scale tool.' },
          { keys: 'C', desc: 'Make editable', usage: 'Make object editable.' },
          { keys: 'N~B', desc: 'Gouraud shading', usage: 'Switch to Gouraud shading.' },
          { keys: 'Ctrl + D', desc: 'Project settings', usage: 'Open project settings.' },
        ]
      },
    ]
  },
  zbrush: {
    name: 'ZBrush',
    icon: 'fas fa-paint-brush',
    categories: [
      {
        name: 'Sculpting',
        shortcuts: [
          { keys: 'B', desc: 'Brush', usage: 'Select a brush.' },
          { keys: 'S', desc: 'Draw Size', usage: 'Adjust brush size.' },
          { keys: 'Z', desc: 'Draw Intensity', usage: 'Adjust brush intensity.' },
          { keys: 'Shift', desc: 'Smooth', usage: 'Switch to smooth brush.' },
          { keys: 'Alt', desc: 'Subtract', usage: 'Invert brush direction (subtract).' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
          { keys: 'T', desc: 'Edit mode', usage: 'Toggle edit mode.' },
        ]
      },
    ]
  },
  substance: {
    name: 'Substance Painter',
    icon: 'fas fa-palette',
    categories: [
      {
        name: 'Editor',
        shortcuts: [
          { keys: '1', desc: 'PBR view', usage: 'Switch to PBR material view.' },
          { keys: 'F1', desc: 'Solo view', usage: 'Switch to solo channel view.' },
          { keys: 'B', desc: 'Brush', usage: 'Activate brush tool.' },
          { keys: 'E', desc: 'Eraser', usage: 'Activate eraser tool.' },
          { keys: 'P', desc: 'Polygon fill', usage: 'Activate polygon fill.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo last action.' },
        ]
      },
    ]
  },
  raycast: {
    name: 'Raycast',
    icon: 'fas fa-bolt',
    categories: [
      {
        name: 'Launcher',
        shortcuts: [
          { keys: 'Cmd + Space', desc: 'Open Raycast', usage: 'Open Raycast.' },
          { keys: 'Enter', desc: 'Execute', usage: 'Execute selected item.' },
          { keys: 'Cmd + K', desc: 'Search commands', usage: 'Search for commands.' },
          { keys: 'Tab', desc: 'Autocomplete', usage: 'Autocomplete suggestion.' },
          { keys: 'Ctrl + C', desc: 'Clipboard history', usage: 'Open clipboard history.' },
          { keys: 'Cmd + ,', desc: 'Settings', usage: 'Open settings.' },
        ]
      },
    ]
  },
  alfred: {
    name: 'Alfred',
    icon: 'fas fa-search',
    categories: [
      {
        name: 'Launcher',
        shortcuts: [
          { keys: 'Option + Space', desc: 'Open Alfred', usage: 'Open Alfred.' },
          { keys: 'Enter', desc: 'Execute', usage: 'Execute selected item.' },
          { keys: 'Cmd + Enter', desc: 'Open in Finder', usage: 'Open file in Finder.' },
          { keys: 'Cmd + ,', desc: 'Settings', usage: 'Open Alfred settings.' },
          { keys: 'Tab', desc: 'Tab complete', usage: 'Complete suggestion.' },
          { keys: 'Space (leading)', desc: 'File search', usage: 'Start the query with a space to search files instead of apps.' },
          { keys: '↑ / ↓', desc: 'Navigate results', usage: 'Move through the result list.' },
          { keys: 'Esc', desc: 'Dismiss', usage: 'Close the Alfred window.' },
          { keys: 'Cmd + L', desc: 'Large Type', usage: 'Display the selected result in huge text on screen.' },
          { keys: 'Cmd + C', desc: 'Copy result', usage: 'Copy the selected result to the clipboard.' },
          { keys: 'Cmd + 1–9', desc: 'Open nth result', usage: 'Instantly action the numbered result.' },
        ]
      },
    ]
  },
  zfs: {
    name: 'ZFS',
    icon: 'fas fa-hdd',
    categories: [
      {
        name: 'Pool/Volume Management',
        shortcuts: [
          { keys: 'zpool status', desc: 'Pool status', usage: 'Check ZFS pool status.' },
          { keys: 'zpool list', desc: 'List pools', usage: 'Show ZFS pool list.' },
          { keys: 'zpool create [pool] [disk]', desc: 'Create pool', usage: 'Create a new ZFS pool.' },
          { keys: 'zfs list', desc: 'List datasets', usage: 'Show ZFS dataset list.' },
          { keys: 'zfs create [pool]/[name]', desc: 'Create dataset', usage: 'Create a new dataset.' },
          { keys: 'zfs snapshot [name]@[snap]', desc: 'Create snapshot', usage: 'Create a snapshot.' },
          { keys: 'zfs rollback [name]@[snap]', desc: 'Rollback', usage: 'Rollback to a snapshot.' },
        ]
      },
    ]
  },
  grok: {
    name: 'Grok',
    icon: 'fas fa-bolt',
    categories: [
      {
        name: 'Web Shortcuts',
        shortcuts: [
          { keys: 'Enter', desc: 'Send message', usage: 'Send your message to Grok.' },
          { keys: 'Shift + Enter', desc: 'New line', usage: 'Add a line break without sending.' },
          { keys: 'Ctrl + K', desc: 'New conversation', usage: 'Start a fresh chat with Grok.' },
          { keys: 'Ctrl + /', desc: 'Keyboard shortcuts', usage: 'Show the keyboard shortcuts help.' },
        ]
      },
      {
        name: 'Grok Modes',
        shortcuts: [
          { keys: 'Default mode', desc: 'Standard chat', usage: 'General purpose chat and reasoning.' },
          { keys: 'Think mode', desc: 'Extended reasoning', usage: 'Grok spends more time reasoning before answering.' },
          { keys: 'DeepSearch mode', desc: 'Web research', usage: 'Grok searches the web and synthesises results.' },
          { keys: 'Image generation', desc: 'Generate images', usage: 'Describe an image for Grok to create using Aurora.' },
          { keys: 'Voice mode', desc: 'Voice chat', usage: 'Speak to Grok and receive spoken responses.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'What\'s happening with [topic]?', desc: 'Real-time info', usage: 'Leverage Grok\'s access to X/Twitter real-time data.' },
          { keys: 'Analyse the sentiment about [topic]', desc: 'Social analysis', usage: 'Use X data to gauge public sentiment.' },
          { keys: 'Be brutally honest', desc: 'Unfiltered mode', usage: 'Request Grok\'s less filtered, direct response style.' },
          { keys: 'Use DeepSearch and cite sources', desc: 'Research mode', usage: 'Get web-grounded answers with citations.' },
          { keys: 'Think step by step', desc: 'Reasoning chain', usage: 'Activate chain-of-thought for complex problems.' },
          { keys: 'Summarise the top posts about [X]', desc: 'X/Twitter summary', usage: 'Get a digest of trending X posts on a topic.' },
          { keys: 'What does @[handle] think about...', desc: 'X user context', usage: 'Reference a specific X user\'s public posts.' },
          { keys: 'Generate an image of...', desc: 'Image generation', usage: 'Create images using Grok\'s Aurora model.' },
        ]
      },
    ]
  },
  amazon_q: {
    name: 'Amazon Q',
    icon: 'fab fa-aws',
    categories: [
      {
        name: 'VS Code Shortcuts',
        shortcuts: [
          { keys: 'Ctrl + I', desc: 'Open Q chat', usage: 'Open the Amazon Q inline chat panel.' },
          { keys: 'Tab', desc: 'Accept suggestion', usage: 'Accept the current AI code suggestion.' },
          { keys: 'Esc', desc: 'Dismiss suggestion', usage: 'Dismiss the current AI suggestion.' },
          { keys: 'Alt + C', desc: 'Next suggestion', usage: 'Cycle to the next code suggestion.' },
          { keys: 'Ctrl + Shift + I', desc: 'Q Developer panel', usage: 'Open the Amazon Q Developer side panel.' },
        ]
      },
      {
        name: 'CLI Commands',
        shortcuts: [
          { keys: 'q chat', desc: 'Start chat', usage: 'Open an interactive Q Developer chat session.' },
          { keys: 'q chat "prompt"', desc: 'Single query', usage: 'Ask a one-shot question and get a response.' },
          { keys: 'q translate', desc: 'Shell translation', usage: 'Translate natural language to shell commands.' },
          { keys: 'q --help', desc: 'Help', usage: 'Show all available Q CLI commands and options.' },
          { keys: 'q doctor', desc: 'Diagnose issues', usage: 'Check Q CLI configuration and connectivity.' },
          { keys: 'q version', desc: 'Show version', usage: 'Display the installed Q CLI version.' },
          { keys: 'q logout', desc: 'Logout', usage: 'Sign out of the Amazon Q session.' },
          { keys: 'q login', desc: 'Login', usage: 'Authenticate with AWS Builder ID or IAM Identity Center.' },
        ]
      },
      {
        name: 'Slash Commands (Chat)',
        shortcuts: [
          { keys: '/help', desc: 'Show commands', usage: 'List available slash commands in chat.' },
          { keys: '/clear', desc: 'Clear history', usage: 'Clear the current conversation.' },
          { keys: '/quit', desc: 'Exit chat', usage: 'Exit the Q CLI chat session.' },
          { keys: '/transform', desc: 'Code transform', usage: 'Upgrade Java or other language code automatically.' },
          { keys: '/dev', desc: 'Dev agent', usage: 'Start an agentic development task.' },
          { keys: '/review', desc: 'Code review', usage: 'Request an automated code review.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'How do I set up <AWS service>?', desc: 'AWS setup', usage: 'Q has deep AWS documentation knowledge.' },
          { keys: 'Write a CDK stack for...', desc: 'CDK generation', usage: 'Generate AWS CDK infrastructure code.' },
          { keys: 'Debug this CloudWatch log: [paste]', desc: 'Log analysis', usage: 'Paste logs for Q to diagnose issues.' },
          { keys: 'Explain this IAM policy', desc: 'Policy analysis', usage: 'Get a plain-language explanation of IAM JSON.' },
          { keys: 'Optimise this Lambda function', desc: 'Code optimisation', usage: 'Request performance and cost improvements.' },
          { keys: 'Generate a Terraform config for...', desc: 'IaC generation', usage: 'Create Terraform or CloudFormation templates.' },
        ]
      },
    ]
  },
  continue_dev: {
    name: 'Continue.dev',
    icon: 'fas fa-forward',
    categories: [
      {
        name: 'VS Code Shortcuts',
        shortcuts: [
          { keys: 'Ctrl + L', desc: 'Open chat', usage: 'Open the Continue chat panel and add selection.' },
          { keys: 'Ctrl + I', desc: 'Inline edit', usage: 'Trigger inline AI code edit at cursor.' },
          { keys: 'Ctrl + Shift + L', desc: 'Add to chat', usage: 'Add selected code to the existing chat.' },
          { keys: 'Ctrl + Shift + R', desc: 'Debug terminal', usage: 'Send terminal output to Continue for debugging.' },
          { keys: 'Tab', desc: 'Accept suggestion', usage: 'Accept the current autocomplete suggestion.' },
          { keys: 'Esc', desc: 'Reject suggestion', usage: 'Dismiss the current autocomplete suggestion.' },
          { keys: 'Alt + Backslash', desc: 'Force autocomplete', usage: 'Manually trigger autocomplete at cursor position.' },
          { keys: 'Ctrl + Shift + I', desc: 'Toggle sidebar', usage: 'Open or close the Continue sidebar.' },
        ]
      },
      {
        name: 'JetBrains Shortcuts',
        shortcuts: [
          { keys: 'Alt + Shift + J', desc: 'Open chat', usage: 'Open Continue chat panel in JetBrains IDE.' },
          { keys: 'Alt + Shift + M', desc: 'Inline edit', usage: 'Trigger inline AI edit in JetBrains.' },
          { keys: 'Alt + Shift + L', desc: 'Add to chat', usage: 'Add selection to Continue chat.' },
        ]
      },
      {
        name: 'Chat Commands',
        shortcuts: [
          { keys: '/edit <instruction>', desc: 'Inline edit mode', usage: 'Apply an edit to selected code via chat.' },
          { keys: '/comment', desc: 'Generate comments', usage: 'Add comments and docstrings to selected code.' },
          { keys: '/test', desc: 'Generate tests', usage: 'Write unit tests for the selected code.' },
          { keys: '/share', desc: 'Share session', usage: 'Export the current chat session as markdown.' },
          { keys: '@file', desc: 'Reference file', usage: 'Add a specific file as context in the chat.' },
          { keys: '@codebase', desc: 'Codebase context', usage: 'Add indexed codebase as chat context.' },
          { keys: '@docs', desc: 'Documentation', usage: 'Reference loaded documentation sources.' },
          { keys: '@terminal', desc: 'Terminal output', usage: 'Add terminal output as context.' },
          { keys: '@problems', desc: 'Errors & warnings', usage: 'Include current IDE problems as context.' },
          { keys: '@clipboard', desc: 'Clipboard content', usage: 'Include clipboard contents as context.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'Explain this code', desc: 'Code explanation', usage: 'Get a plain-language explanation of selected code.' },
          { keys: 'Refactor using <pattern>', desc: 'Refactor request', usage: 'Apply a specific design pattern to the code.' },
          { keys: 'Find bugs in this function', desc: 'Bug detection', usage: 'Ask Continue to identify potential issues.' },
          { keys: 'Write tests for edge cases', desc: 'Edge case tests', usage: 'Generate comprehensive test coverage.' },
          { keys: 'Translate this to TypeScript', desc: 'Language convert', usage: 'Convert code between programming languages.' },
        ]
      },
    ]
  },
  elevenlabs: {
    name: 'ElevenLabs',
    icon: 'fas fa-microphone',
    categories: [
      {
        name: 'Web Shortcuts',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Generate audio', usage: 'Generate speech from the current text input.' },
          { keys: 'Space', desc: 'Play / pause', usage: 'Play or pause the generated audio.' },
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last change.' },
          { keys: 'Ctrl + S', desc: 'Save project', usage: 'Save the current project.' },
        ]
      },
      {
        name: 'Voice Design',
        shortcuts: [
          { keys: 'Voice Cloning', desc: 'Clone a voice', usage: 'Upload 1–3 minutes of clean audio to clone a voice.' },
          { keys: 'Instant Voice Cloning', desc: 'Quick clone', usage: 'Clone with minimal audio sample for fast results.' },
          { keys: 'Professional Voice Cloning', desc: 'High-fidelity clone', usage: 'Upload 30+ minutes for studio-quality cloning.' },
          { keys: 'Voice Design', desc: 'Describe a voice', usage: 'Generate a new synthetic voice from a text description.' },
          { keys: 'Voice Library', desc: 'Community voices', usage: 'Browse and use community-shared voices.' },
        ]
      },
      {
        name: 'SSML & Control Tags',
        shortcuts: [
          { keys: '<break time=1s/>', desc: 'Add pause', usage: 'Insert a pause of specified duration.' },
          { keys: '<emphasis level=strong>', desc: 'Emphasis', usage: 'Add strong emphasis to a word or phrase.' },
          { keys: '<prosody rate=slow>', desc: 'Change speed', usage: 'Set speech rate: slow, medium, fast, or %.' },
          { keys: '<prosody pitch=+2st>', desc: 'Change pitch', usage: 'Adjust pitch in semitones.' },
          { keys: '<say-as interpret-as=spell-out>', desc: 'Spell out', usage: 'Read a word letter by letter.' },
        ]
      },
      {
        name: 'API & Prompt Tips',
        shortcuts: [
          { keys: 'stability: 0.5', desc: 'Voice stability', usage: 'Lower = more expressive, higher = more consistent.' },
          { keys: 'similarity_boost: 0.75', desc: 'Similarity boost', usage: 'Higher = closer to original voice. Balance with stability.' },
          { keys: 'style: 0.5', desc: 'Style exaggeration', usage: 'Amplifies the speaking style of the voice.' },
          { keys: 'use_speaker_boost: true', desc: 'Speaker boost', usage: 'Boosts similarity to target speaker.' },
          { keys: 'model: eleven_turbo_v2', desc: 'Fast model', usage: 'Use turbo model for faster, cheaper inference.' },
          { keys: 'model: eleven_multilingual_v2', desc: 'Multilingual', usage: 'Use multilingual model for 29 languages.' },
          { keys: 'Add punctuation for natural pauses', desc: 'Pacing tip', usage: 'Commas and periods create natural speech rhythm.' },
          { keys: 'Avoid ALL CAPS (use italics intent)', desc: 'Emphasis tip', usage: 'ALL CAPS distorts pronunciation; use SSML instead.' },
        ]
      },
    ]
  },
  leonardo_ai: {
    name: 'Leonardo.ai',
    icon: 'fas fa-image',
    categories: [
      {
        name: 'Web Shortcuts',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Generate image', usage: 'Start generation with current settings.' },
          { keys: 'Ctrl + Z', desc: 'Undo canvas', usage: 'Undo the last canvas edit.' },
          { keys: 'Space + drag', desc: 'Pan canvas', usage: 'Pan the canvas in the image editor.' },
          { keys: 'Ctrl + Scroll', desc: 'Zoom', usage: 'Zoom in or out on the canvas.' },
          { keys: 'B', desc: 'Brush tool', usage: 'Activate the brush for inpainting.' },
          { keys: 'E', desc: 'Eraser tool', usage: 'Activate the eraser tool.' },
          { keys: '[', desc: 'Decrease brush', usage: 'Decrease the brush size.' },
          { keys: ']', desc: 'Increase brush', usage: 'Increase the brush size.' },
        ]
      },
      {
        name: 'Generation Settings',
        shortcuts: [
          { keys: 'Alchemy', desc: 'High quality mode', usage: 'Enable Alchemy for enhanced prompt adherence and quality.' },
          { keys: 'PhotoReal', desc: 'Photorealistic mode', usage: 'Specialised mode for photorealistic outputs.' },
          { keys: 'Image Guidance', desc: 'Reference image', usage: 'Use an image as style or composition reference.' },
          { keys: 'Init Image Strength', desc: 'Image influence', usage: 'How much the reference image influences the output.' },
          { keys: 'Negative Prompt', desc: 'Avoid elements', usage: 'List things to exclude from the generation.' },
          { keys: 'Seed', desc: 'Reproducibility', usage: 'Fix a seed number to reproduce identical outputs.' },
          { keys: 'Scheduler: DPM++ SDE', desc: 'Best quality', usage: 'Recommended scheduler for high-quality outputs.' },
          { keys: 'Steps: 30–40', desc: 'Quality steps', usage: 'More steps = higher quality at cost of speed.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'cinematic lighting, 8k', desc: 'Quality boosters', usage: 'Common quality-enhancing suffix terms.' },
          { keys: 'by Greg Rutkowski', desc: 'Artist style', usage: 'Reference a specific artist\'s visual style.' },
          { keys: 'golden hour, bokeh, shallow depth of field', desc: 'Photo style', usage: 'Photography-inspired quality modifiers.' },
          { keys: 'shot on Sony A7, 85mm lens', desc: 'Camera prompt', usage: 'Describe a camera setup for photorealistic looks.' },
          { keys: 'trending on ArtStation', desc: 'Quality signal', usage: 'Popular quality-boosting term for concept art.' },
          { keys: 'negative: blurry, deformed, text, watermark', desc: 'Standard negative', usage: 'Common negative prompt to avoid artifacts.' },
          { keys: '(subject:1.4), (style:0.8)', desc: 'Weighted terms', usage: 'Use parentheses and weights to control emphasis.' },
          { keys: 'Low CFG (3–5)', desc: 'More creative', usage: 'Lower CFG scale allows more creative freedom.' },
          { keys: 'High CFG (8–12)', desc: 'More literal', usage: 'Higher CFG follows the prompt more literally.' },
        ]
      },
    ]
  },
  ideogram: {
    name: 'Ideogram',
    icon: 'fas fa-font',
    categories: [
      {
        name: 'Generation Settings',
        shortcuts: [
          { keys: 'Magic Prompt: Auto', desc: 'Prompt enhancement', usage: 'Ideogram automatically expands your prompt for better results.' },
          { keys: 'Magic Prompt: On', desc: 'Force enhancement', usage: 'Always enhance the prompt regardless of length.' },
          { keys: 'Magic Prompt: Off', desc: 'Exact prompt', usage: 'Use your prompt exactly as written.' },
          { keys: 'Style: Realistic', desc: 'Photorealistic', usage: 'Generate photorealistic images.' },
          { keys: 'Style: Design', desc: 'Graphic design', usage: 'Clean, design-oriented output. Best for text in images.' },
          { keys: 'Style: 3D Render', desc: '3D look', usage: 'Generate 3D rendered style images.' },
          { keys: 'Style: Anime', desc: 'Anime style', usage: 'Generate anime/manga style images.' },
          { keys: 'Aspect Ratio', desc: 'Output dimensions', usage: 'Choose from standard ratios: 1:1, 16:9, 9:16, etc.' },
        ]
      },
      {
        name: 'Text in Images',
        shortcuts: [
          { keys: '"text in quotes"', desc: 'Render text', usage: 'Put the exact text you want displayed in double quotes.' },
          { keys: 'Use Design style for text', desc: 'Best for text', usage: 'Design style renders text most accurately.' },
          { keys: 'Short phrases work best', desc: 'Text tip', usage: 'Shorter text (1–5 words) renders more reliably.' },
          { keys: 'Specify font style', desc: 'Font control', usage: 'Describe font: "bold sans-serif", "handwritten", etc.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'Describe text placement', desc: 'Layout control', usage: 'Specify: "text at bottom", "centred logo" etc.' },
          { keys: 'Minimalist design, white background', desc: 'Clean look', usage: 'Useful for logos and marketing assets.' },
          { keys: 'Vector style, flat design', desc: 'Icon/logo style', usage: 'Great for creating icon-like outputs.' },
          { keys: 'Color palette: [colors]', desc: 'Color control', usage: 'Specify brand colors: "blue and white palette".' },
          { keys: 'Remix: vary seed', desc: 'Iterate output', usage: 'Remix existing images to explore variations.' },
          { keys: 'Negative: blurry text', desc: 'Avoid bad text', usage: 'Add "blurry text" to negatives to improve legibility.' },
        ]
      },
    ]
  },
  udio: {
    name: 'Udio',
    icon: 'fas fa-music',
    categories: [
      {
        name: 'Generation Controls',
        shortcuts: [
          { keys: 'Space', desc: 'Play / pause', usage: 'Play or pause the current audio preview.' },
          { keys: 'Ctrl + Enter', desc: 'Generate track', usage: 'Generate a new track with current settings.' },
          { keys: 'Extend', desc: 'Extend track', usage: 'Add more seconds to the generated track.' },
          { keys: 'Remix', desc: 'Remix track', usage: 'Generate a variation of the current track.' },
          { keys: 'Remaster', desc: 'Improve quality', usage: 'Enhance audio quality of the current generation.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: '[genre], [mood], [instruments]', desc: 'Core structure', usage: 'Basic prompt structure: genre + mood + instruments.' },
          { keys: 'Instrumental only', desc: 'No vocals', usage: 'Remove vocals from the generated track.' },
          { keys: '[verse]\n[chorus]', desc: 'Song structure', usage: 'Use brackets to define song structure sections.' },
          { keys: 'BPM: 120', desc: 'Set tempo', usage: 'Specify beats per minute for the track.' },
          { keys: 'Key of C major', desc: 'Set key', usage: 'Specify the musical key for the composition.' },
          { keys: 'no lyrics, pure instrumental', desc: 'Instrumental tip', usage: 'Explicitly request an instrumental track.' },
          { keys: 'in the style of [artist]', desc: 'Artist reference', usage: 'Reference an artist\'s style for the generation.' },
          { keys: 'uplifting, energetic, fast-paced', desc: 'Mood descriptors', usage: 'Mood words strongly influence the output feel.' },
          { keys: 'lo-fi, vinyl crackle, warm tones', desc: 'Texture terms', usage: 'Describe the sonic texture and production style.' },
          { keys: 'cinematic score, orchestral, epic', desc: 'Film score style', usage: 'Generate cinematic background music.' },
          { keys: 'Use Extend for full songs', desc: 'Full track tip', usage: 'Generate 30s then extend multiple times for a full track.' },
        ]
      },
    ]
  },
  activepieces: {
    name: 'Activepieces',
    icon: 'fas fa-puzzle-piece',
    categories: [
      {
        name: 'Editor Shortcuts',
        shortcuts: [
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undo the last action in the flow editor.' },
          { keys: 'Ctrl + Shift + Z', desc: 'Redo', usage: 'Redo the last undone action.' },
          { keys: 'Ctrl + C', desc: 'Copy step', usage: 'Copy the selected step.' },
          { keys: 'Ctrl + V', desc: 'Paste step', usage: 'Paste the copied step.' },
          { keys: 'Delete', desc: 'Delete step', usage: 'Delete the selected step from the flow.' },
          { keys: 'Ctrl + S', desc: 'Save flow', usage: 'Save the current automation flow.' },
        ]
      },
      {
        name: 'Prompt Tips',
        shortcuts: [
          { keys: 'Test flow', desc: 'Test automation', usage: 'Run a test to verify your flow works end-to-end.' },
          { keys: 'Use Code step for custom logic', desc: 'Custom code', usage: 'Add a Code step to write JavaScript for complex transformations.' },
          { keys: 'Branch for conditional logic', desc: 'Branching', usage: 'Use Branch steps to route data based on conditions.' },
        ]
      },
    ]
  },
  airflow: {
    name: 'Apache Airflow',
    icon: 'fas fa-wind',
    categories: [
      {
        name: 'CLI Commands',
        shortcuts: [
          { keys: 'airflow dags list', desc: 'List DAGs', usage: 'List all available DAGs.' },
          { keys: 'airflow dags trigger <dag_id>', desc: 'Trigger DAG', usage: 'Manually trigger a DAG run.' },
          { keys: 'airflow dags pause <dag_id>', desc: 'Pause DAG', usage: 'Pause a DAG to stop scheduling.' },
          { keys: 'airflow dags unpause <dag_id>', desc: 'Unpause DAG', usage: 'Resume a paused DAG.' },
          { keys: 'airflow tasks list <dag_id>', desc: 'List tasks', usage: 'List all tasks in a DAG.' },
          { keys: 'airflow tasks run <dag_id> <task_id> <date>', desc: 'Run task', usage: 'Run a specific task instance.' },
          { keys: 'airflow db init', desc: 'Init database', usage: 'Initialize the Airflow metadata database.' },
          { keys: 'airflow scheduler', desc: 'Start scheduler', usage: 'Start the Airflow scheduler process.' },
          { keys: 'airflow webserver -p 8080', desc: 'Start webserver', usage: 'Start the Airflow web UI on port 8080.' },
          { keys: 'airflow celery worker', desc: 'Start worker', usage: 'Start a Celery worker for task execution.' },
        ]
      },
      {
        name: 'DAG Authoring Tips',
        shortcuts: [
          { keys: '@daily', desc: 'Daily schedule', usage: 'Shorthand for cron 0 0 * * * — runs at midnight daily.' },
          { keys: '@hourly', desc: 'Hourly schedule', usage: 'Shorthand for cron 0 * * * * — runs every hour.' },
          { keys: 'catchup=False', desc: 'Disable backfill', usage: 'Prevent Airflow from running missed historical DAG runs.' },
          { keys: 'task >> next_task', desc: 'Set dependency', usage: 'Define task execution order using >> operator.' },
          { keys: 'PythonOperator', desc: 'Python task', usage: 'Run a Python function as an Airflow task.' },
          { keys: 'BashOperator', desc: 'Shell task', usage: 'Run a bash command as an Airflow task.' },
        ]
      },
    ]
  },
  kestra: {
    name: 'Kestra',
    icon: 'fas fa-stream',
    categories: [
      {
        name: 'CLI Commands',
        shortcuts: [
          { keys: 'kestra server standalone', desc: 'Start server', usage: 'Start Kestra in standalone mode (all services).' },
          { keys: 'kestra flow validate <file>', desc: 'Validate flow', usage: 'Validate a flow YAML file for syntax errors.' },
          { keys: 'kestra flow namespace update <ns> <dir>', desc: 'Deploy flows', usage: 'Deploy all flows in a directory to a namespace.' },
          { keys: 'kestra flow list', desc: 'List flows', usage: 'List all flows in Kestra.' },
          { keys: 'kestra execution create --flow-id <id>', desc: 'Run flow', usage: 'Trigger a flow execution from the CLI.' },
          { keys: 'kestra plugins list', desc: 'List plugins', usage: 'List all installed Kestra plugins.' },
        ]
      },
      {
        name: 'Flow YAML Tips',
        shortcuts: [
          { keys: 'id: my-flow', desc: 'Flow ID', usage: 'Unique identifier for the flow.' },
          { keys: 'namespace: company.team', desc: 'Namespace', usage: 'Organise flows by namespace.' },
          { keys: 'triggers: schedule', desc: 'Schedule trigger', usage: 'Run flow on a cron schedule.' },
          { keys: '{{ inputs.param }}', desc: 'Input variable', usage: 'Reference a flow input parameter in tasks.' },
          { keys: '{{ outputs.task.value }}', desc: 'Task output', usage: 'Reference the output of a previous task.' },
        ]
      },
    ]
  },
  nmap: {
    name: 'Nmap',
    icon: 'fas fa-network-wired',
    categories: [
      {
        name: 'Basic Scans',
        shortcuts: [
          { keys: 'nmap <target>', desc: 'Basic scan', usage: 'Scan the most common 1000 ports on a host.' },
          { keys: 'nmap -sV <target>', desc: 'Service version', usage: 'Detect service versions on open ports.' },
          { keys: 'nmap -O <target>', desc: 'OS detection', usage: 'Detect the target operating system.' },
          { keys: 'nmap -A <target>', desc: 'Aggressive scan', usage: 'OS, version, script, and traceroute scan.' },
          { keys: 'nmap -p 80,443 <target>', desc: 'Specific ports', usage: 'Scan specific ports only.' },
          { keys: 'nmap -p- <target>', desc: 'All ports', usage: 'Scan all 65535 ports.' },
          { keys: 'nmap -sU <target>', desc: 'UDP scan', usage: 'Scan UDP ports (requires root).' },
        ]
      },
      {
        name: 'Advanced Options',
        shortcuts: [
          { keys: 'nmap -sn 192.168.1.0/24', desc: 'Ping sweep', usage: 'Discover live hosts without port scanning.' },
          { keys: 'nmap --script vuln <target>', desc: 'Vuln scan', usage: 'Run vulnerability detection scripts.' },
          { keys: 'nmap -T4 <target>', desc: 'Fast timing', usage: 'Speed up scan with timing template (T0-T5).' },
          { keys: 'nmap -oN output.txt', desc: 'Save output', usage: 'Save scan results to a text file.' },
          { keys: 'nmap -oX output.xml', desc: 'XML output', usage: 'Save results in XML format.' },
          { keys: 'nmap -v <target>', desc: 'Verbose', usage: 'Show verbose scan output.' },
          { keys: 'nmap -iL hosts.txt', desc: 'Input from file', usage: 'Read target hosts from a file.' },
          { keys: 'nmap --open <target>', desc: 'Open ports only', usage: 'Show only open ports in results.' },
        ]
      },
    ]
  },
  haproxy: {
    name: 'HAProxy',
    icon: 'fas fa-balance-scale',
    categories: [
      {
        name: 'CLI Commands',
        shortcuts: [
          { keys: 'haproxy -f /etc/haproxy/haproxy.cfg', desc: 'Start with config', usage: 'Start HAProxy with a specific config file.' },
          { keys: 'haproxy -c -f /etc/haproxy/haproxy.cfg', desc: 'Validate config', usage: 'Check config file for syntax errors without starting.' },
          { keys: 'systemctl reload haproxy', desc: 'Graceful reload', usage: 'Reload config without dropping connections.' },
          { keys: 'systemctl restart haproxy', desc: 'Restart', usage: 'Restart HAProxy (drops active connections).' },
          { keys: 'haproxy -f haproxy.cfg -p haproxy.pid -D', desc: 'Daemon mode', usage: 'Run HAProxy as a background daemon.' },
        ]
      },
      {
        name: 'Stats & Runtime API',
        shortcuts: [
          { keys: 'echo "show info" | socat stdio /var/run/haproxy.sock', desc: 'Show info', usage: 'Display HAProxy runtime info via socket.' },
          { keys: 'echo "show stat" | socat stdio /var/run/haproxy.sock', desc: 'Show stats', usage: 'Show all backend/frontend statistics.' },
          { keys: 'echo "show servers state" | socat stdio /var/run/haproxy.sock', desc: 'Server state', usage: 'Show current state of all backend servers.' },
          { keys: 'echo "disable server backend/server1" | socat stdio /var/run/haproxy.sock', desc: 'Disable server', usage: 'Take a backend server out of rotation.' },
          { keys: 'echo "enable server backend/server1" | socat stdio /var/run/haproxy.sock', desc: 'Enable server', usage: 'Re-enable a backend server.' },
        ]
      },
      {
        name: 'Config Tips',
        shortcuts: [
          { keys: 'balance roundrobin', desc: 'Round-robin LB', usage: 'Distribute requests evenly across backends.' },
          { keys: 'balance leastconn', desc: 'Least connections', usage: 'Route to server with fewest active connections.' },
          { keys: 'option httpchk GET /health', desc: 'Health check', usage: 'Check backend health with HTTP endpoint.' },
          { keys: 'timeout connect 5s', desc: 'Connect timeout', usage: 'Set max time to establish backend connection.' },
          { keys: 'maxconn 10000', desc: 'Max connections', usage: 'Set maximum concurrent connections.' },
        ]
      },
    ]
  },
  openshift: {
    name: 'OpenShift',
    icon: 'fas fa-cube',
    categories: [
      {
        name: 'oc CLI Basics',
        shortcuts: [
          { keys: 'oc login <url>', desc: 'Login', usage: 'Log in to an OpenShift cluster.' },
          { keys: 'oc project <name>', desc: 'Switch project', usage: 'Switch to a different project/namespace.' },
          { keys: 'oc new-project <name>', desc: 'Create project', usage: 'Create a new project.' },
          { keys: 'oc get pods', desc: 'List pods', usage: 'List all pods in the current project.' },
          { keys: 'oc get all', desc: 'Get all resources', usage: 'List all resources in the current project.' },
          { keys: 'oc describe pod <name>', desc: 'Describe pod', usage: 'Show detailed information about a pod.' },
          { keys: 'oc logs <pod>', desc: 'View logs', usage: 'View logs from a pod.' },
          { keys: 'oc rsh <pod>', desc: 'Remote shell', usage: 'Open a shell in a running pod.' },
        ]
      },
      {
        name: 'Deployments & Builds',
        shortcuts: [
          { keys: 'oc new-app <image>', desc: 'New app', usage: 'Create a new application from a container image.' },
          { keys: 'oc new-app --from-git <url>', desc: 'App from Git', usage: 'Build and deploy an app from a Git repository.' },
          { keys: 'oc start-build <buildconfig>', desc: 'Start build', usage: 'Trigger a new build.' },
          { keys: 'oc rollout status dc/<name>', desc: 'Rollout status', usage: 'Check the status of a deployment rollout.' },
          { keys: 'oc rollout latest dc/<name>', desc: 'Trigger deploy', usage: 'Trigger a new deployment rollout.' },
          { keys: 'oc rollout undo dc/<name>', desc: 'Rollback', usage: 'Roll back to the previous deployment.' },
          { keys: 'oc scale dc/<name> --replicas=3', desc: 'Scale', usage: 'Scale a deployment to a specified number of replicas.' },
          { keys: 'oc expose svc/<name>', desc: 'Expose route', usage: 'Create a Route to expose a service externally.' },
        ]
      },
    ]
  },
  salesforce: {
    name: 'Salesforce',
    icon: 'fas fa-cloud',
    categories: [
      {
        name: 'Console Navigation',
        shortcuts: [
          { keys: 'V', desc: 'Navigation Tab', usage: 'Go to the navigation tab in Service Console.' },
          { keys: 'P', desc: 'Primary Tabs', usage: 'Jump to the primary tabs area.' },
          { keys: 'S', desc: 'Subtabs', usage: 'Go to the subtabs section.' },
          { keys: 'N', desc: 'List View', usage: 'Navigate to the list view.' },
          { keys: 'Shift + S', desc: 'Go to Field', usage: 'Jump to a specific field on the current tab.' },
          { keys: 'Shift + F', desc: 'First List Item', usage: 'Go to the first item in list view.' },
          { keys: 'R', desc: 'Header Search', usage: 'Jump to the header search box.' },
          { keys: 'F', desc: 'Footer', usage: 'Navigate to the footer area.' },
        ]
      },
      {
        name: 'Tab Management',
        shortcuts: [
          { keys: 'T', desc: 'Open Tab', usage: 'Open a new tab in the console.' },
          { keys: 'C', desc: 'Close Tab', usage: 'Close the currently active tab.' },
          { keys: 'Shift + C', desc: 'Reopen Closed Tab', usage: 'Reopen the last closed tab.' },
          { keys: 'Shift + R', desc: 'Refresh Tab', usage: 'Refresh the current tab content.' },
          { keys: 'D', desc: 'Tab Dropdown', usage: 'Open the dropdown menu on the current tab.' },
          { keys: 'Z', desc: 'Zoom Primary Tab', usage: 'Zoom in or out on primary tabs.' },
        ]
      },
      {
        name: 'Views & Sidebars',
        shortcuts: [
          { keys: 'Shift + N', desc: 'Toggle Pinned List', usage: 'Hide or show the pinned list panel.' },
          { keys: 'Shift + Left', desc: 'Toggle Left Sidebar', usage: 'Hide or show the left sidebar.' },
          { keys: 'Shift + Right', desc: 'Toggle Right Sidebar', usage: 'Hide or show the right sidebar.' },
          { keys: 'Shift + Up', desc: 'Toggle Top Sidebar', usage: 'Hide or show the top sidebar panel.' },
          { keys: 'Shift + Down', desc: 'Toggle Bottom Sidebar', usage: 'Hide or show the bottom sidebar panel.' },
        ]
      },
      {
        name: 'General',
        shortcuts: [
          { keys: 'Esc', desc: 'Shortcut Mode', usage: 'Enter keyboard shortcut mode in the console.' },
          { keys: 'E', desc: 'Edit Record', usage: 'Edit the currently selected record.' },
          { keys: 'Ctrl + S', desc: 'Save', usage: 'Save the current record or changes.' },
          { keys: 'U', desc: 'Share Link', usage: 'Get a shareable link for the current record.' },
          { keys: 'Shift + K', desc: 'Show Shortcuts', usage: 'Display all available keyboard shortcuts.' },
          { keys: 'Left', desc: 'Move Left', usage: 'Navigate left in the console.' },
          { keys: 'Right', desc: 'Move Right', usage: 'Navigate right in the console.' },
          { keys: 'Up', desc: 'Move Up', usage: 'Navigate up in lists or menus.' },
          { keys: 'Down', desc: 'Move Down', usage: 'Navigate down in lists or menus.' },
          { keys: 'Enter', desc: 'Activate', usage: 'Activate or select the current item.' },
        ]
      },
    ]
  },
  quickbooks: {
    name: 'QuickBooks',
    icon: 'fas fa-calculator',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Ctrl + 1', desc: 'Open Home', usage: 'Opens the QuickBooks Home page.' },
          { keys: 'Ctrl + W', desc: 'Chart of Accounts', usage: 'Opens the Chart of Accounts list.' },
          { keys: 'Ctrl + A', desc: 'Accounts List', usage: 'Opens the full list of all accounts.' },
          { keys: 'Ctrl + J', desc: 'Customer Center', usage: 'Opens the Customer Center.' },
          { keys: 'Ctrl + U', desc: 'Vendor Center', usage: 'Opens the Vendor Center.' },
          { keys: 'Ctrl + K', desc: 'Employee Center', usage: 'Opens the Employee Center.' },
          { keys: 'F1', desc: 'Help', usage: 'Opens QuickBooks Help window.' },
          { keys: 'F2', desc: 'Product Information', usage: 'Shows product and license info.' },
        ]
      },
      {
        name: 'Transactions',
        shortcuts: [
          { keys: 'Ctrl + I', desc: 'Create Invoice', usage: 'Opens a new blank invoice form.' },
          { keys: 'Ctrl + E', desc: 'Edit Transaction', usage: 'Opens the selected transaction for editing.' },
          { keys: 'Ctrl + D', desc: 'Delete Transaction', usage: 'Deletes the currently selected transaction.' },
          { keys: 'Ctrl + M', desc: 'Memorize Transaction', usage: 'Memorizes the transaction for recurring use.' },
          { keys: 'Ctrl + N', desc: 'New Transaction', usage: 'Creates a new transaction of the same type.' },
          { keys: 'Ctrl + T', desc: 'Memorized List', usage: 'Opens the memorized transactions list.' },
          { keys: 'Ctrl + L', desc: 'Open List', usage: 'Opens the list associated with current field.' },
          { keys: 'Ctrl + Q', desc: 'Quick Report', usage: 'Generates a quick report on selected item.' },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          { keys: 'Ctrl + Z', desc: 'Undo', usage: 'Undoes the last action.' },
          { keys: 'Ctrl + C', desc: 'Copy', usage: 'Copies selected text or data.' },
          { keys: 'Ctrl + V', desc: 'Paste', usage: 'Pastes clipboard content.' },
          { keys: 'Ctrl + X', desc: 'Cut', usage: 'Cuts selected text or data.' },
          { keys: 'Ctrl + F', desc: 'Find', usage: 'Opens the Find transactions window.' },
          { keys: 'Ctrl + H', desc: 'Find & Replace', usage: 'Opens Find and Replace dialog.' },
          { keys: 'Ctrl + G', desc: 'Register', usage: 'Opens the register for the selected account.' },
          { keys: 'Ctrl + R', desc: 'Use Register', usage: 'Opens the register window.' },
          { keys: 'Ctrl + Y', desc: 'Transaction Journal', usage: 'Shows the journal entry for the transaction.' },
        ]
      },
      {
        name: 'Reports',
        shortcuts: [
          { keys: 'Ctrl + Shift + P', desc: 'Print Report', usage: 'Prints the currently displayed report.' },
          { keys: 'Ctrl + Shift + E', desc: 'Export to Excel', usage: 'Exports the current report to Excel.' },
          { keys: 'Ctrl + Shift + S', desc: 'Save Report', usage: 'Saves report customizations.' },
          { keys: 'Ctrl + P', desc: 'Print', usage: 'Opens print dialog for current window.' },
        ]
      },
      {
        name: 'Date Fields',
        shortcuts: [
          { keys: 'T', desc: 'Today', usage: 'Sets date field to today.' },
          { keys: 'W', desc: 'First Day of Week', usage: 'Sets to first day of current week.' },
          { keys: 'K', desc: 'Last Day of Week', usage: 'Sets to last day of current week.' },
          { keys: 'M', desc: 'First Day of Month', usage: 'Sets to first day of current month.' },
          { keys: 'H', desc: 'Last Day of Month', usage: 'Sets to last day of current month.' },
          { keys: 'Y', desc: 'First Day of Year', usage: 'Sets to first day of current year.' },
          { keys: 'R', desc: 'Last Day of Year', usage: 'Sets to last day of current year.' },
          { keys: '+', desc: 'Next Day', usage: 'Advances date by one day.' },
          { keys: '-', desc: 'Previous Day', usage: 'Goes back one day.' },
          { keys: 'Alt + Down', desc: 'Open Calendar', usage: 'Opens the calendar picker in date fields.' },
        ]
      },
    ]
  },
  zendesk: {
    name: 'Zendesk',
    icon: 'fas fa-headset',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          { keys: 'Alt + D', desc: 'Dashboard', usage: 'Navigate to the agent dashboard.' },
          { keys: 'Alt + V', desc: 'Views', usage: 'Open the Views panel to see ticket queues.' },
          { keys: 'Alt + N', desc: 'New Ticket', usage: 'Create a new support ticket from any page.' },
          { keys: 'Ctrl + Alt + T', desc: 'Search', usage: 'Open search to find tickets, users, or orgs.' },
          { keys: 'Alt + H', desc: 'Home', usage: 'Navigate to the Zendesk home page.' },
          { keys: 'Alt + R', desc: 'Reporting', usage: 'Open the reporting analytics section.' },
        ]
      },
      {
        name: 'Ticket Actions',
        shortcuts: [
          { keys: 'Ctrl + Enter', desc: 'Submit Ticket', usage: 'Submit the current ticket with selected status.' },
          { keys: 'Ctrl + Alt + S', desc: 'Submit as Solved', usage: 'Submit and mark the ticket as Solved.' },
          { keys: 'Ctrl + Alt + P', desc: 'Submit as Pending', usage: 'Submit and mark the ticket as Pending.' },
          { keys: 'Ctrl + Alt + O', desc: 'Submit as Open', usage: 'Submit and mark the ticket as Open.' },
          { keys: 'Ctrl + Alt + H', desc: 'Submit as On-Hold', usage: 'Submit and mark the ticket as On-Hold.' },
          { keys: 'Ctrl + Alt + M', desc: 'Apply Macro', usage: 'Open the macro list to apply a preset response.' },
          { keys: 'Ctrl + Alt + J', desc: 'Assign to Me', usage: 'Assign the current ticket to yourself.' },
          { keys: 'Ctrl + Alt + A', desc: 'Add CC', usage: 'Add a CC recipient to the ticket.' },
        ]
      },
      {
        name: 'Editor & Formatting',
        shortcuts: [
          { keys: 'Ctrl + B', desc: 'Bold', usage: 'Apply bold formatting to selected text.' },
          { keys: 'Ctrl + I', desc: 'Italic', usage: 'Apply italic formatting to selected text.' },
          { keys: 'Ctrl + U', desc: 'Underline', usage: 'Apply underline formatting to selected text.' },
          { keys: 'Ctrl + Shift + L', desc: 'Bulleted List', usage: 'Insert a bulleted list.' },
          { keys: 'Ctrl + Shift + 7', desc: 'Numbered List', usage: 'Insert a numbered list.' },
          { keys: 'Ctrl + K', desc: 'Insert Link', usage: 'Insert a hyperlink in the editor.' },
          { keys: 'Ctrl + Shift + X', desc: 'Code Block', usage: 'Insert a code block in the response.' },
          { keys: '/', desc: 'Slash Command', usage: 'Type / in chat to access shortcuts and macros.' },
        ]
      },
      {
        name: 'Chat & Messaging',
        shortcuts: [
          { keys: 'Ctrl + .', desc: 'Close Chat', usage: 'Close the current chat window.' },
          { keys: 'Ctrl + Shift + Tab', desc: 'Previous Chat', usage: 'Switch to the previous open chat.' },
          { keys: 'Ctrl + Tab', desc: 'Next Chat', usage: 'Switch to the next open chat.' },
          { keys: 'Ctrl + Shift + I', desc: 'Internal Note', usage: 'Toggle internal note mode for agent-only comments.' },
          { keys: 'Ctrl + /', desc: 'Show Shortcuts', usage: 'Display all keyboard shortcuts.' },
        ]
      },
    ]
  },
  slurm: {
    name: 'Slurm',
    icon: 'fas fa-list-check',
    categories: [
      {
        name: 'Job Submission',
        shortcuts: [
          { keys: 'sbatch script.sh', desc: 'Submit batch job', usage: 'Submit a job script for later execution. The script contains #SBATCH directives specifying resources like nodes, time, and memory.' },
          { keys: 'srun --pty bash', desc: 'Interactive session', usage: 'Start an interactive allocation and open a shell directly on a compute node.' },
          { keys: 'salloc -N1 -c4', desc: 'Allocate resources', usage: 'Request an interactive resource allocation (1 node, 4 cores) without launching a task yet.' },
          { keys: 'sbcast file /tmp/file', desc: 'Broadcast file', usage: 'Copy a file from local disk to local storage on every node allocated to a job.' },
        ]
      },
      {
        name: 'Job Monitoring',
        shortcuts: [
          { keys: 'squeue', desc: 'View job queue', usage: 'List queued and running jobs across the cluster with their state (R=running, PD=pending).' },
          { keys: 'squeue -u $USER', desc: 'View own jobs', usage: 'Filter the queue to show only jobs submitted by the current user.' },
          { keys: 'scancel jobid', desc: 'Cancel job', usage: 'Cancel a pending or running job by its job ID.' },
          { keys: 'scancel -u $USER', desc: 'Cancel all your jobs', usage: 'Cancel every job currently submitted by the current user.' },
          { keys: 'sattach jobid.stepid', desc: 'Attach to job', usage: 'Attach terminal input, output, and error streams to a currently running job step.' },
        ]
      },
      {
        name: 'Cluster Info & Accounting',
        shortcuts: [
          { keys: 'sinfo', desc: 'Cluster status', usage: 'Show the state of partitions and nodes managed by Slurm.' },
          { keys: 'sinfo -N -l', desc: 'Node detail', usage: 'List every node individually with CPU count, memory, and state in long format.' },
          { keys: 'scontrol show job jobid', desc: 'Job details', usage: 'Show comprehensive configuration and state details for a specific job.' },
          { keys: 'scontrol show node name', desc: 'Node details', usage: 'Show hardware configuration and current state of a specific node.' },
          { keys: 'sacct -j jobid', desc: 'Job accounting', usage: 'Report accounting information (CPU time, memory, exit code) for a completed or running job.' },
          { keys: 'sacct -u $USER --starttime today', desc: 'Today\'s jobs', usage: 'List today\'s jobs for the current user along with resource usage.' },
          { keys: 'sprio', desc: 'Job priority', usage: 'Show the factors contributing to a pending job\'s scheduling priority.' },
          { keys: 'sshare', desc: 'Fair-share usage', usage: 'Show a user\'s or account\'s fair-share usage of the cluster over time.' },
        ]
      },
    ]
  },
  dcgmi: {
    name: 'NVIDIA DCGM',
    icon: 'fas fa-heart-pulse',
    categories: [
      {
        name: 'Diagnostics & Health',
        shortcuts: [
          { keys: 'dcgmi diag -r 1', desc: 'Quick diagnostic', usage: 'Run the fastest Level 1 diagnostic, completing in a few seconds.' },
          { keys: 'dcgmi diag -r 2', desc: 'Medium diagnostic', usage: 'Run the Level 2 diagnostic, adding a short stress test (about 2 minutes).' },
          { keys: 'dcgmi diag -r 3', desc: 'Full diagnostic', usage: 'Run the Level 3 diagnostic with extended stress tests (about 15 minutes) — the standard evidence to collect before an RMA.' },
          { keys: 'dcgmi health -s a', desc: 'Start health watch', usage: 'Enable background health monitoring for all systems: PCIe, memory, power, and thermal.' },
          { keys: 'dcgmi health -c', desc: 'Check health', usage: 'Run a health check against all discovered GPUs and report any active issues.' },
        ]
      },
      {
        name: 'Monitoring & Management',
        shortcuts: [
          { keys: 'dcgmi discovery -l', desc: 'List GPUs', usage: 'List all GPUs discovered by DCGM on this host.' },
          { keys: 'dcgmi dmon', desc: 'Device monitor', usage: 'Stream live per-GPU metrics — utilization, memory, temperature — to the terminal.' },
          { keys: 'dcgmi group -c name', desc: 'Create group', usage: 'Create a named group of GPUs to manage and query together.' },
          { keys: 'dcgmi group -g id -a 0,1', desc: 'Add GPUs to group', usage: 'Add specific GPU IDs to an existing DCGM group.' },
          { keys: 'dcgmi stats -e', desc: 'Enable job stats', usage: 'Enable per-job statistics collection for a GPU group.' },
          { keys: 'dcgmi config --get', desc: 'Show config', usage: 'Display the current DCGM configuration applied to all GPUs.' },
          { keys: 'dcgmi topo -g id', desc: 'Group topology', usage: 'Show the NVLink and PCIe topology for GPUs in a group.' },
          { keys: 'nv-hostengine', desc: 'Start host engine', usage: 'Start the DCGM host engine daemon; required before dcgmi can connect.' },
          { keys: 'dcgmi -v', desc: 'Version', usage: 'Print the installed DCGM version.' },
        ]
      },
    ]
  },
  torchrun: {
    name: 'torchrun',
    icon: 'fas fa-diagram-project',
    categories: [
      {
        name: 'Core Flags',
        shortcuts: [
          { keys: 'torchrun script.py', desc: 'Single-GPU run', usage: 'Run a script with the default single-process, single-GPU configuration.' },
          { keys: '--nproc_per_node=N', desc: 'Processes per node', usage: 'Number of processes — typically one per GPU — to launch on each node.' },
          { keys: '--nnodes=N', desc: 'Node count', usage: 'Total number of nodes participating in the distributed job.' },
          { keys: '--node_rank=N', desc: 'Node rank', usage: 'This node\'s rank (0-indexed) among all participating nodes; set differently on each machine.' },
          { keys: '--master_addr=IP', desc: 'Master address', usage: 'IP address of the rank-0 node that other workers connect to for coordination.' },
          { keys: '--master_port=PORT', desc: 'Master port', usage: 'TCP port on the master node used for the rendezvous connection.' },
        ]
      },
      {
        name: 'Rendezvous & Elasticity',
        shortcuts: [
          { keys: '--rdzv_backend=c10d', desc: 'Rendezvous backend', usage: 'Coordination backend for elastic launches; c10d is the recommended default.' },
          { keys: '--rdzv_id=JOBID', desc: 'Rendezvous ID', usage: 'Unique identifier for the job, shared by all nodes so they can find each other.' },
          { keys: '--rdzv_endpoint=IP:PORT', desc: 'Rendezvous endpoint', usage: 'Address workers use to join the rendezvous, an alternative to setting master_addr/master_port.' },
          { keys: '--standalone', desc: 'Standalone mode', usage: 'Run a single-node job without needing any rendezvous configuration.' },
          { keys: '--max_restarts=N', desc: 'Max restarts', usage: 'Maximum number of worker group restarts allowed before the job is marked failed.' },
          { keys: '--log_dir=PATH', desc: 'Log directory', usage: 'Directory where per-worker stdout and stderr logs are written.' },
        ]
      },
    ]
  },
  mpirun: {
    name: 'OpenMPI (mpirun)',
    icon: 'fas fa-circle-nodes',
    categories: [
      {
        name: 'Launching',
        shortcuts: [
          { keys: 'mpirun -n 4 ./prog', desc: 'Run N processes', usage: 'Launch 4 copies of the program across the allocated resources.' },
          { keys: '--hostfile hosts.txt', desc: 'Host file', usage: 'Specify a file listing hosts and slot counts to run on.' },
          { keys: '-H host1,host2', desc: 'Host list', usage: 'Comma-delimited list of hosts to launch processes on directly.' },
          { keys: '-N 4', desc: 'Processes per node', usage: 'Launch 4 processes on each allocated node (synonym: --npernode).' },
          { keys: '--map-by node', desc: 'Mapping policy', usage: 'Distribute processes round-robin across nodes instead of filling one node first.' },
          { keys: '--bind-to core', desc: 'CPU binding', usage: 'Bind each process to a specific CPU core for consistent performance.' },
        ]
      },
      {
        name: 'Environment & Debugging',
        shortcuts: [
          { keys: '-x VAR', desc: 'Export env variable', usage: 'Export an environment variable from the launching shell to every process.' },
          { keys: '--mca key value', desc: 'Set MCA parameter', usage: 'Pass a Modular Component Architecture parameter to tune Open MPI\'s behavior.' },
          { keys: '--allow-run-as-root', desc: 'Allow root', usage: 'Permit mpirun to launch as the root user; discouraged outside containers.' },
          { keys: '--display-map', desc: 'Show process map', usage: 'Print the mapped location of every process before launch, useful for debugging placement.' },
          { keys: '--oversubscribe', desc: 'Oversubscribe', usage: 'Allow launching more processes than available CPU slots.' },
          { keys: '-V', desc: 'Version', usage: 'Print the Open MPI version and exit.' },
        ]
      },
    ]
  },
  weka: {
    name: 'WEKA',
    icon: 'fas fa-bolt',
    categories: [
      {
        name: 'Cluster & Status',
        shortcuts: [
          { keys: 'weka status', desc: 'Cluster status', usage: 'Show the overall status and health of the WEKA cluster.' },
          { keys: 'weka fs', desc: 'List filesystems', usage: 'List all filesystems defined in this WEKA cluster.' },
          { keys: 'weka cluster', desc: 'Cluster management', usage: 'Show cluster-level info and manage cluster membership.' },
          { keys: 'weka alerts', desc: 'List alerts', usage: 'List active alerts in the WEKA cluster.' },
          { keys: 'weka events', desc: 'List events', usage: 'List all events matching the filter criteria.' },
        ]
      },
      {
        name: 'Filesystem & Mount',
        shortcuts: [
          { keys: 'weka fs create name group size', desc: 'Create filesystem', usage: 'Create a new WekaFS filesystem in the given filesystem group.' },
          { keys: 'mount -t wekafs backend/fs /mnt/weka', desc: 'Mount filesystem', usage: 'Mount a WekaFS filesystem on a client using the wekafs driver.' },
          { keys: 'umount /mnt/weka', desc: 'Unmount filesystem', usage: 'Unmount a mounted WekaFS filesystem.' },
          { keys: 'weka fs snapshot create fs snap', desc: 'Create snapshot', usage: 'Create a point-in-time snapshot of a filesystem.' },
          { keys: 'weka nfs interface-group', desc: 'Manage NFS', usage: 'List and manage NFS interface groups and client permissions.' },
        ]
      },
      {
        name: 'Monitoring & Access',
        shortcuts: [
          { keys: 'weka stats', desc: 'List statistics', usage: 'List all statistics that conform to the filter criteria.' },
          { keys: 'weka user', desc: 'List users', usage: 'List users defined in the WEKA cluster.' },
          { keys: 'weka diags', desc: 'Diagnostics', usage: 'Run diagnostics to help understand the status of the cluster and its environment.' },
          { keys: 'weka local status', desc: 'Local container status', usage: 'Show status of the WEKA containers running on the local machine.' },
        ]
      },
    ]
  },
  netapp: {
    name: 'NetApp ONTAP',
    icon: 'fas fa-cubes',
    categories: [
      {
        name: 'Cluster & Node',
        shortcuts: [
          { keys: 'cluster show', desc: 'Cluster status', usage: 'Show cluster nodes, health, and eligibility.' },
          { keys: 'system node image show', desc: 'ONTAP version', usage: 'Show the running ONTAP version and default boot image per node.' },
          { keys: 'storage failover show', desc: 'HA status', usage: 'Show high-availability takeover and giveback status between node pairs.' },
          { keys: 'network interface show', desc: 'LIF status', usage: 'List logical interfaces (LIFs) and the ports they are currently using.' },
          { keys: 'event log show', desc: 'Event log', usage: 'Show recent EMS (Event Management System) log entries.' },
        ]
      },
      {
        name: 'Storage & Aggregates',
        shortcuts: [
          { keys: 'storage aggregate show', desc: 'Aggregate status', usage: 'Show size, used%, state, and RAID status of all aggregates.' },
          { keys: 'storage aggregate show-space', desc: 'Aggregate space detail', usage: 'Break down aggregate space usage by feature: volumes, metadata, snapshot reserve.' },
          { keys: 'storage disk show', desc: 'Disk inventory', usage: 'List physical disks, their aggregate assignment, and ownership.' },
          { keys: 'aggr relocation start', desc: 'Relocate aggregate', usage: 'Move an aggregate from one node to its HA partner.' },
          { keys: 'vserver show', desc: 'List SVMs', usage: 'List Storage Virtual Machines (SVMs) and their state.' },
        ]
      },
      {
        name: 'Volumes & Data Protection',
        shortcuts: [
          { keys: 'volume show', desc: 'Volume status', usage: 'List volumes with size, used%, and state.' },
          { keys: 'volume create', desc: 'Create volume', usage: 'Create a new FlexVol volume on a specified aggregate.' },
          { keys: 'volume show-space', desc: 'Volume space detail', usage: 'Break down volume space usage: user data, snapshots, and metadata.' },
          { keys: 'snapmirror show', desc: 'Replication status', usage: 'Show SnapMirror replication relationships and their status.' },
        ]
      },
    ]
  },
  ddn_exascaler: {
    name: 'DDN EXAScaler (Lustre)',
    icon: 'fas fa-boxes-stacked',
    categories: [
      {
        name: 'Filesystem Status',
        shortcuts: [
          { keys: 'lfs df -h', desc: 'Filesystem usage', usage: 'Show disk space usage across all OSTs and MDTs, human-readable.' },
          { keys: 'lfs df -i', desc: 'Inode usage', usage: 'Show inode consumption per OST and MDT.' },
          { keys: 'lfs osts', desc: 'List OSTs', usage: 'List all Object Storage Targets in the filesystem.' },
          { keys: 'lfs mdts', desc: 'List MDTs', usage: 'List all Metadata Targets in the filesystem.' },
          { keys: 'lfs check servers', desc: 'Check server status', usage: 'Check the status of all MDT and OST servers.' },
        ]
      },
      {
        name: 'Striping & Files',
        shortcuts: [
          { keys: 'lfs getstripe file', desc: 'Show striping', usage: 'Show the striping pattern (which OSTs are used) for a file or directory.' },
          { keys: 'lfs setstripe -c n dir', desc: 'Set striping', usage: 'Set the default stripe count for new files created in a directory.' },
          { keys: 'lfs find path -type f', desc: 'Find files', usage: 'Find files matching criteria without the heavy metadata load of a regular find.' },
          { keys: 'lfs quota -u user path', desc: 'Show user quota', usage: 'Display block and inode quota usage for a user.' },
        ]
      },
      {
        name: 'Cluster Management',
        shortcuts: [
          { keys: 'lctl dl', desc: 'List devices', usage: 'List local Lustre devices (OSC/MDC connections) on this node.' },
          { keys: 'lctl ping nid', desc: 'Ping Lustre node', usage: 'Test LNet connectivity to a target node ID.' },
          { keys: 'lctl get_param param', desc: 'Get parameter', usage: 'Read a live Lustre tunable parameter, e.g. a target\'s recovery_status.' },
          { keys: 'lctl list_nids', desc: 'List network IDs', usage: 'Show which LNet network (tcp, o2ib) this node is using.' },
        ]
      },
    ]
  },
  vast_data: {
    name: 'VAST Data',
    icon: 'fas fa-maximize',
    categories: [
      {
        name: 'Cluster & Management',
        shortcuts: [
          { keys: 'vms modify --mgmt-data-vip ip', desc: 'Set data-network VIP', usage: 'Expose the VAST Management Service (VMS) on the data network for tenant access.' },
          { keys: 'manager create --user-type type', desc: 'Create admin', usage: 'Create a cluster or tenant admin user for VMS.' },
          { keys: 'role create --tenant-id id', desc: 'Create role', usage: 'Create an access role scoped to a specific tenant.' },
          { keys: 'realm create --tenant-id id', desc: 'Create realm', usage: 'Create a management realm scoped to a tenant.' },
        ]
      },
      {
        name: 'Views & Data Protection',
        shortcuts: [
          { keys: 'view create --path path --protocols nfs', desc: 'Create view', usage: 'Create a new NFS, SMB, or S3 view (export) on the cluster.' },
          { keys: 'view modify --path path', desc: 'Modify view', usage: 'Change protocol or policy settings on an existing view.' },
          { keys: 'snapshot create --path path --name name', desc: 'Create snapshot', usage: 'Create an indestructible point-in-time snapshot of a view.' },
          { keys: 'clone create --source-path p --destination-path p2', desc: 'Create clone', usage: 'Create a writable clone of a view from a snapshot.' },
        ]
      },
      {
        name: 'Tenants & QoS',
        shortcuts: [
          { keys: 'tenant create --capacity-rules rules', desc: 'Create tenant', usage: 'Create a new multi-tenant partition with capacity limits.' },
          { keys: 'qospolicy create --is-gold', desc: 'Create QoS policy', usage: 'Create a high-priority (gold) quality-of-service policy for a view.' },
          { keys: 'quota create --hard-limit size', desc: 'Create quota', usage: 'Set a hard capacity limit on a view or tenant.' },
          { keys: 'tenant show-client-metrics', desc: 'Client metrics', usage: 'Show a tenant\'s per-client NFS operation statistics.' },
        ]
      },
    ]
  },
  pure_storage: {
    name: 'Pure Storage FlashBlade',
    icon: 'fas fa-droplet',
    categories: [
      {
        name: 'Filesystems & Volumes',
        shortcuts: [
          { keys: 'purefs create --size size fs', desc: 'Create filesystem', usage: 'Create and export a new FlashBlade filesystem.' },
          { keys: 'purefs list', desc: 'List filesystems', usage: 'List all filesystems with size, usage, and enabled protocols.' },
          { keys: 'purevol create name --size size', desc: 'Create volume', usage: 'Create a new block volume.' },
          { keys: 'purevol list', desc: 'List volumes', usage: 'List all volumes with size and connection info.' },
          { keys: 'purevol snap name', desc: 'Snapshot volume', usage: 'Create a point-in-time snapshot of a volume.' },
        ]
      },
      {
        name: 'Array & Hardware',
        shortcuts: [
          { keys: 'purearray list', desc: 'Array info', usage: 'Show array name, ID, Purity version, and OS.' },
          { keys: 'purehw list', desc: 'Hardware inventory', usage: 'List hardware components (blades, chassis) with serial numbers.' },
          { keys: 'puredrive list', desc: 'Drive status', usage: 'List physical drives and their health status.' },
          { keys: 'purelog list', desc: 'List logs', usage: 'List available diagnostic log bundles.' },
        ]
      },
      {
        name: 'Network & Admin',
        shortcuts: [
          { keys: 'purenetwork list', desc: 'Network config', usage: 'List configured network interfaces and virtual IPs.' },
          { keys: 'purenetwork create vip name --address ip', desc: 'Create VIP', usage: 'Create a virtual IP for data or management traffic.' },
          { keys: 'pureadmin create --api-token', desc: 'Create API token', usage: 'Generate an API token for programmatic or REST access.' },
          { keys: 'purealert list', desc: 'List alerts', usage: 'List current array alerts and their severity.' },
        ]
      },
    ]
  },
  nccl_tests: {
    name: 'NCCL Tests',
    icon: 'fas fa-gauge-high',
    categories: [
      {
        name: 'Collective Benchmarks',
        shortcuts: [
          { keys: 'all_reduce_perf -b 8 -e 128M -f 2 -g 8', desc: 'All-reduce test', usage: 'Benchmark all-reduce bandwidth on a single node with 8 GPUs, scanning message sizes from 8B to 128MB.' },
          { keys: 'all_gather_perf -b 8 -e 128M -g 8', desc: 'All-gather test', usage: 'Benchmark all-gather collective bandwidth across GPUs.' },
          { keys: 'broadcast_perf -b 8 -e 128M -g 8', desc: 'Broadcast test', usage: 'Benchmark broadcast collective bandwidth from a root GPU.' },
          { keys: 'reduce_scatter_perf -b 8 -e 128M -g 8', desc: 'Reduce-scatter test', usage: 'Benchmark reduce-scatter collective bandwidth.' },
          { keys: 'alltoall_perf -b 8 -e 128M -g 8', desc: 'All-to-all test', usage: 'Benchmark all-to-all collective bandwidth, the most demanding pattern on network fabric.' },
        ]
      },
      {
        name: 'Flags & Multi-Node',
        shortcuts: [
          { keys: '-b size', desc: 'Min message size', usage: 'Set the starting message size for the scan, e.g. 8 for 8 bytes.' },
          { keys: '-e size', desc: 'Max message size', usage: 'Set the ending message size for the scan, e.g. 128M for 128 MiB.' },
          { keys: '-f factor', desc: 'Step factor', usage: 'Multiply the message size by this factor between each step; 2 means doubling.' },
          { keys: '-g n', desc: 'GPUs per process', usage: 'Number of GPUs each process (rank) uses.' },
          { keys: 'mpirun -np n -N ppn all_reduce_perf -g 1', desc: 'Multi-node run', usage: 'Launch the test across multiple nodes via MPI, typically one GPU per rank.' },
        ]
      },
      {
        name: 'Diagnostics',
        shortcuts: [
          { keys: '-c 1', desc: 'Check correctness', usage: 'Verify collective results are numerically correct on each iteration.' },
          { keys: '-w n', desc: 'Warmup iterations', usage: 'Number of warmup iterations to run before timing begins.' },
          { keys: '-J out.json', desc: 'JSON output', usage: 'Write machine-readable results to a JSON file for automated analysis.' },
        ]
      },
    ]
  },
  osu_benchmarks: {
    name: 'OSU Micro-Benchmarks',
    icon: 'fas fa-stopwatch',
    categories: [
      {
        name: 'Point-to-Point Tests',
        shortcuts: [
          { keys: 'osu_latency', desc: 'Latency test', usage: 'Measure round-trip latency for a single point-to-point message between two ranks.' },
          { keys: 'osu_bw', desc: 'Bandwidth test', usage: 'Measure unidirectional bandwidth between two ranks.' },
          { keys: 'osu_bibw', desc: 'Bidirectional bandwidth', usage: 'Measure bidirectional bandwidth with both ranks sending simultaneously.' },
          { keys: 'osu_multi_lat', desc: 'Multi-pair latency', usage: 'Measure latency across multiple simultaneous rank pairs.' },
          { keys: 'osu_mbw_mr', desc: 'Multi bandwidth/message rate', usage: 'Measure aggregate bandwidth and message rate across multiple pairs.' },
        ]
      },
      {
        name: 'Collective Tests',
        shortcuts: [
          { keys: 'osu_allreduce', desc: 'Allreduce latency', usage: 'Measure MPI_Allreduce collective latency across all ranks.' },
          { keys: 'osu_allgather', desc: 'Allgather latency', usage: 'Measure MPI_Allgather collective latency.' },
          { keys: 'osu_alltoall', desc: 'Alltoall latency', usage: 'Measure MPI_Alltoall collective latency.' },
          { keys: 'osu_bcast', desc: 'Broadcast latency', usage: 'Measure MPI_Bcast collective latency from a root rank.' },
          { keys: 'osu_reduce', desc: 'Reduce latency', usage: 'Measure MPI_Reduce collective latency to a root rank.' },
        ]
      },
      {
        name: 'GPU & Launch Options',
        shortcuts: [
          { keys: 'mpirun -np 2 osu_bw d d', desc: 'GPU-to-GPU test', usage: 'Run the bandwidth test with buffers on the accelerator device (\'D\') instead of host memory (\'H\').' },
          { keys: 'osu_latency -m 2:128', desc: 'Set message range', usage: 'Limit the test to message sizes between 2 and 128 bytes.' },
        ]
      },
    ]
  },
  imb: {
    name: 'Intel MPI Benchmarks (IMB)',
    icon: 'fas fa-arrows-left-right',
    categories: [
      {
        name: 'Single Transfer (IMB-MPI1)',
        shortcuts: [
          { keys: 'mpirun -np 2 IMB-MPI1 PingPong', desc: 'PingPong test', usage: 'Measure point-to-point latency and bandwidth between two ranks.' },
          { keys: 'mpirun -np 2 IMB-MPI1 PingPing', desc: 'PingPing test', usage: 'Measure bidirectional latency with both ranks sending simultaneously.' },
          { keys: 'mpirun -np 4 IMB-MPI1 Sendrecv', desc: 'Sendrecv test', usage: 'Measure bandwidth in a periodic ring communication pattern.' },
          { keys: 'mpirun -np 4 IMB-MPI1 Exchange', desc: 'Exchange test', usage: 'Measure bandwidth when each rank exchanges data with both neighbors.' },
        ]
      },
      {
        name: 'Collective Benchmarks',
        shortcuts: [
          { keys: 'mpirun -np 8 IMB-MPI1 Allreduce', desc: 'Allreduce test', usage: 'Benchmark the MPI_Allreduce collective operation.' },
          { keys: 'mpirun -np 8 IMB-MPI1 Allgather', desc: 'Allgather test', usage: 'Benchmark the MPI_Allgather collective operation.' },
          { keys: 'mpirun -np 8 IMB-MPI1 Alltoall', desc: 'Alltoall test', usage: 'Benchmark the MPI_Alltoall collective operation.' },
          { keys: 'mpirun -np 8 IMB-MPI1 Bcast', desc: 'Broadcast test', usage: 'Benchmark the MPI_Bcast collective operation.' },
          { keys: 'mpirun -np 8 IMB-MPI1 Barrier', desc: 'Barrier test', usage: 'Benchmark MPI_Barrier synchronization overhead.' },
        ]
      },
      {
        name: 'Control Flags',
        shortcuts: [
          { keys: '-msglog min:max', desc: 'Set message size range', usage: 'Set transfer sizes as powers of two, e.g. 2:16 for 4 bytes up to 64KB.' },
          { keys: '-include name', desc: 'Include benchmark', usage: 'Add a specific benchmark to the run alongside the defaults.' },
          { keys: '-npmin n', desc: 'Minimum process count', usage: 'Set the minimum number of active processes for a benchmark.' },
        ]
      },
    ]
  },
  hpl: {
    name: 'HPL (Linpack)',
    icon: 'fas fa-calculator',
    categories: [
      {
        name: 'Running HPL',
        shortcuts: [
          { keys: 'mpirun -np 16 ./xhpl', desc: 'Run HPL benchmark', usage: 'Launch the Linpack solver across 16 MPI ranks, reading HPL.dat for configuration.' },
          { keys: 'mpirun -np 8 --map-by l3cache ./xhpl', desc: 'Cache-aware mapping', usage: 'Bind ranks to L3 cache domains for better memory locality on multi-socket nodes.' },
          { keys: 'mpirun -np 8 --bind-to core ./xhpl', desc: 'Core binding', usage: 'Pin each MPI rank to a dedicated CPU core for consistent performance.' },
          { keys: 'srun -N 4 --ntasks-per-node=8 ./xhpl', desc: 'Run via Slurm', usage: 'Launch the HPL benchmark through a Slurm job allocation.' },
          { keys: 'mpiexec -f machinefile -n 32 ./xhpl', desc: 'Run with machinefile', usage: 'Launch across the nodes listed in an MPI machinefile.' },
          { keys: 'ldd xhpl', desc: 'Check library links', usage: 'Verify the compiled binary can find its BLAS and MPI shared libraries before running.' },
        ]
      },
      {
        name: 'Tuning & Verification',
        shortcuts: [
          { keys: 'vi HPL.dat', desc: 'Edit configuration', usage: 'Edit the HPL.dat input file controlling problem size (N), block size (NB), and process grid (P x Q).' },
          { keys: 'ibcheckerrors', desc: 'Check IB fabric', usage: 'Confirm the InfiniBand fabric reported no errors during the benchmark run.' },
          { keys: 'top', desc: 'Monitor CPU usage', usage: 'Confirm all MPI processes are near 100% CPU utilization during the run.' },
          { keys: 'grep Gflops HPL.out', desc: 'Read result', usage: 'Extract the achieved GFLOPS figure from the HPL output log.' },
          { keys: 'singularity run hpc-benchmarks.sif ./hpl.sh --dat file', desc: 'NVIDIA container run', usage: 'Run NVIDIA\'s optimized HPL container build, common on GPU clusters via NGC.' },
        ]
      },
    ]
  },
  gemini_cli: {
    name: "Gemini CLI",
    icon: "fas fa-terminal",
    categories: [
      { name: "Session & App Controls", shortcuts: [
        { keys: "Ctrl + C", desc: "Cancel / quit", usage: "Cancel the current request, or quit the CLI when the input is empty." },
        { keys: "Ctrl + D", desc: "Exit CLI", usage: "Exit Gemini CLI when the input buffer is empty." },
        { keys: "Ctrl + L", desc: "Clear screen", usage: "Clear the terminal screen and redraw the UI." },
        { keys: "Ctrl + T", desc: "Toggle TODO list", usage: "Show or hide the full TODO list the agent is working through." },
        { keys: "Ctrl + Y", desc: "Toggle YOLO mode", usage: "Toggle auto-approval (YOLO) mode for tool calls." },
        { keys: "Shift + Tab", desc: "Cycle approval modes", usage: "Cycle through approval modes: default, auto-edit, and plan (read-only)." },
        { keys: "Ctrl + G", desc: "Open external editor", usage: "Open the current prompt or plan in an external editor." },
        { keys: "F12", desc: "Debug console", usage: "Toggle the debug console for detailed error information." },
        { keys: "Esc Esc", desc: "Clear / rewind", usage: "Clear the input prompt, or browse and rewind previous interactions when empty." }
      ]},
      { name: "Input & History", shortcuts: [
        { keys: "Enter", desc: "Submit prompt", usage: "Submit the current prompt to the model." },
        { keys: "Ctrl + Enter", desc: "New line", usage: "Insert a newline without submitting (Alt+Enter and Ctrl+J also work)." },
        { keys: "Tab", desc: "Queue message", usage: "Queue the current prompt to run after the current task finishes." },
        { keys: "Ctrl + R", desc: "Reverse history search", usage: "Start reverse search through prompt history, like a shell." },
        { keys: "Ctrl + P / Ctrl + N", desc: "History previous / next", usage: "Show the previous or next entry in prompt history." },
        { keys: "!", desc: "Shell mode", usage: "On an empty prompt, enter or exit shell mode to run commands directly." },
        { keys: "?", desc: "Shortcuts panel", usage: "On an empty prompt, toggle the built-in keyboard shortcuts panel." },
        { keys: "Ctrl + O", desc: "Expand paste / output", usage: "Expand or collapse paste placeholders and long content blocks." }
      ]},
      { name: "Slash Commands", shortcuts: [
        { keys: "/help", desc: "List commands", usage: "Show help and list all available slash commands (alias /?)." },
        { keys: "/chat", desc: "Manage sessions", usage: "Browse, save, and resume past sessions and conversations." },
        { keys: "/rewind", desc: "Rewind conversation", usage: "Rewind the conversation history to a previous turn." },
        { keys: "/restore", desc: "Restore files", usage: "Restore files to their state before the last tool call." },
        { keys: "/model", desc: "Switch model", usage: "View or change the current model." },
        { keys: "/settings", desc: "Open settings", usage: "Open the settings editor from inside the REPL." },
        { keys: "/vim", desc: "Vim mode", usage: "Enable vim NORMAL/INSERT editing modes in the input." },
        { keys: "/auth", desc: "Switch auth", usage: "Switch to a different auth provider or account." }
      ]}
    ]
  },
  ghostty: {
    name: "Ghostty",
    icon: "fas fa-ghost",
    categories: [
      { name: "Tabs & Windows", shortcuts: [
        { keys: "Ctrl + Shift + T", desc: "New tab", usage: "Open a new tab (Cmd+T on macOS, native platform tabs)." },
        { keys: "Ctrl + Shift + N", desc: "New window", usage: "Open a new terminal window (Cmd+N on macOS)." },
        { keys: "Ctrl + Shift + W", desc: "Close surface", usage: "Close the current tab or split (Cmd+W on macOS)." },
        { keys: "Ctrl + Shift + Left / Right", desc: "Previous / next tab", usage: "Cycle between tabs (Cmd+Shift+[ and Cmd+Shift+] on macOS)." },
        { keys: "Ctrl + Shift + Q", desc: "Quit Ghostty", usage: "Quit the application (Cmd+Q on macOS)." }
      ]},
      { name: "Splits", shortcuts: [
        { keys: "Ctrl + Shift + O", desc: "Split right", usage: "Create a new split to the right (Cmd+D on macOS)." },
        { keys: "Ctrl + Shift + E", desc: "Split down", usage: "Create a new split below (Cmd+Shift+D on macOS)." },
        { keys: "Ctrl + Alt + Arrows", desc: "Focus split", usage: "Move focus to the split in that direction (Cmd+Alt+Arrows on macOS)." },
        { keys: "Super + Ctrl + Arrows", desc: "Resize split", usage: "Resize the current split by 10px in that direction." },
        { keys: "Super + Ctrl + =", desc: "Equalize splits", usage: "Make all splits in the window equal size." },
        { keys: "Cmd + Shift + Enter", desc: "Zoom split", usage: "Temporarily maximize the focused split, press again to restore (macOS)." }
      ]},
      { name: "Clipboard & Scrollback", shortcuts: [
        { keys: "Ctrl + Shift + C", desc: "Copy", usage: "Copy the selection to clipboard (Cmd+C on macOS)." },
        { keys: "Ctrl + Shift + V", desc: "Paste", usage: "Paste from clipboard (Cmd+V on macOS)." },
        { keys: "Ctrl + Shift + A", desc: "Select all", usage: "Select the entire visible terminal content." },
        { keys: "Ctrl + Shift + J", desc: "Dump scrollback", usage: "Write the scrollback buffer to a file — the standard workaround for missing built-in search." },
        { keys: "Ctrl + Shift + PgDn", desc: "Jump to prompt", usage: "Jump between shell prompts in scrollback (Cmd+Up/Down on macOS, needs shell integration)." },
        { keys: "Ctrl + Shift + ,", desc: "Reload config", usage: "Reload the configuration file at runtime (Cmd+Shift+, on macOS)." }
      ]},
      { name: "CLI Actions", shortcuts: [
        { keys: "ghostty +list-keybinds --default", desc: "List default keybinds", usage: "Print every default keybinding — the authoritative list for your version." },
        { keys: "ghostty +list-themes", desc: "Preview themes", usage: "Open an interactive TUI preview of all built-in themes." },
        { keys: "ghostty +list-actions", desc: "List actions", usage: "List every action you can bind in the config file." },
        { keys: "ghostty +show-config", desc: "Show config", usage: "Print the fully resolved current configuration." }
      ]}
    ]
  },
  comet: {
    name: "Perplexity Comet",
    icon: "fas fa-meteor",
    categories: [
      { name: "AI Assistant", shortcuts: [
        { keys: "Alt + A", desc: "Open Assistant", usage: "Open the Comet Assistant sidebar on any page (Opt+A on macOS)." },
        { keys: "Opt + Shift + V", desc: "Voice mode", usage: "Launch voice mode and talk to the Assistant hands-free." },
        { keys: "Opt + S", desc: "Summarize page", usage: "Instantly ask the Assistant to summarize the current web page." },
        { keys: "/", desc: "Shortcuts menu", usage: "In the Assistant, type / to open the Comet Shortcuts list or create new ones." },
        { keys: "/shortcut-name", desc: "Run custom shortcut", usage: "Trigger a saved prompt automation, e.g. /summarize or /dailybrief." },
        { keys: "Shift + Enter", desc: "Google search", usage: "From the address bar, search with Google instead of Perplexity." },
        { keys: "Shift + Cmd + A", desc: "Tab search", usage: "Open the command-bar style search across your open tabs." }
      ]},
      { name: "Tabs & Browsing", shortcuts: [
        { keys: "Ctrl + T", desc: "New tab", usage: "Open a new tab (Cmd+T on macOS) — Comet is Chromium-based." },
        { keys: "Ctrl + W", desc: "Close tab", usage: "Close the current tab (Cmd+W on macOS)." },
        { keys: "Ctrl + Shift + T", desc: "Reopen tab", usage: "Restore the most recently closed tab." },
        { keys: "Ctrl + L", desc: "Focus address bar", usage: "Jump to the address bar to ask Perplexity or enter a URL." },
        { keys: "Ctrl + Tab", desc: "Next tab", usage: "Cycle to the next open tab." },
        { keys: "Shift + Cmd + D", desc: "Bookmark all tabs", usage: "Save every open tab into a bookmark folder — great for end-of-day cleanup." },
        { keys: "Ctrl + D", desc: "Bookmark page", usage: "Bookmark the current page (Cmd+D on macOS)." },
        { keys: "Ctrl + Shift + N", desc: "Incognito window", usage: "Open a new incognito window." }
      ]}
    ]
  },
  atlas: {
    name: "ChatGPT Atlas",
    icon: "fas fa-atlas",
    categories: [
      { name: "ChatGPT Features", shortcuts: [
        { keys: "Cmd + Shift + A", desc: "Ask ChatGPT sidebar", usage: "Toggle the Ask ChatGPT sidebar on any page (Ctrl+Shift+A on Windows)." },
        { keys: "Cmd + /", desc: "Shortcut list", usage: "Inside ChatGPT, show the full native keyboard shortcut list." },
        { keys: "Cmd + Shift + O", desc: "New chat", usage: "Start a new ChatGPT conversation instantly." },
        { keys: "Cmd + K", desc: "Search chats", usage: "Open the chat search dialog and jump to a past conversation." },
        { keys: "Shift + Enter", desc: "New line", usage: "Add a line break in a prompt without sending." }
      ]},
      { name: "Tabs & Navigation", shortcuts: [
        { keys: "Cmd + T", desc: "New tab", usage: "Open a new tab with the AI-powered start page." },
        { keys: "Cmd + N", desc: "New window", usage: "Open a new Atlas window." },
        { keys: "Cmd + Shift + N", desc: "Incognito window", usage: "Open an incognito window — memories and history are off." },
        { keys: "Cmd + W", desc: "Close tab", usage: "Close the current tab." },
        { keys: "Ctrl + Tab", desc: "Next tab", usage: "Switch to the next tab (Cmd+Option+Right also works)." },
        { keys: "Ctrl + Shift + Tab", desc: "Previous tab", usage: "Switch to the previous tab (Cmd+Option+Left also works)." },
        { keys: "Cmd + F", desc: "Find on page", usage: "Search text on the current page." },
        { keys: "Cmd + Y", desc: "History", usage: "Open your browsing history." },
        { keys: "Cmd + Shift + M", desc: "Switch profile", usage: "Open the profile switcher to change accounts or workspaces." }
      ]},
      { name: "Developer", shortcuts: [
        { keys: "Cmd + Option + I", desc: "DevTools", usage: "Open or close the developer tools window." },
        { keys: "Cmd + Option + J", desc: "JS console", usage: "Jump straight to the JavaScript console." },
        { keys: "Cmd + Option + C", desc: "Inspect element", usage: "Open DevTools in element-inspection mode." }
      ]}
    ]
  }
,
  k9s: {
    name: 'K9s',
    icon: 'fas fa-dharmachakra',
    categories: [
      { name: 'Navigation & Views', shortcuts: [
        { keys: ':', desc: 'Command mode', usage: 'Jump to any resource view, e.g. :pods, :svc, :deploy.' },
        { keys: '/', desc: 'Filter resources', usage: 'Type to filter the current resource list; supports regex.' },
        { keys: 'Esc', desc: 'Back / clear filter', usage: 'Go back to the previous view or clear the active filter.' },
        { keys: '?', desc: 'Show keyboard help', usage: 'Display all keybindings available in the current view.' },
        { keys: 'Enter', desc: 'Drill down', usage: 'Open the selected resource, e.g. pod → containers.' },
        { keys: '0', desc: 'Show all namespaces', usage: 'List resources across every namespace at once.' },
        { keys: 'G', desc: 'Go to bottom', usage: 'Jump to the last row of the resource list.' },
        { keys: 'Ctrl + A', desc: 'List resource aliases', usage: 'Show every resource type K9s can display.' },
      ]},
      { name: 'Resource Actions', shortcuts: [
        { keys: 'D', desc: 'Describe resource', usage: 'Equivalent to kubectl describe on the selection.' },
        { keys: 'Y', desc: 'View YAML', usage: 'Show the full YAML manifest of the selected resource.' },
        { keys: 'E', desc: 'Edit resource', usage: 'Open the manifest in $EDITOR, like kubectl edit.' },
        { keys: 'L', desc: 'View logs', usage: 'Stream logs of the selected pod or container.' },
        { keys: 'S', desc: 'Open shell', usage: 'Exec an interactive shell into the selected container.' },
        { keys: 'A', desc: 'Attach to container', usage: 'Attach to the main process of the container.' },
        { keys: 'Shift + F', desc: 'Port-forward', usage: 'Set up a port-forward to the selected pod.' },
        { keys: 'Ctrl + D', desc: 'Delete resource', usage: 'Delete with a confirmation dialog.' },
        { keys: 'Ctrl + K', desc: 'Kill resource', usage: 'Force-delete immediately without confirmation — use with care.' },
        { keys: 'Space', desc: 'Mark item', usage: 'Select multiple resources for a bulk action.' },
      ]},
      { name: 'Sorting & Session', shortcuts: [
        { keys: 'Shift + C', desc: 'Sort by CPU', usage: 'Sort the pod list by CPU usage (metrics-server required).' },
        { keys: 'Shift + M', desc: 'Sort by memory', usage: 'Sort the pod list by memory usage.' },
        { keys: 'Shift + N', desc: 'Sort by name', usage: 'Sort the current resource list alphabetically.' },
        { keys: 'Shift + A', desc: 'Sort by age', usage: 'Sort resources by creation time.' },
        { keys: 'Ctrl + C', desc: 'Quit K9s', usage: 'Exit K9s and return to the terminal.' },
      ]},
    ],
  },
  lazydocker: {
    name: 'Lazydocker',
    icon: 'fab fa-docker',
    categories: [
      { name: 'Panels & Navigation', shortcuts: [
        { keys: 'X', desc: 'Open menu', usage: 'Show every keybinding available for the focused panel.' },
        { keys: '[', desc: 'Previous tab', usage: 'Switch to the previous tab inside the main panel (logs, stats, config…).' },
        { keys: ']', desc: 'Next tab', usage: 'Switch to the next tab inside the main panel.' },
        { keys: 'Enter', desc: 'Focus main panel', usage: 'Move focus into the main panel for the selected item.' },
        { keys: 'Esc', desc: 'Back', usage: 'Return focus to the side panel or close a dialog.' },
        { keys: 'PageUp', desc: 'Scroll up', usage: 'Scroll the main panel (e.g. logs) upward.' },
        { keys: 'PageDown', desc: 'Scroll down', usage: 'Scroll the main panel downward.' },
        { keys: 'Q', desc: 'Quit', usage: 'Exit Lazydocker.' },
      ]},
      { name: 'Containers & Services', shortcuts: [
        { keys: 'S', desc: 'Stop container', usage: 'Stop the selected container.' },
        { keys: 'R', desc: 'Restart container', usage: 'Restart the selected container.' },
        { keys: 'D', desc: 'Remove', usage: 'Remove the selected container, image, or volume.' },
        { keys: 'A', desc: 'Attach', usage: 'Attach the terminal to the selected container.' },
        { keys: 'M', desc: 'View logs', usage: 'Open the full log view for the selection.' },
        { keys: 'E', desc: 'Exec shell', usage: 'Open an interactive shell inside the selected container.' },
        { keys: 'C', desc: 'Run custom command', usage: 'Run a predefined custom command against the selection.' },
        { keys: 'B', desc: 'Bulk commands', usage: 'Open bulk actions, e.g. prune stopped containers or dangling images.' },
      ]},
    ],
  },
  fzf: {
    name: 'fzf',
    icon: 'fas fa-filter',
    categories: [
      { name: 'Shell Integration', shortcuts: [
        { keys: 'Ctrl + R', desc: 'Fuzzy history search', usage: 'Search shell command history interactively.' },
        { keys: 'Ctrl + T', desc: 'Insert file path', usage: 'Fuzzy-find a file or directory and paste its path at the cursor.' },
        { keys: 'Alt + C', desc: 'cd into directory', usage: 'Fuzzy-find a directory and cd into it.' },
        { keys: 'Tab', desc: 'Fuzzy completion', usage: 'Type a path followed by ** then press Tab, e.g. vim ~/**<Tab>.' },
      ]},
      { name: 'Inside the Finder', shortcuts: [
        { keys: 'Ctrl + J', desc: 'Move down', usage: 'Move the selection cursor down (also Ctrl + N or Down).' },
        { keys: 'Ctrl + K', desc: 'Move up', usage: 'Move the selection cursor up (also Ctrl + P or Up).' },
        { keys: 'Enter', desc: 'Accept selection', usage: 'Confirm the highlighted item and close the finder.' },
        { keys: 'Tab', desc: 'Toggle + down', usage: 'In multi-select mode (-m), toggle the item and move down.' },
        { keys: 'Shift + Tab', desc: 'Toggle + up', usage: 'In multi-select mode, toggle the item and move up.' },
        { keys: 'PageUp', desc: 'Page up', usage: 'Scroll the candidate list one page up.' },
        { keys: 'PageDown', desc: 'Page down', usage: 'Scroll the candidate list one page down.' },
        { keys: 'Ctrl + U', desc: 'Clear query', usage: 'Delete the entire search query.' },
        { keys: 'Ctrl + W', desc: 'Delete word', usage: 'Delete the word before the cursor in the query.' },
        { keys: 'Ctrl + A', desc: 'Start of query', usage: 'Move the cursor to the beginning of the query.' },
        { keys: 'Ctrl + E', desc: 'End of query', usage: 'Move the cursor to the end of the query.' },
        { keys: 'Esc', desc: 'Abort', usage: 'Close the finder without selecting (also Ctrl + C).' },
      ]},
    ],
  },
  zsh: {
    name: 'Zsh',
    icon: 'fas fa-terminal',
    categories: [
      { name: 'Cursor Movement', shortcuts: [
        { keys: 'Ctrl + A', desc: 'Start of line', usage: 'Move the cursor to the beginning of the command line.' },
        { keys: 'Ctrl + E', desc: 'End of line', usage: 'Move the cursor to the end of the command line.' },
        { keys: 'Alt + F', desc: 'Forward one word', usage: 'Move the cursor forward by one word.' },
        { keys: 'Alt + B', desc: 'Back one word', usage: 'Move the cursor backward by one word.' },
        { keys: 'Ctrl + F', desc: 'Forward one char', usage: 'Move the cursor right by one character.' },
        { keys: 'Ctrl + B', desc: 'Back one char', usage: 'Move the cursor left by one character.' },
      ]},
      { name: 'Editing', shortcuts: [
        { keys: 'Ctrl + U', desc: 'Kill whole line', usage: 'Delete the entire command line (Zsh default: kill-whole-line).' },
        { keys: 'Ctrl + K', desc: 'Kill to end', usage: 'Delete from the cursor to the end of the line.' },
        { keys: 'Ctrl + W', desc: 'Delete word before', usage: 'Delete the word before the cursor.' },
        { keys: 'Alt + D', desc: 'Delete word after', usage: 'Delete the word after the cursor.' },
        { keys: 'Ctrl + Y', desc: 'Yank', usage: 'Paste the most recently killed text.' },
        { keys: 'Ctrl + _', desc: 'Undo', usage: 'Undo the last edit on the command line.' },
        { keys: 'Alt + Q', desc: 'Push line', usage: 'Stash the current line, run another command, then get it back.' },
      ]},
      { name: 'History & Completion', shortcuts: [
        { keys: 'Ctrl + R', desc: 'Search history', usage: 'Incremental reverse search through command history.' },
        { keys: 'Ctrl + P', desc: 'Previous command', usage: 'Recall the previous history entry (same as Up).' },
        { keys: 'Ctrl + N', desc: 'Next command', usage: 'Recall the next history entry (same as Down).' },
        { keys: 'Alt + .', desc: 'Insert last argument', usage: 'Insert the final argument of the previous command; repeat to go further back.' },
        { keys: 'Tab', desc: 'Complete', usage: 'Trigger completion; press again to cycle the menu.' },
        { keys: 'Ctrl + L', desc: 'Clear screen', usage: 'Clear the terminal and redraw the prompt.' },
        { keys: 'Ctrl + D', desc: 'Exit / delete char', usage: 'On an empty line exits the shell; otherwise deletes the char under the cursor.' },
      ]},
    ],
  },
  fish: {
    name: 'Fish Shell',
    icon: 'fas fa-fish',
    categories: [
      { name: 'Autosuggestions', shortcuts: [
        { keys: 'Right', desc: 'Accept suggestion', usage: 'Accept the entire gray autosuggestion (also Ctrl + F).' },
        { keys: 'Alt + F', desc: 'Accept one word', usage: 'Accept only the next word of the autosuggestion.' },
        { keys: 'Up', desc: 'History prefix search', usage: 'Search history for commands starting with what you typed.' },
        { keys: 'Alt + Up', desc: 'Token search', usage: 'Search history token-by-token instead of whole lines.' },
        { keys: 'Ctrl + R', desc: 'History pager', usage: 'Open the interactive history search pager.' },
      ]},
      { name: 'Fish Specials', shortcuts: [
        { keys: 'Alt + L', desc: 'List directory', usage: 'Run ls without touching your current command line.' },
        { keys: 'Alt + P', desc: 'Append pager', usage: 'Append "&| less" to the command to page its output.' },
        { keys: 'Alt + S', desc: 'Prepend sudo', usage: 'Toggle sudo at the start of the current or previous command.' },
        { keys: 'Alt + E', desc: 'Edit in $EDITOR', usage: 'Open the current command line in your external editor (also Alt + V).' },
        { keys: 'Alt + H', desc: 'Show man page', usage: 'Open the manual page for the command under the cursor.' },
        { keys: 'Alt + W', desc: 'Describe command', usage: 'Print a short whatis description of the command under the cursor.' },
      ]},
      { name: 'Line Editing', shortcuts: [
        { keys: 'Ctrl + A', desc: 'Start of line', usage: 'Move the cursor to the beginning of the line.' },
        { keys: 'Ctrl + E', desc: 'End of line', usage: 'Move the cursor to the end of the line.' },
        { keys: 'Ctrl + U', desc: 'Kill to start', usage: 'Delete from the cursor to the beginning of the line.' },
        { keys: 'Ctrl + K', desc: 'Kill to end', usage: 'Delete from the cursor to the end of the line.' },
        { keys: 'Ctrl + W', desc: 'Delete word', usage: 'Delete the word before the cursor.' },
        { keys: 'Ctrl + L', desc: 'Clear screen', usage: 'Clear the terminal and repaint the prompt.' },
        { keys: 'Tab', desc: 'Complete', usage: 'Complete the current token; shows the pager on multiple matches.' },
      ]},
    ],
  },
  starship: {
    name: 'Starship Prompt',
    icon: 'fas fa-rocket',
    categories: [
      { name: 'Setup', shortcuts: [
        { keys: 'starship init zsh', desc: 'Enable in Zsh', usage: 'Add eval "$(starship init zsh)" to the end of ~/.zshrc.' },
        { keys: 'starship init bash', desc: 'Enable in Bash', usage: 'Add eval "$(starship init bash)" to the end of ~/.bashrc.' },
        { keys: 'starship init fish | source', desc: 'Enable in Fish', usage: 'Add to ~/.config/fish/config.fish.' },
        { keys: 'starship preset -l', desc: 'List presets', usage: 'Show all built-in prompt presets.' },
        { keys: 'starship preset nerd-font-symbols -o ~/.config/starship.toml', desc: 'Apply a preset', usage: 'Write a preset into your config file.' },
      ]},
      { name: 'Configuration', shortcuts: [
        { keys: 'starship config', desc: 'Edit config', usage: 'Open starship.toml in your default editor.' },
        { keys: 'starship print-config', desc: 'Print computed config', usage: 'Dump the fully-resolved configuration.' },
        { keys: 'starship toggle rust', desc: 'Toggle a module', usage: 'Enable/disable a module, e.g. the rust segment.' },
        { keys: 'starship module git_branch', desc: 'Render one module', usage: 'Print a single prompt module for testing.' },
        { keys: 'starship completions zsh', desc: 'Shell completions', usage: 'Generate completion scripts for your shell.' },
      ]},
      { name: 'Diagnostics', shortcuts: [
        { keys: 'starship explain', desc: 'Explain prompt', usage: 'Show which modules produced the current prompt.' },
        { keys: 'starship timings', desc: 'Module timings', usage: 'Profile how long each module takes — great for slow prompts.' },
        { keys: 'starship bug-report', desc: 'Bug report', usage: 'Create a pre-filled GitHub issue with environment info.' },
        { keys: 'starship --version', desc: 'Version', usage: 'Print the installed Starship version.' },
      ]},
    ],
  },
  kitty: {
    name: 'kitty',
    icon: 'fas fa-cat',
    categories: [
      { name: 'Windows & Tabs', shortcuts: [
        { keys: 'Ctrl + Shift + Enter', desc: 'New window', usage: 'Open a new kitty window (split) in the current tab.' },
        { keys: 'Ctrl + Shift + W', desc: 'Close window', usage: 'Close the focused kitty window.' },
        { keys: 'Ctrl + Shift + ]', desc: 'Next window', usage: 'Focus the next window in the tab.' },
        { keys: 'Ctrl + Shift + [', desc: 'Previous window', usage: 'Focus the previous window in the tab.' },
        { keys: 'Ctrl + Shift + T', desc: 'New tab', usage: 'Open a new tab.' },
        { keys: 'Ctrl + Shift + Q', desc: 'Close tab', usage: 'Close the current tab.' },
        { keys: 'Ctrl + Shift + Right', desc: 'Next tab', usage: 'Switch to the tab on the right.' },
        { keys: 'Ctrl + Shift + Left', desc: 'Previous tab', usage: 'Switch to the tab on the left.' },
        { keys: 'Ctrl + Shift + L', desc: 'Next layout', usage: 'Cycle through the enabled window layouts.' },
        { keys: 'Ctrl + Shift + Alt + T', desc: 'Set tab title', usage: 'Rename the current tab.' },
      ]},
      { name: 'Copy & Scrollback', shortcuts: [
        { keys: 'Ctrl + Shift + C', desc: 'Copy', usage: 'Copy the selection to the clipboard.' },
        { keys: 'Ctrl + Shift + V', desc: 'Paste', usage: 'Paste from the clipboard.' },
        { keys: 'Ctrl + Shift + Up', desc: 'Scroll line up', usage: 'Scroll the scrollback one line up.' },
        { keys: 'Ctrl + Shift + Down', desc: 'Scroll line down', usage: 'Scroll the scrollback one line down.' },
        { keys: 'Ctrl + Shift + PageUp', desc: 'Scroll page up', usage: 'Scroll one full page up.' },
        { keys: 'Ctrl + Shift + PageDown', desc: 'Scroll page down', usage: 'Scroll one full page down.' },
        { keys: 'Ctrl + Shift + Home', desc: 'Scroll to top', usage: 'Jump to the beginning of the scrollback.' },
        { keys: 'Ctrl + Shift + End', desc: 'Scroll to bottom', usage: 'Jump back to the prompt.' },
        { keys: 'Ctrl + Shift + H', desc: 'Open scrollback in pager', usage: 'Browse the entire scrollback in less.' },
        { keys: 'Ctrl + Shift + G', desc: 'Last command output', usage: 'Open the previous command\'s output in the pager (needs shell integration).' },
      ]},
      { name: 'Appearance & Misc', shortcuts: [
        { keys: 'Ctrl + Shift + =', desc: 'Increase font size', usage: 'Make the font larger.' },
        { keys: 'Ctrl + Shift + -', desc: 'Decrease font size', usage: 'Make the font smaller.' },
        { keys: 'Ctrl + Shift + Backspace', desc: 'Reset font size', usage: 'Restore the configured font size.' },
        { keys: 'Ctrl + Shift + F11', desc: 'Toggle fullscreen', usage: 'Enter or leave fullscreen mode.' },
        { keys: 'Ctrl + Shift + F2', desc: 'Edit kitty.conf', usage: 'Open the config file in your editor.' },
        { keys: 'Ctrl + Shift + F5', desc: 'Reload config', usage: 'Apply kitty.conf changes without restarting.' },
        { keys: 'Ctrl + Shift + E', desc: 'URL hints', usage: 'Show hints to open a URL from the screen with the keyboard.' },
        { keys: 'Ctrl + Shift + U', desc: 'Unicode input', usage: 'Insert any character by name or code point.' },
      ]},
    ],
  },
  wezterm: {
    name: 'WezTerm',
    icon: 'fas fa-window-maximize',
    categories: [
      { name: 'Tabs & Windows', shortcuts: [
        { keys: 'Ctrl + Shift + T', desc: 'New tab', usage: 'Open a new tab in the current window.' },
        { keys: 'Ctrl + Shift + W', desc: 'Close tab', usage: 'Close the current tab (with confirmation).' },
        { keys: 'Ctrl + Tab', desc: 'Next tab', usage: 'Switch to the next tab.' },
        { keys: 'Ctrl + Shift + Tab', desc: 'Previous tab', usage: 'Switch to the previous tab.' },
        { keys: 'Ctrl + Shift + N', desc: 'New window', usage: 'Open a new WezTerm OS window.' },
        { keys: 'Alt + Enter', desc: 'Toggle fullscreen', usage: 'Enter or leave fullscreen mode.' },
      ]},
      { name: 'Panes', shortcuts: [
        { keys: 'Ctrl + Shift + Alt + "', desc: 'Split vertically', usage: 'Split the current pane top/bottom.' },
        { keys: 'Ctrl + Shift + Alt + %', desc: 'Split horizontally', usage: 'Split the current pane left/right.' },
        { keys: 'Ctrl + Shift + Left', desc: 'Focus pane left', usage: 'Move focus to the pane on the left.' },
        { keys: 'Ctrl + Shift + Right', desc: 'Focus pane right', usage: 'Move focus to the pane on the right.' },
        { keys: 'Ctrl + Shift + Up', desc: 'Focus pane above', usage: 'Move focus to the pane above.' },
        { keys: 'Ctrl + Shift + Down', desc: 'Focus pane below', usage: 'Move focus to the pane below.' },
        { keys: 'Ctrl + Shift + Z', desc: 'Zoom pane', usage: 'Toggle zoom so the pane fills the whole tab.' },
      ]},
      { name: 'Copy, Search & UI', shortcuts: [
        { keys: 'Ctrl + Shift + C', desc: 'Copy', usage: 'Copy the selection to the clipboard.' },
        { keys: 'Ctrl + Shift + V', desc: 'Paste', usage: 'Paste from the clipboard.' },
        { keys: 'Ctrl + Shift + F', desc: 'Search scrollback', usage: 'Search the terminal scrollback.' },
        { keys: 'Ctrl + Shift + X', desc: 'Copy mode', usage: 'Enter keyboard-driven copy mode.' },
        { keys: 'Ctrl + Shift + Space', desc: 'Quick select', usage: 'Highlight URLs, paths, and hashes for instant copying.' },
        { keys: 'Ctrl + Shift + K', desc: 'Clear scrollback', usage: 'Wipe the scrollback buffer.' },
        { keys: 'Ctrl + Shift + P', desc: 'Command palette', usage: 'Fuzzy-search every WezTerm action.' },
        { keys: 'Shift + PageUp', desc: 'Scroll page up', usage: 'Scroll the viewport one page up.' },
        { keys: 'Shift + PageDown', desc: 'Scroll page down', usage: 'Scroll the viewport one page down.' },
        { keys: 'Ctrl + Shift + L', desc: 'Debug overlay', usage: 'Open the Lua REPL / log overlay.' },
        { keys: 'Ctrl + Shift + R', desc: 'Reload configuration', usage: 'Re-evaluate wezterm.lua immediately.' },
        { keys: 'Ctrl + =', desc: 'Increase font size', usage: 'Make the font larger.' },
        { keys: 'Ctrl + -', desc: 'Decrease font size', usage: 'Make the font smaller.' },
        { keys: 'Ctrl + 0', desc: 'Reset font size', usage: 'Restore the configured font size.' },
      ]},
    ],
  },
  alacritty: {
    name: 'Alacritty',
    icon: 'fas fa-bolt',
    categories: [
      { name: 'General', shortcuts: [
        { keys: 'Ctrl + Shift + C', desc: 'Copy', usage: 'Copy the selection to the clipboard.' },
        { keys: 'Ctrl + Shift + V', desc: 'Paste', usage: 'Paste from the clipboard.' },
        { keys: 'Ctrl + Shift + F', desc: 'Search forward', usage: 'Search the scrollback downward.' },
        { keys: 'Ctrl + Shift + B', desc: 'Search backward', usage: 'Search the scrollback upward.' },
        { keys: 'Ctrl + Shift + N', desc: 'New window', usage: 'Spawn a new Alacritty window.' },
        { keys: 'Ctrl + =', desc: 'Increase font size', usage: 'Make the font larger.' },
        { keys: 'Ctrl + -', desc: 'Decrease font size', usage: 'Make the font smaller.' },
        { keys: 'Ctrl + 0', desc: 'Reset font size', usage: 'Restore the configured font size.' },
        { keys: 'F11', desc: 'Toggle fullscreen', usage: 'Enter or leave fullscreen (Windows/Linux).' },
        { keys: 'Shift + PageUp', desc: 'Scroll page up', usage: 'Scroll the scrollback one page up.' },
        { keys: 'Shift + PageDown', desc: 'Scroll page down', usage: 'Scroll the scrollback one page down.' },
        { keys: 'Shift + Home', desc: 'Scroll to top', usage: 'Jump to the beginning of the scrollback.' },
        { keys: 'Shift + End', desc: 'Scroll to bottom', usage: 'Jump back to the prompt.' },
      ]},
      { name: 'Vi Mode', shortcuts: [
        { keys: 'Ctrl + Shift + Space', desc: 'Toggle Vi mode', usage: 'Enter keyboard-driven navigation of the scrollback.' },
        { keys: 'V', desc: 'Start selection', usage: 'Begin a character-wise selection in Vi mode.' },
        { keys: 'Y', desc: 'Copy selection', usage: 'Yank the Vi-mode selection to the clipboard.' },
        { keys: 'G', desc: 'Scrollback top/bottom', usage: 'g jumps to the top, Shift + G to the bottom of the scrollback.' },
        { keys: 'I', desc: 'Leave Vi mode', usage: 'Return to normal terminal input.' },
        { keys: 'Esc', desc: 'Clear selection', usage: 'Cancel the current Vi-mode selection.' },
      ]},
    ],
  },
  nvda: {
    name: 'NVDA',
    icon: 'fas fa-universal-access',
    categories: [
      { name: 'Basics', shortcuts: [
        { keys: 'Ctrl + Alt + N', desc: 'Start NVDA', usage: 'Launch NVDA with the default desktop shortcut.' },
        { keys: 'NVDA + Q', desc: 'Quit NVDA', usage: 'Exit NVDA. The NVDA key is Insert (or Caps Lock in laptop layout).' },
        { keys: 'NVDA + N', desc: 'NVDA menu', usage: 'Open the NVDA menu for preferences and tools.' },
        { keys: 'Ctrl', desc: 'Stop speech', usage: 'Immediately silence the current speech.' },
        { keys: 'Shift', desc: 'Pause speech', usage: 'Pause speech; press again to resume.' },
        { keys: 'NVDA + S', desc: 'Speech mode', usage: 'Cycle between talk, beeps, and off.' },
        { keys: 'NVDA + 1', desc: 'Input help', usage: 'Toggle input help — press any key to hear what it does.' },
      ]},
      { name: 'Reading', shortcuts: [
        { keys: 'NVDA + Down', desc: 'Say all', usage: 'Read continuously from the current position (desktop layout).' },
        { keys: 'NVDA + Up', desc: 'Read current line', usage: 'Speak the line at the cursor.' },
        { keys: 'NVDA + T', desc: 'Read window title', usage: 'Speak the title of the active window.' },
        { keys: 'NVDA + B', desc: 'Read window', usage: 'Read the entire foreground window.' },
        { keys: 'NVDA + Tab', desc: 'Report focus', usage: 'Speak the control that currently has focus.' },
        { keys: 'NVDA + F12', desc: 'Report time', usage: 'Speak the time; press twice quickly for the date.' },
      ]},
      { name: 'Browse Mode (Web)', shortcuts: [
        { keys: 'NVDA + Space', desc: 'Browse/focus mode', usage: 'Toggle between browse mode and focus mode on web pages.' },
        { keys: 'H', desc: 'Next heading', usage: 'Jump to the next heading (Shift + H for previous).' },
        { keys: 'K', desc: 'Next link', usage: 'Jump to the next link.' },
        { keys: 'B', desc: 'Next button', usage: 'Jump to the next button.' },
        { keys: 'F', desc: 'Next form field', usage: 'Jump to the next form field.' },
        { keys: 'D', desc: 'Next landmark', usage: 'Jump to the next ARIA landmark region.' },
        { keys: 'T', desc: 'Next table', usage: 'Jump to the next table.' },
        { keys: 'L', desc: 'Next list', usage: 'Jump to the next list.' },
        { keys: 'NVDA + F7', desc: 'Elements list', usage: 'Open a dialog listing all links, headings, and landmarks.' },
      ]},
    ],
  },
  jaws: {
    name: 'JAWS',
    icon: 'fas fa-assistive-listening-systems',
    categories: [
      { name: 'Basics', shortcuts: [
        { keys: 'Insert + Down', desc: 'Say all', usage: 'Read continuously from the cursor. Insert is the JAWS key.' },
        { keys: 'Ctrl', desc: 'Stop speech', usage: 'Immediately silence the current speech.' },
        { keys: 'Insert + Up', desc: 'Read current line', usage: 'Speak the line at the cursor.' },
        { keys: 'Insert + T', desc: 'Read window title', usage: 'Speak the title of the active window.' },
        { keys: 'Insert + B', desc: 'Read window', usage: 'Read the contents of the current window or dialog.' },
        { keys: 'Insert + F12', desc: 'Report time', usage: 'Speak the current time.' },
        { keys: 'Insert + J', desc: 'JAWS window', usage: 'Bring up the main JAWS application window.' },
        { keys: 'Insert + F4', desc: 'Quit JAWS', usage: 'Exit JAWS with a confirmation dialog.' },
        { keys: 'Insert + Esc', desc: 'Refresh screen', usage: 'Re-read the screen contents if speech seems out of sync.' },
      ]},
      { name: 'Web Navigation', shortcuts: [
        { keys: 'Insert + Z', desc: 'Virtual cursor', usage: 'Toggle the Virtual PC Cursor on web pages.' },
        { keys: 'H', desc: 'Next heading', usage: 'Jump to the next heading (Shift + H for previous).' },
        { keys: 'K'  , desc: 'Next link', usage: 'Jump to the next link (unvisited: U).' },
        { keys: 'B', desc: 'Next button', usage: 'Jump to the next button.' },
        { keys: 'F', desc: 'Next form field', usage: 'Jump to the next form field.' },
        { keys: 'T', desc: 'Next table', usage: 'Jump to the next table.' },
        { keys: 'L', desc: 'Next list', usage: 'Jump to the next list.' },
        { keys: 'Insert + F7', desc: 'Links list', usage: 'Open a dialog listing all links on the page.' },
        { keys: 'Insert + F6', desc: 'Headings list', usage: 'Open a dialog listing all headings on the page.' },
        { keys: 'Insert + F5', desc: 'Form fields list', usage: 'Open a dialog listing all form fields on the page.' },
        { keys: 'Insert + F', desc: 'Font info', usage: 'Speak font and formatting information at the cursor.' },
      ]},
    ],
  },
  voiceover: {
    name: 'VoiceOver',
    icon: 'fas fa-audio-description',
    categories: [
      { name: 'Basics', shortcuts: [
        { keys: 'Cmd + F5', desc: 'Toggle VoiceOver', usage: 'Turn VoiceOver on or off on macOS.' },
        { keys: 'VO + A', desc: 'Read all', usage: 'Read from the VoiceOver cursor onward. VO = Control + Option.' },
        { keys: 'Ctrl', desc: 'Pause speech', usage: 'Pause or resume the current speech.' },
        { keys: 'VO + Right', desc: 'Next item', usage: 'Move the VoiceOver cursor to the next item.' },
        { keys: 'VO + Left', desc: 'Previous item', usage: 'Move the VoiceOver cursor to the previous item.' },
        { keys: 'VO + Space', desc: 'Activate item', usage: 'Click the item under the VoiceOver cursor.' },
        { keys: 'VO + Shift + Down', desc: 'Interact with item', usage: 'Start interacting with a group, table, or text area.' },
        { keys: 'VO + Shift + Up', desc: 'Stop interacting', usage: 'Step back out of the current group.' },
      ]},
      { name: 'Navigation & Tools', shortcuts: [
        { keys: 'VO + U', desc: 'Open rotor', usage: 'Browse headings, links, and form controls with the rotor.' },
        { keys: 'VO + Cmd + H', desc: 'Next heading', usage: 'Jump to the next heading on the page.' },
        { keys: 'VO + Cmd + L', desc: 'Next link', usage: 'Jump to the next link.' },
        { keys: 'VO + Cmd + T', desc: 'Next table', usage: 'Jump to the next table.' },
        { keys: 'VO + F', desc: 'Find text', usage: 'Search for text on the current page or window.' },
        { keys: 'VO + M', desc: 'Menu bar', usage: 'Move to the macOS menu bar.' },
        { keys: 'VO + D', desc: 'Open Dock', usage: 'Move the VoiceOver cursor to the Dock.' },
        { keys: 'VO + H', desc: 'VoiceOver Help', usage: 'Open the VoiceOver Help menu.' },
        { keys: 'VO + K', desc: 'Keyboard help', usage: 'Enter keyboard help — press keys to hear their function.' },
        { keys: 'VO + F8', desc: 'VoiceOver Utility', usage: 'Open the VoiceOver settings utility.' },
      ]},
    ],
  },
  shortcut: {
    name: 'Shortcut',
    icon: 'fas fa-forward',
    categories: [
      { name: 'General', shortcuts: [
        { keys: 'Ctrl + K', desc: 'Command Palette', usage: 'Open the Command Palette — Cmd + K on Mac. Search and run almost any action.' },
        { keys: '?', desc: 'Show keyboard shortcuts', usage: 'Show the full keyboard shortcuts list anywhere in the app.' },
        { keys: 'O + A', desc: 'Open Activity Feed', usage: 'Press O then A to open the Activity Feed.' },
        { keys: 'F', desc: 'Toggle fullscreen mode', usage: 'Toggle fullscreen mode on the current view.' },
        { keys: 'M', desc: 'Toggle sidebar', usage: 'Maximize or minimize the left sidebar.' },
      ]},
      { name: 'Create', shortcuts: [
        { keys: 'N', desc: 'New Story', usage: 'Add a new Story from anywhere.' },
        { keys: 'Shift + N', desc: 'New Story from template', usage: 'Add a new Story starting from a Story Template.' },
      ]},
      { name: 'Navigation', shortcuts: [
        { keys: 'G + D', desc: 'Go to Home', usage: 'Press G then D to go to the Home dashboard.' },
        { keys: 'G + S', desc: 'Go to Stories', usage: 'Press G then S to open the Stories page.' },
        { keys: 'G + E', desc: 'Go to Epics', usage: 'Press G then E to open Epics.' },
        { keys: 'G + I', desc: 'Go to Iterations', usage: 'Press G then I to open Iterations (sprints).' },
        { keys: 'G + B', desc: 'Go to Backlog', usage: 'Press G then B to open the Backlog.' },
        { keys: 'G + L', desc: 'Go to Labels', usage: 'Press G then L to open Labels.' },
        { keys: 'G + O', desc: 'Go to Objectives', usage: 'Press G then O to open Objectives.' },
        { keys: 'G + R', desc: 'Go to Reports', usage: 'Press G then R to open Reports.' },
        { keys: 'G + Space', desc: 'Advanced Story search', usage: 'Press G then Space to open advanced Story search.' },
      ]},
      { name: 'Stories Page', shortcuts: [
        { keys: 'Shift + S', desc: 'Save Space changes', usage: 'Save changes to the current Space (Stories beta).' },
        { keys: 'Shift + U', desc: 'Discard Space changes', usage: 'Discard unsaved Space changes (Stories beta).' },
        { keys: 'T', desc: 'Story Template menu', usage: 'Open the Story Template menu.' },
        { keys: 'Ctrl + Shift + Up', desc: 'Move Story to top', usage: 'Move the selected Story to the top of the list — Cmd + Shift + Up on Mac.' },
        { keys: 'Ctrl + Shift + Down', desc: 'Move Story to bottom', usage: 'Move the selected Story to the bottom of the list — Cmd + Shift + Down on Mac.' },
        { keys: 'D + 1', desc: 'Title-only density', usage: 'Press D then 1 to switch to the "Title only" Story density view.' },
        { keys: 'D + 2', desc: 'Minimal density', usage: 'Press D then 2 to switch to the "Minimal" Story density view.' },
        { keys: 'D + 3', desc: 'Standard density', usage: 'Press D then 3 to switch to the "Standard" Story density view.' },
        { keys: 'D + 4', desc: 'Jumbo density', usage: 'Press D then 4 to switch to the "Jumbo" Story density view.' },
      ]},
      { name: 'Story Dialog', shortcuts: [
        { keys: 'I', desc: 'Toggle yourself as owner', usage: 'Add or remove yourself as an owner of the current Story.' },
        { keys: 'F', desc: 'Follow / unfollow Story', usage: 'Follow or unfollow the current Story.' },
        { keys: 'Shift + S', desc: 'Change state', usage: 'Change the workflow state of the current Story.' },
        { keys: 'Shift + I', desc: 'Change iteration', usage: 'Change the Iteration of the current Story.' },
        { keys: 'Shift + E', desc: 'Change estimate', usage: 'Change the estimate of the current Story.' },
        { keys: 'Ctrl + Shift + ,', desc: 'Copy branch name', usage: 'Copy the Git branch name for this Story — Cmd + Shift + , on Mac.' },
        { keys: 'Ctrl + Shift + .', desc: 'Copy branch & start', usage: 'Copy the branch name and move the Story to Started — Cmd + Shift + . on Mac.' },
        { keys: 'Ctrl + Enter', desc: 'Save description / comment', usage: 'Save a Story description or comment — Cmd + Enter on Mac.' },
        { keys: 'Ctrl + Alt + C', desc: 'Copy Story as Markdown', usage: 'Copy the open Story and all its context to Markdown — Cmd + Option + C on Mac.' },
        { keys: 'Shift + A', desc: 'Archive Story', usage: 'Archive the current Story.' },
        { keys: 'Shift + D', desc: 'Delete archived Story', usage: 'Delete a Story that was already archived.' },
      ]},
      { name: 'Epic View', shortcuts: [
        { keys: 'N', desc: 'New Story in Epic', usage: 'Add a new Story inside the current Epic.' },
        { keys: 'Ctrl + Enter', desc: 'Save changes', usage: 'Save changes in the Epic view — Cmd + Enter on Mac.' },
      ]},
    ],
  },
};

export default shortcutData;
