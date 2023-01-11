import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HoldingTypeListResponseHoldingTypeEnum(str, Enum):
    STOCK = "stock"
    MUTUAL_FUND = "mutualFund"
    BOND = "bond"
    CD = "CD"
    OPTION = "option"
    MONEY_MARKET_FUND = "moneyMarketFund"
    OTHER = "other"
    REMIC = "remic"
    FUTURE = "future"
    COMMODITY = "commodity"
    CURRENCY = "currency"
    UNIT_INVESTMENT_TRUST = "unitInvestmentTrust"
    EMPLOYEE_STOCK_OPTION = "employeeStockOption"
    INSURANCE_ANNUITY = "insuranceAnnuity"
    UNKNOWN = "unknown"
    PREFERRED_STOCK = "preferredStock"
    ETF = "ETF"
    WARRANTS = "warrants"
    ETN = "ETN"


@dataclass_json
@dataclasses.dataclass
class HoldingTypeListResponse:
    holding_type: Optional[list[HoldingTypeListResponseHoldingTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdingType') }})
    
