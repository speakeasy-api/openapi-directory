import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allentitytype_enum as shared_allentitytype_enum


@dataclass_json
@dataclasses.dataclass
class SearchMembershipCriteria:
    entity_type: Optional[shared_allentitytype_enum.AllEntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    
