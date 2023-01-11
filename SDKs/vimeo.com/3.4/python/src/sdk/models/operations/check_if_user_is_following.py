import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class CheckIfUserIsFollowingPathParams:
    follow_user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'follow_user_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckIfUserIsFollowingRequest:
    path_params: CheckIfUserIsFollowingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CheckIfUserIsFollowingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
