import dataclasses
from typing import Optional
from ..shared import bulktransactions as shared_bulktransactions
from ..shared import bulkresponse as shared_bulkresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class BulkCreateTransactionsPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BulkCreateTransactionsRequest:
    path_params: BulkCreateTransactionsPathParams = dataclasses.field()
    request: shared_bulktransactions.BulkTransactions = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BulkCreateTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulk_response: Optional[shared_bulkresponse.BulkResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
