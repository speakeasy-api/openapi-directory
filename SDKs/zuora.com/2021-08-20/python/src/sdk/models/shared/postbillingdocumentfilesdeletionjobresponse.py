import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostBillingDocumentFilesDeletionJobResponseStatusEnum(str, Enum):
    PENDING = "Pending"


@dataclass_json
@dataclasses.dataclass
class PostBillingDocumentFilesDeletionJobResponse:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[PostBillingDocumentFilesDeletionJobResponseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
