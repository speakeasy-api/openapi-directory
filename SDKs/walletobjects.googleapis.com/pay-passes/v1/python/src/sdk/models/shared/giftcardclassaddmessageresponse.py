import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import giftcardclass as shared_giftcardclass


@dataclass_json
@dataclasses.dataclass
class GiftCardClassAddMessageResponse:
    resource: Optional[shared_giftcardclass.GiftCardClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
