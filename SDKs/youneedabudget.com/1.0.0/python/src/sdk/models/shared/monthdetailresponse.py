import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monthdetail as shared_monthdetail


@dataclass_json
@dataclasses.dataclass
class MonthDetailResponseData:
    month: shared_monthdetail.MonthDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('month') }})
    

@dataclass_json
@dataclasses.dataclass
class MonthDetailResponse:
    data: MonthDetailResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
