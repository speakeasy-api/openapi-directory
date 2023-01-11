import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ListPhoneUsersQueryParams:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListPhoneUsersSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ListPhoneUsers200ApplicationJSONUsersCallingPlans:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ListPhoneUsers200ApplicationJSONUsersSite:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class ListPhoneUsers200ApplicationJSONUsers:
    calling_plans: Optional[list[ListPhoneUsers200ApplicationJSONUsersCallingPlans]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calling_plans') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_user_id') }})
    site: Optional[ListPhoneUsers200ApplicationJSONUsersSite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class ListPhoneUsers200ApplicationJSON:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    users: Optional[list[ListPhoneUsers200ApplicationJSONUsers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclasses.dataclass
class ListPhoneUsersRequest:
    query_params: ListPhoneUsersQueryParams = dataclasses.field()
    security: ListPhoneUsersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListPhoneUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_phone_users_200_application_json_object: Optional[ListPhoneUsers200ApplicationJSON] = dataclasses.field(default=None)
    
