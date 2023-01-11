import dataclasses
from typing import Optional
from ..shared import cobrandloginrequest as shared_cobrandloginrequest
from ..shared import cobrandloginresponse as shared_cobrandloginresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class CobrandLoginRequest:
    request: shared_cobrandloginrequest.CobrandLoginRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CobrandLoginResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cobrand_login_response: Optional[shared_cobrandloginresponse.CobrandLoginResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
