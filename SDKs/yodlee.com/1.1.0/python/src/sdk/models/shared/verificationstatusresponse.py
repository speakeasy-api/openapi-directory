import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verificationstatus as shared_verificationstatus


@dataclass_json
@dataclasses.dataclass
class VerificationStatusResponse:
    verification: Optional[list[shared_verificationstatus.VerificationStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    
