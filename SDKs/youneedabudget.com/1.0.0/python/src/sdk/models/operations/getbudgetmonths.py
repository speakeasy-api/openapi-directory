import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import monthsummariesresponse as shared_monthsummariesresponse


@dataclasses.dataclass
class GetBudgetMonthsPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBudgetMonthsQueryParams:
    last_knowledge_of_server: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBudgetMonthsRequest:
    path_params: GetBudgetMonthsPathParams = dataclasses.field()
    query_params: GetBudgetMonthsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBudgetMonthsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    month_summaries_response: Optional[shared_monthsummariesresponse.MonthSummariesResponse] = dataclasses.field(default=None)
    
