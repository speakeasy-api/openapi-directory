import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import budgetdetail as shared_budgetdetail


@dataclass_json
@dataclasses.dataclass
class BudgetDetailResponseData:
    budget: shared_budgetdetail.BudgetDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('budget') }})
    server_knowledge: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    

@dataclass_json
@dataclasses.dataclass
class BudgetDetailResponse:
    data: BudgetDetailResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
