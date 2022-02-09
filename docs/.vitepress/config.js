const cviSidebar = [
    {text: "cvi", link: "/cvi/"},
    {text: "brief", link: "/cvi/brief/"},
    {text: "moodboard", link: "/cvi/moodboard/"},
    {text: "Logi", link: "/logi/"},
];
const logiSidebar = [
    {text: "logi", link: "/logi/"},
    {text: "Font märgiks", link: "/logi/font_margiks"},
    {text: "Apple logod", link: "/logi/apple_logo_referents"},
]

module.exports = {
    title: "Minu dokuveeb",
    base: "/vitepress-est/",
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
