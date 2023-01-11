import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import video as shared_video


@dataclasses.dataclass
class GetWatchHistoryQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWatchHistorySecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetWatchHistoryRequest:
    query_params: GetWatchHistoryQueryParams = dataclasses.field()
    security: GetWatchHistorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWatchHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    
