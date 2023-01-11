import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import getordersresponse as shared_getordersresponse


@dataclasses.dataclass
class GetOrdersBySubscriptionNumberPathParams:
    subscription_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriptionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrdersBySubscriptionNumberQueryParams:
    date_filter_option: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dateFilterOption', 'style': 'form', 'explode': True }})
    end_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrdersBySubscriptionNumberHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrdersBySubscriptionNumberRequest:
    headers: GetOrdersBySubscriptionNumberHeaders = dataclasses.field()
    path_params: GetOrdersBySubscriptionNumberPathParams = dataclasses.field()
    query_params: GetOrdersBySubscriptionNumberQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrdersBySubscriptionNumberResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_orders_response: Optional[shared_getordersresponse.GetOrdersResponse] = dataclasses.field(default=None)
    
