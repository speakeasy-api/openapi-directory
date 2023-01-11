import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PutUpdateAccountingPeriodPathParams:
    ap_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ap-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUpdateAccountingPeriodHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUpdateAccountingPeriodRequest:
    headers: PutUpdateAccountingPeriodHeaders = dataclasses.field()
    path_params: PutUpdateAccountingPeriodPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutUpdateAccountingPeriodResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
