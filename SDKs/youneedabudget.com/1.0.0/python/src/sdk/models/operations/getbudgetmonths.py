"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import errorresponse as shared_errorresponse
from ..shared import monthsummariesresponse as shared_monthsummariesresponse
from typing import Optional


@dataclasses.dataclass
class GetBudgetMonthsRequest:
    
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    r"""The id of the budget. \\"last-used\\" can be used to specify the last used budget and \\"default\\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)."""  
    last_knowledge_of_server: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    r"""The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included."""  
    

@dataclasses.dataclass
class GetBudgetMonthsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    r"""No budget months were found"""  
    month_summaries_response: Optional[shared_monthsummariesresponse.MonthSummariesResponse] = dataclasses.field(default=None)
    r"""The list of budget months"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    