import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class CheckIfUserJoinedGroupPathParams:
    group_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckIfUserJoinedGroupRequest:
    path_params: CheckIfUserJoinedGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CheckIfUserJoinedGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
