import dataclasses
from typing import Optional
from ..shared import getaccountingperiodstype as shared_getaccountingperiodstype


@dataclasses.dataclass
class GetAllAccountingPeriodsQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllAccountingPeriodsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllAccountingPeriodsRequest:
    headers: GetAllAccountingPeriodsHeaders = dataclasses.field()
    query_params: GetAllAccountingPeriodsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllAccountingPeriodsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_accounting_periods_type: Optional[shared_getaccountingperiodstype.GetAccountingPeriodsType] = dataclasses.field(default=None)
    
