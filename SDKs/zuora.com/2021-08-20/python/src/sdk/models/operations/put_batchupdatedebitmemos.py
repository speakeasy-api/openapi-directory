import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import putbatchdebitmemosrequest as shared_putbatchdebitmemosrequest
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PutBatchUpdateDebitMemosHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutBatchUpdateDebitMemosRequest:
    headers: PutBatchUpdateDebitMemosHeaders = dataclasses.field()
    request: shared_putbatchdebitmemosrequest.PutBatchDebitMemosRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutBatchUpdateDebitMemosResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
