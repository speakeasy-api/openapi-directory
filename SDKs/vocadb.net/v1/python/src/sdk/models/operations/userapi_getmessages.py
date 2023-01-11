import dataclasses
from typing import Optional
from enum import Enum
from ..shared import partialfindresult_usermessagecontract_ as shared_partialfindresult_usermessagecontract_


@dataclasses.dataclass
class UserAPIGetMessagesPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class UserAPIGetMessagesInboxEnum(str, Enum):
    NOTHING = "Nothing"
    RECEIVED = "Received"
    SENT = "Sent"
    NOTIFICATIONS = "Notifications"


@dataclasses.dataclass
class UserAPIGetMessagesQueryParams:
    another_user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'anotherUserId', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    inbox: Optional[UserAPIGetMessagesInboxEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'inbox', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    unread: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unread', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserAPIGetMessagesRequest:
    path_params: UserAPIGetMessagesPathParams = dataclasses.field()
    query_params: UserAPIGetMessagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIGetMessagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_user_message_contract_: Optional[shared_partialfindresult_usermessagecontract_.PartialFindResultUserMessageContract] = dataclasses.field(default=None)
    
