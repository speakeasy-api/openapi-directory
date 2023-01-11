import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import event as shared_event


@dataclasses.dataclass
class GetEventPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventRequest:
    path_params: GetEventPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None)
    
