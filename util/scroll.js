export const toTop = () => {
  window.scrollTo(0,0);
};

export const to = (ycoordinate) => {
  window.scrollTo(0, ycoordinate);
};

export const toElement = (element) => {
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

export default {
  toTop,
  to,
  toElement
}
