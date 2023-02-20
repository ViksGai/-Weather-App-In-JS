export const ICON_MAP = new Map();

addMapping([0, 1], "sun");
addMapping([2], "cloudy-day");
addMapping([3], "cloud");
addMapping([45, 48], "fog");
addMapping([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "downpour");
addMapping([71,73,75,77,85,86], "snowing");
addMapping([95,96,99], "bolt");

function addMapping(values, icon) {
  values.forEach((value) => {
    ICON_MAP.set(value, icon);
  });
}

