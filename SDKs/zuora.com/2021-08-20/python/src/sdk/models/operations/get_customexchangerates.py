import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import getcustomexchangeratestype as shared_getcustomexchangeratestype


@dataclasses.dataclass
class GetCustomExchangeRatesPathParams:
    currency: str = dataclasses.field(metadata={'path_param': { 'field_name': 'currency', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomExchangeRatesQueryParams:
    end_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    start_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCustomExchangeRatesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomExchangeRatesRequest:
    headers: GetCustomExchangeRatesHeaders = dataclasses.field()
    path_params: GetCustomExchangeRatesPathParams = dataclasses.field()
    query_params: GetCustomExchangeRatesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomExchangeRatesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_custom_exchange_rates_type: Optional[shared_getcustomexchangeratestype.GetCustomExchangeRatesType] = dataclasses.field(default=None)
    
