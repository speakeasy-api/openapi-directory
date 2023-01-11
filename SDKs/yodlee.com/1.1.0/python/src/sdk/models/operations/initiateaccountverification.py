import dataclasses
from typing import Optional
from ..shared import verifyaccountrequest as shared_verifyaccountrequest
from ..shared import verifyaccountresponse as shared_verifyaccountresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class InitiateAccountVerificationPathParams:
    provider_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'providerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InitiateAccountVerificationRequest:
    path_params: InitiateAccountVerificationPathParams = dataclasses.field()
    request: shared_verifyaccountrequest.VerifyAccountRequestInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InitiateAccountVerificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_account_response: Optional[shared_verifyaccountresponse.VerifyAccountResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
