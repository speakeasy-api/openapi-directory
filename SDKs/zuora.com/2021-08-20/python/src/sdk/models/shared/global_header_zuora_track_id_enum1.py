import dataclasses
from enum import Enum

class GlobalHeaderZuoraTrackIDEnum1(str, Enum):
    INVOICE = "Invoice"
    CREDIT_MEMO = "CreditMemo"
    DEBIT_MEMO = "DebitMemo"

