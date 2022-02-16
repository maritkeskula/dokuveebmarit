const cviSidebar = [
  {text: "Logi", link: "/logi/"},
    {text: "cvi", link: "/cvi/"},
    {text: "brief", link: "/cvi/brief/"},
    {text: "moodboard", link: "/cvi/moodboard/"},
];
const logiSidebar = [
    {text: "logi", link: "/logi/"},
    {text: "Font märgiks", link: "/logi/01_font_margiks"},
    {text: "Apple ja kassi logod", link: "/logi/02_apple_logo_referents"},
    {text: "Kassi refenretsi järgi tehtud logo", link: "/logi/03_referents2"},
]

module.exports = {
    title: "Minu dokuveeb",
    base: "/dokuveebmarit/",
    themeConfig: {
    nav: [
        { text: "Esileht", link: "/" },
        { text: "Logi", link: "/logi/" },
        { text: "Minust", link: "/minust/" },
        { text: "CVI", link: "/cvi/" },
      ],
      sidebar: {
        "/logi/": logiSidebar,
        "/logi/01_font_margiks/": logiSidebar,
        "/logi/02_apple_logo_referents/": logiSidebar,
        "/logi/03_referents2/": logiSidebar,
        "/cvi/": cviSidebar,
        "/cvi/brief/": cviSidebar,
  }
}
}
