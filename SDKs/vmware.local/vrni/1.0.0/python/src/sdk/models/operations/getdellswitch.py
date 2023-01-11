import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import dellswitchdatasource as shared_dellswitchdatasource


@dataclasses.dataclass
class GetDellSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDellSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetDellSwitchRequest:
    path_params: GetDellSwitchPathParams = dataclasses.field()
    security: GetDellSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDellSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dell_switch_data_source: Optional[shared_dellswitchdatasource.DellSwitchDataSource] = dataclasses.field(default=None)
    
