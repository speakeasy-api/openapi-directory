import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getaccountsummarypaymentinvoicetype as shared_getaccountsummarypaymentinvoicetype


@dataclass_json
@dataclasses.dataclass
class GetAccountSummaryPaymentType:
    effective_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    paid_invoices: Optional[list[shared_getaccountsummarypaymentinvoicetype.GetAccountSummaryPaymentInvoiceType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paidInvoices') }})
    payment_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentNumber') }})
    payment_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentType') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
