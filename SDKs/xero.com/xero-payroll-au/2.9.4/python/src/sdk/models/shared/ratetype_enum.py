import dataclasses
from enum import Enum

class RateTypeEnum(str, Enum):
    FIXEDAMOUNT = "FIXEDAMOUNT"
    MULTIPLE = "MULTIPLE"
    RATEPERUNIT = "RATEPERUNIT"

