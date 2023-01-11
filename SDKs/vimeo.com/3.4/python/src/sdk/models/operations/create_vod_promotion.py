import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_promotion as shared_on_demand_promotion


@dataclasses.dataclass
class CreateVodPromotionPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    
class CreateVodPromotionRequestBodyAccessTypeEnum(str, Enum):
    DEFAULT = "default"
    VIP = "vip"

class CreateVodPromotionRequestBodyDiscountTypeEnum(str, Enum):
    FREE = "free"
    PERCENT = "percent"

class CreateVodPromotionRequestBodyProductTypeEnum(str, Enum):
    ANY = "any"
    BUY = "buy"
    BUY_EPISODE = "buy_episode"
    RENT = "rent"
    RENT_EPISODE = "rent_episode"
    SUBSCRIBE = "subscribe"

class CreateVodPromotionRequestBodyStreamPeriodEnum(str, Enum):
    ONE_WEEK = "1_week"
    ONE_YEAR = "1_year"
    TWENTY_FOUR_HOUR = "24_hour"
    THIRTY_DAY = "30_day"
    THREE_MONTH = "3_month"
    FORTY_EIGHT_HOUR = "48_hour"
    SIX_MONTH = "6_month"
    SEVENTY_TWO_HOUR = "72_hour"

class CreateVodPromotionRequestBodyTypeEnum(str, Enum):
    BATCH = "batch"
    SINGLE = "single"


@dataclass_json
@dataclasses.dataclass
class CreateVodPromotionRequestBody:
    download: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    stream_period: CreateVodPromotionRequestBodyStreamPeriodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream_period') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    type: CreateVodPromotionRequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    access_type: Optional[CreateVodPromotionRequestBodyAccessTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_type') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    discount_type: Optional[CreateVodPromotionRequestBodyDiscountTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount_type') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    percent_off: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent_off') }})
    product_type: Optional[CreateVodPromotionRequestBodyProductTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_type') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    

@dataclasses.dataclass
class CreateVodPromotionSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateVodPromotionRequest:
    path_params: CreateVodPromotionPathParams = dataclasses.field()
    request: CreateVodPromotionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.ondemand.promotion+json' }})
    security: CreateVodPromotionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateVodPromotionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_promotion: Optional[shared_on_demand_promotion.OnDemandPromotion] = dataclasses.field(default=None)
    
