import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creditmemoresponsetype as shared_creditmemoresponsetype
from ..shared import invoiceresponsetype as shared_invoiceresponsetype


@dataclass_json
@dataclasses.dataclass
class GenerateBillingDocumentResponseType:
    credit_memos: Optional[list[shared_creditmemoresponsetype.CreditMemoResponseType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditMemos') }})
    invoices: Optional[list[shared_invoiceresponsetype.InvoiceResponseType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoices') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
