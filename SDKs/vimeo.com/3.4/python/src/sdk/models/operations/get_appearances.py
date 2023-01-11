import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import video as shared_video


@dataclasses.dataclass
class GetAppearancesPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetAppearancesDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetAppearancesFilterEnum(str, Enum):
    EMBEDDABLE = "embeddable"

class GetAppearancesSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DURATION = "duration"
    LIKES = "likes"
    PLAYS = "plays"


@dataclasses.dataclass
class GetAppearancesQueryParams:
    direction: Optional[GetAppearancesDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetAppearancesFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetAppearancesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAppearancesRequest:
    path_params: GetAppearancesPathParams = dataclasses.field()
    query_params: GetAppearancesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAppearancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    
