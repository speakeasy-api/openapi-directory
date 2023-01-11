import dataclasses
from typing import Optional
from ..shared import getrampmetricsbyordernumberresponsetype as shared_getrampmetricsbyordernumberresponsetype


@dataclasses.dataclass
class GetRampMetricsByOrderNumberPathParams:
    order_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRampMetricsByOrderNumberHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRampMetricsByOrderNumberRequest:
    headers: GetRampMetricsByOrderNumberHeaders = dataclasses.field()
    path_params: GetRampMetricsByOrderNumberPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRampMetricsByOrderNumberResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_ramp_metrics_by_order_number_response_type: Optional[shared_getrampmetricsbyordernumberresponsetype.GetRampMetricsByOrderNumberResponseType] = dataclasses.field(default=None)
    
