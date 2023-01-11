import dataclasses
from typing import Optional
from ..shared import endpoint as shared_endpoint


@dataclasses.dataclass
class GetEndpointsQueryParams:
    openapi: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'openapi', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEndpointsRequest:
    query_params: GetEndpointsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEndpointsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    endpoint: Optional[shared_endpoint.Endpoint] = dataclasses.field(default=None)
    
