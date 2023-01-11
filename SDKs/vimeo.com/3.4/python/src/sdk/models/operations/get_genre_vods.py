import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import on_demand_page as shared_on_demand_page


@dataclasses.dataclass
class GetGenreVodsPathParams:
    genre_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'genre_id', 'style': 'simple', 'explode': False }})
    
class GetGenreVodsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetGenreVodsFilterEnum(str, Enum):
    COUNTRY = "country"
    MY_REGION = "my_region"

class GetGenreVodsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    NAME = "name"
    PUBLISH_TIME = "publish.time"
    VIDEOS = "videos"


@dataclasses.dataclass
class GetGenreVodsQueryParams:
    direction: Optional[GetGenreVodsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetGenreVodsFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetGenreVodsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGenreVodsRequest:
    path_params: GetGenreVodsPathParams = dataclasses.field()
    query_params: GetGenreVodsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGenreVodsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    on_demand_pages: Optional[list[shared_on_demand_page.OnDemandPage]] = dataclasses.field(default=None)
    
