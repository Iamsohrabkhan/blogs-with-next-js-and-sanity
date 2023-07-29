export const formatDate = (isoDate) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, options);
  };