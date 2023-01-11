import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class SendchatbotApplicationJSON:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    content: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    robot_jid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('robot_jid') }})
    to_jid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_jid') }})
    is_markdown_support: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_markdown_support') }})
    user_jid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_jid') }})
    visible_to_user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible_to_user') }})
    

@dataclasses.dataclass
class SendchatbotMultipartFormData:
    account_id: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'account_id' }})
    content: dict[str, Any] = dataclasses.field(metadata={'multipart_form': { 'field_name': 'content', 'json': True }})
    robot_jid: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'robot_jid' }})
    to_jid: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'to_jid' }})
    is_markdown_support: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'is_markdown_support' }})
    user_jid: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_jid' }})
    visible_to_user: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'visible_to_user' }})
    

@dataclasses.dataclass
class SendchatbotRequests:
    object: Optional[SendchatbotApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[SendchatbotMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class SendchatbotSecurity:
    client_credentials: shared_security.SchemeClientCredentials = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SendchatbotRequest:
    security: SendchatbotSecurity = dataclasses.field()
    request: Optional[SendchatbotRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class SendchatbotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
