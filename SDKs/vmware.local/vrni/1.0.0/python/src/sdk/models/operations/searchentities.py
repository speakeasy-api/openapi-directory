import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import searchrequest as shared_searchrequest
from ..shared import apierror as shared_apierror
from ..shared import pagedlistresponsewithtime as shared_pagedlistresponsewithtime


@dataclasses.dataclass
class SearchEntitiesSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class SearchEntitiesRequest:
    security: SearchEntitiesSecurity = dataclasses.field()
    request: Optional[shared_searchrequest.SearchRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SearchEntitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    paged_list_response_with_time: Optional[shared_pagedlistresponsewithtime.PagedListResponseWithTime] = dataclasses.field(default=None)
    
