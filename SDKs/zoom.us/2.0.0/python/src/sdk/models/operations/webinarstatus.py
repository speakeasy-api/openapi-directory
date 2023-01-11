import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarStatusPathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebinarStatusRequests:
    any: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    any1: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class WebinarStatusSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebinarStatusRequest:
    path_params: WebinarStatusPathParams = dataclasses.field()
    request: WebinarStatusRequests = dataclasses.field()
    security: WebinarStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
