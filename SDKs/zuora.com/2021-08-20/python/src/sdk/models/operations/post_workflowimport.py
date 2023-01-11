import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linkage as shared_linkage
from ..shared import task as shared_task
from ..shared import workflow as shared_workflow


@dataclasses.dataclass
class PostWorkflowImportHeaders:
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostWorkflowImportRequestBody:
    linkages: Optional[list[shared_linkage.Linkage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkages') }})
    tasks: Optional[list[shared_task.Task]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    workflow: Optional[shared_workflow.Workflow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow') }})
    

@dataclasses.dataclass
class PostWorkflowImportRequest:
    headers: PostWorkflowImportHeaders = dataclasses.field()
    request: Optional[PostWorkflowImportRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostWorkflowImportResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    workflow: Optional[shared_workflow.Workflow] = dataclasses.field(default=None)
    
