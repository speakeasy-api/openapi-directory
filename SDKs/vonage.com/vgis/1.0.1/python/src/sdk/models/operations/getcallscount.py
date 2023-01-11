import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import errorresponse as shared_errorresponse
from ..shared import eventscount as shared_eventscount

class GetCallsCountDirectionEnum(str, Enum):
    INBOUND = "INBOUND"
    OUTBOUND = "OUTBOUND"

class GetCallsCountStatesEnum(str, Enum):
    INITIALIZING = "INITIALIZING"
    RINGING = "RINGING"
    ACTIVE = "ACTIVE"
    HELD = "HELD"
    REMOTE_HELD = "REMOTE_HELD"


@dataclasses.dataclass
class GetCallsCountQueryParams:
    direction: Optional[GetCallsCountDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    from_date: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    states: Optional[GetCallsCountStatesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'states', 'style': 'form', 'explode': True }})
    to_date: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCallsCountRequest:
    query_params: GetCallsCountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCallsCountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    events_count: Optional[shared_eventscount.EventsCount] = dataclasses.field(default=None)
    
