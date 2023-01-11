import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next_cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextCursor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclasses.dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQty:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQtyUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclasses.dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQty:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQtyUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodes:
    avail_to_sell_qty: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availToSellQty') }})
    input_qty: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputQty') }})
    ship_node: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipNode') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventories:
    nodes: Optional[list[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElements:
    inventories: Optional[list[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventories]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventories') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONMeta:
    next_cursor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextCursor') }})
    total_count: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSON:
    elements: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElements] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    meta: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest:
    headers: GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders = dataclasses.field()
    query_params: GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_multi_node_inventory_for_all_sku_and_all_ship_nodes_200_application_json_object: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSON] = dataclasses.field(default=None)
    
