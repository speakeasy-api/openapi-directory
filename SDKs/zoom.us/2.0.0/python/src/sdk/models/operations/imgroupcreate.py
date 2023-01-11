import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ImGroupCreateApplicationJSONTypeEnum(str, Enum):
    NORMAL = "normal"
    SHARED = "shared"
    RESTRICTED = "restricted"


@dataclass_json
@dataclasses.dataclass
class ImGroupCreateApplicationJSON:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    search_by_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_account') }})
    search_by_domain: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_domain') }})
    search_by_ma_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_ma_account') }})
    type: Optional[ImGroupCreateApplicationJSONTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class ImGroupCreateMultipartFormDataTypeEnum(str, Enum):
    NORMAL = "normal"
    SHARED = "shared"
    RESTRICTED = "restricted"


@dataclasses.dataclass
class ImGroupCreateMultipartFormData:
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    search_by_account: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'search_by_account' }})
    search_by_domain: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'search_by_domain' }})
    search_by_ma_account: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'search_by_ma_account' }})
    type: Optional[ImGroupCreateMultipartFormDataTypeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class ImGroupCreateRequests:
    object: Optional[ImGroupCreateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[ImGroupCreateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclasses.dataclass
class ImGroupCreate201ApplicationJSON:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    search_by_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_account') }})
    search_by_domain: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_domain') }})
    search_by_ma_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_ma_account') }})
    total_members: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_members') }})
    

@dataclasses.dataclass
class ImGroupCreateRequest:
    request: ImGroupCreateRequests = dataclasses.field()
    

@dataclasses.dataclass
class ImGroupCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    im_group_create_201_application_json_object: Optional[ImGroupCreate201ApplicationJSON] = dataclasses.field(default=None)
    
