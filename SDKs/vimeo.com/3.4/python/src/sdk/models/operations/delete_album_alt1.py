import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class DeleteAlbumAlt1PathParams:
    album_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAlbumAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteAlbumAlt1Request:
    path_params: DeleteAlbumAlt1PathParams = dataclasses.field()
    security: DeleteAlbumAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAlbumAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
