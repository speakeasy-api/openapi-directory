import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import vcentermanager as shared_vcentermanager


@dataclasses.dataclass
class GetVcenterManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVcenterManagerQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVcenterManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetVcenterManagerRequest:
    path_params: GetVcenterManagerPathParams = dataclasses.field()
    query_params: GetVcenterManagerQueryParams = dataclasses.field()
    security: GetVcenterManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVcenterManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    v_center_manager: Optional[shared_vcentermanager.VCenterManager] = dataclasses.field(default=None)
    
