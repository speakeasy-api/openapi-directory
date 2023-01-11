import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customobjectrecordswitherror as shared_customobjectrecordswitherror


@dataclass_json
@dataclasses.dataclass
class CustomObjectRecordsThrottledResponse:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    details: Optional[list[shared_customobjectrecordswitherror.CustomObjectRecordsWithError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
