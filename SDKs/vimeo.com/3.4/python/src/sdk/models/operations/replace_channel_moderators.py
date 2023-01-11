import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import legacy_error as shared_legacy_error
from ..shared import user as shared_user


@dataclasses.dataclass
class ReplaceChannelModeratorsPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReplaceChannelModeratorsRequestBody:
    user_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_uri') }})
    

@dataclasses.dataclass
class ReplaceChannelModeratorsSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ReplaceChannelModeratorsRequest:
    path_params: ReplaceChannelModeratorsPathParams = dataclasses.field()
    request: ReplaceChannelModeratorsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: ReplaceChannelModeratorsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReplaceChannelModeratorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    users: Optional[list[shared_user.User]] = dataclasses.field(default=None)
    
