import dataclasses
from typing import Optional
from ..shared import task as shared_task


@dataclasses.dataclass
class PostWorkflowsTaskRerunPathParams:
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWorkflowsTaskRerunHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWorkflowsTaskRerunRequest:
    headers: PostWorkflowsTaskRerunHeaders = dataclasses.field()
    path_params: PostWorkflowsTaskRerunPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostWorkflowsTaskRerunResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    task: Optional[shared_task.Task] = dataclasses.field(default=None)
    
