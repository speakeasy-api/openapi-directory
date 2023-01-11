import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class CheckIfUserJoinedGroupAlt1PathParams:
    group_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckIfUserJoinedGroupAlt1Request:
    path_params: CheckIfUserJoinedGroupAlt1PathParams = dataclasses.field()
    

@dataclasses.dataclass
class CheckIfUserJoinedGroupAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
