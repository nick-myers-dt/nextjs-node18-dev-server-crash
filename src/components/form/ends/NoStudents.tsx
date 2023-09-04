import { StepProps } from "@/types";

const NoStudents: React.FC<StepProps> = ({ formik, setFormStep }) => {
  return (
    <div className="w-full px-3 mb-6 md:mb-0">
      <p className="mb-4">
        Students and people under the age of 18 are not permitted to contact our
        Customer Service Team.
      </p>
      <p>
        Please{" "}
        <strong>
          contact your teacher, librarian, instructor or account administrator
        </strong>{" "}
        for further support.
      </p>
      <button
        type="button"
        onClick={() => setFormStep("start")}
        className="form-button mt-8"
      >
        Back
      </button>
    </div>
  );
};

export default NoStudents;
