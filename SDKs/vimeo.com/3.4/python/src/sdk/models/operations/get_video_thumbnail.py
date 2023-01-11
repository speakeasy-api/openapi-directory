import dataclasses
from typing import Optional
from ..shared import picture as shared_picture


@dataclasses.dataclass
class GetVideoThumbnailPathParams:
    picture_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'picture_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVideoThumbnailRequest:
    path_params: GetVideoThumbnailPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoThumbnailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    picture: Optional[shared_picture.Picture] = dataclasses.field(default=None)
    
