import { FormikProps } from "formik";

export type FormSteps =
  | "start"
  | "isStudentOrUnder18"
  | "isCustomer"
  | "serviceOptions"
  | "referToSales"
  | "other"
  | "finance"
  | "renewals"
  | "content"
  | "howto"
  | "users"
  | "auth"
  | "support"
  | "end";

export interface StepProps {
  formik: FormikProps<{
    email: string;
    companyName: string;
    otherInformation: string;
    formOrigin: string;
  }>;
  setFormStep: React.Dispatch<React.SetStateAction<FormSteps>>;
}
