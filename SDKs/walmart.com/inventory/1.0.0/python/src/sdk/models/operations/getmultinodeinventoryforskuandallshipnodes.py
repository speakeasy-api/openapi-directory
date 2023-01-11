import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesPathParams:
    sku: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams:
    ship_node: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'shipNode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclasses.dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQty:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQtyUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum(str, Enum):
    APPLICATION = "APPLICATION"
    SYSTEM = "SYSTEM"
    REQUEST = "REQUEST"
    DATA = "DATA"


@dataclass_json
@dataclasses.dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCauses:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum(str, Enum):
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"


@dataclass_json
@dataclasses.dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors:
    r"""GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors
    Node Update Error description.
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    category: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    causes: Optional[list[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCauses]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('causes') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_identifiers: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorIdentifiers') }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    severity: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclasses.dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQty:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQtyUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodes:
    avail_to_sell_qty: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availToSellQty') }})
    errors: Optional[list[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    input_qty: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputQty') }})
    ship_node: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipNode') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSON:
    nodes: Optional[list[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclasses.dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesRequest:
    headers: GetMultiNodeInventoryForSkuAndAllShipnodesHeaders = dataclasses.field()
    path_params: GetMultiNodeInventoryForSkuAndAllShipnodesPathParams = dataclasses.field()
    query_params: GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_multi_node_inventory_for_sku_and_all_shipnodes_200_application_json_object: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSON] = dataclasses.field(default=None)
    
