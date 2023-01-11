import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customobjectbulkdeletefilter as shared_customobjectbulkdeletefilter

class CustomObjectBulkJobRequestNamespaceEnum(str, Enum):
    DEFAULT = "default"
    COM_ZUORA = "com_zuora"

class CustomObjectBulkJobRequestOperationEnum(str, Enum):
    DELETE = "delete"
    CREATE = "create"


@dataclass_json
@dataclasses.dataclass
class CustomObjectBulkJobRequest:
    namespace: CustomObjectBulkJobRequestNamespaceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    operation: CustomObjectBulkJobRequestOperationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    filter: Optional[shared_customobjectbulkdeletefilter.CustomObjectBulkDeleteFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    
