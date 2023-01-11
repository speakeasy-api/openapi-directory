import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class SendaChatMessagePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SendaChatMessageApplicationJSONAtItems:
    at_contact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('at_contact') }})
    at_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('at_type') }})
    end_position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_position') }})
    start_position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_position') }})
    

@dataclass_json
@dataclasses.dataclass
class SendaChatMessageApplicationJSON:
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    at_items: Optional[list[SendaChatMessageApplicationJSONAtItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('at_items') }})
    to_channel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_channel') }})
    to_contact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_contact') }})
    

@dataclass_json
@dataclasses.dataclass
class SendaChatMessageMultipartFormDataAtItems:
    at_contact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('at_contact') }})
    at_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('at_type') }})
    end_position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_position') }})
    start_position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_position') }})
    

@dataclasses.dataclass
class SendaChatMessageMultipartFormData1:
    message: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'message' }})
    at_items: Optional[list[SendaChatMessageMultipartFormDataAtItems]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'at_items', 'json': True }})
    to_channel: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'to_channel' }})
    to_contact: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'to_contact' }})
    

@dataclasses.dataclass
class SendaChatMessageRequests:
    object: Optional[SendaChatMessageApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[SendaChatMessageMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class SendaChatMessageSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class SendaChatMessage201ApplicationJSON:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class SendaChatMessageRequest:
    path_params: SendaChatMessagePathParams = dataclasses.field()
    security: SendaChatMessageSecurity = dataclasses.field()
    request: Optional[SendaChatMessageRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class SendaChatMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    senda_chat_message_201_application_json_object: Optional[SendaChatMessage201ApplicationJSON] = dataclasses.field(default=None)
    
