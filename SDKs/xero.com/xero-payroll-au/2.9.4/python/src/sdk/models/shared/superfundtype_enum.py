import dataclasses
from enum import Enum

class SuperFundTypeEnum(str, Enum):
    REGULATED = "REGULATED"
    SMSF = "SMSF"

