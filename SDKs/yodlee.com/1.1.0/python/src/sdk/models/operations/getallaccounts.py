import dataclasses
from typing import Optional
from ..shared import accountresponse as shared_accountresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetAllAccountsQueryParams:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    container: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'container', 'style': 'form', 'explode': True }})
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    provider_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'providerAccountId', 'style': 'form', 'explode': True }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'requestId', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllAccountsRequest:
    query_params: GetAllAccountsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_response: Optional[shared_accountresponse.AccountResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
