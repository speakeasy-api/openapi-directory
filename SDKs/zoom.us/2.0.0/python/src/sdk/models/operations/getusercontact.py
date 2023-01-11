import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetUserContactPathParams:
    contact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserContactQueryParams:
    query_presence_status: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query_presence_status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserContactSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetUserContact200ApplicationJSONPresenceStatusEnum(str, Enum):
    DO_NOT_DISTURB = "Do_Not_Disturb"
    AWAY = "Away"
    AVAILABLE = "Available"
    OFFLINE = "Offline"


@dataclass_json
@dataclasses.dataclass
class GetUserContact200ApplicationJSON:
    direct_numbers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_numbers') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    extension_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    presence_status: Optional[GetUserContact200ApplicationJSONPresenceStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presence_status') }})
    

@dataclasses.dataclass
class GetUserContactRequest:
    path_params: GetUserContactPathParams = dataclasses.field()
    query_params: GetUserContactQueryParams = dataclasses.field()
    security: GetUserContactSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserContactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_user_contact_200_application_json_object: Optional[GetUserContact200ApplicationJSON] = dataclasses.field(default=None)
    
