const DEFAULT_VIBRATION_PATTERN = 300;

export const vibrate = (pattern: number | number[] = DEFAULT_VIBRATION_PATTERN): void => {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}
