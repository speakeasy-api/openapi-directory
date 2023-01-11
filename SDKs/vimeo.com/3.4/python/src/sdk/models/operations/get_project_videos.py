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
class GetProjectVideosPathParams:
    project_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetProjectVideosDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetProjectVideosSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    DEFAULT = "default"
    DURATION = "duration"
    LAST_USER_ACTION_EVENT_DATE = "last_user_action_event_date"


@dataclasses.dataclass
class GetProjectVideosQueryParams:
    direction: Optional[GetProjectVideosDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetProjectVideosSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProjectVideosSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetProjectVideosRequest:
    path_params: GetProjectVideosPathParams = dataclasses.field()
    query_params: GetProjectVideosQueryParams = dataclasses.field()
    security: GetProjectVideosSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    
