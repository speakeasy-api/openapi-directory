import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class EditMessagePathParams:
    message_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'messageId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EditMessageApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    to_channel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_channel') }})
    to_contact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_contact') }})
    

@dataclasses.dataclass
class EditMessageMultipartFormData:
    message: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'message' }})
    to_channel: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'to_channel' }})
    to_contact: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'to_contact' }})
    

@dataclasses.dataclass
class EditMessageRequests:
    object: Optional[EditMessageApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[EditMessageMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class EditMessageSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EditMessageRequest:
    path_params: EditMessagePathParams = dataclasses.field()
    security: EditMessageSecurity = dataclasses.field()
    request: Optional[EditMessageRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class EditMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
