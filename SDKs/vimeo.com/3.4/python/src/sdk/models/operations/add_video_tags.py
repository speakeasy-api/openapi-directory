import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import tag as shared_tag


@dataclasses.dataclass
class AddVideoTagsPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddVideoTagsRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    

@dataclasses.dataclass
class AddVideoTagsSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddVideoTagsRequest:
    path_params: AddVideoTagsPathParams = dataclasses.field()
    request: AddVideoTagsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.tag+json' }})
    security: AddVideoTagsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddVideoTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
