import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflow as shared_workflow


@dataclass_json
@dataclasses.dataclass
class GetWorkflowsResponsePagination:
    r"""GetWorkflowsResponsePagination
    An object containing pagination information for the list of workflows returned by the api
    
    """
    
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_length') }})
    

@dataclass_json
@dataclasses.dataclass
class GetWorkflowsResponse:
    data: Optional[list[shared_workflow.Workflow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    pagination: Optional[GetWorkflowsResponsePagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    
