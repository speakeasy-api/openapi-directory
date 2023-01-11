import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarDeletePathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebinarDeleteQueryParams:
    cancel_webinar_reminder: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cancel_webinar_reminder', 'style': 'form', 'explode': True }})
    occurrence_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurrence_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class WebinarDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebinarDeleteRequest:
    path_params: WebinarDeletePathParams = dataclasses.field()
    query_params: WebinarDeleteQueryParams = dataclasses.field()
    security: WebinarDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
