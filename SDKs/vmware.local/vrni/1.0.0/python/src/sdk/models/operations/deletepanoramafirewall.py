import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeletePanoramaFirewallPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePanoramaFirewallSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeletePanoramaFirewallRequest:
    path_params: DeletePanoramaFirewallPathParams = dataclasses.field()
    security: DeletePanoramaFirewallSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeletePanoramaFirewallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
