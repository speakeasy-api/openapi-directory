import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdatePhoneSipTrunkPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    sip_trunk_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sipTrunkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePhoneSipTrunkApplicationJSON:
    carrier_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_account') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class UpdatePhoneSipTrunkMultipartFormData:
    carrier_account: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'carrier_account' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclasses.dataclass
class UpdatePhoneSipTrunkRequests:
    object: Optional[UpdatePhoneSipTrunkApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdatePhoneSipTrunkMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdatePhoneSipTrunkSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdatePhoneSipTrunkRequest:
    path_params: UpdatePhoneSipTrunkPathParams = dataclasses.field()
    security: UpdatePhoneSipTrunkSecurity = dataclasses.field()
    request: Optional[UpdatePhoneSipTrunkRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdatePhoneSipTrunkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_phone_sip_trunk_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
