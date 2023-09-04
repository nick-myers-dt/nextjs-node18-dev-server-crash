"use client";
import { FormSteps } from "@/types";
import SupportForm from "../components/form/Form";
import { useState } from "react";

export default function Home() {
  const [formStep, setFormStep] = useState<FormSteps>("start");
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-8">
          <a onClick={() => setFormStep("start")} style={{ cursor: "pointer" }}>
            Digital Theatre+ Customer Service
          </a>
        </h1>
      </div>
      <div className="max-w-5xl w-full">
        <SupportForm formStep={formStep} setFormStep={setFormStep} />
      </div>
    </main>
  );
}
