import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import portfolio as shared_portfolio

class GetPortfoliosAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetPortfoliosAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclasses.dataclass
class GetPortfoliosAlt1QueryParams:
    direction: Optional[GetPortfoliosAlt1DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetPortfoliosAlt1SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPortfoliosAlt1Request:
    query_params: GetPortfoliosAlt1QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPortfoliosAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    portfolios: Optional[list[shared_portfolio.Portfolio]] = dataclasses.field(default=None)
    
