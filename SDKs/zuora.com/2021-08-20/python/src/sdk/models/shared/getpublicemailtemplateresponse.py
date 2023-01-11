import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetPublicEmailTemplateResponseCcEmailTypeEnum(str, Enum):
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

class GetPublicEmailTemplateResponseEncodingTypeEnum(str, Enum):
    UTF8 = "UTF8"
    SHIFT_JIS = "Shift_JIS"
    ISO_2022_JP = "ISO_2022_JP"
    EUC_JP = "EUC_JP"
    X_SJIS_0213 = "X_SJIS_0213"

class GetPublicEmailTemplateResponseFromEmailTypeEnum(str, Enum):
    TENANT_EMAIL = "TenantEmail"
    SPECIFIC_EMAIL = "SpecificEmail"

class GetPublicEmailTemplateResponseReplyToEmailTypeEnum(str, Enum):
    TENANT_EMAIL = "TenantEmail"
    SPECIFIC_EMAIL = "SpecificEmail"

class GetPublicEmailTemplateResponseToEmailTypeEnum(str, Enum):
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
class GetPublicEmailTemplateResponse:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    bcc_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bccEmailAddress') }})
    cc_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccEmailAddress') }})
    cc_email_type: Optional[GetPublicEmailTemplateResponseCcEmailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccEmailType') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    created_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    email_body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailBody') }})
    email_subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailSubject') }})
    encoding_type: Optional[GetPublicEmailTemplateResponseEncodingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodingType') }})
    event_type_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTypeName') }})
    event_type_namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTypeNamespace') }})
    from_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromEmailAddress') }})
    from_email_type: Optional[GetPublicEmailTemplateResponseFromEmailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromEmailType') }})
    from_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromName') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_html: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isHtml') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reply_to_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyToEmailAddress') }})
    reply_to_email_type: Optional[GetPublicEmailTemplateResponseReplyToEmailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyToEmailType') }})
    to_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toEmailAddress') }})
    to_email_type: Optional[GetPublicEmailTemplateResponseToEmailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toEmailType') }})
    updated_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    updated_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
