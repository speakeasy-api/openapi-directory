import dataclasses
from enum import Enum

class LeavePeriodStatusEnum(str, Enum):
    SCHEDULED = "SCHEDULED"
    PROCESSED = "PROCESSED"

