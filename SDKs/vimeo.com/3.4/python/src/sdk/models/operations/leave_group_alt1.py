import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class LeaveGroupAlt1PathParams:
    group_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LeaveGroupAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LeaveGroupAlt1Request:
    path_params: LeaveGroupAlt1PathParams = dataclasses.field()
    security: LeaveGroupAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class LeaveGroupAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
