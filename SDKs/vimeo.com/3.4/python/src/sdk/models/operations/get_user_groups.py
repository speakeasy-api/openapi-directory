import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import group as shared_group


@dataclasses.dataclass
class GetUserGroupsPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetUserGroupsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetUserGroupsFilterEnum(str, Enum):
    MODERATED = "moderated"

class GetUserGroupsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    MEMBERS = "members"
    VIDEOS = "videos"


@dataclasses.dataclass
class GetUserGroupsQueryParams:
    direction: Optional[GetUserGroupsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetUserGroupsFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetUserGroupsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserGroupsRequest:
    path_params: GetUserGroupsPathParams = dataclasses.field()
    query_params: GetUserGroupsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    groups: Optional[list[shared_group.Group]] = dataclasses.field(default=None)
    
