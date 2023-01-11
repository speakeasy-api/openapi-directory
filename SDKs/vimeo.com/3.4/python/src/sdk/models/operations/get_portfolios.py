import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import portfolio as shared_portfolio


@dataclasses.dataclass
class GetPortfoliosPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetPortfoliosDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetPortfoliosSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclasses.dataclass
class GetPortfoliosQueryParams:
    direction: Optional[GetPortfoliosDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetPortfoliosSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPortfoliosRequest:
    path_params: GetPortfoliosPathParams = dataclasses.field()
    query_params: GetPortfoliosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPortfoliosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    portfolios: Optional[list[shared_portfolio.Portfolio]] = dataclasses.field(default=None)
    
