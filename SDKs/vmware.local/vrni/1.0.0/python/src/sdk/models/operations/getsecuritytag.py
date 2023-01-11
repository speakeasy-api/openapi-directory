import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import securitytag as shared_securitytag


@dataclasses.dataclass
class GetSecurityTagPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSecurityTagQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSecurityTagSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetSecurityTagRequest:
    path_params: GetSecurityTagPathParams = dataclasses.field()
    query_params: GetSecurityTagQueryParams = dataclasses.field()
    security: GetSecurityTagSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSecurityTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    security_tag: Optional[shared_securitytag.SecurityTag] = dataclasses.field(default=None)
    
