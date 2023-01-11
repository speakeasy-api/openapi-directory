import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errordetail as shared_errordetail


@dataclass_json
@dataclasses.dataclass
class ErrorResponse:
    error: shared_errordetail.ErrorDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
