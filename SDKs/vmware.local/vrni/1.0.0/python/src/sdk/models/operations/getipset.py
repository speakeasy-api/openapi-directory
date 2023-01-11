import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import baseipset as shared_baseipset


@dataclasses.dataclass
class GetIPSetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIPSetQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetIPSetSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetIPSetRequest:
    path_params: GetIPSetPathParams = dataclasses.field()
    query_params: GetIPSetQueryParams = dataclasses.field()
    security: GetIPSetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetIPSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    base_ip_set: Optional[shared_baseipset.BaseIPSet] = dataclasses.field(default=None)
    
