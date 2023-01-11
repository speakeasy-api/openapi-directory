import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import credit as shared_credit


@dataclasses.dataclass
class GetVideoCreditsAlt1PathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class GetVideoCreditsAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVideoCreditsAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclasses.dataclass
class GetVideoCreditsAlt1QueryParams:
    direction: Optional[GetVideoCreditsAlt1DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetVideoCreditsAlt1SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVideoCreditsAlt1Request:
    path_params: GetVideoCreditsAlt1PathParams = dataclasses.field()
    query_params: GetVideoCreditsAlt1QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoCreditsAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    credits: Optional[list[shared_credit.Credit]] = dataclasses.field(default=None)
    
