import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import snmpconfig as shared_snmpconfig
from ..shared import apierror as shared_apierror


@dataclasses.dataclass
class UpdateDellSwitchSnmpConfigPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDellSwitchSnmpConfigSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UpdateDellSwitchSnmpConfigRequest:
    path_params: UpdateDellSwitchSnmpConfigPathParams = dataclasses.field()
    security: UpdateDellSwitchSnmpConfigSecurity = dataclasses.field()
    request: Optional[shared_snmpconfig.SnmpConfig] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDellSwitchSnmpConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    snmp_config: Optional[shared_snmpconfig.SnmpConfig] = dataclasses.field(default=None)
    
