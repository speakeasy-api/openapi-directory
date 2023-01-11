import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutReverseInvoiceResponseTypeCreditMemo:
    r"""PutReverseInvoiceResponseTypeCreditMemo
    Container for the credit memo that is auto-generated when reversing invoices.
    
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PutReverseInvoiceResponseType:
    credit_memo: Optional[PutReverseInvoiceResponseTypeCreditMemo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditMemo') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
