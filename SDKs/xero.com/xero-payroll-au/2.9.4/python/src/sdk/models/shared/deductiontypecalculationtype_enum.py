import dataclasses
from enum import Enum

class DeductionTypeCalculationTypeEnum(str, Enum):
    FIXEDAMOUNT = "FIXEDAMOUNT"
    PRETAX = "PRETAX"
    POSTTAX = "POSTTAX"

