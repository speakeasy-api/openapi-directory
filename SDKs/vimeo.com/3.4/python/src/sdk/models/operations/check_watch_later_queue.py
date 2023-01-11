import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import video as shared_video


@dataclasses.dataclass
class CheckWatchLaterQueuePathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckWatchLaterQueueSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CheckWatchLaterQueueRequest:
    path_params: CheckWatchLaterQueuePathParams = dataclasses.field()
    security: CheckWatchLaterQueueSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CheckWatchLaterQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    video: Optional[shared_video.Video] = dataclasses.field(default=None)
    
