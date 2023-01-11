import dataclasses
from typing import Optional
from ..shared import picture as shared_picture


@dataclasses.dataclass
class GetVideoThumbnailsAlt1PathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVideoThumbnailsAlt1QueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVideoThumbnailsAlt1Request:
    path_params: GetVideoThumbnailsAlt1PathParams = dataclasses.field()
    query_params: GetVideoThumbnailsAlt1QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoThumbnailsAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pictures: Optional[list[shared_picture.Picture]] = dataclasses.field(default=None)
    
