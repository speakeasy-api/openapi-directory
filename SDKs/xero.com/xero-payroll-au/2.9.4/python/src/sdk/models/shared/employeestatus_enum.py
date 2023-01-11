import dataclasses
from enum import Enum

class EmployeeStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    TERMINATED = "TERMINATED"

