import { StepProps } from "@/types";

const Customer: React.FC<StepProps> = ({ formik, setFormStep }) => {
  return (
    <div className="w-full px-3">
      <label
        className="block tracking-wide text-gray-700 text-m font-bold mb-6"
        htmlFor="email"
      >
        Does your Institution already have a subscription to Digital Theatre+?
      </label>
      <button
        onClick={() => setFormStep("serviceOptions")}
        className="form-button mr-2"
      >
        Yes, we already have a subscription
      </button>
      <button
        className="form-button"
        onClick={() => setFormStep("referToSales")}
      >
        No
      </button>
    </div>
  );
};

export default Customer;
