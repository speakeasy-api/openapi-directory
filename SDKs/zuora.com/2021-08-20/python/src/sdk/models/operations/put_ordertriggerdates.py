import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import putorderactiontriggerdatesrequesttype as shared_putorderactiontriggerdatesrequesttype
from ..shared import putordertriggerdatesresponsetype as shared_putordertriggerdatesresponsetype


@dataclasses.dataclass
class PutOrderTriggerDatesPathParams:
    order_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutOrderTriggerDatesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutOrderTriggerDatesRequest:
    headers: PutOrderTriggerDatesHeaders = dataclasses.field()
    path_params: PutOrderTriggerDatesPathParams = dataclasses.field()
    request: shared_putorderactiontriggerdatesrequesttype.PutOrderActionTriggerDatesRequestType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutOrderTriggerDatesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_order_trigger_dates_response_type: Optional[shared_putordertriggerdatesresponsetype.PutOrderTriggerDatesResponseType] = dataclasses.field(default=None)
    
