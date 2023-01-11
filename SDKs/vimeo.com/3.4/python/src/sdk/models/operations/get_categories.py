import dataclasses
from typing import Optional
from enum import Enum
from ..shared import category as shared_category

class GetCategoriesDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCategoriesSortEnum(str, Enum):
    LAST_VIDEO_FEATURED_TIME = "last_video_featured_time"
    NAME = "name"


@dataclasses.dataclass
class GetCategoriesQueryParams:
    direction: Optional[GetCategoriesDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetCategoriesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCategoriesRequest:
    query_params: GetCategoriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    categories: Optional[list[shared_category.Category]] = dataclasses.field(default=None)
    
