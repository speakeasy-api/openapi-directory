import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validationreasons as shared_validationreasons


@dataclass_json
@dataclasses.dataclass
class ValidationErrors:
    reasons: Optional[list[shared_validationreasons.ValidationReasons]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasons') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
