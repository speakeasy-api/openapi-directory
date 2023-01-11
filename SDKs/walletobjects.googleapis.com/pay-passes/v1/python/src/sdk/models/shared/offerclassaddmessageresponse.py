import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offerclass as shared_offerclass


@dataclass_json
@dataclasses.dataclass
class OfferClassAddMessageResponse:
    resource: Optional[shared_offerclass.OfferClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
