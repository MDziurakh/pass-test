import { validationsArray } from "../../utils/password-validation.utils";

export const getValidCount = (inputValue: string) =>
  validationsArray.reduce(
    (count, regex) => (regex.test(inputValue) ? count + 1 : count),
    0
  );
