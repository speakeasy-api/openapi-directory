import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetABlockedListPathParams:
    blocked_list_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'blockedListId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetABlockedListSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetABlockedList200ApplicationJSONBlockTypeEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

class GetABlockedList200ApplicationJSONMatchTypeEnum(str, Enum):
    PHONE_NUMBER = "phoneNumber"
    PREFIX = "prefix"

class GetABlockedList200ApplicationJSONStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class GetABlockedList200ApplicationJSON:
    block_type: Optional[GetABlockedList200ApplicationJSONBlockTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_type') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    match_type: Optional[GetABlockedList200ApplicationJSONMatchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match_type') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    status: Optional[GetABlockedList200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetABlockedListRequest:
    path_params: GetABlockedListPathParams = dataclasses.field()
    security: GetABlockedListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetABlockedListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_a_blocked_list_200_application_json_object: Optional[GetABlockedList200ApplicationJSON] = dataclasses.field(default=None)
    
