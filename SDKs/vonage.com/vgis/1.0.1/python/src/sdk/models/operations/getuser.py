import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import user as shared_user


@dataclasses.dataclass
class GetUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
