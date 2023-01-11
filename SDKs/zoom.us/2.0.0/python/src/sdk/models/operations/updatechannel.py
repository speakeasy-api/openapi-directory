import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateChannelPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateChannelApplicationJSON:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class UpdateChannelMultipartFormData:
    name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclasses.dataclass
class UpdateChannelRequests:
    object: Optional[UpdateChannelApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateChannelMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateChannelSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateChannelRequest:
    path_params: UpdateChannelPathParams = dataclasses.field()
    security: UpdateChannelSecurity = dataclasses.field()
    request: Optional[UpdateChannelRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_channel_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
