import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteFromWatchHistoryPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFromWatchHistorySecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteFromWatchHistoryRequest:
    path_params: DeleteFromWatchHistoryPathParams = dataclasses.field()
    security: DeleteFromWatchHistorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFromWatchHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
