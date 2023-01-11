import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import album as shared_album
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class GetAlbumsPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetAlbumsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetAlbumsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    DURATION = "duration"
    VIDEOS = "videos"


@dataclasses.dataclass
class GetAlbumsQueryParams:
    direction: Optional[GetAlbumsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetAlbumsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAlbumsRequest:
    path_params: GetAlbumsPathParams = dataclasses.field()
    query_params: GetAlbumsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAlbumsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    albums: Optional[list[shared_album.Album]] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
