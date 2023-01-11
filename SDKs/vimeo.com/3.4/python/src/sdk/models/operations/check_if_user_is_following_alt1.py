import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class CheckIfUserIsFollowingAlt1PathParams:
    follow_user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'follow_user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckIfUserIsFollowingAlt1Request:
    path_params: CheckIfUserIsFollowingAlt1PathParams = dataclasses.field()
    

@dataclasses.dataclass
class CheckIfUserIsFollowingAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
