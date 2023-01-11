import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loyaltyobject as shared_loyaltyobject


@dataclass_json
@dataclasses.dataclass
class LoyaltyObjectAddMessageResponse:
    resource: Optional[shared_loyaltyobject.LoyaltyObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
