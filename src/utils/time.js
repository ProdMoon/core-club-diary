export const time2digits = (time) => {
  return time < 10 ? `0${time}` : time;
}