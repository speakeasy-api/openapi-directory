import dataclasses
from typing import Optional
from ..shared import account as shared_account
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account: Optional[shared_account.Account] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
