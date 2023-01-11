import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import transactionsimportresponse as shared_transactionsimportresponse


@dataclasses.dataclass
class ImportTransactionsPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportTransactionsRequest:
    path_params: ImportTransactionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ImportTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    transactions_import_response: Optional[shared_transactionsimportresponse.TransactionsImportResponse] = dataclasses.field(default=None)
    
