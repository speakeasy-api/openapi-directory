import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MoneyCurrencyEnum(str, Enum):
    AUD = "AUD"
    BRL = "BRL"
    CAD = "CAD"
    EUR = "EUR"
    GBP = "GBP"
    HKD = "HKD"
    IDR = "IDR"
    INR = "INR"
    JPY = "JPY"
    NZD = "NZD"
    SGD = "SGD"
    USD = "USD"
    ZAR = "ZAR"
    CNY = "CNY"
    VND = "VND"
    MYR = "MYR"
    CHF = "CHF"


@dataclass_json
@dataclasses.dataclass
class Money:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: MoneyCurrencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    
