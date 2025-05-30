async function searchResults(keyword) {
  return JSON.stringify([
    {
      title: "Big Buck Bunny",
      image:
        "https://peach.blender.org/wp-content/uploads/bbb-splash.png?x11217",
      href: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    },
  ]);
}

async function extractDetails(url) {
  return JSON.stringify([
    {
      description: "A large and lovable rabbit deals with three tiny bullies.",
      aliases: "N/A",
      airdate: "2008-04-10",
    },
  ]);
}

async function extractEpisodes(url) {
  return JSON.stringify([
    {
      href: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      number: 1,
    },
  ]);
}

async function extractStreamUrl(url) {
  return url;
}
