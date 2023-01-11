import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateReportModelReportTypeEnum(str, Enum):
    MALICIOUS_IP = "MaliciousIP"
    SPAMMING = "Spamming"
    REMOVE_PERMISSIONS = "RemovePermissions"
    OTHER = "Other"


@dataclass_json
@dataclasses.dataclass
class CreateReportModel:
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }, 'form': { 'field_name': 'reason' }})
    report_type: Optional[CreateReportModelReportTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportType') }, 'form': { 'field_name': 'reportType' }})
    
