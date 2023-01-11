import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateBulkInventoryQueryParams:
    feed_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'feedType', 'style': 'form', 'explode': True }})
    ship_node: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'shipNode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateBulkInventoryHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateBulkInventoryRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class UpdateBulkInventoryRequestBody:
    file: Optional[UpdateBulkInventoryRequestBodyFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBulkInventory200ApplicationJSON:
    additional_attributes: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalAttributes') }})
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    feed_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedId') }})
    

@dataclasses.dataclass
class UpdateBulkInventoryRequest:
    headers: UpdateBulkInventoryHeaders = dataclasses.field()
    query_params: UpdateBulkInventoryQueryParams = dataclasses.field()
    request: UpdateBulkInventoryRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateBulkInventoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_bulk_inventory_200_application_json_object: Optional[UpdateBulkInventory200ApplicationJSON] = dataclasses.field(default=None)
    
