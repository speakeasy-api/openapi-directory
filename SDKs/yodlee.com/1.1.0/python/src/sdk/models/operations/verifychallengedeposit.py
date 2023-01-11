import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updateverificationrequest as shared_updateverificationrequest
from ..shared import verificationresponse as shared_verificationresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class VerifyChallengeDepositRequest:
    request: shared_updateverificationrequest.UpdateVerificationRequestInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class VerifyChallengeDepositResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verification_response: Optional[shared_verificationresponse.VerificationResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
