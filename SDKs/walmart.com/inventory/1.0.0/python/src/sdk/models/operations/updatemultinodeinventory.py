import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateMultiNodeInventoryPathParams:
    sku: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateMultiNodeInventoryHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    
class UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclasses.dataclass
class UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMultiNodeInventoryRequestBodyInventoriesNodes:
    input_qty: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputQty') }})
    ship_node: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipNode') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMultiNodeInventoryRequestBodyInventories:
    nodes: list[UpdateMultiNodeInventoryRequestBodyInventoriesNodes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMultiNodeInventoryRequestBody:
    inventories: UpdateMultiNodeInventoryRequestBodyInventories = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventories') }})
    
class UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum(str, Enum):
    APPLICATION = "APPLICATION"
    SYSTEM = "SYSTEM"
    REQUEST = "REQUEST"
    DATA = "DATA"


@dataclass_json
@dataclasses.dataclass
class UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCauses:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnum(str, Enum):
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"


@dataclass_json
@dataclasses.dataclass
class UpdateMultiNodeInventory200ApplicationJSONNodesErrors:
    r"""UpdateMultiNodeInventory200ApplicationJSONNodesErrors
    Node Update Error description.
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    category: Optional[UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    causes: Optional[list[UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCauses]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('causes') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_identifiers: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorIdentifiers') }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    severity: Optional[UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMultiNodeInventory200ApplicationJSONNodes:
    errors: Optional[list[UpdateMultiNodeInventory200ApplicationJSONNodesErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    ship_node: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipNode') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMultiNodeInventory200ApplicationJSON:
    nodes: Optional[list[UpdateMultiNodeInventory200ApplicationJSONNodes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclasses.dataclass
class UpdateMultiNodeInventoryRequest:
    headers: UpdateMultiNodeInventoryHeaders = dataclasses.field()
    path_params: UpdateMultiNodeInventoryPathParams = dataclasses.field()
    request: UpdateMultiNodeInventoryRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateMultiNodeInventoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_multi_node_inventory_200_application_json_object: Optional[UpdateMultiNodeInventory200ApplicationJSON] = dataclasses.field(default=None)
    
