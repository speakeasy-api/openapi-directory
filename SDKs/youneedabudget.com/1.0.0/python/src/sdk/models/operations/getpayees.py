import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import payeesresponse as shared_payeesresponse


@dataclasses.dataclass
class GetPayeesPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayeesQueryParams:
    last_knowledge_of_server: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPayeesRequest:
    path_params: GetPayeesPathParams = dataclasses.field()
    query_params: GetPayeesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayeesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    payees_response: Optional[shared_payeesresponse.PayeesResponse] = dataclasses.field(default=None)
    
