import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import modifylinkedofferobjects as shared_modifylinkedofferobjects


@dataclass_json
@dataclasses.dataclass
class ModifyLinkedOfferObjectsRequest:
    linked_offer_object_ids: Optional[shared_modifylinkedofferobjects.ModifyLinkedOfferObjects] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedOfferObjectIds') }})
    
