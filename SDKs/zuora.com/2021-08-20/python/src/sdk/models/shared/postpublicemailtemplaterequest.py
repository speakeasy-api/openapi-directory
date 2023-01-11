import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostPublicEmailTemplateRequestCcEmailTypeEnum(str, Enum):
    BILL_TO_CONTACT = "BillToContact"
    SOLD_TO_CONTACT = "SoldToContact"
    SPECIFIC_EMAILS = "SpecificEmails"
    TENANT_ADMIN = "TenantAdmin"
    BILL_TO_AND_SOLD_TO_CONTACTS = "BillToAndSoldToContacts"
    RUN_OWNER = "RunOwner"
    ALL_CONTACTS = "AllContacts"
    INVOICE_OWNER_BILL_TO_CONTACT = "InvoiceOwnerBillToContact"
    INVOICE_OWNER_SOLD_TO_CONTACT = "InvoiceOwnerSoldToContact"
    INVOICE_OWNER_BILL_TO_AND_SOLD_TO_CONTACTS = "InvoiceOwnerBillToAndSoldToContacts"
    INVOICE_OWNER_ALL_CONTACTS = "InvoiceOwnerAllContacts"

class PostPublicEmailTemplateRequestEncodingTypeEnum(str, Enum):
    UTF8 = "UTF8"
    SHIFT_JIS = "Shift_JIS"
    ISO_2022_JP = "ISO_2022_JP"
    EUC_JP = "EUC_JP"
    X_SJIS_0213 = "X_SJIS_0213"

class PostPublicEmailTemplateRequestFromEmailTypeEnum(str, Enum):
    TENANT_EMAIL = "TenantEmail"
    SPECIFIC_EMAIL = "SpecificEmail"

class PostPublicEmailTemplateRequestReplyToEmailTypeEnum(str, Enum):
    TENANT_EMAIL = "TenantEmail"
    SPECIFIC_EMAIL = "SpecificEmail"

class PostPublicEmailTemplateRequestToEmailTypeEnum(str, Enum):
    BILL_TO_CONTACT = "BillToContact"
    SOLD_TO_CONTACT = "SoldToContact"
    SPECIFIC_EMAILS = "SpecificEmails"
    TENANT_ADMIN = "TenantAdmin"
    BILL_TO_AND_SOLD_TO_CONTACTS = "BillToAndSoldToContacts"
    RUN_OWNER = "RunOwner"
    ALL_CONTACTS = "AllContacts"
    INVOICE_OWNER_BILL_TO_CONTACT = "InvoiceOwnerBillToContact"
    INVOICE_OWNER_SOLD_TO_CONTACT = "InvoiceOwnerSoldToContact"
    INVOICE_OWNER_BILL_TO_AND_SOLD_TO_CONTACTS = "InvoiceOwnerBillToAndSoldToContacts"
    INVOICE_OWNER_ALL_CONTACTS = "InvoiceOwnerAllContacts"


@dataclass_json
@dataclasses.dataclass
class PostPublicEmailTemplateRequest:
    email_body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailBody') }})
    email_subject: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailSubject') }})
    event_type_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTypeName') }})
    from_email_type: PostPublicEmailTemplateRequestFromEmailTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromEmailType') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    to_email_type: PostPublicEmailTemplateRequestToEmailTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('toEmailType') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    bcc_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bccEmailAddress') }})
    cc_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccEmailAddress') }})
    cc_email_type: Optional[PostPublicEmailTemplateRequestCcEmailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccEmailType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encoding_type: Optional[PostPublicEmailTemplateRequestEncodingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodingType') }})
    event_type_namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTypeNamespace') }})
    from_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromEmailAddress') }})
    from_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromName') }})
    is_html: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isHtml') }})
    reply_to_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyToEmailAddress') }})
    reply_to_email_type: Optional[PostPublicEmailTemplateRequestReplyToEmailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyToEmailType') }})
    to_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toEmailAddress') }})
    
