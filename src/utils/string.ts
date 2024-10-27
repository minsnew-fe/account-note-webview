export const isEmpty = (value?: string | null) => {
  if (!value || value === '') return true;

  return false;
};
