import {  Stack } from "@mui/material";
import React from "react";
import IntakeCallSection from "../IntakeCallSection";
import Sidebar from "../Sidebar";
import ClientTitle from "../ClientTitle";
import KeyConsiderations from "../KeyConsiderations";
import { useSelector } from "react-redux";
import { selectCaseData } from "../../state/selectors/client-selectors";
import IntakeForm from "../intake-form/IntakeFormBase";
import { IntakeFormPage } from "../../services/types/client-intake-types";

interface Props {
  // Define your component props here
}

const Layout: React.FC<Props> = () => {
  const caseData = useSelector(selectCaseData);
  
  return (
    <Stack direction="row" >
      <Sidebar />
      <Stack direction={"column"} gap={"24px"} sx={{ m: "48px" }}>
        <ClientTitle />
        <IntakeCallSection />
        {/* <KeyConsiderations /> */}
        {caseData?.intake_form.Pages && <IntakeForm intakeForm={{type: caseData.intake_form.Type, pages: caseData.intake_form.Pages as IntakeFormPage[]}} />}
      </Stack>
    </Stack>
  );
};

export default Layout;
