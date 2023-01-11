import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import user as shared_user


@dataclasses.dataclass
class GetVideoPrivacyUsersAlt1PathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVideoPrivacyUsersAlt1QueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVideoPrivacyUsersAlt1Request:
    path_params: GetVideoPrivacyUsersAlt1PathParams = dataclasses.field()
    query_params: GetVideoPrivacyUsersAlt1QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoPrivacyUsersAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    users: Optional[list[shared_user.User]] = dataclasses.field(default=None)
    
