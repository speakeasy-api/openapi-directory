import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import legacy_error as shared_legacy_error
from ..shared import tag as shared_tag


@dataclasses.dataclass
class AddTagsToChannelPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddTagsToChannelRequestBody:
    tag: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclasses.dataclass
class AddTagsToChannelSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddTagsToChannelRequest:
    path_params: AddTagsToChannelPathParams = dataclasses.field()
    request: AddTagsToChannelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.tag+json' }})
    security: AddTagsToChannelSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddTagsToChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
