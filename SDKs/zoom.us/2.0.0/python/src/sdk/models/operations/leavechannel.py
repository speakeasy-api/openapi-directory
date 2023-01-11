import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class LeaveChannelPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LeaveChannelSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LeaveChannelRequest:
    path_params: LeaveChannelPathParams = dataclasses.field()
    security: LeaveChannelSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LeaveChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    leave_channel_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
