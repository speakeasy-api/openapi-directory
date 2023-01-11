import dataclasses
from typing import Optional
from ..shared import user as shared_user


@dataclasses.dataclass
class GetChannelModeratorPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelModeratorRequest:
    path_params: GetChannelModeratorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelModeratorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
