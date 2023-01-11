import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataqueryjob as shared_dataqueryjob


@dataclass_json
@dataclasses.dataclass
class GetDataQueryJobResponse:
    data: Optional[shared_dataqueryjob.DataQueryJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
