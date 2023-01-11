import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPhoneNumberDetailsPathParams:
    number_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'numberId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPhoneNumberDetailsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnum(str, Enum):
    USER = "user"
    CALL_QUEUE = "callQueue"
    AUTO_RECEPTIONIST = "autoReceptionist"
    COMMON_AREA_PHONE = "commonAreaPhone"


@dataclass_json
@dataclasses.dataclass
class GetPhoneNumberDetails200ApplicationJSONAssignee:
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetPhoneNumberDetails200ApplicationJSONNumberTypeEnum(str, Enum):
    TOLL = "toll"
    TOLLFREE = "tollfree"


@dataclass_json
@dataclasses.dataclass
class GetPhoneNumberDetails200ApplicationJSONSite:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetPhoneNumberDetails200ApplicationJSONSourceEnum(str, Enum):
    INTERNAL = "internal"
    EXTERNAL = "external"

class GetPhoneNumberDetails200ApplicationJSONStatusEnum(str, Enum):
    PENDING = "pending"
    AVAILABLE = "available"


@dataclass_json
@dataclasses.dataclass
class GetPhoneNumberDetails200ApplicationJSON:
    assignee: Optional[GetPhoneNumberDetails200ApplicationJSONAssignee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    capability: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capability') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    number_type: Optional[GetPhoneNumberDetails200ApplicationJSONNumberTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_type') }})
    site: Optional[GetPhoneNumberDetails200ApplicationJSONSite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    source: Optional[GetPhoneNumberDetails200ApplicationJSONSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[GetPhoneNumberDetails200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetPhoneNumberDetailsRequest:
    path_params: GetPhoneNumberDetailsPathParams = dataclasses.field()
    security: GetPhoneNumberDetailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPhoneNumberDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_phone_number_details_200_application_json_object: Optional[GetPhoneNumberDetails200ApplicationJSON] = dataclasses.field(default=None)
    
