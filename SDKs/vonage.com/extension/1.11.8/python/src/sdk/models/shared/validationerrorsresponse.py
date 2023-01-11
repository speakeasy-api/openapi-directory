import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detailedinvalidparam as shared_detailedinvalidparam


@dataclass_json
@dataclasses.dataclass
class ValidationErrorsResponse:
    instance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    invalid_parameters: Optional[list[shared_detailedinvalidparam.DetailedInvalidParam]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_parameters') }})
    status: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
