import dataclasses
from enum import Enum

class SuperannuationContributionTypeEnum(str, Enum):
    SGC = "SGC"
    SALARYSACRIFICE = "SALARYSACRIFICE"
    EMPLOYERADDITIONAL = "EMPLOYERADDITIONAL"
    EMPLOYEE = "EMPLOYEE"

