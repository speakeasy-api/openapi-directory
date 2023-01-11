import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import video as shared_video


@dataclasses.dataclass
class GetProjectVideosAlt1PathParams:
    project_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    
class GetProjectVideosAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetProjectVideosAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    DEFAULT = "default"
    DURATION = "duration"
    LAST_USER_ACTION_EVENT_DATE = "last_user_action_event_date"


@dataclasses.dataclass
class GetProjectVideosAlt1QueryParams:
    direction: Optional[GetProjectVideosAlt1DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetProjectVideosAlt1SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProjectVideosAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetProjectVideosAlt1Request:
    path_params: GetProjectVideosAlt1PathParams = dataclasses.field()
    query_params: GetProjectVideosAlt1QueryParams = dataclasses.field()
    security: GetProjectVideosAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectVideosAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    
