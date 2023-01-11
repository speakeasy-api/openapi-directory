import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateInventoryForAnItemQueryParams:
    sku: str = dataclasses.field(metadata={'query_param': { 'field_name': 'sku', 'style': 'form', 'explode': True }})
    ship_node: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'shipNode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateInventoryForAnItemHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    
class UpdateInventoryForAnItemApplicationJSONQuantityUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclasses.dataclass
class UpdateInventoryForAnItemApplicationJSONQuantity:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: UpdateInventoryForAnItemApplicationJSONQuantityUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateInventoryForAnItemApplicationJSON:
    quantity: UpdateInventoryForAnItemApplicationJSONQuantity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    sku: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclasses.dataclass
class UpdateInventoryForAnItemRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    object: Optional[UpdateInventoryForAnItemApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateInventoryForAnItem200ApplicationJSONQuantityUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclasses.dataclass
class UpdateInventoryForAnItem200ApplicationJSONQuantity:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: UpdateInventoryForAnItem200ApplicationJSONQuantityUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateInventoryForAnItem200ApplicationJSON:
    quantity: UpdateInventoryForAnItem200ApplicationJSONQuantity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    sku: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclasses.dataclass
class UpdateInventoryForAnItemRequest:
    headers: UpdateInventoryForAnItemHeaders = dataclasses.field()
    query_params: UpdateInventoryForAnItemQueryParams = dataclasses.field()
    request: UpdateInventoryForAnItemRequests = dataclasses.field()
    

@dataclasses.dataclass
class UpdateInventoryForAnItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_inventory_for_an_item_200_application_json_object: Optional[UpdateInventoryForAnItem200ApplicationJSON] = dataclasses.field(default=None)
    
