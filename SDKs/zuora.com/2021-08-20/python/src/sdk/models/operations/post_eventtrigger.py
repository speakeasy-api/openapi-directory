import dataclasses
from typing import Optional
from ..shared import posteventtriggerrequest as shared_posteventtriggerrequest
from ..shared import errorresponse as shared_errorresponse
from ..shared import eventtrigger as shared_eventtrigger


@dataclasses.dataclass
class PostEventTriggerHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostEventTriggerRequest:
    headers: PostEventTriggerHeaders = dataclasses.field()
    request: shared_posteventtriggerrequest.PostEventTriggerRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostEventTriggerResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    event_trigger: Optional[shared_eventtrigger.EventTrigger] = dataclasses.field(default=None)
    
