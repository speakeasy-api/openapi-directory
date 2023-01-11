import dataclasses
from typing import Optional
from ..shared import accountsresponse as shared_accountsresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetAccountsPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountsQueryParams:
    last_knowledge_of_server: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountsRequest:
    path_params: GetAccountsPathParams = dataclasses.field()
    query_params: GetAccountsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accounts_response: Optional[shared_accountsresponse.AccountsResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
