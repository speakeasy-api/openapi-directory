import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import video as shared_video


@dataclasses.dataclass
class GetVodSeasonVideosPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    season_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'season_id', 'style': 'simple', 'explode': False }})
    
class GetVodSeasonVideosFilterEnum(str, Enum):
    VIEWABLE = "viewable"

class GetVodSeasonVideosSortEnum(str, Enum):
    DATE = "date"
    DEFAULT = "default"
    MANUAL = "manual"
    NAME = "name"
    PURCHASE_TIME = "purchase_time"
    RELEASE_DATE = "release_date"


@dataclasses.dataclass
class GetVodSeasonVideosQueryParams:
    filter: Optional[GetVodSeasonVideosFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetVodSeasonVideosSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVodSeasonVideosRequest:
    path_params: GetVodSeasonVideosPathParams = dataclasses.field()
    query_params: GetVodSeasonVideosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVodSeasonVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    
