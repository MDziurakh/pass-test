import { useMemo, useState } from "react";
import { InputLabel, InputWrapper, StyledInput } from "./password-input.styled";
import { getValidCount } from "./password-input.helper";
import ValidationProgressLine from "../validation-progress-line/validation-progress-line";

const PasswordInput = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const correctValidationCount = useMemo(
    () => getValidCount(inputValue),
    [inputValue]
  );

  return (
    <InputWrapper>
      <InputLabel htmlFor="password">
        Check strength of your super password!
      </InputLabel>
      <StyledInput
        type="text"
        name="password"
        id="password"
        placeholder="Type here"
        value={inputValue}
        onChange={({ currentTarget }) =>
          setInputValue(currentTarget.value.replace(/\s/g, ""))
        }
      />
      <ValidationProgressLine
        correctValidationCount={correctValidationCount}
        inputValueLength={inputValue.length}
      />
    </InputWrapper>
  );
};

export default PasswordInput;
