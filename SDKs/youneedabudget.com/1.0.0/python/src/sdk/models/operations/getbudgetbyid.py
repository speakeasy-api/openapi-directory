import dataclasses
from typing import Optional
from ..shared import budgetdetailresponse as shared_budgetdetailresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetBudgetByIDPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBudgetByIDQueryParams:
    last_knowledge_of_server: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBudgetByIDRequest:
    path_params: GetBudgetByIDPathParams = dataclasses.field()
    query_params: GetBudgetByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBudgetByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    budget_detail_response: Optional[shared_budgetdetailresponse.BudgetDetailResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
