import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import group as shared_group
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class GetCategoryGroupsPathParams:
    category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    
class GetCategoryGroupsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCategoryGroupsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    MEMBERS = "members"
    VIDEOS = "videos"


@dataclasses.dataclass
class GetCategoryGroupsQueryParams:
    direction: Optional[GetCategoryGroupsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetCategoryGroupsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCategoryGroupsRequest:
    path_params: GetCategoryGroupsPathParams = dataclasses.field()
    query_params: GetCategoryGroupsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCategoryGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    groups: Optional[list[shared_group.Group]] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
