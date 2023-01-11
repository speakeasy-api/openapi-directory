import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import basevnic as shared_basevnic


@dataclasses.dataclass
class GetVnicPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVnicQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVnicSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetVnicRequest:
    path_params: GetVnicPathParams = dataclasses.field()
    query_params: GetVnicQueryParams = dataclasses.field()
    security: GetVnicSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVnicResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    base_vnic: Optional[shared_basevnic.BaseVnic] = dataclasses.field(default=None)
    
