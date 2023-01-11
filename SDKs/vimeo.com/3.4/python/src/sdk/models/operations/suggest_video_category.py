import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import category as shared_category
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class SuggestVideoCategoryPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SuggestVideoCategoryRequestBody:
    category: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    

@dataclasses.dataclass
class SuggestVideoCategorySecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SuggestVideoCategoryRequest:
    path_params: SuggestVideoCategoryPathParams = dataclasses.field()
    request: SuggestVideoCategoryRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.category+json' }})
    security: SuggestVideoCategorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class SuggestVideoCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    category: Optional[shared_category.Category] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
