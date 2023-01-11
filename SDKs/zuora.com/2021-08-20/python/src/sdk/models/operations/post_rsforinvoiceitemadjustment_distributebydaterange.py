import dataclasses
from typing import Any,Optional
from ..shared import postrevenueschedulebytransactionresponsetype as shared_postrevenueschedulebytransactionresponsetype


@dataclasses.dataclass
class PostRSforInvoiceItemAdjustmentDistributeByDateRangePathParams:
    invoice_item_adj_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoice-item-adj-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRSforInvoiceItemAdjustmentDistributeByDateRangeHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRSforInvoiceItemAdjustmentDistributeByDateRangeRequest:
    headers: PostRSforInvoiceItemAdjustmentDistributeByDateRangeHeaders = dataclasses.field()
    path_params: PostRSforInvoiceItemAdjustmentDistributeByDateRangePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_revenue_schedule_by_transaction_response_type: Optional[shared_postrevenueschedulebytransactionresponsetype.PostRevenueScheduleByTransactionResponseType] = dataclasses.field(default=None)
    
