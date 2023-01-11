import dataclasses
from typing import Optional
from ..shared import album as shared_album
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class GetAlbumPathParams:
    album_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAlbumRequest:
    path_params: GetAlbumPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAlbumResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album: Optional[shared_album.Album] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
