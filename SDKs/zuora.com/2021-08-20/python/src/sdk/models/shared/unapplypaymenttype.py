import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentdebitmemoapplicationunapplyrequesttype as shared_paymentdebitmemoapplicationunapplyrequesttype
from ..shared import paymentinvoiceapplicationunapplyrequesttype as shared_paymentinvoiceapplicationunapplyrequesttype


@dataclass_json
@dataclasses.dataclass
class UnapplyPaymentType:
    debit_memos: Optional[list[shared_paymentdebitmemoapplicationunapplyrequesttype.PaymentDebitMemoApplicationUnapplyRequestType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debitMemos') }})
    effective_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    invoices: Optional[list[shared_paymentinvoiceapplicationunapplyrequesttype.PaymentInvoiceApplicationUnapplyRequestType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoices') }})
    
