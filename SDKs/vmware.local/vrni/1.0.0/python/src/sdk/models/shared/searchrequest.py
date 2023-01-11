import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allentitytype_enum as shared_allentitytype_enum
from ..shared import sortbyclause as shared_sortbyclause
from ..shared import timerange as shared_timerange


@dataclass_json
@dataclasses.dataclass
class SearchRequest:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursor') }})
    entity_type: Optional[shared_allentitytype_enum.AllEntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    sort_by: Optional[shared_sortbyclause.SortByClause] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort_by') }})
    time_range: Optional[shared_timerange.TimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_range') }})
    
