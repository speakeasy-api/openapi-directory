import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import video as shared_video


@dataclasses.dataclass
class GetVodVideosPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    
class GetVodVideosDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVodVideosFilterEnum(str, Enum):
    ALL = "all"
    BUY = "buy"
    EXPIRING_SOON = "expiring_soon"
    EXTRA = "extra"
    MAIN = "main"
    MAIN_VIEWABLE = "main.viewable"
    RENT = "rent"
    TRAILER = "trailer"
    UNWATCHED = "unwatched"
    VIEWABLE = "viewable"
    WATCHED = "watched"

class GetVodVideosSortEnum(str, Enum):
    DATE = "date"
    DEFAULT = "default"
    EPISODE = "episode"
    MANUAL = "manual"
    NAME = "name"
    PURCHASE_TIME = "purchase_time"
    RELEASE_DATE = "release_date"


@dataclasses.dataclass
class GetVodVideosQueryParams:
    direction: Optional[GetVodVideosDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetVodVideosFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetVodVideosSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVodVideosRequest:
    path_params: GetVodVideosPathParams = dataclasses.field()
    query_params: GetVodVideosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVodVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    
