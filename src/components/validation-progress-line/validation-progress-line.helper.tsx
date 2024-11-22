interface IGetProgressColor {
  elementIndex: number;
  correctValidationCount: number;
  inputLength: number;
}

const COLORS = {
  GRAY: "#f0efeb",
  RED: "#ff8f8f",
  YELLOW: "#fce97c",
  GREEN: "#83fe91",
};

export const getProgressColor = ({
  correctValidationCount,
  elementIndex,
  inputLength,
}: IGetProgressColor): string => {
  if (inputLength === 0 || correctValidationCount === 0) return COLORS.GRAY;

  if (inputLength < 8) return COLORS.RED;

  const isWithinValidationRange = correctValidationCount - 1 >= elementIndex;

  switch (correctValidationCount) {
    case 1:
      return isWithinValidationRange ? COLORS.RED : COLORS.GRAY;
    case 2:
      return isWithinValidationRange ? COLORS.YELLOW : COLORS.GRAY;
    default:
      return COLORS.GREEN;
  }
};
