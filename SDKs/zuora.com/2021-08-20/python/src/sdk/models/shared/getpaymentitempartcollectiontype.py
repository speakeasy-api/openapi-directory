import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getpaymentitemparttypewithsuccess as shared_getpaymentitemparttypewithsuccess


@dataclass_json
@dataclasses.dataclass
class GetPaymentItemPartCollectionType:
    item_parts: Optional[list[shared_getpaymentitemparttypewithsuccess.GetPaymentItemPartTypewithSuccess]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemParts') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
