import dataclasses
from typing import Any,Optional
from ..shared import postaccountingperiodresponsetype as shared_postaccountingperiodresponsetype


@dataclasses.dataclass
class PostAccountingPeriodHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAccountingPeriodRequest:
    headers: PostAccountingPeriodHeaders = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAccountingPeriodResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_accounting_period_response_type: Optional[shared_postaccountingperiodresponsetype.PostAccountingPeriodResponseType] = dataclasses.field(default=None)
    
