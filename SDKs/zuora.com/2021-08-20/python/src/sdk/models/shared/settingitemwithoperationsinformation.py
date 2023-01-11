import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import settingitemhttpoperation as shared_settingitemhttpoperation

class SettingItemWithOperationsInformationContextEnum(str, Enum):
    TENANT = "Tenant"
    ENTITY = "Entity"
    USER = "User"
    NONE = "None"


@dataclass_json
@dataclasses.dataclass
class SettingItemWithOperationsInformation:
    context: Optional[SettingItemWithOperationsInformationContextEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    http_operations: Optional[list[shared_settingitemhttpoperation.SettingItemHTTPOperation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpOperations') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    path_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathPattern') }})
    
