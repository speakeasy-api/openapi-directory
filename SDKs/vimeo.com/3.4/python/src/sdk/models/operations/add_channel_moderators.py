import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class AddChannelModeratorsPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddChannelModeratorsRequestBody:
    user_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_uri') }})
    

@dataclasses.dataclass
class AddChannelModeratorsSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddChannelModeratorsRequest:
    path_params: AddChannelModeratorsPathParams = dataclasses.field()
    request: AddChannelModeratorsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddChannelModeratorsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddChannelModeratorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
