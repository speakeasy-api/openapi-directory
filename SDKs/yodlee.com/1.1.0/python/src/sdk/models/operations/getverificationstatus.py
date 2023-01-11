import dataclasses
from typing import Optional
from ..shared import verificationstatusresponse as shared_verificationstatusresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetVerificationStatusQueryParams:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    provider_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'providerAccountId', 'style': 'form', 'explode': True }})
    verification_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'verificationType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVerificationStatusRequest:
    query_params: GetVerificationStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVerificationStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verification_status_response: Optional[shared_verificationstatusresponse.VerificationStatusResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
