import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the task.
 *
 * @remarks
 *
 */
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
    DownloadSFTP = "Download::SFTP",
    Email = "Email",
    Export = "Export",
    FileCustomPDFCustomDocument = "File::CustomPDF::CustomDocument",
    If = "If",
    InvoiceGenerate = "InvoiceGenerate",
    Iterate = "Iterate",
    LogicCSVTranslator = "Logic::CSVTranslator",
    LogicCase = "Logic::Case",
    LogicCustomCode = "Logic::CustomCode",
    LogicJSONTransform = "Logic::JSONTransform",
    LogicLambda = "Logic::Lambda",
    LogicResponseFormatter = "Logic::ResponseFormatter",
    LogicXMLTransform = "Logic::XMLTransform",
    NewProduct = "NewProduct",
    NotificationsGoogleCloudPrint = "Notifications::GoogleCloudPrint",
    NotificationsPhoneCall = "Notifications::PhoneCall",
    NotificationsSMS = "Notifications::SMS",
    PaymentGatewayReconciliation = "Payment::GatewayReconciliation",
    PaymentPaymentRun = "Payment::PaymentRun",
    Query = "Query",
    RemoveProduct = "RemoveProduct",
    ReportingReportData = "Reporting::ReportData",
    ReportingRunReport = "Reporting::RunReport",
    Resume = "Resume",
    Suspend = "Suspend",
    UIPage = "UI::Page",
    UIStop = "UI::Stop",
    Update = "Update",
    UploadFTP = "Upload::FTP",
    UploadSFTP = "Upload::SFTP",
    WriteOff = "WriteOff"
}
/**
 * If **Instance** is **true**, the status of the task instance.
 *
 * @remarks
 *
 */
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
 * @remarks
 *
 */
export declare class Task extends SpeakeasyBase {
    /**
     * The type of the task.
     *
     * @remarks
     *
     */
    actionType?: TaskActionTypeEnum;
    /**
     * The type of API used.
     *
     * @remarks
     *
     */
    callType?: string;
    /**
     * the number of concurrent tasks that are allowed to run simultaneously
     */
    concurrentLimit?: number;
    /**
     * The data payload for the task.
     *
     * @remarks
     *
     */
    data?: Record<string, any>;
    /**
     * If **Instance** is **true**, the end time of the task instance.
     *
     * @remarks
     *
     */
    endTime?: string;
    /**
     * If **Instance** is **true** and **status** is **Error**, the error reason of the task instance failure.
     *
     * @remarks
     *
     */
    error?: string;
    /**
     * If **Instance** is **true** and **status** is **Error**, the error class of the task instance failure.
     *
     * @remarks
     *
     */
    errorClass?: string;
    /**
     * If **Instance** is **true** and **status** is **Error**, the error details of the task instance failure.
     *
     * @remarks
     *
     */
    errorDetails?: string;
    /**
     * The unique ID of the task.
     *
     * @remarks
     *
     */
    id?: number;
    /**
     * Indicates whether this task belongs to an instance of a workflow.
     *
     * @remarks
     *
     */
    instance?: boolean;
    /**
     * The name of the task.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * The selected object for the task.
     *
     * @remarks
     *
     */
    object?: string;
    /**
     * The id of the selected object of the task.
     *
     * @remarks
     *
     */
    objectId?: string;
    /**
     * If **Instance** is **true**, the ID of the original task in the original workflow.
     *
     * @remarks
     *
     */
    originalTaskId?: number;
    /**
     * If **Instance** is **true**, the ID of the original workflow.
     *
     * @remarks
     *
     */
    originalWorkflowId?: number;
    /**
     * The configuration of the task.
     *
     * @remarks
     *
     */
    parameters?: Record<string, any>;
    /**
     * If **Instance** is **true**, the start time of the task instance.
     *
     * @remarks
     *
     */
    startTime?: string;
    /**
     * If **Instance** is **true**, the status of the task instance.
     *
     * @remarks
     *
     */
    status?: TaskStatusEnum;
    /**
     * The array of filter tags.
     *
     * @remarks
     *
     */
    tags?: string[];
    /**
     * the id of this task's parent task. Will be null if this is the first task of the workflow
     */
    taskId?: number;
    /**
     * The ID of the workflow that the task belongs to.
     *
     * @remarks
     *
     */
    workflowId?: number;
}
