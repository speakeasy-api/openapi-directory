import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateUserLevelChannelPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateUserLevelChannelApplicationJSON:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class UpdateUserLevelChannelMultipartFormData:
    name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclasses.dataclass
class UpdateUserLevelChannelRequests:
    object: Optional[UpdateUserLevelChannelApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateUserLevelChannelMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateUserLevelChannelSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateUserLevelChannelRequest:
    path_params: UpdateUserLevelChannelPathParams = dataclasses.field()
    security: UpdateUserLevelChannelSecurity = dataclasses.field()
    request: Optional[UpdateUserLevelChannelRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUserLevelChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_user_level_channel_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
