interface IntakeCall {
  transcript_link: string;
  audio_file: string;
  intaker: string;
  start_timestamp: string;
  end_timestamp: string;
}

interface KeyConsiderationDetails {
  Status: string;
  Details: string;
}

interface KeyConsiderations {
  liability: KeyConsiderationDetails;
  damages: KeyConsiderationDetails;
  assets: KeyConsiderationDetails;
}

interface IntakeFormPage {
  title: string;
  [key: string]: any;
}

interface IntakeForm {
  Type: string;
  Pages: IntakeFormPage[];
  download_link: string;
}

interface CaseData {
  case_name: string;
  case_id: string;
  case_type: string;
  engagement_status: string;
  intake_call: IntakeCall;
  key_considerations: KeyConsiderations;
  intake_form: IntakeForm;
  engagement_letter_link: string;
}

export type {
  IntakeCall,
  KeyConsiderationDetails,
  KeyConsiderations,
  IntakeFormPage,
  IntakeForm,
  CaseData,
};
