import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monthsummary as shared_monthsummary


@dataclass_json
@dataclasses.dataclass
class MonthSummariesResponseData:
    months: list[shared_monthsummary.MonthSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('months') }})
    server_knowledge: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    

@dataclass_json
@dataclasses.dataclass
class MonthSummariesResponse:
    data: MonthSummariesResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
