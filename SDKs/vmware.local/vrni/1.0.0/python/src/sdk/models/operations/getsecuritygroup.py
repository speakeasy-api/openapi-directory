import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import basesecuritygroup as shared_basesecuritygroup


@dataclasses.dataclass
class GetSecurityGroupPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSecurityGroupQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSecurityGroupSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetSecurityGroupRequest:
    path_params: GetSecurityGroupPathParams = dataclasses.field()
    query_params: GetSecurityGroupQueryParams = dataclasses.field()
    security: GetSecurityGroupSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSecurityGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    base_security_group: Optional[shared_basesecuritygroup.BaseSecurityGroup] = dataclasses.field(default=None)
    
