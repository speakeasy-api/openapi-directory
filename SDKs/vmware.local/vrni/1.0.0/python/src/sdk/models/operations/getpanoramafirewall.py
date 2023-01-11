import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import switchdatasource as shared_switchdatasource


@dataclasses.dataclass
class GetPanoramaFirewallPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPanoramaFirewallSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetPanoramaFirewallRequest:
    path_params: GetPanoramaFirewallPathParams = dataclasses.field()
    security: GetPanoramaFirewallSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPanoramaFirewallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    switch_data_source: Optional[shared_switchdatasource.SwitchDataSource] = dataclasses.field(default=None)
    
