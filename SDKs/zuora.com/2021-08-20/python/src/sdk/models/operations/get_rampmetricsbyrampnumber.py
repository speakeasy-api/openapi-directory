import dataclasses
from typing import Optional
from ..shared import getrampmetricsbyrampnumberresponsetype as shared_getrampmetricsbyrampnumberresponsetype


@dataclasses.dataclass
class GetRampMetricsByRampNumberPathParams:
    ramp_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rampNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRampMetricsByRampNumberHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRampMetricsByRampNumberRequest:
    headers: GetRampMetricsByRampNumberHeaders = dataclasses.field()
    path_params: GetRampMetricsByRampNumberPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRampMetricsByRampNumberResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_ramp_metrics_by_ramp_number_response_type: Optional[shared_getrampmetricsbyrampnumberresponsetype.GetRampMetricsByRampNumberResponseType] = dataclasses.field(default=None)
    
