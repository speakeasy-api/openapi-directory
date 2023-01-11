import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetInventoryQueryParams:
    sku: str = dataclasses.field(metadata={'query_param': { 'field_name': 'sku', 'style': 'form', 'explode': True }})
    ship_node: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'shipNode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInventoryHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    
class GetInventory200ApplicationJSONQuantityUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclasses.dataclass
class GetInventory200ApplicationJSONQuantity:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: GetInventory200ApplicationJSONQuantityUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInventory200ApplicationJSON:
    quantity: GetInventory200ApplicationJSONQuantity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    sku: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclasses.dataclass
class GetInventoryRequest:
    headers: GetInventoryHeaders = dataclasses.field()
    query_params: GetInventoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInventoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_inventory_200_application_json_object: Optional[GetInventory200ApplicationJSON] = dataclasses.field(default=None)
    
