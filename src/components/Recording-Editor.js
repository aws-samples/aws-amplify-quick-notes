import React from "react";
import styled from "@emotion/styled";
import { Button } from "@rebass/emotion";
import { Label, Input } from "@rebass/forms";
import { Formik } from "formik";

import Dialog from "./Dialog";

const StyledButton = styled(Button)`
  background-color: #74b49b;
  cursor: pointer;
`;

const StyledLabel = styled(Label)`
  color: #74b49b;
  margin-bottom: 4px;
`;

const StyledInput = styled(Input)`
  color: #74b49b;
  border-radius: 3px;
  background-color: #f4f9f4;
`;

const StyledTextarea = styled("textarea")`
  color: #74b49b;
  background-color: #f4f9f4;
  width: 100%;
  min-height: 80px;
  border-radius: 3px;
  resize: vertical;
`;

const FormInputs = styled("div")`
  max-height: 450px;
  overflow: scroll;
  padding: 16px;

  @media (max-height: 570px) {
    max-height: 300px;
  }

  @media (max-height: 675px) {
    max-height: 350px;
  }
`;

const Actions = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 24px;
`;

const InputContainer = styled("div")`
  margin-bottom: 16px;
`;

const Title = styled("h2")`
  color: #74b49b;
`;

export default props => (
  <Dialog onDismiss={props.onDismiss}>
    <Title>{props.title ? "Edit Note" : "Create Note"}</Title>
    <Formik
      initialValues={{
        title: props.title || "",
        text: props.text
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        props.onSave({
          title: values.title || `${values.text.substr(0, 20)}...`,
          text: values.text
        });
        setSubmitting(false);
        resetForm();
        props.onDismiss();
      }}
    >
      {({ values, handleSubmit, isSubmitting, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <FormInputs>
            <InputContainer>
              <StyledLabel htmlFor="title">Title</StyledLabel>
              <StyledInput
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
            </InputContainer>

            <InputContainer>
              <StyledLabel htmlFor="text">Note</StyledLabel>
              <StyledTextarea
                name="text"
                value={values.text}
                onChange={handleChange}
              />
            </InputContainer>
          </FormInputs>

          <Actions>
            <StyledButton
              onClick={() => {
                props.onDismiss();
              }}
              style={{ marginRight: "8px" }}
            >
              Cancel
            </StyledButton>
            <StyledButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </StyledButton>
          </Actions>
        </form>
      )}
    </Formik>
  </Dialog>
);
