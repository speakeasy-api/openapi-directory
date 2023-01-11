import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class DeleteAlbumCustomThumbnailPathParams:
    album_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    thumbnail_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'thumbnail_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAlbumCustomThumbnailSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteAlbumCustomThumbnailRequest:
    path_params: DeleteAlbumCustomThumbnailPathParams = dataclasses.field()
    security: DeleteAlbumCustomThumbnailSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAlbumCustomThumbnailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
