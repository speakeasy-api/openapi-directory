import dataclasses
from typing import Optional
from ..shared import getrampsbysubscriptionkeyresponsetype as shared_getrampsbysubscriptionkeyresponsetype


@dataclasses.dataclass
class GetRampsBySubscriptionKeyPathParams:
    subscription_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriptionKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRampsBySubscriptionKeyHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRampsBySubscriptionKeyRequest:
    headers: GetRampsBySubscriptionKeyHeaders = dataclasses.field()
    path_params: GetRampsBySubscriptionKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRampsBySubscriptionKeyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_ramps_by_subscription_key_response_type: Optional[shared_getrampsbysubscriptionkeyresponsetype.GetRampsBySubscriptionKeyResponseType] = dataclasses.field(default=None)
    
