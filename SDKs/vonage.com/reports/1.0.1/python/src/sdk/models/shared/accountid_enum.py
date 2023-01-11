import dataclasses
from enum import Enum

class AccountIDEnum(str, Enum):
    INBOUND = "Inbound"
    OUTBOUND = "Outbound"

