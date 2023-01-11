import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AddSettingTemplateApplicationJSONTypeEnum(str, Enum):
    USER = "user"
    GROUP = "group"
    AUTO_RECEPTIONIST = "autoReceptionist"
    COMMONAREA = "commonarea"
    INTEROP = "interop"


@dataclass_json
@dataclasses.dataclass
class AddSettingTemplateApplicationJSON:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: AddSettingTemplateApplicationJSONTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_id') }})
    
class AddSettingTemplateMultipartFormDataTypeEnum(str, Enum):
    USER = "user"
    GROUP = "group"
    AUTO_RECEPTIONIST = "autoReceptionist"
    COMMONAREA = "commonarea"
    INTEROP = "interop"


@dataclasses.dataclass
class AddSettingTemplateMultipartFormData:
    name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'name' }})
    type: AddSettingTemplateMultipartFormDataTypeEnum = dataclasses.field(metadata={'multipart_form': { 'field_name': 'type' }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'site_id' }})
    

@dataclasses.dataclass
class AddSettingTemplateRequests:
    object: Optional[AddSettingTemplateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddSettingTemplateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclasses.dataclass
class AddSettingTemplate201ApplicationJSON:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AddSettingTemplateRequest:
    request: Optional[AddSettingTemplateRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddSettingTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    add_setting_template_201_application_json_object: Optional[AddSettingTemplate201ApplicationJSON] = dataclasses.field(default=None)
    
