import dataclasses
from enum import Enum

class GlobalHeaderZuoraEntityIdsSingleEnum(str, Enum):
    ACCOUNT = "Account"
    INVOICE = "Invoice"
    SUBSCRIPTION = "Subscription"
    CREDIT_MEMO = "CreditMemo"
    DEBIT_MEMO = "DebitMemo"

