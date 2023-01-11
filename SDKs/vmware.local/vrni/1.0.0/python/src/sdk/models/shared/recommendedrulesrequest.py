import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import microsecgroup as shared_microsecgroup
from ..shared import timerange as shared_timerange


@dataclass_json
@dataclasses.dataclass
class RecommendedRulesRequest:
    group_1: Optional[shared_microsecgroup.MicroSecGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_1') }})
    group_2: Optional[shared_microsecgroup.MicroSecGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_2') }})
    time_range: Optional[shared_timerange.TimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_range') }})
    
