import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ciscoswitchdatasource as shared_ciscoswitchdatasource


@dataclasses.dataclass
class GetCiscoSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCiscoSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetCiscoSwitchRequest:
    path_params: GetCiscoSwitchPathParams = dataclasses.field()
    security: GetCiscoSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCiscoSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cisco_switch_data_source: Optional[shared_ciscoswitchdatasource.CiscoSwitchDataSource] = dataclasses.field(default=None)
    
