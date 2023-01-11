import dataclasses
from enum import Enum

class GlobalRequestPageSizeEnum2(str, Enum):
    DRAFT = "Draft"
    POSTED = "Posted"
    CANCELED = "Canceled"
    ERROR = "Error"
    PENDING_FOR_TAX = "PendingForTax"
    GENERATING = "Generating"
    CANCEL_IN_PROGRESS = "CancelInProgress"

