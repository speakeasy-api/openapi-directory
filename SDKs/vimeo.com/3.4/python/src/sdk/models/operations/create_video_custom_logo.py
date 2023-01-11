import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import picture as shared_picture


@dataclasses.dataclass
class CreateVideoCustomLogoPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateVideoCustomLogoSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateVideoCustomLogoRequest:
    path_params: CreateVideoCustomLogoPathParams = dataclasses.field()
    security: CreateVideoCustomLogoSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateVideoCustomLogoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    picture: Optional[shared_picture.Picture] = dataclasses.field(default=None)
    
