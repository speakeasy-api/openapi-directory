import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostCustomObjectRecordsRequest:
    records: list[dict[str, Any]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    allow_partial_success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPartialSuccess') }})
    
