import { StepProps } from "@/types";

const Start: React.FC<StepProps> = ({ formik, setFormStep }) => {
  return (
    <div className="w-full px-3">
      <label
        className="block tracking-wide text-gray-700 text-m font-bold mb-6"
        htmlFor="email"
      >
        Are you under 18 years old?
      </label>
      <button
        onClick={() => setFormStep("isStudentOrUnder18")}
        className="form-button mr-2"
      >
        Yes, I am under 18 years old
      </button>
      <button className="form-button" onClick={() => setFormStep("isCustomer")}>
        No
      </button>
    </div>
  );
};
export default Start;
