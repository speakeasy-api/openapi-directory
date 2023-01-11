import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import solution as shared_solution


@dataclass_json
@dataclasses.dataclass
class Error:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    solution: Optional[shared_solution.Solution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solution') }})
    
