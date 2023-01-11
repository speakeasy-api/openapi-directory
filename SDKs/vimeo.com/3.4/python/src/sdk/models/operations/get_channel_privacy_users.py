import dataclasses
from typing import Optional
from enum import Enum
from ..shared import error as shared_error
from ..shared import user as shared_user


@dataclasses.dataclass
class GetChannelPrivacyUsersPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    
class GetChannelPrivacyUsersDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class GetChannelPrivacyUsersQueryParams:
    direction: Optional[GetChannelPrivacyUsersDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChannelPrivacyUsersRequest:
    path_params: GetChannelPrivacyUsersPathParams = dataclasses.field()
    query_params: GetChannelPrivacyUsersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelPrivacyUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    users: Optional[list[shared_user.User]] = dataclasses.field(default=None)
    
