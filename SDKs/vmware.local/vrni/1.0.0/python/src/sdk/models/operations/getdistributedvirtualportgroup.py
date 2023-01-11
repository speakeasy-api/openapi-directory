import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import distributedvirtualportgroup as shared_distributedvirtualportgroup


@dataclasses.dataclass
class GetDistributedVirtualPortgroupPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistributedVirtualPortgroupQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDistributedVirtualPortgroupSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetDistributedVirtualPortgroupRequest:
    path_params: GetDistributedVirtualPortgroupPathParams = dataclasses.field()
    query_params: GetDistributedVirtualPortgroupQueryParams = dataclasses.field()
    security: GetDistributedVirtualPortgroupSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDistributedVirtualPortgroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    distributed_virtual_portgroup: Optional[shared_distributedvirtualportgroup.DistributedVirtualPortgroup] = dataclasses.field(default=None)
    
