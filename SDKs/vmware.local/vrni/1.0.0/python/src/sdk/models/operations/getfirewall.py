import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import basefirewallrule as shared_basefirewallrule


@dataclasses.dataclass
class GetFirewallPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFirewallQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFirewallSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetFirewallRequest:
    path_params: GetFirewallPathParams = dataclasses.field()
    query_params: GetFirewallQueryParams = dataclasses.field()
    security: GetFirewallSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFirewallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    base_firewall_rule: Optional[shared_basefirewallrule.BaseFirewallRule] = dataclasses.field(default=None)
    
