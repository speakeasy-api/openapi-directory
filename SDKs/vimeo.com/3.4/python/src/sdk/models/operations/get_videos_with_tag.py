import dataclasses
from typing import Optional
from enum import Enum
from ..shared import legacy_error as shared_legacy_error
from ..shared import video as shared_video


@dataclasses.dataclass
class GetVideosWithTagPathParams:
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetVideosWithTagDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVideosWithTagSortEnum(str, Enum):
    CREATED_TIME = "created_time"
    DURATION = "duration"
    NAME = "name"


@dataclasses.dataclass
class GetVideosWithTagQueryParams:
    direction: Optional[GetVideosWithTagDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetVideosWithTagSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVideosWithTagRequest:
    path_params: GetVideosWithTagPathParams = dataclasses.field()
    query_params: GetVideosWithTagQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideosWithTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    
