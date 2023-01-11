import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetChatMessagesPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChatMessagesQueryParams:
    date_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    include_deleted_and_edited_message: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_deleted_and_edited_message', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    to_channel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to_channel', 'style': 'form', 'explode': True }})
    to_contact: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to_contact', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChatMessagesSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetChatMessages200ApplicationJSONMessagesStatusEnum(str, Enum):
    DELETED = "Deleted"
    EDITED = "Edited"
    NORMAL = "Normal"


@dataclass_json
@dataclasses.dataclass
class GetChatMessages200ApplicationJSONMessages:
    date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    reply_main_message_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reply_main_message_id') }})
    reply_main_message_timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reply_main_message_timestamp') }})
    sender: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sender') }})
    status: Optional[GetChatMessages200ApplicationJSONMessagesStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class GetChatMessages200ApplicationJSON:
    r"""GetChatMessages200ApplicationJSON
    Chat message object.
    """
    
    date_: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    messages: Optional[list[GetChatMessages200ApplicationJSONMessages]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    

@dataclasses.dataclass
class GetChatMessagesRequest:
    path_params: GetChatMessagesPathParams = dataclasses.field()
    query_params: GetChatMessagesQueryParams = dataclasses.field()
    security: GetChatMessagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetChatMessagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_chat_messages_200_application_json_object: Optional[GetChatMessages200ApplicationJSON] = dataclasses.field(default=None)
    
