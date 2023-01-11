import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TaskActionTypeEnum {
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
export declare enum TaskStatusEnum {
    Queued = "Queued",
    Processing = "Processing",
    Pending = "Pending",
    Success = "Success",
    Stopped = "Stopped",
    Error = "Error"
}
/**
 * A task.
 *
**/
export declare class Task extends SpeakeasyBase {
    actionType?: TaskActionTypeEnum;
    callType?: string;
    concurrentLimit?: number;
    data?: Record<string, any>;
    endTime?: string;
    error?: string;
    errorClass?: string;
    errorDetails?: string;
    id?: number;
    instance?: boolean;
    name?: string;
    object?: string;
    objectId?: string;
    originalTaskId?: number;
    originalWorkflowId?: number;
    parameters?: Record<string, any>;
    startTime?: string;
    status?: TaskStatusEnum;
    tags?: string[];
    taskId?: number;
    workflowId?: number;
}
