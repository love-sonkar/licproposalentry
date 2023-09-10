import PlanData from "@/components/datashow/PlanData";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/Spinner";
import React, { lazy, Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import { UseContextForm } from "@/useContext/UseContext";

const AgentData = lazy(() => import("@/components/datashow/AgentData"));

const DetailsPage: React.FC = () => {
  const {
    data: { agentdetail },
  } = UseContextForm();

  const reportTemplateRef = useRef<HTMLDivElement | null>(null);

  const SavePdf = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      format: "a4",
      unit: "px",
      compress: true,
    });
    doc.setFont("Inter-Regular", "normal");
    if (reportTemplateRef?.current) {
      doc.html(reportTemplateRef?.current, {
        async callback(doc) {
          await doc.save(agentdetail?.name);
        },
      });
    }
  };

  return (
    <section ref={reportTemplateRef} className="m-8">
      <h2 className="text-2xl text-center mb-5">Proposal Details</h2>
      <Suspense fallback={<Spinner />}>
        <div className="flex flex-col gap-3">
          <AgentData />
          <PlanData />
        </div>
      </Suspense>
      <div className="py-3 flex gap-4 justify-end">
        <Link to="/">
          <Button variant="outline">Enter Another Proposal</Button>
        </Link>

        <Button onClick={SavePdf}>Save Pdf</Button>
      </div>
    </section>
  );
};

export default DetailsPage;
