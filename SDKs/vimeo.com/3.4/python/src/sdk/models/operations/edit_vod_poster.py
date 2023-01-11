import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import picture as shared_picture


@dataclasses.dataclass
class EditVodPosterPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    poster_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'poster_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EditVodPosterRequestBody:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    

@dataclasses.dataclass
class EditVodPosterSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EditVodPosterRequest:
    path_params: EditVodPosterPathParams = dataclasses.field()
    security: EditVodPosterSecurity = dataclasses.field()
    request: Optional[EditVodPosterRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.picture+json' }})
    

@dataclasses.dataclass
class EditVodPosterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    picture: Optional[shared_picture.Picture] = dataclasses.field(default=None)
    
