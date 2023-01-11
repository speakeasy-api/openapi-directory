import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auth as shared_auth
from ..shared import error as shared_error

class ClientAuthRequestBodyGrantTypeEnum(str, Enum):
    CLIENT_CREDENTIALS = "client_credentials"


@dataclass_json
@dataclasses.dataclass
class ClientAuthRequestBody:
    grant_type: ClientAuthRequestBodyGrantTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    scope: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    

@dataclasses.dataclass
class ClientAuthRequest:
    request: ClientAuthRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.auth+json' }})
    

@dataclasses.dataclass
class ClientAuthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    auth: Optional[shared_auth.Auth] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
