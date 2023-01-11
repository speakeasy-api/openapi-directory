import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteUserLevelChannelPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserLevelChannelRequest:
    path_params: DeleteUserLevelChannelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserLevelChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_user_level_channel_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
