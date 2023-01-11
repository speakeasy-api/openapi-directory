import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class FollowUserAlt1PathParams:
    follow_user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'follow_user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FollowUserAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FollowUserAlt1Request:
    path_params: FollowUserAlt1PathParams = dataclasses.field()
    security: FollowUserAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class FollowUserAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
