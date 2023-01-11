import dataclasses
from typing import Optional
from ..shared import postsubscriptioncancellationtype as shared_postsubscriptioncancellationtype
from ..shared import postsubscriptioncancellationresponsetype as shared_postsubscriptioncancellationresponsetype


@dataclasses.dataclass
class PutCancelSubscriptionPathParams:
    subscription_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCancelSubscriptionHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCancelSubscriptionRequest:
    headers: PutCancelSubscriptionHeaders = dataclasses.field()
    path_params: PutCancelSubscriptionPathParams = dataclasses.field()
    request: shared_postsubscriptioncancellationtype.PostSubscriptionCancellationType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCancelSubscriptionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_subscription_cancellation_response_type: Optional[shared_postsubscriptioncancellationresponsetype.PostSubscriptionCancellationResponseType] = dataclasses.field(default=None)
    
