import dataclasses
from enum import Enum

class GlobalRequestPageSizeEnum4(str, Enum):
    PENDING = "Pending"
    PROCESSING = "Processing"
    COMPLETED = "Completed"
    ERROR = "Error"
    CANCELED = "Canceled"

