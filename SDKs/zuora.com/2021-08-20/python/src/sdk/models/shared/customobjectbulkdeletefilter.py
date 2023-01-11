import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customobjectbulkdeletefiltercondition as shared_customobjectbulkdeletefiltercondition


@dataclass_json
@dataclasses.dataclass
class CustomObjectBulkDeleteFilter:
    r"""CustomObjectBulkDeleteFilter
    Filters to determine which records to be deleted in the bulk delete operation.
    """
    
    conditions: list[shared_customobjectbulkdeletefiltercondition.CustomObjectBulkDeleteFilterCondition] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    
