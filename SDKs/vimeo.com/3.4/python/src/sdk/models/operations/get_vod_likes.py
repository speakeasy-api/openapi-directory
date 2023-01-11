import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import user as shared_user


@dataclasses.dataclass
class GetVodLikesPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    
class GetVodLikesDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVodLikesFilterEnum(str, Enum):
    EXTRA = "extra"
    MAIN = "main"
    TRAILER = "trailer"

class GetVodLikesSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclasses.dataclass
class GetVodLikesQueryParams:
    direction: Optional[GetVodLikesDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetVodLikesFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetVodLikesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVodLikesRequest:
    path_params: GetVodLikesPathParams = dataclasses.field()
    query_params: GetVodLikesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVodLikesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    users: Optional[list[shared_user.User]] = dataclasses.field(default=None)
    
