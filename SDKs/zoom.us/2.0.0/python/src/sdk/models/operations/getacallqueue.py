import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetACallQueuePathParams:
    call_queue_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'callQueueId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetACallQueueSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetACallQueue200ApplicationJSONMembersCommonAreaPhones:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetACallQueue200ApplicationJSONMembersUsersLevelEnum(str, Enum):
    MANAGER = "manager"
    USER = "user"


@dataclass_json
@dataclasses.dataclass
class GetACallQueue200ApplicationJSONMembersUsers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    level: Optional[GetACallQueue200ApplicationJSONMembersUsersLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    receive_call: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receive_call') }})
    

@dataclass_json
@dataclasses.dataclass
class GetACallQueue200ApplicationJSONMembers:
    common_area_phones: Optional[list[GetACallQueue200ApplicationJSONMembersCommonAreaPhones]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common_area_phones') }})
    users: Optional[list[GetACallQueue200ApplicationJSONMembersUsers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
class GetACallQueue200ApplicationJSONPhoneNumbersSourceEnum(str, Enum):
    INTERNAL = "internal"
    EXTERNAL = "external"


@dataclass_json
@dataclasses.dataclass
class GetACallQueue200ApplicationJSONPhoneNumbers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    source: Optional[GetACallQueue200ApplicationJSONPhoneNumbersSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclass_json
@dataclasses.dataclass
class GetACallQueue200ApplicationJSONSite:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetACallQueue200ApplicationJSONStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class GetACallQueue200ApplicationJSON:
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    members: Optional[GetACallQueue200ApplicationJSONMembers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone_numbers: Optional[list[GetACallQueue200ApplicationJSONPhoneNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    site: Optional[GetACallQueue200ApplicationJSONSite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    status: Optional[GetACallQueue200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetACallQueueRequest:
    path_params: GetACallQueuePathParams = dataclasses.field()
    security: GetACallQueueSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetACallQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_a_call_queue_200_application_json_object: Optional[GetACallQueue200ApplicationJSON] = dataclasses.field(default=None)
    
