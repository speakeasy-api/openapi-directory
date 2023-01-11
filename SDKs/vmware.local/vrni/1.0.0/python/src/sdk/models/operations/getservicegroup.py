import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import group as shared_group


@dataclasses.dataclass
class GetServiceGroupPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetServiceGroupQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetServiceGroupSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetServiceGroupRequest:
    path_params: GetServiceGroupPathParams = dataclasses.field()
    query_params: GetServiceGroupQueryParams = dataclasses.field()
    security: GetServiceGroupSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetServiceGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    group: Optional[shared_group.Group] = dataclasses.field(default=None)
    
