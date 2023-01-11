import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reference as shared_reference


@dataclass_json
@dataclasses.dataclass
class MicroSecGroup:
    entity: Optional[shared_reference.Reference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    
