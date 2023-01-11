import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListSharedLineGroupsQueryParams:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    
class ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum(str, Enum):
    PENDING = "pending"
    AVAILABLE = "available"


@dataclass_json
@dataclasses.dataclass
class ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    status: Optional[ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class ListSharedLineGroups200ApplicationJSONSharedLineGroups:
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    phone_numbers: Optional[list[ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    site: Optional[ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    status: Optional[ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSharedLineGroups200ApplicationJSON:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    shared_line_groups: Optional[list[ListSharedLineGroups200ApplicationJSONSharedLineGroups]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared_line_groups') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ListSharedLineGroupsRequest:
    query_params: ListSharedLineGroupsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListSharedLineGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_shared_line_groups_200_application_json_object: Optional[ListSharedLineGroups200ApplicationJSON] = dataclasses.field(default=None)
    
