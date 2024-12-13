export const setCaptain = (captain) => localStorage.setItem('isCaptain', captain);
export const getCaptain = () => localStorage.getItem('isCaptain');
export const deleteCaptain = () => localStorage.removeItem('isCaptain');