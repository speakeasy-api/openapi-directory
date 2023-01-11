import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteVideoFromWatchLaterPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteVideoFromWatchLaterSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteVideoFromWatchLaterRequest:
    path_params: DeleteVideoFromWatchLaterPathParams = dataclasses.field()
    security: DeleteVideoFromWatchLaterSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteVideoFromWatchLaterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
