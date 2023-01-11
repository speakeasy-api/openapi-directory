import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import vcdatacenter as shared_vcdatacenter


@dataclasses.dataclass
class GetDatacenterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDatacenterQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDatacenterSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetDatacenterRequest:
    path_params: GetDatacenterPathParams = dataclasses.field()
    query_params: GetDatacenterQueryParams = dataclasses.field()
    security: GetDatacenterSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDatacenterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    vc_datacenter: Optional[shared_vcdatacenter.VcDatacenter] = dataclasses.field(default=None)
    
