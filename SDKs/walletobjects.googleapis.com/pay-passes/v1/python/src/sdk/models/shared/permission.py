import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PermissionRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    OWNER_UPPER = "OWNER"
    OWNER_LOWER = "owner"
    READER_UPPER = "READER"
    READER_LOWER = "reader"
    WRITER_UPPER = "WRITER"
    WRITER_LOWER = "writer"


@dataclass_json
@dataclasses.dataclass
class Permission:
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    role: Optional[PermissionRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
