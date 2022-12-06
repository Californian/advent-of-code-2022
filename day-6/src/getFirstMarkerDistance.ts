const getFirstMarkerDistance = (message: string): number => {
  const lastFour = []
  let numChars = 0;

  for (const char of message) {
    numChars += 1
    if (lastFour.length < 14) {
      lastFour.push(char)
    } else {
      lastFour.shift();
      lastFour.push(char);
      if ((new Set(lastFour)).size === 14) {
        return numChars;
      }
    }
  }

  return numChars;
}

export { getFirstMarkerDistance }
