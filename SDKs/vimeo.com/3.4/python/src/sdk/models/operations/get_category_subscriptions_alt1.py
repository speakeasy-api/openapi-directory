import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import category as shared_category
from ..shared import error as shared_error

class GetCategorySubscriptionsAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCategorySubscriptionsAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    NAME = "name"


@dataclasses.dataclass
class GetCategorySubscriptionsAlt1QueryParams:
    direction: Optional[GetCategorySubscriptionsAlt1DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetCategorySubscriptionsAlt1SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCategorySubscriptionsAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCategorySubscriptionsAlt1Request:
    query_params: GetCategorySubscriptionsAlt1QueryParams = dataclasses.field()
    security: GetCategorySubscriptionsAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class GetCategorySubscriptionsAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    categories: Optional[list[shared_category.Category]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
