import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import picture as shared_picture


@dataclasses.dataclass
class CreatePictureAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreatePictureAlt1Request:
    security: CreatePictureAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class CreatePictureAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    picture: Optional[shared_picture.Picture] = dataclasses.field(default=None)
    
