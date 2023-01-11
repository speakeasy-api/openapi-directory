import dataclasses
from typing import Any,Optional
from ..shared import postrevenueschedulebytransactionresponsetype as shared_postrevenueschedulebytransactionresponsetype


@dataclasses.dataclass
class PostRSforInvoiceItemDistributeByDateRangePathParams:
    invoice_item_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoice-item-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRSforInvoiceItemDistributeByDateRangeHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRSforInvoiceItemDistributeByDateRangeRequest:
    headers: PostRSforInvoiceItemDistributeByDateRangeHeaders = dataclasses.field()
    path_params: PostRSforInvoiceItemDistributeByDateRangePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRSforInvoiceItemDistributeByDateRangeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_revenue_schedule_by_transaction_response_type: Optional[shared_postrevenueschedulebytransactionresponsetype.PostRevenueScheduleByTransactionResponseType] = dataclasses.field(default=None)
    
