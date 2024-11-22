import { validationsArray } from "../../utils/password-validation.utils";
import { getProgressColor } from "./validation-progress-line.helper";
import { ProgressStep, StepWrapper } from "./validation-progress-line.styled";

interface IValidationProgressLine {
  correctValidationCount: number;
  inputValueLength: number;
}

const ValidationProgressLine = ({
  correctValidationCount,
  inputValueLength,
}: IValidationProgressLine) => (
  <StepWrapper>
    {Array.from({ length: validationsArray.length }, (_, index) => (
      <ProgressStep
        key={index}
        style={{
          backgroundColor: getProgressColor({
            correctValidationCount,
            elementIndex: index,
            inputLength: inputValueLength,
          }),
        }}
      ></ProgressStep>
    ))}
  </StepWrapper>
);

export default ValidationProgressLine;
