module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      tight: "-.015em",
    },
    extend: {
      height: {
        "half-screen": "50vh",
      },
      backgroundImage: {
        "pack-train":
          "url('https://64.media.tumblr.com/072ce8ed7a1ae906be3d48edd4c5faff/6f9d4a3279d367fa-94/s1280x1920/b9c6823d25f72adccf59e81f905658456b283521.gifv')",
      },
    },
  },
  pugins: [],
};
