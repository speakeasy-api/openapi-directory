import dataclasses
from typing import Optional
from ..shared import accountresponse as shared_accountresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetAccountByIDPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountByIDRequest:
    path_params: GetAccountByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_response: Optional[shared_accountresponse.AccountResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
