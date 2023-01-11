import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PriceBulkUploadsFeedTypeEnum(str, Enum):
    PRICE = "price"
    CPT_SELLER_ELIGIBILITY = "CPT_SELLER_ELIGIBILITY"


@dataclasses.dataclass
class PriceBulkUploadsQueryParams:
    feed_type: PriceBulkUploadsFeedTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'feedType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PriceBulkUploadsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PriceBulkUploadsRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class PriceBulkUploadsRequestBody:
    file: Optional[PriceBulkUploadsRequestBodyFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass_json
@dataclasses.dataclass
class PriceBulkUploads200ApplicationJSON:
    additional_attributes: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalAttributes') }})
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    feed_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedId') }})
    

@dataclasses.dataclass
class PriceBulkUploadsRequest:
    headers: PriceBulkUploadsHeaders = dataclasses.field()
    query_params: PriceBulkUploadsQueryParams = dataclasses.field()
    request: PriceBulkUploadsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PriceBulkUploadsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    price_bulk_uploads_200_application_json_object: Optional[PriceBulkUploads200ApplicationJSON] = dataclasses.field(default=None)
    
