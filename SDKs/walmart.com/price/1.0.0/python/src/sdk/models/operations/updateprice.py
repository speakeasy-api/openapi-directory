import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdatePriceHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    
class UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum(str, Enum):
    USD = "USD"
    CAD = "CAD"


@dataclass_json
@dataclasses.dataclass
class UpdatePriceRequestBodyPricingComparisonPrice:
    r"""UpdatePriceRequestBodyPricingComparisonPrice
    This is applicable only for promotions
    """
    
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    
class UpdatePriceRequestBodyPricingComparisonPriceTypeEnum(str, Enum):
    BASE = "BASE"

class UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum(str, Enum):
    USD = "USD"
    CAD = "CAD"


@dataclass_json
@dataclasses.dataclass
class UpdatePriceRequestBodyPricingCurrentPrice:
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    
class UpdatePriceRequestBodyPricingCurrentPriceTypeEnum(str, Enum):
    BASE = "BASE"
    REDUCED = "REDUCED"
    CLEARANCE = "CLEARANCE"

class UpdatePriceRequestBodyPricingPriceDisplayCodesEnum(str, Enum):
    CART = "CART"
    CHECKOUT = "CHECKOUT"

class UpdatePriceRequestBodyPricingProcessModeEnum(str, Enum):
    UPSERT = "UPSERT"
    DELETE = "DELETE"


@dataclass_json
@dataclasses.dataclass
class UpdatePriceRequestBodyPricing:
    current_price: UpdatePriceRequestBodyPricingCurrentPrice = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPrice') }})
    current_price_type: UpdatePriceRequestBodyPricingCurrentPriceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPriceType') }})
    comparison_price: Optional[UpdatePriceRequestBodyPricingComparisonPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonPrice') }})
    comparison_price_type: Optional[UpdatePriceRequestBodyPricingComparisonPriceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonPriceType') }})
    effective_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expiration_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    price_display_codes: Optional[UpdatePriceRequestBodyPricingPriceDisplayCodesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDisplayCodes') }})
    process_mode: Optional[UpdatePriceRequestBodyPricingProcessModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processMode') }})
    promo_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promoId') }})
    
class UpdatePriceRequestBodyReplaceAllEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"


@dataclass_json
@dataclasses.dataclass
class UpdatePriceRequestBody:
    pricing: list[UpdatePriceRequestBodyPricing] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricing') }})
    sku: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    definitions: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitions') }})
    offer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    replace_all: Optional[UpdatePriceRequestBodyReplaceAllEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceAll') }})
    
class UpdatePrice200ApplicationJSONErrorsCategoryEnum(str, Enum):
    APPLICATION = "APPLICATION"
    SYSTEM = "SYSTEM"
    REQUEST = "REQUEST"
    DATA = "DATA"


@dataclass_json
@dataclasses.dataclass
class UpdatePrice200ApplicationJSONErrorsCauses:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnum(str, Enum):
    INTERNAL_DATA_ERROR = "INTERNAL_DATA_ERROR"
    EXTERNAL_DATA_ERROR = "EXTERNAL_DATA_ERROR"
    SYSTEM_ERROR = "SYSTEM_ERROR"

class UpdatePrice200ApplicationJSONErrorsSeverityEnum(str, Enum):
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"


@dataclass_json
@dataclasses.dataclass
class UpdatePrice200ApplicationJSONErrors:
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    category: Optional[UpdatePrice200ApplicationJSONErrorsCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    causes: Optional[list[UpdatePrice200ApplicationJSONErrorsCauses]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('causes') }})
    component: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('component') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_identifiers: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorIdentifiers') }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    gateway_error_category: Optional[UpdatePrice200ApplicationJSONErrorsGatewayErrorCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayErrorCategory') }})
    info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    severity: Optional[UpdatePrice200ApplicationJSONErrorsSeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePrice200ApplicationJSON:
    errors: Optional[list[UpdatePrice200ApplicationJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    mart: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mart') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    status_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    

@dataclasses.dataclass
class UpdatePriceRequest:
    headers: UpdatePriceHeaders = dataclasses.field()
    request: UpdatePriceRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePriceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_price_200_application_json_object: Optional[UpdatePrice200ApplicationJSON] = dataclasses.field(default=None)
    
