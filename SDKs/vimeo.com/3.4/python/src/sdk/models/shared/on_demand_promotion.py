import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OnDemandPromotionAccessTypeEnum(str, Enum):
    DEFAULT = "default"
    VIP = "vip"

class OnDemandPromotionDiscountTypeEnum(str, Enum):
    DOLLARS = "dollars"
    FREE = "free"
    PERCENT = "percent"


@dataclass_json
@dataclasses.dataclass
class OnDemandPromotionMetadataConnectionsCodes:
    r"""OnDemandPromotionMetadataConnectionsCodes
    Information about the codes associated with this promotion.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPromotionMetadataConnections:
    r"""OnDemandPromotionMetadataConnections
    A list of resource URIs related to the On Demand promotion.
    """
    
    codes: OnDemandPromotionMetadataConnectionsCodes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('codes') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPromotionMetadata:
    r"""OnDemandPromotionMetadata
    The video's metadata.
    """
    
    connections: OnDemandPromotionMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
class OnDemandPromotionProductTypeEnum(str, Enum):
    ANY = "any"
    BUY = "buy"
    BUY_EPISODE = "buy_episode"
    RENT = "rent"
    RENT_EPISODE = "rent_episode"
    SUBSCRIBE = "subscribe"

class OnDemandPromotionStreamPeriodEnum(str, Enum):
    ONE_WEEK = "1_week"
    ONE_YEAR = "1_year"
    TWENTY_FOUR_HOUR = "24_hour"
    THIRTY_DAYS = "30_days"
    THREE_MONTH = "3_month"
    FORTY_EIGHT_HOUR = "48_hour"
    SIX_MONTH = "6_month"
    SEVENTY_TWO_HOUR = "72_hour"

class OnDemandPromotionTypeEnum(str, Enum):
    BATCH = "batch"
    BATCH_PREFIX = "batch_prefix"
    SINGLE = "single"


@dataclass_json
@dataclasses.dataclass
class OnDemandPromotion:
    access_type: OnDemandPromotionAccessTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_type') }})
    discount_type: OnDemandPromotionDiscountTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount_type') }})
    download: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    metadata: OnDemandPromotionMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    percent_off: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent_off') }})
    product_type: OnDemandPromotionProductTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_type') }})
    stream_period: OnDemandPromotionStreamPeriodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream_period') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    type: OnDemandPromotionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
