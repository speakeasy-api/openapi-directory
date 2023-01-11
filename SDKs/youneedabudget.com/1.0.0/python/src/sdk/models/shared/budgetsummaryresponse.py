import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import budgetsummary as shared_budgetsummary


@dataclass_json
@dataclasses.dataclass
class BudgetSummaryResponseData:
    budgets: list[shared_budgetsummary.BudgetSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgets') }})
    default_budget: Optional[shared_budgetsummary.BudgetSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_budget') }})
    

@dataclass_json
@dataclasses.dataclass
class BudgetSummaryResponse:
    data: BudgetSummaryResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
