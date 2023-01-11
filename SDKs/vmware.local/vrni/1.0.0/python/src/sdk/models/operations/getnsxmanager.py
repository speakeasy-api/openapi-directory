import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import baseentity as shared_baseentity


@dataclasses.dataclass
class GetNsxManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNsxManagerQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNsxManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNsxManagerRequest:
    path_params: GetNsxManagerPathParams = dataclasses.field()
    query_params: GetNsxManagerQueryParams = dataclasses.field()
    security: GetNsxManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNsxManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    base_entity: Optional[shared_baseentity.BaseEntity] = dataclasses.field(default=None)
    
