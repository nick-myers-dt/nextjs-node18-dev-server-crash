"use client";

import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import { FormSteps, StepProps } from "@/types";

import Start from "./steps/Start";
import Customer from "./steps/Customer";
import ServiceOptions from "./steps/ServiceOptions";
import Finance from "./steps/Finance";

import NoStudents from "./ends/NoStudents";
import ReferToSales from "./ends/ReferToSales";
import Other from "./steps/Other";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email address is required")
    .email("Invalid email address")
    .matches(/^[^@]+@[^@]+\.[^@]+$/, "Invalid email address"),
  companyName: Yup.string().required(
    "Institution or Organisation name is required"
  ),
  otherInformation: Yup.string().required(
    "A description of what you need is required"
  ),
});

const initialValues = {
  email: "",
  companyName: "",
  otherInformation: "",
  formOrigin: "",
};

const SupportForm: NextPage<{
  formStep: string;
  setFormStep: React.Dispatch<React.SetStateAction<FormSteps>>;
}> = ({ formStep, setFormStep }) => {
  const searchParams = useSearchParams();

  const isDebugMode = searchParams.get("debug");

  const renderStepComponent = ({ formik, setFormStep }: StepProps) => {
    switch (formStep) {
      case "start":
        return <Start formik={formik} setFormStep={setFormStep} />;
      case "isStudentOrUnder18":
        return <NoStudents formik={formik} setFormStep={setFormStep} />;
      case "isCustomer":
        return <Customer formik={formik} setFormStep={setFormStep} />;
      case "serviceOptions":
        return <ServiceOptions formik={formik} setFormStep={setFormStep} />;
      case "referToSales":
        return <ReferToSales formik={formik} setFormStep={setFormStep} />;
      case "finance":
        return <Finance formik={formik} setFormStep={setFormStep} />;
      case "other":
        return <Other formik={formik} setFormStep={setFormStep} />;
      default:
        return null;
    }
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      className="w-full"
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setIsSubmitted(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <div>
          {isSubmitted && (
            <div className="overlay">
              <div className="modal">
                <h2 className="text-3xl font-bold mb-8">
                  Your request has been sent
                </h2>
                <p>
                  We aim to respond to all enquiries as quickly as possible,
                  <br /> at most within 2 business days.
                </p>
                <button
                  className="reset-button"
                  onClick={() => {
                    setIsSubmitted(false);
                    formik.resetForm(), setFormStep("start");
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <Form>
            <div className="flex flex-wrap -mx-3 mb-6">
              {renderStepComponent({ formik, setFormStep })}
            </div>
          </Form>
          {isDebugMode && (
            <pre>
              <code>{JSON.stringify(formik, null, 2)}</code>
            </pre>
          )}
        </div>
      )}
    </Formik>
  );
};

export default SupportForm;
