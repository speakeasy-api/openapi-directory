import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TaskActionTypeEnum(str, Enum):
    APPROVAL = "Approval"
    ATTACHMENT = "Attachment"
    BILLING_BILL_RUN = "Billing::BillRun"
    BILLING_CURRENCY_CONVERSION = "Billing::CurrencyConversion"
    BILLING_CUSTOM_INVOICE = "Billing::CustomInvoice"
    CALLOUT = "Callout"
    CANCEL = "Cancel"
    CREATE = "Create"
    CUSTOM_OBJECT_CREATE = "CustomObject::Create"
    CUSTOM_OBJECT_DELETE = "CustomObject::Delete"
    CUSTOM_OBJECT_QUERY = "CustomObject::Query"
    CUSTOM_OBJECT_UPDATE = "CustomObject::Update"
    DATA_BILLING_PREVIEW_RUN = "Data::BillingPreviewRun"
    DATA_LINK = "Data::Link"
    DELAY = "Delay"
    DELETE = "Delete"
    DOWNLOAD_SFTP = "Download::SFTP"
    EMAIL = "Email"
    EXPORT = "Export"
    FILE_CUSTOM_PDF_CUSTOM_DOCUMENT = "File::CustomPDF::CustomDocument"
    IF = "If"
    INVOICE_GENERATE = "InvoiceGenerate"
    ITERATE = "Iterate"
    LOGIC_CSV_TRANSLATOR = "Logic::CSVTranslator"
    LOGIC_CASE = "Logic::Case"
    LOGIC_CUSTOM_CODE = "Logic::CustomCode"
    LOGIC_JSON_TRANSFORM = "Logic::JSONTransform"
    LOGIC_LAMBDA = "Logic::Lambda"
    LOGIC_RESPONSE_FORMATTER = "Logic::ResponseFormatter"
    LOGIC_XML_TRANSFORM = "Logic::XMLTransform"
    NEW_PRODUCT = "NewProduct"
    NOTIFICATIONS_GOOGLE_CLOUD_PRINT = "Notifications::GoogleCloudPrint"
    NOTIFICATIONS_PHONE_CALL = "Notifications::PhoneCall"
    NOTIFICATIONS_SMS = "Notifications::SMS"
    PAYMENT_GATEWAY_RECONCILIATION = "Payment::GatewayReconciliation"
    PAYMENT_PAYMENT_RUN = "Payment::PaymentRun"
    QUERY = "Query"
    REMOVE_PRODUCT = "RemoveProduct"
    REPORTING_REPORT_DATA = "Reporting::ReportData"
    REPORTING_RUN_REPORT = "Reporting::RunReport"
    RESUME = "Resume"
    SUSPEND = "Suspend"
    UI_PAGE = "UI::Page"
    UI_STOP = "UI::Stop"
    UPDATE = "Update"
    UPLOAD_FTP = "Upload::FTP"
    UPLOAD_SFTP = "Upload::SFTP"
    WRITE_OFF = "WriteOff"

class TaskStatusEnum(str, Enum):
    QUEUED = "Queued"
    PROCESSING = "Processing"
    PENDING = "Pending"
    SUCCESS = "Success"
    STOPPED = "Stopped"
    ERROR = "Error"


@dataclass_json
@dataclasses.dataclass
class Task:
    r"""Task
    A task.
    
    """
    
    action_type: Optional[TaskActionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_type') }})
    call_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_type') }})
    concurrent_limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrent_limit') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_class') }})
    error_details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_details') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instance: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    object_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object_id') }})
    original_task_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_task_id') }})
    original_workflow_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_workflow_id') }})
    parameters: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    status: Optional[TaskStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    task_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task_id') }})
    workflow_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow_id') }})
    
