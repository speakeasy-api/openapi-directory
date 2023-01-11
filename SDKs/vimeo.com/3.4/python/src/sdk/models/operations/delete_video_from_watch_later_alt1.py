import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteVideoFromWatchLaterAlt1PathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteVideoFromWatchLaterAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteVideoFromWatchLaterAlt1Request:
    path_params: DeleteVideoFromWatchLaterAlt1PathParams = dataclasses.field()
    security: DeleteVideoFromWatchLaterAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class DeleteVideoFromWatchLaterAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
