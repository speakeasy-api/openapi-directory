import dataclasses
from typing import Optional
from ..shared import tasksresponse as shared_tasksresponse


@dataclasses.dataclass
class GetWorkflowsTasksQueryParams:
    action_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'action_type', 'style': 'form', 'explode': True }})
    call_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'call_type', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    instance: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'instance', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object', 'style': 'form', 'explode': True }})
    object_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object_id', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_length', 'style': 'form', 'explode': True }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    workflow_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'workflow_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWorkflowsTasksHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkflowsTasksRequest:
    headers: GetWorkflowsTasksHeaders = dataclasses.field()
    query_params: GetWorkflowsTasksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkflowsTasksResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    tasks_response: Optional[shared_tasksresponse.TasksResponse] = dataclasses.field(default=None)
    
