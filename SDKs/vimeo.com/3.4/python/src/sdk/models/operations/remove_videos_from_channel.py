import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import video as shared_video


@dataclasses.dataclass
class RemoveVideosFromChannelPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveVideosFromChannelRequestBody:
    video_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_uri') }})
    

@dataclasses.dataclass
class RemoveVideosFromChannelSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RemoveVideosFromChannelRequest:
    path_params: RemoveVideosFromChannelPathParams = dataclasses.field()
    request: RemoveVideosFromChannelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: RemoveVideosFromChannelSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveVideosFromChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    video: Optional[shared_video.Video] = dataclasses.field(default=None)
    
