module.exports = {
  cache: {
    cacheId: "test-electrode",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "test-electrode",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
