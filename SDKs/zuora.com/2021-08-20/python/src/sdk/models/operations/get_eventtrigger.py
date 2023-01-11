import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import eventtrigger as shared_eventtrigger


@dataclasses.dataclass
class GetEventTriggerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventTriggerHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventTriggerRequest:
    headers: GetEventTriggerHeaders = dataclasses.field()
    path_params: GetEventTriggerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventTriggerResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    event_trigger: Optional[shared_eventtrigger.EventTrigger] = dataclasses.field(default=None)
    
