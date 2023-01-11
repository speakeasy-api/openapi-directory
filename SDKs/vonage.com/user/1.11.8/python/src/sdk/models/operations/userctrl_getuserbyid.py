import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponse as shared_errorresponse
from ..shared import userhalresponse as shared_userhalresponse


@dataclasses.dataclass
class UserCtrlGetUserByIDPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserCtrlGetUserByIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UserCtrlGetUserByIDRequest:
    path_params: UserCtrlGetUserByIDPathParams = dataclasses.field()
    security: UserCtrlGetUserByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UserCtrlGetUserByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    user_hal_response: Optional[shared_userhalresponse.UserHalResponse] = dataclasses.field(default=None)
    
