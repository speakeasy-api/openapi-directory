import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auth as shared_auth
from ..shared import auth_error as shared_auth_error

class ExchangeAuthCodeRequestBodyGrantTypeEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"


@dataclass_json
@dataclasses.dataclass
class ExchangeAuthCodeRequestBody:
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    grant_type: ExchangeAuthCodeRequestBodyGrantTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    redirect_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_uri') }})
    

@dataclasses.dataclass
class ExchangeAuthCodeRequest:
    request: ExchangeAuthCodeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.auth+json' }})
    

@dataclasses.dataclass
class ExchangeAuthCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    auth: Optional[shared_auth.Auth] = dataclasses.field(default=None)
    auth_error: Optional[shared_auth_error.AuthError] = dataclasses.field(default=None)
    
