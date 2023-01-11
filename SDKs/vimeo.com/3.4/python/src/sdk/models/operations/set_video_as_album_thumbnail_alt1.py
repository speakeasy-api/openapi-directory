import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import album as shared_album
from ..shared import error as shared_error


@dataclasses.dataclass
class SetVideoAsAlbumThumbnailAlt1PathParams:
    album_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SetVideoAsAlbumThumbnailAlt1RequestBody:
    time_code: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_code') }})
    

@dataclasses.dataclass
class SetVideoAsAlbumThumbnailAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SetVideoAsAlbumThumbnailAlt1Request:
    path_params: SetVideoAsAlbumThumbnailAlt1PathParams = dataclasses.field()
    security: SetVideoAsAlbumThumbnailAlt1Security = dataclasses.field()
    request: Optional[SetVideoAsAlbumThumbnailAlt1RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetVideoAsAlbumThumbnailAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album: Optional[shared_album.Album] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
