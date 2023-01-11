import dataclasses
from enum import Enum

class AssetStatusEnum(str, Enum):
    DRAFT = "Draft"
    REGISTERED = "Registered"
    DISPOSED = "Disposed"

