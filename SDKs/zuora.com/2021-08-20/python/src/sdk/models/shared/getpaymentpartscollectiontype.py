import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getpaymentparttypewithsuccess as shared_getpaymentparttypewithsuccess


@dataclass_json
@dataclasses.dataclass
class GetPaymentPartsCollectionType:
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    parts: Optional[list[shared_getpaymentparttypewithsuccess.GetPaymentPartTypewithSuccess]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parts') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
