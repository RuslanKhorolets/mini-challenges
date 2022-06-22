import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import classes from "./phone_mask.module.scss";
import React, { useState } from "react";

const PhoneFormatter = () => {
  const [originalPhone, setOriginalPhone] = useState("");
  const [maskedPhone, setMaskedPhone] = useState("");

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOriginalPhone(event.target.value);
    setMaskedPhone(formatPhone(event.target.value));
  };

  const formatPhone = (phone: string): string => {
    const splittedPhone: RegExpMatchArray | null = phone
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);

    if (splittedPhone) {
      return !splittedPhone[2]
        ? splittedPhone[1]
        : "(" +
            splittedPhone[1] +
            ") " +
            splittedPhone[2] +
            (splittedPhone[3] ? "-" + splittedPhone[3] : "");
    }
    return phone;
  };

  return (
    <>
      <div className={classes.wrapper}>
        <h4>Phone mask</h4>
        <FormControl>
          {originalPhone}
          <Input
            value={maskedPhone}
            placeholder="(123)456-7890"
            onChange={inputChangeHandler}
          ></Input>
        </FormControl>
      </div>
    </>
  );
};

export default PhoneFormatter;
