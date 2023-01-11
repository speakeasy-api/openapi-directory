import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import baseservice as shared_baseservice


@dataclasses.dataclass
class GetServicePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetServiceQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetServiceSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetServiceRequest:
    path_params: GetServicePathParams = dataclasses.field()
    query_params: GetServiceQueryParams = dataclasses.field()
    security: GetServiceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    base_service: Optional[shared_baseservice.BaseService] = dataclasses.field(default=None)
    
