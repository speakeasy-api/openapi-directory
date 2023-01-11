import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowerror as shared_workflowerror
from ..shared import workflowinstance as shared_workflowinstance


@dataclasses.dataclass
class PostRunWorkflowPathParams:
    workflow_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRunWorkflowHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostRunWorkflow400ApplicationJSON:
    errors: Optional[list[shared_workflowerror.WorkflowError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRunWorkflow406ApplicationJSON:
    errors: Optional[list[shared_workflowerror.WorkflowError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    parameters: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRunWorkflow409ApplicationJSON:
    errors: Optional[list[shared_workflowerror.WorkflowError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class PostRunWorkflowRequest:
    headers: PostRunWorkflowHeaders = dataclasses.field()
    path_params: PostRunWorkflowPathParams = dataclasses.field()
    request: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRunWorkflowResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_run_workflow_400_application_json_object: Optional[PostRunWorkflow400ApplicationJSON] = dataclasses.field(default=None)
    post_run_workflow_406_application_json_object: Optional[PostRunWorkflow406ApplicationJSON] = dataclasses.field(default=None)
    post_run_workflow_409_application_json_object: Optional[PostRunWorkflow409ApplicationJSON] = dataclasses.field(default=None)
    workflow_instance: Optional[shared_workflowinstance.WorkflowInstance] = dataclasses.field(default=None)
    
