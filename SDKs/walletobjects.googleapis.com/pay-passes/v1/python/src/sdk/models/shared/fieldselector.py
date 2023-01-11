import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldreference as shared_fieldreference


@dataclass_json
@dataclasses.dataclass
class FieldSelector:
    fields: Optional[list[shared_fieldreference.FieldReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
