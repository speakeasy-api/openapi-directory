import dataclasses
from enum import Enum

class GlobalRequestPageSizeEnum8(str, Enum):
    PROCESSED = "Processed"
    CANCELED = "Canceled"
    ERROR = "Error"
    PROCESSING = "Processing"

