import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class EnableCheckpointFirewallPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableCheckpointFirewallSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EnableCheckpointFirewallRequest:
    path_params: EnableCheckpointFirewallPathParams = dataclasses.field()
    security: EnableCheckpointFirewallSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EnableCheckpointFirewallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
