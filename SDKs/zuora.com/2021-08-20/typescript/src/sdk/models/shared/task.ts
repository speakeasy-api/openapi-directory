import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TaskActionTypeEnum {
    Approval = "Approval",
    Attachment = "Attachment",
    BillingBillRun = "Billing::BillRun",
    BillingCurrencyConversion = "Billing::CurrencyConversion",
    BillingCustomInvoice = "Billing::CustomInvoice",
    Callout = "Callout",
    Cancel = "Cancel",
    Create = "Create",
    CustomObjectCreate = "CustomObject::Create",
    CustomObjectDelete = "CustomObject::Delete",
    CustomObjectQuery = "CustomObject::Query",
    CustomObjectUpdate = "CustomObject::Update",
    DataBillingPreviewRun = "Data::BillingPreviewRun",
    DataLink = "Data::Link",
    Delay = "Delay",
    Delete = "Delete",
    DownloadSftp = "Download::SFTP",
    Email = "Email",
    Export = "Export",
    FileCustomPdfCustomDocument = "File::CustomPDF::CustomDocument",
    If = "If",
    InvoiceGenerate = "InvoiceGenerate",
    Iterate = "Iterate",
    LogicCsvTranslator = "Logic::CSVTranslator",
    LogicCase = "Logic::Case",
    LogicCustomCode = "Logic::CustomCode",
    LogicJsonTransform = "Logic::JSONTransform",
    LogicLambda = "Logic::Lambda",
    LogicResponseFormatter = "Logic::ResponseFormatter",
    LogicXmlTransform = "Logic::XMLTransform",
    NewProduct = "NewProduct",
    NotificationsGoogleCloudPrint = "Notifications::GoogleCloudPrint",
    NotificationsPhoneCall = "Notifications::PhoneCall",
    NotificationsSms = "Notifications::SMS",
    PaymentGatewayReconciliation = "Payment::GatewayReconciliation",
    PaymentPaymentRun = "Payment::PaymentRun",
    Query = "Query",
    RemoveProduct = "RemoveProduct",
    ReportingReportData = "Reporting::ReportData",
    ReportingRunReport = "Reporting::RunReport",
    Resume = "Resume",
    Suspend = "Suspend",
    UiPage = "UI::Page",
    UiStop = "UI::Stop",
    Update = "Update",
    UploadFtp = "Upload::FTP",
    UploadSftp = "Upload::SFTP",
    WriteOff = "WriteOff"
}

export enum TaskStatusEnum {
    Queued = "Queued",
    Processing = "Processing",
    Pending = "Pending",
    Success = "Success",
    Stopped = "Stopped",
    Error = "Error"
}


// Task
/** 
 * A task.
 * 
**/
export class Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_type" })
  actionType?: TaskActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=call_type" })
  callType?: string;

  @SpeakeasyMetadata({ data: "json, name=concurrent_limit" })
  concurrentLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_class" })
  errorClass?: string;

  @SpeakeasyMetadata({ data: "json, name=error_details" })
  errorDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=object_id" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=original_task_id" })
  originalTaskId?: number;

  @SpeakeasyMetadata({ data: "json, name=original_workflow_id" })
  originalWorkflowId?: number;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TaskStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=task_id" })
  taskId?: number;

  @SpeakeasyMetadata({ data: "json, name=workflow_id" })
  workflowId?: number;
}
