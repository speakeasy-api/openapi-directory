import dataclasses
from typing import Optional
from ..shared import verificationrequest as shared_verificationrequest
from ..shared import verificationresponse as shared_verificationresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class InitiateMatchingOrChallengeDepositeVerificationRequest:
    request: shared_verificationrequest.VerificationRequestInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InitiateMatchingOrChallengeDepositeVerificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verification_response: Optional[shared_verificationresponse.VerificationResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
