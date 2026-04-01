// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato

const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);
const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Simpheropol",
    scale: "C",
  },
  clock: {
    format: "h:i",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "RU",
      timezone: "Europe/Moscow",
      format: "h:i",
      icon_color: palette.red,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  localFonts: false,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_05.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
            {
              name: "lofi",
              url: "https://www.youtube.com/watch?v=HuFYqnbVbzY",
              icon: "vinyl",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "gemini",
              url: "https://gemini.google.com",
              icon: "sparkles",
              icon_color: palette.green,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "news",
          links: [
            {
              name: "habr",
              url: "https://habr.com/ru/feed/",
              icon: "news",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code",
              icon_color: palette.yellow,
            },
            {
              name: "stepik",
              url: "https://stepik.org",
              icon: "school",
              icon_color: palette.green,
            },
            {
              name: "codewars",
              url: "https://www.codewars.com",
              icon: "code-dots",
              icon_color: palette.red,
            },
            {
              name: "codeforces",
              url: "https://codeforces.com",
              icon: "code-plus",
              icon_color: palette.blue,
            },

          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "vimsheet",
              url: "https://vim.rtorr.com/",
              icon: "keyboard",
              icon_color: palette.mauve,
            },
            {
              name: "python docs",
              url: "https://docs.python.org/3/",
              icon: "brand-python",
              icon_color: palette.yellow,
            },
            {
              name: "rustbook",
              url: "https://doc.rust-lang.ru/book",
              icon: "brand-rust",
              icon_color: palette.red,
            },
            {
              name: "arch wiki",
              url: "https://wiki.archlinux.org/",
              icon: "id-badge-2",
              icon_color: palette.blue,
            },
            {
              name: "awesome python",
              url: "https://github.com/vinta/awesome-python",
              icon: "list-search",
              icon_color: palette.yellow,
            },
            {
              name: "awesome rust",
              url: "https://github.com/rust-unofficial/awesome-rust",
              icon: "list-search",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "chill",
      background_url: "src/img/banners/banner_14.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.blue,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
            {
              name: "soundcloud",
              url: "https://soundcloud.com",
              icon: "brand-soundcloud",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv",
              icon: "brand-twitch",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
  ],
};
const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
