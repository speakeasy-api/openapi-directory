import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import vmknic as shared_vmknic


@dataclasses.dataclass
class GetVmknicPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVmknicQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVmknicSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetVmknicRequest:
    path_params: GetVmknicPathParams = dataclasses.field()
    query_params: GetVmknicQueryParams = dataclasses.field()
    security: GetVmknicSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVmknicResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    vmknic: Optional[shared_vmknic.Vmknic] = dataclasses.field(default=None)
    
