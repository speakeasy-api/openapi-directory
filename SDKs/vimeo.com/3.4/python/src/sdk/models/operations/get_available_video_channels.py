import dataclasses
from typing import Optional
from ..shared import channel as shared_channel
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class GetAvailableVideoChannelsPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAvailableVideoChannelsRequest:
    path_params: GetAvailableVideoChannelsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAvailableVideoChannelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channels: Optional[list[shared_channel.Channel]] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
