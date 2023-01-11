import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import snmpconfig as shared_snmpconfig


@dataclasses.dataclass
class GetAristaSwitchSnmpConfigPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAristaSwitchSnmpConfigSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetAristaSwitchSnmpConfigRequest:
    path_params: GetAristaSwitchSnmpConfigPathParams = dataclasses.field()
    security: GetAristaSwitchSnmpConfigSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAristaSwitchSnmpConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    snmp_config: Optional[shared_snmpconfig.SnmpConfig] = dataclasses.field(default=None)
    
