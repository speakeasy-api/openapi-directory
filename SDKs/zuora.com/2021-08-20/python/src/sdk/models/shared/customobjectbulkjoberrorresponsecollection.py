import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customobjectbulkjoberrorresponse as shared_customobjectbulkjoberrorresponse


@dataclass_json
@dataclasses.dataclass
class CustomObjectBulkJobErrorResponseCollection:
    errors: list[shared_customobjectbulkjoberrorresponse.CustomObjectBulkJobErrorResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
