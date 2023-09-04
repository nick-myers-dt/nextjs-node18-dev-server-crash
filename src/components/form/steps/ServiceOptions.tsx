import { StepProps } from "@/types";
import {
  FaFileInvoice,
  FaCalendarCheck,
  FaFilm,
  FaQuestion,
  FaUserLock,
  FaCog,
  FaHandsHelping,
  FaEllipsisH,
} from "react-icons/fa";

const ServiceOptions: React.FC<StepProps> = ({ formik, setFormStep }) => {
  return (
    <div className="w-full px-3">
      <label
        className="block tracking-wide text-gray-700 text-m font-bold mb-6"
        htmlFor="email"
      >
        What can we help you with today?
      </label>
      <div className="button-container">
        <button
          className="square-button"
          onClick={() => setFormStep("finance")}
        >
          <FaFileInvoice size="50" />
          <div className="mt-4">Invoices, Tax or W-9 Forms</div>
        </button>
        <button
          className="square-button"
          onClick={() => setFormStep("renewals")}
        >
          <FaCalendarCheck size="50" />
          <div className="mt-4">Subscription Expiry or Renewal</div>
        </button>
        <button
          className="square-button"
          onClick={() => setFormStep("content")}
        >
          <FaFilm size="50" />
          <div className="mt-4">Enquire about Content on DT+</div>
        </button>
        <button className="square-button" onClick={() => setFormStep("howto")}>
          <FaQuestion size="50" />
          <div className="mt-4">How do I...?</div>
        </button>
      </div>
      <div className="button-container">
        <button className="square-button" onClick={() => setFormStep("users")}>
          <FaUserLock size="50" />
          <div className="mt-4">Issues signing in to DT+</div>
        </button>
        <button className="square-button" onClick={() => setFormStep("auth")}>
          <FaCog size="50" />
          <div className="mt-4">
            Set up Single Sign On (SSO) or IP Authentication
          </div>
        </button>
        <button
          className="square-button"
          onClick={() => setFormStep("support")}
        >
          <FaHandsHelping size="50" />
          <div className="mt-4">Technical support</div>
        </button>
        <button
          className="square-button"
          onClick={() => {
            setFormStep("other");
            formik.setFieldValue("formOrigin", "serviceOptions");
          }}
        >
          <FaEllipsisH size="50" />
          <div className="mt-4">Something else...</div>
        </button>
      </div>
    </div>
  );
};

export default ServiceOptions;
