import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invoice as shared_invoice
from ..shared import actionamendinvoiceitem as shared_actionamendinvoiceitem


@dataclass_json
@dataclasses.dataclass
class ActionAmendInvoiceData:
    invoice: Optional[shared_invoice.Invoice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Invoice') }})
    invoice_item: Optional[list[shared_actionamendinvoiceitem.ActionAmendInvoiceItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceItem') }})
    
