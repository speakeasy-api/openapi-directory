import dataclasses
from enum import Enum

class EmploymentBasisEnum(str, Enum):
    FULLTIME = "FULLTIME"
    PARTTIME = "PARTTIME"
    CASUAL = "CASUAL"
    LABOURHIRE = "LABOURHIRE"
    SUPERINCOMESTREAM = "SUPERINCOMESTREAM"

