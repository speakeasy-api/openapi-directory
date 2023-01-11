import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import putorderpatchrequesttype as shared_putorderpatchrequesttype
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PutUpdateOrderCustomFieldsPathParams:
    order_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUpdateOrderCustomFieldsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUpdateOrderCustomFieldsRequest:
    headers: PutUpdateOrderCustomFieldsHeaders = dataclasses.field()
    path_params: PutUpdateOrderCustomFieldsPathParams = dataclasses.field()
    request: shared_putorderpatchrequesttype.PutOrderPatchRequestType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutUpdateOrderCustomFieldsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
