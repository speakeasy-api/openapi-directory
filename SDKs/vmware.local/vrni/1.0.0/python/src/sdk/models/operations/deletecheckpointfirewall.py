import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteCheckpointFirewallPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCheckpointFirewallSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteCheckpointFirewallRequest:
    path_params: DeleteCheckpointFirewallPathParams = dataclasses.field()
    security: DeleteCheckpointFirewallSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCheckpointFirewallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
