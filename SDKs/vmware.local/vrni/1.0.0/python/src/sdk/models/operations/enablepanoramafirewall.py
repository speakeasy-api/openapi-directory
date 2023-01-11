import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class EnablePanoramaFirewallPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnablePanoramaFirewallSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EnablePanoramaFirewallRequest:
    path_params: EnablePanoramaFirewallPathParams = dataclasses.field()
    security: EnablePanoramaFirewallSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EnablePanoramaFirewallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
