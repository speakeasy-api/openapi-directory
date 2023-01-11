import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import user as shared_user


@dataclasses.dataclass
class RemoveChannelModeratorsPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveChannelModeratorsRequestBody:
    user_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_uri') }})
    

@dataclasses.dataclass
class RemoveChannelModeratorsSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RemoveChannelModeratorsRequest:
    path_params: RemoveChannelModeratorsPathParams = dataclasses.field()
    request: RemoveChannelModeratorsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.user+json' }})
    security: RemoveChannelModeratorsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveChannelModeratorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
