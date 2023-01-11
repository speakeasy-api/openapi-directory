import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class DeleteTextTrackPathParams:
    texttrack_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'texttrack_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTextTrackSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteTextTrackRequest:
    path_params: DeleteTextTrackPathParams = dataclasses.field()
    security: DeleteTextTrackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTextTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
