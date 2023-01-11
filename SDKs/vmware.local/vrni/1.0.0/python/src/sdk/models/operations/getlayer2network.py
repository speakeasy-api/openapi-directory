import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import basel2network as shared_basel2network


@dataclasses.dataclass
class GetLayer2NetworkPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLayer2NetworkQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetLayer2NetworkSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetLayer2NetworkRequest:
    path_params: GetLayer2NetworkPathParams = dataclasses.field()
    query_params: GetLayer2NetworkQueryParams = dataclasses.field()
    security: GetLayer2NetworkSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetLayer2NetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    base_l2_network: Optional[shared_basel2network.BaseL2Network] = dataclasses.field(default=None)
    
