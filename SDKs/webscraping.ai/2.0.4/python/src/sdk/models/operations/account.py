import dataclasses
from typing import Optional
from ..shared import account as shared_account
from ..shared import error as shared_error


@dataclasses.dataclass
class AccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account: Optional[shared_account.Account] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
