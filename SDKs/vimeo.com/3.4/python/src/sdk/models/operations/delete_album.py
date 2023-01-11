import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class DeleteAlbumPathParams:
    album_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAlbumSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteAlbumRequest:
    path_params: DeleteAlbumPathParams = dataclasses.field()
    security: DeleteAlbumSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAlbumResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
