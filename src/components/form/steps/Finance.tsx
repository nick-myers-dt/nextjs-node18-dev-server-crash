import { FormSteps, StepProps } from "@/types";
import { useState } from "react";
import { BsArrowsExpand, BsArrowsCollapse } from "react-icons/bs";
import { Field } from "formik";

type FinanceQuestion = {
  id: string;
  label: string;
  explanation:
    | React.ReactNode
    | ((
        formik: any,
        setFormStep: React.Dispatch<React.SetStateAction<FormSteps>>
      ) => React.ReactNode);
};

const financeQuestions: FinanceQuestion[] = [
  {
    id: "invoice",
    label:
      "I need to request an invoice or have a question about an existing invoice.",
    explanation: ({ errors, touched, isValid, isSubmitting }) => (
      <>
        <p className="mb-4">
          Please provide the following information and our team will provide the
          information requested:
        </p>
        <div className="mb-2">
          <label className="form-label">Your email address</label>
          <Field
            type="email"
            name="email"
            className={`form-field  ${
              errors.email && touched.email ? "error" : ""
            }`}
          />
          {errors.email && touched.email && (
            <div className="error-message">{errors.email}</div>
          )}
        </div>
        <div>
          <label className="form-label">
            Your Institution or Organisation name
          </label>
          <Field
            type="text"
            name="companyName"
            className={`form-field ${
              errors.companyName && touched.companyName ? "error" : ""
            }`}
          />
          {errors.companyName && touched.companyName && (
            <div className="error-message">{errors.companyName}</div>
          )}
        </div>
        <div>
          <label className="form-label">Any other information</label>
          <Field
            as="textarea"
            name="otherInformation"
            className={`form-field ${
              errors.otherInformation && touched.otherInformation ? "error" : ""
            }`}
            rows="5"
          />
          {errors.otherInformation && touched.otherInformation && (
            <div className="error-message">{errors.otherInformation}</div>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="submit-button mt-2"
            disabled={!isValid || isSubmitting}
          >
            Send request
          </button>
          {!isValid && (
            <span className="ml-4 text-xs text-gray-500">
              Please complete the above fields to submit this form
            </span>
          )}
        </div>
      </>
    ),
  },
  {
    id: "w9",
    label: "I need a copy of the W-9 Form.",
    explanation: (
      <>
        You can <a href="#">download a copy of Digital Theatre+ W-9 Form</a>{" "}
        here.
      </>
    ),
  },
  {
    id: "other",
    label: "I need help with something else.",
    explanation: ({ setFieldValue }, setFormStep) => (
      <>
        Please{" "}
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            setFieldValue("formOrigin", "finance");
            setFormStep("other");
          }}
        >
          use our contact form
        </a>{" "}
        to request further assistance.
      </>
    ),
  },
  // add more questions and explanations here
];

const Finance: React.FC<StepProps> = ({ formik, setFormStep }) => {
  console.log(formik);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="w-full px-3">
      <label className="block tracking-wide text-gray-700 text-m font-bold mb-6">
        Invoices, Tax or W-9 Forms
      </label>
      {financeQuestions.map((question) => (
        <div key={question.id} className="mb-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              setExpandedSection(
                expandedSection === question.id ? null : question.id
              );
            }}
            className={`w-full flex justify-between items-center text-left p-4 rounded border border-gray-400 ${
              expandedSection === question.id
                ? "bg-gray-200 border-b-0 rounded-b-none"
                : "bg-white"
            }`}
          >
            {question.label}
            {expandedSection === question.id ? (
              <BsArrowsCollapse size="20" />
            ) : (
              <BsArrowsExpand size="20" />
            )}
          </button>
          {expandedSection === question.id && (
            <div className="p-4 border-l border-r border-b border-gray-400 rounded rounded-t-none bg-blue-50">
              {typeof question.explanation === "function"
                ? question.explanation(formik, setFormStep)
                : question.explanation}
            </div>
          )}
        </div>
      ))}
      <button
        onClick={() => setFormStep("serviceOptions")}
        className="form-button mt-8"
      >
        Back
      </button>
    </div>
  );
};

export default Finance;
