import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetTaxationItemsOfDebitMemoItemPathParams:
    debit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'debitMemoId', 'style': 'simple', 'explode': False }})
    dmitemid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dmitemid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTaxationItemsOfDebitMemoItemQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTaxationItemsOfDebitMemoItemHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTaxationItemsOfDebitMemoItem200ApplicationJSON:
    data: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclasses.dataclass
class GetTaxationItemsOfDebitMemoItemRequest:
    headers: GetTaxationItemsOfDebitMemoItemHeaders = dataclasses.field()
    path_params: GetTaxationItemsOfDebitMemoItemPathParams = dataclasses.field()
    query_params: GetTaxationItemsOfDebitMemoItemQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTaxationItemsOfDebitMemoItemResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_taxation_items_of_debit_memo_item_200_application_json_object: Optional[GetTaxationItemsOfDebitMemoItem200ApplicationJSON] = dataclasses.field(default=None)
    
