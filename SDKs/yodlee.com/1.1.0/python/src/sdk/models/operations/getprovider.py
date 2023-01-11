import dataclasses
from typing import Optional
from ..shared import providerdetailresponse as shared_providerdetailresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetProviderPathParams:
    provider_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'providerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProviderRequest:
    path_params: GetProviderPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProviderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    provider_detail_response: Optional[shared_providerdetailresponse.ProviderDetailResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
