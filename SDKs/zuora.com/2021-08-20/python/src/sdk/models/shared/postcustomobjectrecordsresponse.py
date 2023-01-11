import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customobjectrecordserrorresponse as shared_customobjectrecordserrorresponse


@dataclass_json
@dataclasses.dataclass
class PostCustomObjectRecordsResponse:
    error: Optional[shared_customobjectrecordserrorresponse.CustomObjectRecordsErrorResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    records: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    
