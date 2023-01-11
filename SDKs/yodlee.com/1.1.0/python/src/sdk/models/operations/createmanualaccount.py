import dataclasses
from typing import Optional
from ..shared import createaccountrequest as shared_createaccountrequest
from ..shared import createdaccountresponse as shared_createdaccountresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class CreateManualAccountRequest:
    request: shared_createaccountrequest.CreateAccountRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateManualAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    created_account_response: Optional[shared_createdaccountresponse.CreatedAccountResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
