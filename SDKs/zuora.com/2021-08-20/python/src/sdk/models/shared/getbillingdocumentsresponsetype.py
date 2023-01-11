import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetBillingDocumentsResponseTypeDocumentTypeEnum(str, Enum):
    INVOICE = "Invoice"
    CREDIT_MEMO = "CreditMemo"
    DEBIT_MEMO = "DebitMemo"

class GetBillingDocumentsResponseTypeStatusEnum(str, Enum):
    DRAFT = "Draft"
    POSTED = "Posted"
    CANCELED = "Canceled"
    ERROR = "Error"


@dataclass_json
@dataclasses.dataclass
class GetBillingDocumentsResponseType:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    document_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    document_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentNumber') }})
    document_type: Optional[GetBillingDocumentsResponseTypeDocumentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentType') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[GetBillingDocumentsResponseTypeStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
