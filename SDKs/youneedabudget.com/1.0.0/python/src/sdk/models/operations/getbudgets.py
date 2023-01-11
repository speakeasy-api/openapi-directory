import dataclasses
from typing import Optional
from ..shared import budgetsummaryresponse as shared_budgetsummaryresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetBudgetsQueryParams:
    include_accounts: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_accounts', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBudgetsRequest:
    query_params: GetBudgetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBudgetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    budget_summary_response: Optional[shared_budgetsummaryresponse.BudgetSummaryResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
