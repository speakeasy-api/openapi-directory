import dataclasses
from typing import Optional
from ..shared import usercredential as shared_usercredential
from ..shared import apierror as shared_apierror
from ..shared import token as shared_token


@dataclasses.dataclass
class CreateRequest:
    request: shared_usercredential.UserCredential = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    token: Optional[shared_token.Token] = dataclasses.field(default=None)
    
