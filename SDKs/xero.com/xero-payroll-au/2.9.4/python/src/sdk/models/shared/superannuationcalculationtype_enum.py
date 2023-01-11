import dataclasses
from enum import Enum

class SuperannuationCalculationTypeEnum(str, Enum):
    FIXEDAMOUNT = "FIXEDAMOUNT"
    PERCENTAGEOFEARNINGS = "PERCENTAGEOFEARNINGS"
    STATUTORY = "STATUTORY"

