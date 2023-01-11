import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import part as shared_part


@dataclass_json
@dataclasses.dataclass
class Leg:
    parts: list[shared_part.Part] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parts') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    
