import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linkage as shared_linkage
from ..shared import task as shared_task
from ..shared import workflow as shared_workflow


@dataclasses.dataclass
class GetWorkflowExportPathParams:
    workflow_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkflowExportHeaders:
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetWorkflowExport200ApplicationJSON:
    linkages: Optional[list[shared_linkage.Linkage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkages') }})
    tasks: Optional[list[shared_task.Task]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    workflow: Optional[shared_workflow.Workflow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow') }})
    

@dataclasses.dataclass
class GetWorkflowExportRequest:
    headers: GetWorkflowExportHeaders = dataclasses.field()
    path_params: GetWorkflowExportPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkflowExportResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_workflow_export_200_application_json_object: Optional[GetWorkflowExport200ApplicationJSON] = dataclasses.field(default=None)
    
