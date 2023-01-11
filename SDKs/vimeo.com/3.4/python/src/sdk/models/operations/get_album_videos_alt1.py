import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import legacy_error as shared_legacy_error
from ..shared import video as shared_video


@dataclasses.dataclass
class GetAlbumVideosAlt1PathParams:
    album_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    
class GetAlbumVideosAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetAlbumVideosAlt1FilterEnum(str, Enum):
    EMBEDDABLE = "embeddable"

class GetAlbumVideosAlt1SortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    COMMENTS = "comments"
    DATE = "date"
    DEFAULT = "default"
    DURATION = "duration"
    LIKES = "likes"
    MANUAL = "manual"
    MODIFIED_TIME = "modified_time"
    PLAYS = "plays"


@dataclasses.dataclass
class GetAlbumVideosAlt1QueryParams:
    containing_uri: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'containing_uri', 'style': 'form', 'explode': True }})
    direction: Optional[GetAlbumVideosAlt1DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetAlbumVideosAlt1FilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_embeddable: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_embeddable', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetAlbumVideosAlt1SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    weak_search: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'weak_search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAlbumVideosAlt1Request:
    path_params: GetAlbumVideosAlt1PathParams = dataclasses.field()
    query_params: GetAlbumVideosAlt1QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAlbumVideosAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    
