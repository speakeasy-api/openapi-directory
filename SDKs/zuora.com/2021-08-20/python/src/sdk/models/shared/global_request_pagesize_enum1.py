import dataclasses
from enum import Enum

class GlobalRequestPageSizeEnum1(str, Enum):
    DRAFT = "Draft"
    POSTED = "Posted"
    CANCELED = "Canceled"
    ERROR = "Error"

