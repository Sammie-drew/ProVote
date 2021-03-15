import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

function SubmitButton({ title, loading }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} loading={loading} onPress={handleSubmit} />;
}

export default SubmitButton;
