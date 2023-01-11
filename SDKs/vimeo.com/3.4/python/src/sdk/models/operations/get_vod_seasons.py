import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_season as shared_on_demand_season


@dataclasses.dataclass
class GetVodSeasonsPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    
class GetVodSeasonsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVodSeasonsFilterEnum(str, Enum):
    VIEWABLE = "viewable"

class GetVodSeasonsSortEnum(str, Enum):
    DATE = "date"
    MANUAL = "manual"


@dataclasses.dataclass
class GetVodSeasonsQueryParams:
    direction: Optional[GetVodSeasonsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetVodSeasonsFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetVodSeasonsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVodSeasonsRequest:
    path_params: GetVodSeasonsPathParams = dataclasses.field()
    query_params: GetVodSeasonsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVodSeasonsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_seasons: Optional[list[shared_on_demand_season.OnDemandSeason]] = dataclasses.field(default=None)
    
