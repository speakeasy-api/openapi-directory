import dataclasses
from typing import Optional
from ..shared import provideraccountdetailresponse as shared_provideraccountdetailresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetProviderAccountPathParams:
    provider_account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'providerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProviderAccountQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'requestId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProviderAccountRequest:
    path_params: GetProviderAccountPathParams = dataclasses.field()
    query_params: GetProviderAccountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProviderAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    provider_account_detail_response: Optional[shared_provideraccountdetailresponse.ProviderAccountDetailResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
