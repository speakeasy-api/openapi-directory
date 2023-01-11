import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteChatMessagePathParams:
    message_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'messageId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteChatMessageQueryParams:
    to_channel: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to_channel', 'style': 'form', 'explode': True }})
    to_contact: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to_contact', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteChatMessageSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteChatMessageRequest:
    path_params: DeleteChatMessagePathParams = dataclasses.field()
    query_params: DeleteChatMessageQueryParams = dataclasses.field()
    security: DeleteChatMessageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteChatMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
