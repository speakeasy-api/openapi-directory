import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import usershalresponse as shared_usershalresponse
from ..shared import validationerrorsresponse as shared_validationerrorsresponse


@dataclasses.dataclass
class UserCtrlGetUsersPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserCtrlGetUsersQueryParams:
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'first_name', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_name', 'style': 'form', 'explode': True }})
    login_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'login_name', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserCtrlGetUsersSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UserCtrlGetUsersRequest:
    path_params: UserCtrlGetUsersPathParams = dataclasses.field()
    query_params: UserCtrlGetUsersQueryParams = dataclasses.field()
    security: UserCtrlGetUsersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UserCtrlGetUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    users_hal_response: Optional[shared_usershalresponse.UsersHalResponse] = dataclasses.field(default=None)
    validation_errors_response: Optional[shared_validationerrorsresponse.ValidationErrorsResponse] = dataclasses.field(default=None)
    
