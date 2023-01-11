import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventtrigger as shared_eventtrigger
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetEventTriggersQueryParams:
    active: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'active', 'style': 'form', 'explode': True }})
    base_object: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'baseObject', 'style': 'form', 'explode': True }})
    event_type_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'eventTypeName', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEventTriggersHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetEventTriggers200ApplicationJSON:
    data: Optional[list[shared_eventtrigger.EventTrigger]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclasses.dataclass
class GetEventTriggersRequest:
    headers: GetEventTriggersHeaders = dataclasses.field()
    query_params: GetEventTriggersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventTriggersResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_event_triggers_200_application_json_object: Optional[GetEventTriggers200ApplicationJSON] = dataclasses.field(default=None)
    
