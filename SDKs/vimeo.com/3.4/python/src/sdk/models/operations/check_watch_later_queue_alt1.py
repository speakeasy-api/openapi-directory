import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import video as shared_video


@dataclasses.dataclass
class CheckWatchLaterQueueAlt1PathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckWatchLaterQueueAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CheckWatchLaterQueueAlt1Request:
    path_params: CheckWatchLaterQueueAlt1PathParams = dataclasses.field()
    security: CheckWatchLaterQueueAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class CheckWatchLaterQueueAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    video: Optional[shared_video.Video] = dataclasses.field(default=None)
    
