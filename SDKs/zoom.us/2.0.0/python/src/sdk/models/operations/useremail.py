import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UserEmailQueryParams:
    email: str = dataclasses.field(metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserEmailSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class UserEmail200ApplicationJSON:
    existed_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existed_email') }})
    

@dataclasses.dataclass
class UserEmailRequest:
    query_params: UserEmailQueryParams = dataclasses.field()
    security: UserEmailSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UserEmailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_email_200_application_json_object: Optional[UserEmail200ApplicationJSON] = dataclasses.field(default=None)
    
