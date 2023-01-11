import dataclasses
from typing import Optional
from ..shared import provideraccountuserprofileresponse as shared_provideraccountuserprofileresponse


@dataclasses.dataclass
class GetProviderAccountProfilesQueryParams:
    provider_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'providerAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProviderAccountProfilesRequest:
    query_params: GetProviderAccountProfilesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProviderAccountProfilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    provider_account_user_profile_response: Optional[shared_provideraccountuserprofileresponse.ProviderAccountUserProfileResponse] = dataclasses.field(default=None)
    
