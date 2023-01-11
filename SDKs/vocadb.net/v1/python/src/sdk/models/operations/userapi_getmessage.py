import dataclasses
from typing import Optional
from ..shared import usermessagecontract as shared_usermessagecontract


@dataclasses.dataclass
class UserAPIGetMessagePathParams:
    message_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'messageId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserAPIGetMessageRequest:
    path_params: UserAPIGetMessagePathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIGetMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_message_contract: Optional[shared_usermessagecontract.UserMessageContract] = dataclasses.field(default=None)
    
