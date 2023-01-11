import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customobjectrecordbatchaction as shared_customobjectrecordbatchaction


@dataclass_json
@dataclasses.dataclass
class CustomObjectRecordBatchRequest:
    r"""CustomObjectRecordBatchRequest
    Request of processing custom object records in batch.
    """
    
    action: shared_customobjectrecordbatchaction.CustomObjectRecordBatchAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    
