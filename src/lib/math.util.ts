export const square = (n: number) => n * n;

export const areaOfCircle = (r: number) => {
  if (r < 0) {
    throw new Error("negative radius is not allowed");
  }

  return Math.PI * r * r;
};

export const getValueAsync = async () => {
  return Promise.resolve(8776);
};
