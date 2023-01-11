import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import picture as shared_picture


@dataclasses.dataclass
class CreatePicturePathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePictureSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreatePictureRequest:
    path_params: CreatePicturePathParams = dataclasses.field()
    security: CreatePictureSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreatePictureResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    picture: Optional[shared_picture.Picture] = dataclasses.field(default=None)
    
