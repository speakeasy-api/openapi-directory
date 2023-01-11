import dataclasses
from enum import Enum

class ProtocolEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"
    OTHER = "OTHER"

