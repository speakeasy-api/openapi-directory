import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import channel as shared_channel
from ..shared import legacy_error as shared_legacy_error

class CreateChannelRequestBodyPrivacyEnum(str, Enum):
    ANYBODY = "anybody"
    MODERATORS = "moderators"
    USER = "user"


@dataclass_json
@dataclasses.dataclass
class CreateChannelRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    privacy: CreateChannelRequestBodyPrivacyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    

@dataclasses.dataclass
class CreateChannelSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateChannelRequest:
    request: CreateChannelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.channel+json' }})
    security: CreateChannelSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channel: Optional[shared_channel.Channel] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
