import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class PutUpdateRefundPathParams:
    refund_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'refundId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUpdateRefundHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUpdateRefundRequest:
    headers: PutUpdateRefundHeaders = dataclasses.field()
    path_params: PutUpdateRefundPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutUpdateRefundResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_refund_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
