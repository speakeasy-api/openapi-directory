import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class AddAnumberToBlockedListApplicationJSONBlockTypeEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

class AddAnumberToBlockedListApplicationJSONMatchTypeEnum(str, Enum):
    PHONE_NUMBER = "phoneNumber"
    PREFIX = "prefix"

class AddAnumberToBlockedListApplicationJSONStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class AddAnumberToBlockedListApplicationJSON:
    block_type: Optional[AddAnumberToBlockedListApplicationJSONBlockTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_type') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    match_type: Optional[AddAnumberToBlockedListApplicationJSONMatchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match_type') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    status: Optional[AddAnumberToBlockedListApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class AddAnumberToBlockedListMultipartFormDataBlockTypeEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

class AddAnumberToBlockedListMultipartFormDataMatchTypeEnum(str, Enum):
    PHONE_NUMBER = "phoneNumber"
    PREFIX = "prefix"

class AddAnumberToBlockedListMultipartFormDataStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclasses.dataclass
class AddAnumberToBlockedListMultipartFormData:
    block_type: Optional[AddAnumberToBlockedListMultipartFormDataBlockTypeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'block_type' }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'comment' }})
    match_type: Optional[AddAnumberToBlockedListMultipartFormDataMatchTypeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'match_type' }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone_number' }})
    status: Optional[AddAnumberToBlockedListMultipartFormDataStatusEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'status' }})
    

@dataclasses.dataclass
class AddAnumberToBlockedListRequests:
    object: Optional[AddAnumberToBlockedListApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddAnumberToBlockedListMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddAnumberToBlockedListSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class AddAnumberToBlockedList201ApplicationJSON:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class AddAnumberToBlockedListRequest:
    security: AddAnumberToBlockedListSecurity = dataclasses.field()
    request: Optional[AddAnumberToBlockedListRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddAnumberToBlockedListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    add_anumber_to_blocked_list_201_application_json_object: Optional[AddAnumberToBlockedList201ApplicationJSON] = dataclasses.field(default=None)
    
