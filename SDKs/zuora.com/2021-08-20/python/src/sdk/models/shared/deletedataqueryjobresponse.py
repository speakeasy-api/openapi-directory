import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataqueryjobcancelled as shared_dataqueryjobcancelled


@dataclass_json
@dataclasses.dataclass
class DeleteDataQueryJobResponse:
    data: Optional[shared_dataqueryjobcancelled.DataQueryJobCancelled] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
