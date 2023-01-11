import dataclasses
from typing import Optional
from ..shared import getworkflowresponse as shared_getworkflowresponse


@dataclasses.dataclass
class GetWorkflowPathParams:
    workflow_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkflowHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkflowRequest:
    headers: GetWorkflowHeaders = dataclasses.field()
    path_params: GetWorkflowPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkflowResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_workflow_response: Optional[shared_getworkflowresponse.GetWorkflowResponse] = dataclasses.field(default=None)
    
