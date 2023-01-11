import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NotificationsHistoryDeletionTaskResponseStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    FINISHED = "FINISHED"
    FAILED = "FAILED"


@dataclass_json
@dataclasses.dataclass
class NotificationsHistoryDeletionTaskResponse:
    r"""NotificationsHistoryDeletionTaskResponse
    The notification history deletion task information.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    created_on: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdOn') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[NotificationsHistoryDeletionTaskResponseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tenant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantId') }})
    
