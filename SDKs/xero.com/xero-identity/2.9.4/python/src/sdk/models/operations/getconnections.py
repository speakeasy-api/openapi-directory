import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetConnectionsQueryParams:
    auth_event_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'authEventId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConnectionsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetConnectionsRequest:
    query_params: GetConnectionsQueryParams = dataclasses.field()
    security: GetConnectionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetConnectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connections: Optional[list[Any]] = dataclasses.field(default=None)
    
