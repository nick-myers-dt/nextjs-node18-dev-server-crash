import { StepProps } from "@/types";
import { Field } from "formik";

const Other: React.FC<StepProps> = ({ formik, setFormStep }) => {
  const { errors, touched, submitForm, isValid, isSubmitting } = formik;

  return (
    <div className="w-full px-3">
      <h2 className="block tracking-wide text-gray-700 text-xl font-bold mb-6">
        Help with something else
      </h2>
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
        <label className="form-label">Please describe what you need</label>
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
    </div>
  );
};

export default Other;
