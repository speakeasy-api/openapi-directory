import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import vcenterdatasource as shared_vcenterdatasource


@dataclasses.dataclass
class GetVcenterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVcenterSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetVcenterRequest:
    path_params: GetVcenterPathParams = dataclasses.field()
    security: GetVcenterSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVcenterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    v_center_data_source: Optional[shared_vcenterdatasource.VCenterDataSource] = dataclasses.field(default=None)
    
