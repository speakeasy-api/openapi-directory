package shared

type TaskActionTypeEnum string

const (
	TaskActionTypeEnumApproval                      TaskActionTypeEnum = "Approval"
	TaskActionTypeEnumAttachment                    TaskActionTypeEnum = "Attachment"
	TaskActionTypeEnumBillingBillRun                TaskActionTypeEnum = "Billing::BillRun"
	TaskActionTypeEnumBillingCurrencyConversion     TaskActionTypeEnum = "Billing::CurrencyConversion"
	TaskActionTypeEnumBillingCustomInvoice          TaskActionTypeEnum = "Billing::CustomInvoice"
	TaskActionTypeEnumCallout                       TaskActionTypeEnum = "Callout"
	TaskActionTypeEnumCancel                        TaskActionTypeEnum = "Cancel"
	TaskActionTypeEnumCreate                        TaskActionTypeEnum = "Create"
	TaskActionTypeEnumCustomObjectCreate            TaskActionTypeEnum = "CustomObject::Create"
	TaskActionTypeEnumCustomObjectDelete            TaskActionTypeEnum = "CustomObject::Delete"
	TaskActionTypeEnumCustomObjectQuery             TaskActionTypeEnum = "CustomObject::Query"
	TaskActionTypeEnumCustomObjectUpdate            TaskActionTypeEnum = "CustomObject::Update"
	TaskActionTypeEnumDataBillingPreviewRun         TaskActionTypeEnum = "Data::BillingPreviewRun"
	TaskActionTypeEnumDataLink                      TaskActionTypeEnum = "Data::Link"
	TaskActionTypeEnumDelay                         TaskActionTypeEnum = "Delay"
	TaskActionTypeEnumDelete                        TaskActionTypeEnum = "Delete"
	TaskActionTypeEnumDownloadSftp                  TaskActionTypeEnum = "Download::SFTP"
	TaskActionTypeEnumEmail                         TaskActionTypeEnum = "Email"
	TaskActionTypeEnumExport                        TaskActionTypeEnum = "Export"
	TaskActionTypeEnumFileCustomPdfCustomDocument   TaskActionTypeEnum = "File::CustomPDF::CustomDocument"
	TaskActionTypeEnumIf                            TaskActionTypeEnum = "If"
	TaskActionTypeEnumInvoiceGenerate               TaskActionTypeEnum = "InvoiceGenerate"
	TaskActionTypeEnumIterate                       TaskActionTypeEnum = "Iterate"
	TaskActionTypeEnumLogicCsvTranslator            TaskActionTypeEnum = "Logic::CSVTranslator"
	TaskActionTypeEnumLogicCase                     TaskActionTypeEnum = "Logic::Case"
	TaskActionTypeEnumLogicCustomCode               TaskActionTypeEnum = "Logic::CustomCode"
	TaskActionTypeEnumLogicJSONTransform            TaskActionTypeEnum = "Logic::JSONTransform"
	TaskActionTypeEnumLogicLambda                   TaskActionTypeEnum = "Logic::Lambda"
	TaskActionTypeEnumLogicResponseFormatter        TaskActionTypeEnum = "Logic::ResponseFormatter"
	TaskActionTypeEnumLogicXMLTransform             TaskActionTypeEnum = "Logic::XMLTransform"
	TaskActionTypeEnumNewProduct                    TaskActionTypeEnum = "NewProduct"
	TaskActionTypeEnumNotificationsGoogleCloudPrint TaskActionTypeEnum = "Notifications::GoogleCloudPrint"
	TaskActionTypeEnumNotificationsPhoneCall        TaskActionTypeEnum = "Notifications::PhoneCall"
	TaskActionTypeEnumNotificationsSms              TaskActionTypeEnum = "Notifications::SMS"
	TaskActionTypeEnumPaymentGatewayReconciliation  TaskActionTypeEnum = "Payment::GatewayReconciliation"
	TaskActionTypeEnumPaymentPaymentRun             TaskActionTypeEnum = "Payment::PaymentRun"
	TaskActionTypeEnumQuery                         TaskActionTypeEnum = "Query"
	TaskActionTypeEnumRemoveProduct                 TaskActionTypeEnum = "RemoveProduct"
	TaskActionTypeEnumReportingReportData           TaskActionTypeEnum = "Reporting::ReportData"
	TaskActionTypeEnumReportingRunReport            TaskActionTypeEnum = "Reporting::RunReport"
	TaskActionTypeEnumResume                        TaskActionTypeEnum = "Resume"
	TaskActionTypeEnumSuspend                       TaskActionTypeEnum = "Suspend"
	TaskActionTypeEnumUIPage                        TaskActionTypeEnum = "UI::Page"
	TaskActionTypeEnumUIStop                        TaskActionTypeEnum = "UI::Stop"
	TaskActionTypeEnumUpdate                        TaskActionTypeEnum = "Update"
	TaskActionTypeEnumUploadFtp                     TaskActionTypeEnum = "Upload::FTP"
	TaskActionTypeEnumUploadSftp                    TaskActionTypeEnum = "Upload::SFTP"
	TaskActionTypeEnumWriteOff                      TaskActionTypeEnum = "WriteOff"
)

type TaskStatusEnum string

const (
	TaskStatusEnumQueued     TaskStatusEnum = "Queued"
	TaskStatusEnumProcessing TaskStatusEnum = "Processing"
	TaskStatusEnumPending    TaskStatusEnum = "Pending"
	TaskStatusEnumSuccess    TaskStatusEnum = "Success"
	TaskStatusEnumStopped    TaskStatusEnum = "Stopped"
	TaskStatusEnumError      TaskStatusEnum = "Error"
)

// Task
// A task.
type Task struct {
	ActionType         *TaskActionTypeEnum    `json:"action_type,omitempty"`
	CallType           *string                `json:"call_type,omitempty"`
	ConcurrentLimit    *int64                 `json:"concurrent_limit,omitempty"`
	Data               map[string]interface{} `json:"data,omitempty"`
	EndTime            *string                `json:"end_time,omitempty"`
	Error              *string                `json:"error,omitempty"`
	ErrorClass         *string                `json:"error_class,omitempty"`
	ErrorDetails       *string                `json:"error_details,omitempty"`
	ID                 *int64                 `json:"id,omitempty"`
	Instance           *bool                  `json:"instance,omitempty"`
	Name               *string                `json:"name,omitempty"`
	Object             *string                `json:"object,omitempty"`
	ObjectID           *string                `json:"object_id,omitempty"`
	OriginalTaskID     *int64                 `json:"original_task_id,omitempty"`
	OriginalWorkflowID *int64                 `json:"original_workflow_id,omitempty"`
	Parameters         map[string]interface{} `json:"parameters,omitempty"`
	StartTime          *string                `json:"start_time,omitempty"`
	Status             *TaskStatusEnum        `json:"status,omitempty"`
	Tags               []string               `json:"tags,omitempty"`
	TaskID             *int64                 `json:"task_id,omitempty"`
	WorkflowID         *int64                 `json:"workflow_id,omitempty"`
}
