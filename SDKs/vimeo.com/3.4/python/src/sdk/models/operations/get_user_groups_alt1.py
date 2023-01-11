import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import group as shared_group

class GetUserGroupsAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetUserGroupsAlt1FilterEnum(str, Enum):
    MODERATED = "moderated"

class GetUserGroupsAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    MEMBERS = "members"
    VIDEOS = "videos"


@dataclasses.dataclass
class GetUserGroupsAlt1QueryParams:
    direction: Optional[GetUserGroupsAlt1DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetUserGroupsAlt1FilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetUserGroupsAlt1SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserGroupsAlt1Request:
    query_params: GetUserGroupsAlt1QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserGroupsAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    groups: Optional[list[shared_group.Group]] = dataclasses.field(default=None)
    
