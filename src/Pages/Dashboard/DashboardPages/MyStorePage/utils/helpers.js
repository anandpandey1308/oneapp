export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};
export const IMAGES = {
  DEFAULT_PROFILE:
    "https://img.freepik.com/premium-vector/cute-astronaut-floating-space-cartoon-vector-icon-illustration_480044-973.jpg",
};

export const TEXT_LIMITS = {
  BIO_MAX_LENGTH: 116,
  NAME_MAX_LENGTH: 50,
};
