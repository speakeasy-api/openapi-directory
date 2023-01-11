import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import application as shared_application


@dataclasses.dataclass
class GetApplicationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetApplicationSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetApplicationRequest:
    path_params: GetApplicationPathParams = dataclasses.field()
    security: GetApplicationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application: Optional[shared_application.Application] = dataclasses.field(default=None)
    
