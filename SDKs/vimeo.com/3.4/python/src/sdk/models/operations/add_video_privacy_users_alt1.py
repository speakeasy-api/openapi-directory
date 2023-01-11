import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import user as shared_user


@dataclasses.dataclass
class AddVideoPrivacyUsersAlt1PathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddVideoPrivacyUsersAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddVideoPrivacyUsersAlt1Request:
    path_params: AddVideoPrivacyUsersAlt1PathParams = dataclasses.field()
    security: AddVideoPrivacyUsersAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class AddVideoPrivacyUsersAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    users: Optional[list[shared_user.User]] = dataclasses.field(default=None)
    
