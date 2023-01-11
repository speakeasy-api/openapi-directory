import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import pagedlistresponse as shared_pagedlistresponse


@dataclasses.dataclass
class ListApplicationsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_time: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    size: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    start_time: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListApplicationsSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListApplicationsRequest:
    query_params: ListApplicationsQueryParams = dataclasses.field()
    security: ListApplicationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListApplicationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paged_list_response: Optional[shared_pagedlistresponse.PagedListResponse] = dataclasses.field(default=None)
    
