import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import task as shared_task


@dataclass_json
@dataclasses.dataclass
class TasksResponsePagination:
    r"""TasksResponsePagination
    An object containing pagination information for the list of tasks returned by the API.
    
    """
    
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_length') }})
    

@dataclass_json
@dataclasses.dataclass
class TasksResponse:
    data: Optional[list[shared_task.Task]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination: Optional[TasksResponsePagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    
