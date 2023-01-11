import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import user as shared_user


@dataclasses.dataclass
class AddVideoPrivacyUsersPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddVideoPrivacyUsersSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddVideoPrivacyUsersRequest:
    path_params: AddVideoPrivacyUsersPathParams = dataclasses.field()
    security: AddVideoPrivacyUsersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddVideoPrivacyUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    users: Optional[list[shared_user.User]] = dataclasses.field(default=None)
    
