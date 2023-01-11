import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getentitiestype as shared_getentitiestype


@dataclass_json
@dataclasses.dataclass
class GetEntitiesResponseType:
    entities: Optional[list[shared_getentitiestype.GetEntitiesType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
