import dataclasses
from typing import Optional
from ..shared import getrampmetricsbysubscriptionkeyresponsetype as shared_getrampmetricsbysubscriptionkeyresponsetype


@dataclasses.dataclass
class GetRampMetricsBySubscriptionKeyPathParams:
    subscription_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriptionKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRampMetricsBySubscriptionKeyHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRampMetricsBySubscriptionKeyRequest:
    headers: GetRampMetricsBySubscriptionKeyHeaders = dataclasses.field()
    path_params: GetRampMetricsBySubscriptionKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRampMetricsBySubscriptionKeyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_ramp_metrics_by_subscription_key_response_type: Optional[shared_getrampmetricsbysubscriptionkeyresponsetype.GetRampMetricsBySubscriptionKeyResponseType] = dataclasses.field(default=None)
    
