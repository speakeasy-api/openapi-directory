import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class UnfollowUserAlt1PathParams:
    follow_user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'follow_user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnfollowUserAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UnfollowUserAlt1Request:
    path_params: UnfollowUserAlt1PathParams = dataclasses.field()
    security: UnfollowUserAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class UnfollowUserAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
