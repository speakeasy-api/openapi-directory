import dataclasses
from typing import Optional
from ..shared import channel as shared_channel


@dataclasses.dataclass
class GetChannelPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelRequest:
    path_params: GetChannelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channel: Optional[shared_channel.Channel] = dataclasses.field(default=None)
    
