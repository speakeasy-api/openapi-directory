import dataclasses
from typing import Optional
from ..shared import picture as shared_picture


@dataclasses.dataclass
class GetVideoThumbnailsPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVideoThumbnailsQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVideoThumbnailsRequest:
    path_params: GetVideoThumbnailsPathParams = dataclasses.field()
    query_params: GetVideoThumbnailsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoThumbnailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pictures: Optional[list[shared_picture.Picture]] = dataclasses.field(default=None)
    
