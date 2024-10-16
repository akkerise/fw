export const parseJson = t => {
  if (!t) return undefined;
  try {
    return JSON.parse(t);
  } catch (e) {
    return undefined;
  }
};
