import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateAccountOwnerPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAccountOwnerApplicationJSON:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclasses.dataclass
class UpdateAccountOwnerMultipartFormData:
    email: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'email' }})
    

@dataclasses.dataclass
class UpdateAccountOwnerRequests:
    object: Optional[UpdateAccountOwnerApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateAccountOwnerMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateAccountOwnerSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateAccountOwnerRequest:
    path_params: UpdateAccountOwnerPathParams = dataclasses.field()
    security: UpdateAccountOwnerSecurity = dataclasses.field()
    request: Optional[UpdateAccountOwnerRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateAccountOwnerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_account_owner_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
