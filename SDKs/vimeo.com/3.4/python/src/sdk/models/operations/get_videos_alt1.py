import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import video as shared_video

class GetVideosAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetVideosAlt1FilterEnum(str, Enum):
    APP_ONLY = "app_only"
    EMBEDDABLE = "embeddable"
    FEATURED = "featured"
    PLAYABLE = "playable"

class GetVideosAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DEFAULT = "default"
    DURATION = "duration"
    LAST_USER_ACTION_EVENT_DATE = "last_user_action_event_date"
    LIKES = "likes"
    MODIFIED_TIME = "modified_time"
    PLAYS = "plays"


@dataclasses.dataclass
class GetVideosAlt1QueryParams:
    containing_uri: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'containing_uri', 'style': 'form', 'explode': True }})
    direction: Optional[GetVideosAlt1DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetVideosAlt1FilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    filter_playable: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_playable', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetVideosAlt1SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVideosAlt1Request:
    query_params: GetVideosAlt1QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideosAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    
