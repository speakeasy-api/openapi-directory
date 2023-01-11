import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SearchCompanyContactsQueryParams:
    search_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'search_key', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    query_presence_status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query_presence_status', 'style': 'form', 'explode': True }})
    
class SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnum(str, Enum):
    DO_NOT_DISTURB = "Do_Not_Disturb"
    AWAY = "Away"
    AVAILABLE = "Available"
    OFFLINE = "Offline"


@dataclass_json
@dataclasses.dataclass
class SearchCompanyContacts200ApplicationJSONContacts:
    dept: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dept') }})
    direct_numbers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_numbers') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    extension_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    im_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('im_group_id') }})
    im_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('im_group_name') }})
    job_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job_title') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    presence_status: Optional[SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presence_status') }})
    sip_phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_phone_number') }})
    

@dataclass_json
@dataclasses.dataclass
class SearchCompanyContacts200ApplicationJSON:
    contacts: Optional[list[SearchCompanyContacts200ApplicationJSONContacts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contacts') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    

@dataclasses.dataclass
class SearchCompanyContactsRequest:
    query_params: SearchCompanyContactsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchCompanyContactsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    search_company_contacts_200_application_json_object: Optional[SearchCompanyContacts200ApplicationJSON] = dataclasses.field(default=None)
    
