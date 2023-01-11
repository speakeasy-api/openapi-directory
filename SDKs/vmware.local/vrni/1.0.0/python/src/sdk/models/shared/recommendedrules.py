import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendedrule as shared_recommendedrule
from ..shared import timerange as shared_timerange


@dataclass_json
@dataclasses.dataclass
class RecommendedRules:
    results: Optional[list[shared_recommendedrule.RecommendedRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    time_range: Optional[shared_timerange.TimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_range') }})
    
