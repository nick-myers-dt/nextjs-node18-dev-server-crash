import { StepProps } from "@/types";

const ReferToSales: React.FC<StepProps> = ({ formik, setFormStep }) => {
  return (
    <div className="w-full px-3 mb-6 md:mb-0">
      <p className="mb-4">
        Our Customer Service Team can only assist existing customers.
      </p>
      <p>
        To enquire about a subscription to Digital Theatre+, please contact our
        Education Sales Team at{" "}
        <a href="mailto:sales@digitaltheatreplus.com">
          sales@digitaltheatreplus.com
        </a>
      </p>
      <button
        type="button"
        onClick={() => setFormStep("isCustomer")}
        className="form-button mt-10"
      >
        Back
      </button>
    </div>
  );
};

export default ReferToSales;
