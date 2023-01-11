import dataclasses
from typing import Optional
from ..shared import userrequest as shared_userrequest
from ..shared import userresponse as shared_userresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class RegisterUserRequest:
    request: shared_userrequest.UserRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_response: Optional[shared_userresponse.UserResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
