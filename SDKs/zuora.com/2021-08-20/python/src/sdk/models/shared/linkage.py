import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LinkageLinkageTypeEnum(str, Enum):
    START = "Start"
    SUCCESS = "Success"
    FAILURE = "Failure"
    ITERATE = "Iterate"
    TRUE = "true"
    FALSE = "false"
    APPROVE = "Approve"
    REJECT = "Reject"


@dataclass_json
@dataclasses.dataclass
class Linkage:
    r"""Linkage
    Used to represent the relationship between workflow tasks
    """
    
    linkage_type: Optional[LinkageLinkageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkage_type') }})
    source_task_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_task_id') }})
    source_workflow_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_workflow_id') }})
    target_task_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_task_id') }})
    
