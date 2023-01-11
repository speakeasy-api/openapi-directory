import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import picture as shared_picture


@dataclasses.dataclass
class GetVideoCustomLogoPathParams:
    thumbnail_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'thumbnail_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVideoCustomLogoRequest:
    path_params: GetVideoCustomLogoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoCustomLogoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    picture: Optional[shared_picture.Picture] = dataclasses.field(default=None)
    
