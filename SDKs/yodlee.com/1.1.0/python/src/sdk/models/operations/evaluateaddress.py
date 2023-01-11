import dataclasses
from typing import Optional
from ..shared import evaluateaddressrequest as shared_evaluateaddressrequest
from ..shared import evaluateaddressresponse as shared_evaluateaddressresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class EvaluateAddressRequest:
    request: shared_evaluateaddressrequest.EvaluateAddressRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EvaluateAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    evaluate_address_response: Optional[shared_evaluateaddressresponse.EvaluateAddressResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
