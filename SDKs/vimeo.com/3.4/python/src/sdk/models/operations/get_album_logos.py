import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import picture as shared_picture


@dataclasses.dataclass
class GetAlbumLogosPathParams:
    album_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAlbumLogosQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAlbumLogosRequest:
    path_params: GetAlbumLogosPathParams = dataclasses.field()
    query_params: GetAlbumLogosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAlbumLogosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    pictures: Optional[list[shared_picture.Picture]] = dataclasses.field(default=None)
    
