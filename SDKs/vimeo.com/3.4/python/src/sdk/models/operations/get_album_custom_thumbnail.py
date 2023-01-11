import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import picture as shared_picture


@dataclasses.dataclass
class GetAlbumCustomThumbnailPathParams:
    album_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    thumbnail_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'thumbnail_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAlbumCustomThumbnailRequest:
    path_params: GetAlbumCustomThumbnailPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAlbumCustomThumbnailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    picture: Optional[shared_picture.Picture] = dataclasses.field(default=None)
    
