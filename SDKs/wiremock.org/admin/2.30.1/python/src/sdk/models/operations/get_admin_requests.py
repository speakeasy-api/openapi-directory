import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAdminRequestsQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAdminRequestsRequest:
    query_params: GetAdminRequestsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAdminRequestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
