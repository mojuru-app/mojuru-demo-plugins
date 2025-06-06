async function search() {
    return JSON.stringify([{
        title: "Sprite Fright",
        image: "https://ddz4ak4pa3d19.cloudfront.net/cache/1a/43/1a4320c2dfc0fd20015e5d467294b3d8.jpg",
        href: "https://dn720409.ca.archive.org/0/items/sprite-fright/Sprite%20Fright%20-%20Open%20Movie%20by%20Blender%20Studio-804p.mp4"
    }]);
}

async function fetchInfo() {
    return JSON.stringify([{
        description: "A group of campers meets unexpected woodland creatures in this comedy horror short by Blender Studio.",
        airdate: "2021-10-29"
    }]);
}

async function fetchEpisodes() {
    return JSON.stringify([{
        href: "https://dn720409.ca.archive.org/0/items/sprite-fright/Sprite%20Fright%20-%20Open%20Movie%20by%20Blender%20Studio-804p.mp4",
        number: 1
    }]);
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
