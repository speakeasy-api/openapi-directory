import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postbillingpreviewcreditmemoitem as shared_postbillingpreviewcreditmemoitem
from ..shared import postbillingpreviewinvoiceitem as shared_postbillingpreviewinvoiceitem


@dataclass_json
@dataclasses.dataclass
class BillingPreviewResult:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    credit_memo_items: Optional[list[shared_postbillingpreviewcreditmemoitem.PostBillingPreviewCreditMemoItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditMemoItems') }})
    invoice_items: Optional[list[shared_postbillingpreviewinvoiceitem.PostBillingPreviewInvoiceItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceItems') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
