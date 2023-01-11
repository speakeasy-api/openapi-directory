import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DisablePanoramaFirewallPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisablePanoramaFirewallSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DisablePanoramaFirewallRequest:
    path_params: DisablePanoramaFirewallPathParams = dataclasses.field()
    security: DisablePanoramaFirewallSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisablePanoramaFirewallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
