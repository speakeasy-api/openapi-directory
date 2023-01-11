import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatetask as shared_updatetask


@dataclass_json
@dataclasses.dataclass
class PutTasksRequest:
    data: Optional[list[shared_updatetask.UpdateTask]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
