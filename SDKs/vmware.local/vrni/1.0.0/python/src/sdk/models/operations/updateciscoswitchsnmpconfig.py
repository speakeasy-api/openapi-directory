import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import snmpconfig as shared_snmpconfig
from ..shared import apierror as shared_apierror


@dataclasses.dataclass
class UpdateCiscoSwitchSnmpConfigPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCiscoSwitchSnmpConfigSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UpdateCiscoSwitchSnmpConfigRequest:
    path_params: UpdateCiscoSwitchSnmpConfigPathParams = dataclasses.field()
    security: UpdateCiscoSwitchSnmpConfigSecurity = dataclasses.field()
    request: Optional[shared_snmpconfig.SnmpConfig] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateCiscoSwitchSnmpConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    snmp_config: Optional[shared_snmpconfig.SnmpConfig] = dataclasses.field(default=None)
    
