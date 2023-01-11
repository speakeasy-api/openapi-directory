import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteAChatbotMessagePathParams:
    message_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'message_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAChatbotMessageApplicationJSON:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    robot_jid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('robot_jid') }})
    user_jid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_jid') }})
    

@dataclasses.dataclass
class DeleteAChatbotMessageMultipartFormData:
    account_id: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'account_id' }})
    robot_jid: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'robot_jid' }})
    user_jid: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_jid' }})
    

@dataclasses.dataclass
class DeleteAChatbotMessageRequests:
    object: Optional[DeleteAChatbotMessageApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[DeleteAChatbotMessageMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class DeleteAChatbotMessageSecurity:
    client_credentials: shared_security.SchemeClientCredentials = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAChatbotMessage200ApplicationJSON:
    message_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_id') }})
    robot_jid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robot_jid') }})
    sent_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sent_time') }})
    to_jid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_jid') }})
    user_jid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_jid') }})
    

@dataclasses.dataclass
class DeleteAChatbotMessageRequest:
    path_params: DeleteAChatbotMessagePathParams = dataclasses.field()
    security: DeleteAChatbotMessageSecurity = dataclasses.field()
    request: Optional[DeleteAChatbotMessageRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteAChatbotMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_a_chatbot_message_200_application_json_object: Optional[DeleteAChatbotMessage200ApplicationJSON] = dataclasses.field(default=None)
    
