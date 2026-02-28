export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/sathish-portfolio' : '';
};

export const getAssetPath = (path: string) => {
  const basePath = getBasePath();
  return `${basePath}${path}`;
};
