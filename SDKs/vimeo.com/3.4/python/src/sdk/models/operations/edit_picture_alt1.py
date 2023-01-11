import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import picture as shared_picture


@dataclasses.dataclass
class EditPictureAlt1PathParams:
    portraitset_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'portraitset_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EditPictureAlt1RequestBody:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    

@dataclasses.dataclass
class EditPictureAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EditPictureAlt1Request:
    path_params: EditPictureAlt1PathParams = dataclasses.field()
    security: EditPictureAlt1Security = dataclasses.field()
    request: Optional[EditPictureAlt1RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.picture+json' }})
    

@dataclasses.dataclass
class EditPictureAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    picture: Optional[shared_picture.Picture] = dataclasses.field(default=None)
    
