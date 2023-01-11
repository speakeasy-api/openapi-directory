import dataclasses
from enum import Enum

class GlobalHeaderZuoraTrackIDEnum(str, Enum):
    ACCEPTED = "accepted"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"

