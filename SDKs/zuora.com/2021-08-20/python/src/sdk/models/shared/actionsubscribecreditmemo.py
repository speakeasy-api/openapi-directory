import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ActionSubscribeCreditMemo:
    r"""ActionSubscribeCreditMemo
    Container for credit memos.
    
    **Note**: This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
    
    """
    
    tax_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxAmount') }})
    total_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalAmount') }})
    total_amount_without_tax: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalAmountWithoutTax') }})
    
