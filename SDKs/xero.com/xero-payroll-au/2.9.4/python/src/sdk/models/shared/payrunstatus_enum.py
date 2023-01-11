import dataclasses
from enum import Enum

class PayRunStatusEnum(str, Enum):
    DRAFT = "DRAFT"
    POSTED = "POSTED"

