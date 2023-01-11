import dataclasses
from enum import Enum

class GlobalRequestPageSizeEnum5(str, Enum):
    DRAFT = "Draft"
    PROCESSING = "Processing"
    PROCESSED = "Processed"
    ERROR = "Error"
    CANCELED = "Canceled"
    POSTED = "Posted"

