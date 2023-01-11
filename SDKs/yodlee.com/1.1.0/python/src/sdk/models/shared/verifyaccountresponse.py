import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verifyaccount as shared_verifyaccount


@dataclass_json
@dataclasses.dataclass
class VerifyAccountResponse:
    verify_account: Optional[shared_verifyaccount.VerifyAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyAccount') }})
    
