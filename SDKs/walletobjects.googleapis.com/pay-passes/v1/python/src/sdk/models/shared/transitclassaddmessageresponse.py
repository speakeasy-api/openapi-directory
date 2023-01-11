import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transitclass as shared_transitclass


@dataclass_json
@dataclasses.dataclass
class TransitClassAddMessageResponse:
    resource: Optional[shared_transitclass.TransitClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
