const cviSidebar = [
    {text: "logi", link: "/logi/"},
    {text: "cvi", link: "/cvi/ "},
    {text: "briif", link: "/cvi/briif"},
    {text: "moodboard", link: "/cvi/moodboard"},
    {text: "visandid", link: "/cvi/visandid"},
];
const logiSidebar = [
    {text: "logi", link: "/logi/"},
    {text: "font märgiks", link: "/logi/01_font_margiks"},
    {text: "apple ja kassi logod", link: "/logi/02_apple_logo_referents"},
    {text: "nime ja hobi ühine märk", link: "/logi/03_nimihobi"},
    {text: "kassi ja hundi referents", link: "/logi/04_referents2"},
    {text: "vapp", link: "/logi/05_vapp"},
    {text: "negatiivne ruum", link: "/logi/06_negatiivne_ruum"},
]

module.exports = {
    title: "Mariti dokuveeb",
    base: "/dokuveebmarit/",
    themeConfig: {
    nav: [
        { text: "esileht", link: "/" },
        { text: "logi", link: "/logi/" },
        { text: "minust", link: "/minust/" },
        { text: "CVI", link: "/cvi/" },
      ],
      sidebar: {
        "/logi/": logiSidebar,
        "/logi/01_font_margiks/": logiSidebar,
        "/logi/02_apple_logo_referents/": logiSidebar,
        "/logi/03_nimihobi/": logiSidebar,
        "/logi/04_referents2/": logiSidebar,
        "/logi/05_vapp/": logiSidebar,
        "/logi/06_negatiivne_ruum/": logiSidebar,
        "/cvi/": cviSidebar,
        "/cvi/briif/": cviSidebar,
        "/cvi/moodbaord/": cviSidebar,
        "/cvi/visandid/": cviSidebar,
  }
}
}
