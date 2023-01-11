import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UserUpdatePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class UserUpdateLoginTypeEnum(str, Enum):
    ZERO = "0"
    ONE = "1"
    NINETY_NINE = "99"
    ONE_HUNDRED = "100"
    ONE_HUNDRED_AND_ONE = "101"


@dataclasses.dataclass
class UserUpdateQueryParams:
    login_type: Optional[UserUpdateLoginTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'login_type', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class UserUpdateApplicationJSONCustomAttributes:
    r"""UserUpdateApplicationJSONCustomAttributes
    Custom attribute(s) of the user.
    """
    
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class UserUpdateApplicationJSONPhoneNumbers:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclass_json
@dataclasses.dataclass
class UserUpdateApplicationJSON:
    r"""UserUpdateApplicationJSON
    The user update object represents a user on Zoom.
    """
    
    cms_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cms_user_id') }})
    company: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    custom_attributes: Optional[UserUpdateApplicationJSONCustomAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_attributes') }})
    dept: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dept') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_id') }})
    host_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_key') }})
    job_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job_title') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    manager: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manager') }})
    phone_country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_country') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    phone_numbers: Optional[UserUpdateApplicationJSONPhoneNumbers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    pmi: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pmi') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    use_pmi: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_pmi') }})
    vanity_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vanity_name') }})
    

@dataclass_json
@dataclasses.dataclass
class UserUpdateMultipartFormDataCustomAttributes:
    r"""UserUpdateMultipartFormDataCustomAttributes
    Custom attribute(s) of the user.
    """
    
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class UserUpdateMultipartFormDataPhoneNumbers:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclasses.dataclass
class UserUpdateMultipartFormData:
    r"""UserUpdateMultipartFormData
    The user update object represents a user on Zoom.
    """
    
    cms_user_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'cms_user_id' }})
    company: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'company' }})
    custom_attributes: Optional[UserUpdateMultipartFormDataCustomAttributes] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'custom_attributes', 'json': True }})
    dept: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'dept' }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'first_name' }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'group_id' }})
    host_key: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'host_key' }})
    job_title: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'job_title' }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'language' }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'last_name' }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'location' }})
    manager: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'manager' }})
    phone_country: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone_country' }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone_number' }})
    phone_numbers: Optional[UserUpdateMultipartFormDataPhoneNumbers] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone_numbers', 'json': True }})
    pmi: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'pmi' }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'timezone' }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    use_pmi: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'use_pmi' }})
    vanity_name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'vanity_name' }})
    

@dataclasses.dataclass
class UserUpdateRequests:
    object: Optional[UserUpdateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UserUpdateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UserUpdateRequest:
    path_params: UserUpdatePathParams = dataclasses.field()
    query_params: UserUpdateQueryParams = dataclasses.field()
    request: UserUpdateRequests = dataclasses.field()
    

@dataclasses.dataclass
class UserUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
