import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import video as shared_video

class GetWatchLaterQueueAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetWatchLaterQueueAlt1FilterEnum(str, Enum):
    EMBEDDABLE = "embeddable"

class GetWatchLaterQueueAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DURATION = "duration"
    LIKES = "likes"
    PLAYS = "plays"


@dataclasses.dataclass
class GetWatchLaterQueueAlt1QueryParams:
    direction: Optional[GetWatchLaterQueueAlt1DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetWatchLaterQueueAlt1FilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetWatchLaterQueueAlt1SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWatchLaterQueueAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetWatchLaterQueueAlt1Request:
    query_params: GetWatchLaterQueueAlt1QueryParams = dataclasses.field()
    security: GetWatchLaterQueueAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class GetWatchLaterQueueAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    
