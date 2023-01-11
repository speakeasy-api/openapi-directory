import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_page as shared_on_demand_page


@dataclasses.dataclass
class GetUserVodsPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetUserVodsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetUserVodsFilterEnum(str, Enum):
    FILM = "film"
    SERIES = "series"

class GetUserVodsSortEnum(str, Enum):
    ADDED = "added"
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    MODIFIED_TIME = "modified_time"
    NAME = "name"
    PUBLISH_TIME = "publish.time"
    RATING = "rating"


@dataclasses.dataclass
class GetUserVodsQueryParams:
    direction: Optional[GetUserVodsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetUserVodsFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetUserVodsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserVodsRequest:
    path_params: GetUserVodsPathParams = dataclasses.field()
    query_params: GetUserVodsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserVodsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_pages: Optional[list[shared_on_demand_page.OnDemandPage]] = dataclasses.field(default=None)
    
