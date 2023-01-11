import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class RemoveAUserLevelChannelMemberPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'memberId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveAUserLevelChannelMemberSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RemoveAUserLevelChannelMemberRequest:
    path_params: RemoveAUserLevelChannelMemberPathParams = dataclasses.field()
    security: RemoveAUserLevelChannelMemberSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveAUserLevelChannelMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    remove_a_user_level_channel_member_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
