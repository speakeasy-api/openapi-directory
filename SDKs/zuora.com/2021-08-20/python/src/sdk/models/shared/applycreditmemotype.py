import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creditmemoapplydebitmemorequesttype as shared_creditmemoapplydebitmemorequesttype
from ..shared import creditmemoapplyinvoicerequesttype as shared_creditmemoapplyinvoicerequesttype


@dataclass_json
@dataclasses.dataclass
class ApplyCreditMemoType:
    debit_memos: Optional[list[shared_creditmemoapplydebitmemorequesttype.CreditMemoApplyDebitMemoRequestType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debitMemos') }})
    effective_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    invoices: Optional[list[shared_creditmemoapplyinvoicerequesttype.CreditMemoApplyInvoiceRequestType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoices') }})
    
