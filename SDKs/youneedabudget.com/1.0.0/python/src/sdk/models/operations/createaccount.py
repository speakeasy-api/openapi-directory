import dataclasses
from typing import Optional
from ..shared import saveaccountwrapper as shared_saveaccountwrapper
from ..shared import accountresponse as shared_accountresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateAccountPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAccountRequest:
    path_params: CreateAccountPathParams = dataclasses.field()
    request: shared_saveaccountwrapper.SaveAccountWrapper = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_response: Optional[shared_accountresponse.AccountResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
