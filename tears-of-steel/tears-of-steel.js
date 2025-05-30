async function search() {
  return JSON.stringify([
    {
      title: "Tears of Steel",
      image:
        "https://mango.blender.org/wp-content/uploads/2012/09/tos-poster-540x800.jpg",
      href: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    },
  ]);
}

async function fetchInfo() {
  return JSON.stringify([
    {
      description:
        "A group of warriors and scientists gather at the Oude Kerk in Amsterdam to stage a crucial event from the past in a desperate attempt to rescue the world from destructive robots.",
      airdate: "2012-09-26",
    },
  ]);
}

async function fetchEpisodes() {
  return JSON.stringify([
    {
      href: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
      number: 1,
    },
  ]);
}

async function fetchSources(url) {
  return url;
}

return {
  search,
  fetchInfo,
  fetchEpisodes,
  fetchSources,
};
