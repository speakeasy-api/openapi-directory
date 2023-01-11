import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteVideoThumbnailPathParams:
    picture_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'picture_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteVideoThumbnailSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteVideoThumbnailRequest:
    path_params: DeleteVideoThumbnailPathParams = dataclasses.field()
    security: DeleteVideoThumbnailSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteVideoThumbnailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
