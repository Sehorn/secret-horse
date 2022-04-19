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
          "url('https://64.media.tumblr.com/a86b91712abc92e44fdf1d5162c0938a/678b5d737f8219ed-28/s640x960/79628bb9d5e4456fac22b0f0f9a009f456e4b8e9.gif')",
      },
    },
  },
  pugins: [],
};
