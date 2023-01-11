import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import basevirtualmachine as shared_basevirtualmachine


@dataclasses.dataclass
class GetVMPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVMQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVMSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetVMRequest:
    path_params: GetVMPathParams = dataclasses.field()
    query_params: GetVMQueryParams = dataclasses.field()
    security: GetVMSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVMResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    base_virtual_machine: Optional[shared_basevirtualmachine.BaseVirtualMachine] = dataclasses.field(default=None)
    
