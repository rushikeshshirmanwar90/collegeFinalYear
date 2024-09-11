import MCQs from "@/components/custom/mcq";
import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <div className="container my-5 flex items-center justify-center gap-5 flex-wrap">
        <MCQs />
        <MCQs />
        <MCQs />
        <MCQs />
      </div>
      <div className="flex items-center justify-center">
        <Button className="w-1/4 mx-auto my-3">Submit</Button>
      </div>
    </>
  );
};

export default page;
