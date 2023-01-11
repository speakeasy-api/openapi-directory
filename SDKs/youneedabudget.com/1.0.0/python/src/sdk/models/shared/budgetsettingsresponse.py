import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import budgetsettings as shared_budgetsettings


@dataclass_json
@dataclasses.dataclass
class BudgetSettingsResponseData:
    settings: shared_budgetsettings.BudgetSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclasses.dataclass
class BudgetSettingsResponse:
    data: BudgetSettingsResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
