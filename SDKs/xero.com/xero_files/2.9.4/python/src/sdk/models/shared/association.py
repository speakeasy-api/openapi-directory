import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectgroup_enum as shared_objectgroup_enum
from ..shared import objecttype_enum as shared_objecttype_enum


@dataclass_json
@dataclasses.dataclass
class Association:
    file_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileId') }})
    object_group: Optional[shared_objectgroup_enum.ObjectGroupEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectGroup') }})
    object_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectId') }})
    object_type: Optional[shared_objecttype_enum.ObjectTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectType') }})
    
