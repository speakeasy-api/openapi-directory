import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class JoinGroupPathParams:
    group_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JoinGroupSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class JoinGroupRequest:
    path_params: JoinGroupPathParams = dataclasses.field()
    security: JoinGroupSecurity = dataclasses.field()
    

@dataclasses.dataclass
class JoinGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
