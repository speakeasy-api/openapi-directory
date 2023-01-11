import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ListBlockedListQueryParams:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListBlockedListSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class ListBlockedList200ApplicationJSONBlockedListBlockTypeEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

class ListBlockedList200ApplicationJSONBlockedListMatchTypeEnum(str, Enum):
    PHONE_NUMBER = "phoneNumber"
    PREFIX = "prefix"

class ListBlockedList200ApplicationJSONBlockedListStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class ListBlockedList200ApplicationJSONBlockedList:
    block_type: Optional[ListBlockedList200ApplicationJSONBlockedListBlockTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_type') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    match_type: Optional[ListBlockedList200ApplicationJSONBlockedListMatchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match_type') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    status: Optional[ListBlockedList200ApplicationJSONBlockedListStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class ListBlockedList200ApplicationJSON:
    blocked_list: Optional[list[ListBlockedList200ApplicationJSONBlockedList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked_list') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ListBlockedListRequest:
    query_params: ListBlockedListQueryParams = dataclasses.field()
    security: ListBlockedListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListBlockedListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_blocked_list_200_application_json_object: Optional[ListBlockedList200ApplicationJSON] = dataclasses.field(default=None)
    
