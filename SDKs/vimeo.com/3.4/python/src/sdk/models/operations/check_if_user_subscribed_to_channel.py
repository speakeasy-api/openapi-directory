import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class CheckIfUserSubscribedToChannelPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckIfUserSubscribedToChannelRequest:
    path_params: CheckIfUserSubscribedToChannelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CheckIfUserSubscribedToChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
