import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verification as shared_verification


@dataclass_json
@dataclasses.dataclass
class VerificationRequestInput:
    verification: shared_verification.VerificationInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    
