import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import error as shared_error
from ..shared import legacy_error as shared_legacy_error
from ..shared import video as shared_video

class SearchVideosDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class SearchVideosFilterEnum(str, Enum):
    CC = "CC"
    CC_BY = "CC-BY"
    CC_BY_NC = "CC-BY-NC"
    CC_BY_NC_ND = "CC-BY-NC-ND"
    CC_BY_NC_SA = "CC-BY-NC-SA"
    CC_BY_ND = "CC-BY-ND"
    CC_BY_SA = "CC-BY-SA"
    CC0 = "CC0"
    CATEGORIES = "categories"
    DURATION = "duration"
    IN_PROGRESS = "in-progress"
    MINIMUM_LIKES = "minimum_likes"
    TRENDING = "trending"
    UPLOAD_DATE = "upload_date"

class SearchVideosSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DURATION = "duration"
    LIKES = "likes"
    PLAYS = "plays"
    RELEVANT = "relevant"


@dataclasses.dataclass
class SearchVideosQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    direction: Optional[SearchVideosDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[SearchVideosFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    links: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'links', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[SearchVideosSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    uris: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchVideosRequest:
    query_params: SearchVideosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    
