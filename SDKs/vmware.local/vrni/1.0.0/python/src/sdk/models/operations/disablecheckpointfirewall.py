import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DisableCheckpointFirewallPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisableCheckpointFirewallSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DisableCheckpointFirewallRequest:
    path_params: DisableCheckpointFirewallPathParams = dataclasses.field()
    security: DisableCheckpointFirewallSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisableCheckpointFirewallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
