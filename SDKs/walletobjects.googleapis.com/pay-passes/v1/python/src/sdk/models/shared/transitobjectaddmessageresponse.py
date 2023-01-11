import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transitobject as shared_transitobject


@dataclass_json
@dataclasses.dataclass
class TransitObjectAddMessageResponse:
    resource: Optional[shared_transitobject.TransitObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
