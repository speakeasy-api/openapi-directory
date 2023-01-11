import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import channel as shared_channel
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class EditChannelPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    
class EditChannelRequestBodyPrivacyEnum(str, Enum):
    ANYBODY = "anybody"
    MODERATORS = "moderators"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class EditChannelRequestBody:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    privacy: Optional[EditChannelRequestBodyPrivacyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclasses.dataclass
class EditChannelSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EditChannelRequest:
    path_params: EditChannelPathParams = dataclasses.field()
    security: EditChannelSecurity = dataclasses.field()
    request: Optional[EditChannelRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.channel+json' }})
    

@dataclasses.dataclass
class EditChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channel: Optional[shared_channel.Channel] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
