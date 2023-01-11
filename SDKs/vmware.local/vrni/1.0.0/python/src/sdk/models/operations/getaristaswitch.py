import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import switchdatasource as shared_switchdatasource


@dataclasses.dataclass
class GetAristaSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAristaSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetAristaSwitchRequest:
    path_params: GetAristaSwitchPathParams = dataclasses.field()
    security: GetAristaSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAristaSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    switch_data_source: Optional[shared_switchdatasource.SwitchDataSource] = dataclasses.field(default=None)
    
