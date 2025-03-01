import React from "react";
import { ResumeInfoProvider } from "@/context/resume-info-provider";
import EditResume from "../../../_components/EditResume";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const Page = () => {
  return (
    <ResumeInfoProvider>
      <div className="space-y-6 p-4">
        <Link href={"/cv-builder"} className="flex items-center gap-2">
          <ChevronLeft/>
          <span className="text-muted-foreground font-semibold">Back to CVs</span>
        </Link>
      </div>
      <EditResume />
    </ResumeInfoProvider>
  );
};

export default Page;
