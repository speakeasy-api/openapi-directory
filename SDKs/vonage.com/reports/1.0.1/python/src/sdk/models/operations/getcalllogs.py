import dataclasses
from typing import Optional
from enum import Enum
from ..shared import accountid_enum as shared_accountid_enum
from ..shared import security as shared_security
from ..shared import calllogshalresponse as shared_calllogshalresponse
from ..shared import validationerrorsresponse as shared_validationerrorsresponse


@dataclasses.dataclass
class GetCallLogsPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCallLogsQueryParams:
    page: float = dataclasses.field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: float = dataclasses.field(metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    start_gte: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start:gte', 'style': 'form', 'explode': True }})
    start_lte: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start:lte', 'style': 'form', 'explode': True }})
    destination_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'destination_user', 'style': 'form', 'explode': True }})
    direction: Optional[shared_accountid_enum.AccountIDEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    end_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end:gte', 'style': 'form', 'explode': True }})
    end_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end:lte', 'style': 'form', 'explode': True }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    source_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source_user', 'style': 'form', 'explode': True }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCallLogsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetCallLogsRequest:
    path_params: GetCallLogsPathParams = dataclasses.field()
    query_params: GetCallLogsQueryParams = dataclasses.field()
    security: GetCallLogsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCallLogsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    call_logs_hal_response: Optional[shared_calllogshalresponse.CallLogsHalResponse] = dataclasses.field(default=None)
    validation_errors_response: Optional[shared_validationerrorsresponse.ValidationErrorsResponse] = dataclasses.field(default=None)
    
