import dataclasses
from typing import Optional
from enum import Enum
from ..shared import legacy_error as shared_legacy_error
from ..shared import video as shared_video


@dataclasses.dataclass
class GetRelatedVideosPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class GetRelatedVideosFilterEnum(str, Enum):
    RELATED = "related"


@dataclasses.dataclass
class GetRelatedVideosQueryParams:
    filter: Optional[GetRelatedVideosFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRelatedVideosRequest:
    path_params: GetRelatedVideosPathParams = dataclasses.field()
    query_params: GetRelatedVideosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRelatedVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    
