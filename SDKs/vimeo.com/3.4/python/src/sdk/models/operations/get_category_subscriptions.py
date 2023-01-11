import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import category as shared_category
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCategorySubscriptionsPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetCategorySubscriptionsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCategorySubscriptionsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    NAME = "name"


@dataclasses.dataclass
class GetCategorySubscriptionsQueryParams:
    direction: Optional[GetCategorySubscriptionsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetCategorySubscriptionsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCategorySubscriptionsSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCategorySubscriptionsRequest:
    path_params: GetCategorySubscriptionsPathParams = dataclasses.field()
    query_params: GetCategorySubscriptionsQueryParams = dataclasses.field()
    security: GetCategorySubscriptionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCategorySubscriptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    categories: Optional[list[shared_category.Category]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
