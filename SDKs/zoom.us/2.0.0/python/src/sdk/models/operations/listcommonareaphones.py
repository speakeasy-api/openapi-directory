import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ListCommonAreaPhonesQueryParams:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCommonAreaPhonesSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesCallingPlans:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbersSourceEnum(str, Enum):
    INTERNAL = "internal"
    EXTERNAL = "external"


@dataclass_json
@dataclasses.dataclass
class ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    source: Optional[ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbersSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclass_json
@dataclasses.dataclass
class ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesSite:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class ListCommonAreaPhones200ApplicationJSONCommonAreaPhones:
    calling_plans: Optional[list[ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesCallingPlans]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calling_plans') }})
    device_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    phone_numbers: Optional[list[ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    site: Optional[ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesSite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class ListCommonAreaPhones200ApplicationJSON:
    common_area_phones: Optional[list[ListCommonAreaPhones200ApplicationJSONCommonAreaPhones]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common_area_phones') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ListCommonAreaPhonesRequest:
    query_params: ListCommonAreaPhonesQueryParams = dataclasses.field()
    security: ListCommonAreaPhonesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListCommonAreaPhonesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_common_area_phones_200_application_json_object: Optional[ListCommonAreaPhones200ApplicationJSON] = dataclasses.field(default=None)
    
