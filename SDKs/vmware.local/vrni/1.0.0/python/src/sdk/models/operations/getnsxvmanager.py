import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import nsxvmanagerdatasource as shared_nsxvmanagerdatasource


@dataclasses.dataclass
class GetNsxvManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNsxvManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNsxvManagerRequest:
    path_params: GetNsxvManagerPathParams = dataclasses.field()
    security: GetNsxvManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNsxvManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    nsxv_manager_data_source: Optional[shared_nsxvmanagerdatasource.NsxvManagerDataSource] = dataclasses.field(default=None)
    
