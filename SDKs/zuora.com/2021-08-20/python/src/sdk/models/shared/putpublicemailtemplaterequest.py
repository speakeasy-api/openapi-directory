import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PutPublicEmailTemplateRequestCcEmailTypeEnum(str, Enum):
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

class PutPublicEmailTemplateRequestEncodingTypeEnum(str, Enum):
    UTF8 = "UTF8"
    SHIFT_JIS = "Shift_JIS"
    ISO_2022_JP = "ISO_2022_JP"
    EUC_JP = "EUC_JP"
    X_SJIS_0213 = "X_SJIS_0213"

class PutPublicEmailTemplateRequestFromEmailTypeEnum(str, Enum):
    TENANT_EMAIL = "TenantEmail"
    SPECIFIC_EMAIL = "SpecificEmail"

class PutPublicEmailTemplateRequestReplyToEmailTypeEnum(str, Enum):
    TENANT_EMAIL = "TenantEmail"
    SPECIFIC_EMAIL = "SpecificEmail"

class PutPublicEmailTemplateRequestToEmailTypeEnum(str, Enum):
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
class PutPublicEmailTemplateRequest:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    bcc_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bccEmailAddress') }})
    cc_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccEmailAddress') }})
    cc_email_type: Optional[PutPublicEmailTemplateRequestCcEmailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccEmailType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    email_body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailBody') }})
    email_subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailSubject') }})
    encoding_type: Optional[PutPublicEmailTemplateRequestEncodingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodingType') }})
    from_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromEmailAddress') }})
    from_email_type: Optional[PutPublicEmailTemplateRequestFromEmailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromEmailType') }})
    from_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromName') }})
    is_html: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isHtml') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reply_to_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyToEmailAddress') }})
    reply_to_email_type: Optional[PutPublicEmailTemplateRequestReplyToEmailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyToEmailType') }})
    to_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toEmailAddress') }})
    to_email_type: Optional[PutPublicEmailTemplateRequestToEmailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toEmailType') }})
    
