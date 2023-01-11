import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class SwitchUserAccountPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SwitchUserAccountApplicationJSON:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    

@dataclasses.dataclass
class SwitchUserAccountMultipartFormData:
    account_id: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'account_id' }})
    

@dataclasses.dataclass
class SwitchUserAccountRequests:
    object: Optional[SwitchUserAccountApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[SwitchUserAccountMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class SwitchUserAccountSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SwitchUserAccountRequest:
    path_params: SwitchUserAccountPathParams = dataclasses.field()
    security: SwitchUserAccountSecurity = dataclasses.field()
    request: Optional[SwitchUserAccountRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class SwitchUserAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    switch_user_account_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
