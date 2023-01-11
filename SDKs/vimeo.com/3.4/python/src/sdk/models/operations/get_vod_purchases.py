import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_page as shared_on_demand_page

class GetVodPurchasesDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVodPurchasesFilterEnum(str, Enum):
    ALL = "all"
    EXPIRING_SOON = "expiring_soon"
    FILM = "film"
    IMPORTANT = "important"
    PURCHASED = "purchased"
    RENTED = "rented"
    SERIES = "series"
    SUBSCRIPTION = "subscription"
    UNWATCHED = "unwatched"
    WATCHED = "watched"

class GetVodPurchasesSortEnum(str, Enum):
    ADDED = "added"
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    NAME = "name"
    PURCHASE_TIME = "purchase_time"
    RATING = "rating"
    RELEASE_DATE = "release_date"


@dataclasses.dataclass
class GetVodPurchasesQueryParams:
    direction: Optional[GetVodPurchasesDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetVodPurchasesFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetVodPurchasesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVodPurchasesSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetVodPurchasesRequest:
    query_params: GetVodPurchasesQueryParams = dataclasses.field()
    security: GetVodPurchasesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVodPurchasesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_pages: Optional[list[shared_on_demand_page.OnDemandPage]] = dataclasses.field(default=None)
    
