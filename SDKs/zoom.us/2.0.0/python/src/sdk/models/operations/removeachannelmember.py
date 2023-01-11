import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class RemoveAChannelMemberPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'memberId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveAChannelMemberSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RemoveAChannelMemberRequest:
    path_params: RemoveAChannelMemberPathParams = dataclasses.field()
    security: RemoveAChannelMemberSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveAChannelMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    remove_a_channel_member_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
