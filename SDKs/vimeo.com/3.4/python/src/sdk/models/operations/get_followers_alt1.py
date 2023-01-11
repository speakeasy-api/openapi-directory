import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import user as shared_user

class GetFollowersAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetFollowersAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclasses.dataclass
class GetFollowersAlt1QueryParams:
    direction: Optional[GetFollowersAlt1DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetFollowersAlt1SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFollowersAlt1Request:
    query_params: GetFollowersAlt1QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFollowersAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    users: Optional[list[shared_user.User]] = dataclasses.field(default=None)
    
