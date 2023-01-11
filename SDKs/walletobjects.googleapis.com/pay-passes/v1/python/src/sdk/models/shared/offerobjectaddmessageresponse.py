import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offerobject as shared_offerobject


@dataclass_json
@dataclasses.dataclass
class OfferObjectAddMessageResponse:
    resource: Optional[shared_offerobject.OfferObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
