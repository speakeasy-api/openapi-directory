import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountCreateApplicationJSONOptionsPayModeEnum(str, Enum):
    MASTER = "master"
    SUB = "sub"


@dataclass_json
@dataclasses.dataclass
class AccountCreateApplicationJSONOptions:
    r"""AccountCreateApplicationJSONOptions
    Account options object.
    """
    
    billing_auto_renew: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_auto_renew') }})
    meeting_connector_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_connector_list') }})
    pay_mode: Optional[AccountCreateApplicationJSONOptionsPayModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pay_mode') }})
    room_connector_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_connector_list') }})
    share_mc: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_mc') }})
    share_rc: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_rc') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountCreateApplicationJSON:
    r"""AccountCreateApplicationJSON
    The account object represents an account on Zoom. The account owner is the user who created the account or had an account created for them. You can read more about the Zoom account structure <a href='https://medium.com/zoom-developer-blog/a-brief-look-at-zoom-account-structures-1d19c745bf8a' target='_blank'>here</a>.
    """
    
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_name') }})
    options: Optional[AccountCreateApplicationJSONOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
class AccountCreateMultipartFormDataOptionsPayModeEnum(str, Enum):
    MASTER = "master"
    SUB = "sub"


@dataclass_json
@dataclasses.dataclass
class AccountCreateMultipartFormDataOptions:
    r"""AccountCreateMultipartFormDataOptions
    Account options object.
    """
    
    billing_auto_renew: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_auto_renew') }})
    meeting_connector_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_connector_list') }})
    pay_mode: Optional[AccountCreateMultipartFormDataOptionsPayModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pay_mode') }})
    room_connector_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_connector_list') }})
    share_mc: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_mc') }})
    share_rc: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_rc') }})
    

@dataclasses.dataclass
class AccountCreateMultipartFormData:
    r"""AccountCreateMultipartFormData
    The account object represents an account on Zoom. The account owner is the user who created the account or had an account created for them. You can read more about the Zoom account structure <a href='https://medium.com/zoom-developer-blog/a-brief-look-at-zoom-account-structures-1d19c745bf8a' target='_blank'>here</a>.
    """
    
    email: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'email' }})
    first_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'first_name' }})
    last_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'last_name' }})
    password: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'password' }})
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'account_name' }})
    options: Optional[AccountCreateMultipartFormDataOptions] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'options', 'json': True }})
    

@dataclasses.dataclass
class AccountCreateRequests:
    object: Optional[AccountCreateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AccountCreateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclasses.dataclass
class AccountCreate201ApplicationJSON:
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    owner_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_email') }})
    owner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_id') }})
    

@dataclasses.dataclass
class AccountCreateRequest:
    request: AccountCreateRequests = dataclasses.field()
    

@dataclasses.dataclass
class AccountCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_create_201_application_json_object: Optional[AccountCreate201ApplicationJSON] = dataclasses.field(default=None)
    
