async function search() {
  return JSON.stringify([
    {
      title: "Big Buck Bunny",
      image:
        "https://peach.blender.org/wp-content/uploads/bbb-splash.png?x11217",
      href: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    },
  ]);
}

async function fetchInfo() {
  return JSON.stringify([
    {
      description: "A large and lovable rabbit deals with three tiny bullies.",
      airdate: "2008-04-10",
    },
  ]);
}

async function fetchEpisodes() {
  return JSON.stringify([
    {
      href: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      number: 1,
    },
  ]);
}

async function fetchSources(url) {
  return url;
}

return {
  searchResults,
  extractDetails,
  extractEpisodes,
  extractStreamUrl,
};
