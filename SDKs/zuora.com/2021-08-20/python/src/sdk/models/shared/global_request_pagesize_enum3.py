import dataclasses
from enum import Enum

class GlobalRequestPageSizeEnum3(str, Enum):
    PROCESSING = "Processing"
    YES = "Yes"
    NO = "No"
    ERROR = "Error"
    IGNORE = "Ignore"

