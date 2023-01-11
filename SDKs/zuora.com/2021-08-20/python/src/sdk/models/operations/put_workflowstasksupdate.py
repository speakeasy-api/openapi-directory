import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import puttasksrequest as shared_puttasksrequest
from ..shared import badrequestresponse as shared_badrequestresponse
from ..shared import tasksresponse as shared_tasksresponse


@dataclasses.dataclass
class PutWorkflowsTasksUpdateHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutWorkflowsTasksUpdateRequest:
    headers: PutWorkflowsTasksUpdateHeaders = dataclasses.field()
    request: Optional[shared_puttasksrequest.PutTasksRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutWorkflowsTasksUpdateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_response: Optional[shared_badrequestresponse.BadRequestResponse] = dataclasses.field(default=None)
    tasks_response: Optional[shared_tasksresponse.TasksResponse] = dataclasses.field(default=None)
    
