import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPotTransactionsPathParams:
    pot_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pot_id', 'style': 'simple', 'explode': False }})
    
class GetPotTransactionsSortEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class GetPotTransactionsQueryParams:
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    page_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    sort: Optional[GetPotTransactionsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sub_transaction_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sub_transaction_type', 'style': 'form', 'explode': True }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPotTransactionsHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPotTransactionsSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetPotTransactionsRequest:
    headers: GetPotTransactionsHeaders = dataclasses.field()
    path_params: GetPotTransactionsPathParams = dataclasses.field()
    query_params: GetPotTransactionsQueryParams = dataclasses.field()
    security: GetPotTransactionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPotTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_pot_transactions_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_transactions_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_transactions_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_transactions_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_transactions_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pot_transactions_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
