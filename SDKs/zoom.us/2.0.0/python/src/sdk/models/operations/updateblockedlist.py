import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateBlockedListPathParams:
    blocked_list_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'blockedListId', 'style': 'simple', 'explode': False }})
    
class UpdateBlockedListApplicationJSONBlockTypeEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

class UpdateBlockedListApplicationJSONMatchTypeEnum(str, Enum):
    PHONE_NUMBER = "phoneNumber"
    PREFIX = "prefix"

class UpdateBlockedListApplicationJSONStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class UpdateBlockedListApplicationJSON:
    block_type: Optional[UpdateBlockedListApplicationJSONBlockTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_type') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    match_type: Optional[UpdateBlockedListApplicationJSONMatchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match_type') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    status: Optional[UpdateBlockedListApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class UpdateBlockedListMultipartFormDataBlockTypeEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

class UpdateBlockedListMultipartFormDataMatchTypeEnum(str, Enum):
    PHONE_NUMBER = "phoneNumber"
    PREFIX = "prefix"

class UpdateBlockedListMultipartFormDataStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclasses.dataclass
class UpdateBlockedListMultipartFormData:
    block_type: Optional[UpdateBlockedListMultipartFormDataBlockTypeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'block_type' }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'comment' }})
    match_type: Optional[UpdateBlockedListMultipartFormDataMatchTypeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'match_type' }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone_number' }})
    status: Optional[UpdateBlockedListMultipartFormDataStatusEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'status' }})
    

@dataclasses.dataclass
class UpdateBlockedListRequests:
    object: Optional[UpdateBlockedListApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateBlockedListMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateBlockedListSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateBlockedListRequest:
    path_params: UpdateBlockedListPathParams = dataclasses.field()
    security: UpdateBlockedListSecurity = dataclasses.field()
    request: Optional[UpdateBlockedListRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateBlockedListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_blocked_list_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
