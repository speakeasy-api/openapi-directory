import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteChannelPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteChannelRequest:
    path_params: DeleteChannelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_channel_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
