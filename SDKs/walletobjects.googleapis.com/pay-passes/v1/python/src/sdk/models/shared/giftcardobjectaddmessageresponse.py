import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import giftcardobject as shared_giftcardobject


@dataclass_json
@dataclasses.dataclass
class GiftCardObjectAddMessageResponse:
    resource: Optional[shared_giftcardobject.GiftCardObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
