import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class EditChatbotMessagePathParams:
    message_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'message_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EditChatbotMessageApplicationJSON:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    content: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    robot_jid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('robot_jid') }})
    is_markdown_support: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_markdown_support') }})
    user_jid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_jid') }})
    

@dataclasses.dataclass
class EditChatbotMessageMultipartFormData:
    account_id: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'account_id' }})
    content: dict[str, Any] = dataclasses.field(metadata={'multipart_form': { 'field_name': 'content', 'json': True }})
    robot_jid: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'robot_jid' }})
    is_markdown_support: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'is_markdown_support' }})
    user_jid: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_jid' }})
    

@dataclasses.dataclass
class EditChatbotMessageRequests:
    object: Optional[EditChatbotMessageApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[EditChatbotMessageMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class EditChatbotMessageSecurity:
    client_credentials: shared_security.SchemeClientCredentials = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class EditChatbotMessage200ApplicationJSON:
    message_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_id') }})
    robot_jid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robot_jid') }})
    sent_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sent_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    to_jid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_jid') }})
    user_jid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_jid') }})
    

@dataclasses.dataclass
class EditChatbotMessageRequest:
    path_params: EditChatbotMessagePathParams = dataclasses.field()
    security: EditChatbotMessageSecurity = dataclasses.field()
    request: Optional[EditChatbotMessageRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class EditChatbotMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    edit_chatbot_message_200_application_json_object: Optional[EditChatbotMessage200ApplicationJSON] = dataclasses.field(default=None)
    
