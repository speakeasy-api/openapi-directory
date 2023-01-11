import dataclasses
from typing import Optional
from ..shared import accountresponse as shared_accountresponse


@dataclasses.dataclass
class GetAccountPathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountRequest:
    path_params: GetAccountPathParams = dataclasses.field()
    query_params: GetAccountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_response: Optional[shared_accountresponse.AccountResponse] = dataclasses.field(default=None)
    
