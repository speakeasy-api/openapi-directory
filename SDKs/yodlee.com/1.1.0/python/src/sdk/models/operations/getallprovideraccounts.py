import dataclasses
from typing import Optional
from ..shared import provideraccountresponse as shared_provideraccountresponse


@dataclasses.dataclass
class GetAllProviderAccountsQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    provider_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'providerIds', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllProviderAccountsRequest:
    query_params: GetAllProviderAccountsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllProviderAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    provider_account_response: Optional[shared_provideraccountresponse.ProviderAccountResponse] = dataclasses.field(default=None)
    
