export const particlesOptions = {
  fullScreen: false,
  detectRetina: true,
  fpsLimit: 60,
  background: {
    color: {
      value: "#000",
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
};

export const particle = {
  color: {
    value: "#ffffff",
  },
  links: {
    color: "#ffffff",
    distance: 150,
    enable: true,
    opacity: 0.5,
    width: 1,
  },
  collisions: {
    enable: true,
  },
  opacity: {
    value: 0.5,
  },
  shape: {
    type: "circle",
  },
  size: {
    random: true,
    value: 5,
  },
  number: {
    density: {
      enable: true,
      value_area: 650,
    },
    value: 120,
  },
};
