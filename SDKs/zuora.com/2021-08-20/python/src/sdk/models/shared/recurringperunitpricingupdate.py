import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RecurringPerUnitPricingUpdatePriceChangeOptionEnum(str, Enum):
    NO_CHANGE = "NoChange"
    SPECIFIC_PERCENTAGE_VALUE = "SpecificPercentageValue"
    USE_LATEST_PRODUCT_CATALOG_PRICING = "UseLatestProductCatalogPricing"


@dataclass_json
@dataclasses.dataclass
class RecurringPerUnitPricingUpdate:
    list_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPrice') }})
    price_change_option: Optional[RecurringPerUnitPricingUpdatePriceChangeOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChangeOption') }})
    price_increase_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceIncreasePercentage') }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    
