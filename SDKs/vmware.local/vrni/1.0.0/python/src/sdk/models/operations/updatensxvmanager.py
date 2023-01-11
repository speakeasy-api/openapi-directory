import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import nsxvmanagerdatasource as shared_nsxvmanagerdatasource


@dataclasses.dataclass
class UpdateNsxvManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateNsxvManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UpdateNsxvManagerRequest:
    path_params: UpdateNsxvManagerPathParams = dataclasses.field()
    security: UpdateNsxvManagerSecurity = dataclasses.field()
    request: Optional[shared_nsxvmanagerdatasource.NsxvManagerDataSource] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNsxvManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    nsxv_manager_data_source: Optional[shared_nsxvmanagerdatasource.NsxvManagerDataSource] = dataclasses.field(default=None)
    
