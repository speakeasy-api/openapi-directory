import dataclasses
from typing import Optional
from ..shared import budgetsettingsresponse as shared_budgetsettingsresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetBudgetSettingsByIDPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBudgetSettingsByIDRequest:
    path_params: GetBudgetSettingsByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBudgetSettingsByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    budget_settings_response: Optional[shared_budgetsettingsresponse.BudgetSettingsResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
