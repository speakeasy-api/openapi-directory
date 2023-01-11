import dataclasses
from enum import Enum

class GlobalRequestPageSizeEnum(str, Enum):
    ACCOUNT = "account"
    INVOICE = "invoice"
    SUBSCRIPTION = "subscription"
    CREDITMEMO = "creditmemo"
    DEBITMEMO = "debitmemo"

