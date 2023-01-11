import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import call as shared_call
from ..shared import errorresponse as shared_errorresponse

class ListCallsDirectionEnum(str, Enum):
    INBOUND = "INBOUND"
    OUTBOUND = "OUTBOUND"

class ListCallsOrderEnum(str, Enum):
    DESC = "DESC"
    ASC = "ASC"

class ListCallsStatesEnum(str, Enum):
    INITIALIZING = "INITIALIZING"
    RINGING = "RINGING"
    ACTIVE = "ACTIVE"
    HELD = "HELD"
    REMOTE_HELD = "REMOTE_HELD"


@dataclasses.dataclass
class ListCallsQueryParams:
    direction: Optional[ListCallsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    from_date: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[ListCallsOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    states: Optional[ListCallsStatesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'states', 'style': 'form', 'explode': True }})
    to_date: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCallsRequest:
    query_params: ListCallsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListCallsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calls: Optional[list[shared_call.Call]] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
