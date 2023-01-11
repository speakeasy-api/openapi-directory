import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UserRequestPreferencesCurrencyEnum(str, Enum):
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

class UserRequestPreferencesLocaleEnum(str, Enum):
    EN_US = "en_US"
    EN_ES = "en_ES"
    FR_CA = "fr_CA"
    ZH_CN = "zh_CN"


@dataclass_json
@dataclasses.dataclass
class UserRequestPreferences:
    currency: Optional[UserRequestPreferencesCurrencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    date_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateFormat') }})
    locale: Optional[UserRequestPreferencesLocaleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
