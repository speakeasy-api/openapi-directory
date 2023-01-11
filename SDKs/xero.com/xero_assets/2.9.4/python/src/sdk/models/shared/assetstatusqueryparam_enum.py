import dataclasses
from enum import Enum

class AssetStatusQueryParamEnum(str, Enum):
    DRAFT = "DRAFT"
    REGISTERED = "REGISTERED"
    DISPOSED = "DISPOSED"

