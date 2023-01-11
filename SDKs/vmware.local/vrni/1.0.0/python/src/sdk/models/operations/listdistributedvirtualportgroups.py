import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import pagedlistresponsewithtime as shared_pagedlistresponsewithtime


@dataclasses.dataclass
class ListDistributedVirtualPortgroupsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_time: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    size: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    start_time: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDistributedVirtualPortgroupsSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListDistributedVirtualPortgroupsRequest:
    query_params: ListDistributedVirtualPortgroupsQueryParams = dataclasses.field()
    security: ListDistributedVirtualPortgroupsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListDistributedVirtualPortgroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    paged_list_response_with_time: Optional[shared_pagedlistresponsewithtime.PagedListResponseWithTime] = dataclasses.field(default=None)
    
