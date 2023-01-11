import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionserrorresponse as shared_actionserrorresponse


@dataclass_json
@dataclasses.dataclass
class SaveResult:
    errors: Optional[list[shared_actionserrorresponse.ActionsErrorResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Success') }})
    
