import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import distributedvirtualswitch as shared_distributedvirtualswitch


@dataclasses.dataclass
class GetDistributedVirtualSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistributedVirtualSwitchQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDistributedVirtualSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetDistributedVirtualSwitchRequest:
    path_params: GetDistributedVirtualSwitchPathParams = dataclasses.field()
    query_params: GetDistributedVirtualSwitchQueryParams = dataclasses.field()
    security: GetDistributedVirtualSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDistributedVirtualSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    distributed_virtual_switch: Optional[shared_distributedvirtualswitch.DistributedVirtualSwitch] = dataclasses.field(default=None)
    
