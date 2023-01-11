import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auth as shared_auth
from ..shared import auth_error as shared_auth_error

class ConvertAccessTokenRequestBodyGrantTypeEnum(str, Enum):
    VIMEO_OAUTH1 = "vimeo_oauth1"


@dataclass_json
@dataclasses.dataclass
class ConvertAccessTokenRequestBody:
    grant_type: ConvertAccessTokenRequestBodyGrantTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    token_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_secret') }})
    

@dataclasses.dataclass
class ConvertAccessTokenRequest:
    request: ConvertAccessTokenRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.auth+json' }})
    

@dataclasses.dataclass
class ConvertAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    auth: Optional[shared_auth.Auth] = dataclasses.field(default=None)
    auth_error: Optional[shared_auth_error.AuthError] = dataclasses.field(default=None)
    
