import dataclasses
from typing import Optional
from ..shared import getaccountingcodestype as shared_getaccountingcodestype


@dataclasses.dataclass
class GetAllAccountingCodesQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllAccountingCodesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllAccountingCodesRequest:
    headers: GetAllAccountingCodesHeaders = dataclasses.field()
    query_params: GetAllAccountingCodesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllAccountingCodesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_accounting_codes_type: Optional[shared_getaccountingcodestype.GetAccountingCodesType] = dataclasses.field(default=None)
    
