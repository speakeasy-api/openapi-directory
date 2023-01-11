import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import getorderresponseforevergreen as shared_getorderresponseforevergreen


@dataclasses.dataclass
class GetOrderMetricsforEvergreenSubscriptionPathParams:
    order_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderNumber', 'style': 'simple', 'explode': False }})
    subscription_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriptionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderMetricsforEvergreenSubscriptionQueryParams:
    end_date: date = dataclasses.field(metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    start_date: date = dataclasses.field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrderMetricsforEvergreenSubscriptionHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderMetricsforEvergreenSubscriptionRequest:
    headers: GetOrderMetricsforEvergreenSubscriptionHeaders = dataclasses.field()
    path_params: GetOrderMetricsforEvergreenSubscriptionPathParams = dataclasses.field()
    query_params: GetOrderMetricsforEvergreenSubscriptionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrderMetricsforEvergreenSubscriptionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_order_response_for_evergreen: Optional[shared_getorderresponseforevergreen.GetOrderResponseForEvergreen] = dataclasses.field(default=None)
    
