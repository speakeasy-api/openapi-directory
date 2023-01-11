import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostPhoneSipTrunkPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostPhoneSipTrunkApplicationJSONSipTrunks:
    carrier_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_account') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPhoneSipTrunkApplicationJSON:
    sip_trunks: Optional[list[PostPhoneSipTrunkApplicationJSONSipTrunks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_trunks') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPhoneSipTrunkMultipartFormDataSipTrunks:
    carrier_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_account') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class PostPhoneSipTrunkMultipartFormData1:
    sip_trunks: Optional[list[PostPhoneSipTrunkMultipartFormDataSipTrunks]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'sip_trunks', 'json': True }})
    

@dataclasses.dataclass
class PostPhoneSipTrunkRequests:
    object: Optional[PostPhoneSipTrunkApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[PostPhoneSipTrunkMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostPhoneSipTrunkSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PostPhoneSipTrunk201ApplicationJSONSipTrunks:
    carrier_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_account') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPhoneSipTrunk201ApplicationJSON:
    sip_trunks: Optional[list[PostPhoneSipTrunk201ApplicationJSONSipTrunks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_trunks') }})
    

@dataclasses.dataclass
class PostPhoneSipTrunkRequest:
    path_params: PostPhoneSipTrunkPathParams = dataclasses.field()
    security: PostPhoneSipTrunkSecurity = dataclasses.field()
    request: Optional[PostPhoneSipTrunkRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostPhoneSipTrunkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    post_phone_sip_trunk_201_application_json_object: Optional[PostPhoneSipTrunk201ApplicationJSON] = dataclasses.field(default=None)
    
