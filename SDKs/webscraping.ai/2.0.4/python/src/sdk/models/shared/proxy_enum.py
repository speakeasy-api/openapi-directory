import dataclasses
from enum import Enum

class ProxyEnum(str, Enum):
    DATACENTER = "datacenter"
    RESIDENTIAL = "residential"

