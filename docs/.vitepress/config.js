const cviSidebar = [
    {text: "cvi", link: "/cvi/"},
    {text: "brief", link: "/cvi/brief/"},
    {text: "moodboard", link: "/cvi/moodboard/"},
];
const logiSidebar = [
    {text: "logi", link: "/logi/"},
    {text: "Font märgiks", link: "/logi/01_font_margiks/"},
]

module.exports = {
    title: "Minu dokuveeb",
    themeConfig: {
    nav: [
        { text: "Esileht", link: "/" },
        { text: "Minust", link: "/minust/" },
        { text: "CVI", link: "/cvi/" },
        { text: "Logi", link: "/logi/" },
      ],
      sidebar: {
        "/cvi/": cviSidebar,
        "/cvi/brief/": cviSidebar,
        "/logi/": logiSidebar,
        "/logi/01_font_margiks/": logiSidebar,
  }
}
}
