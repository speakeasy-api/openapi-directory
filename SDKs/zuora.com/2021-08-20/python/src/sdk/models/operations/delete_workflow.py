import dataclasses
from typing import Optional
from ..shared import deleteworkflowerror as shared_deleteworkflowerror
from ..shared import deleteworkflowsuccess as shared_deleteworkflowsuccess


@dataclasses.dataclass
class DeleteWorkflowPathParams:
    workflow_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWorkflowHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWorkflowRequest:
    headers: DeleteWorkflowHeaders = dataclasses.field()
    path_params: DeleteWorkflowPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWorkflowResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_workflow_error: Optional[shared_deleteworkflowerror.DeleteWorkflowError] = dataclasses.field(default=None)
    delete_workflow_success: Optional[shared_deleteworkflowsuccess.DeleteWorkflowSuccess] = dataclasses.field(default=None)
    
