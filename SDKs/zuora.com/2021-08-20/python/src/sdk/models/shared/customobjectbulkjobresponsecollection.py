import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customobjectbulkjobresponse as shared_customobjectbulkjobresponse


@dataclass_json
@dataclasses.dataclass
class CustomObjectBulkJobResponseCollection:
    jobs: list[shared_customobjectbulkjobresponse.CustomObjectBulkJobResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursor') }})
    
