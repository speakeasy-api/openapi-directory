import dataclasses
from typing import Optional
from ..shared import putsubscriptionsuspendtype as shared_putsubscriptionsuspendtype
from ..shared import putsubscriptionsuspendresponsetype as shared_putsubscriptionsuspendresponsetype


@dataclasses.dataclass
class PutSuspendSubscriptionPathParams:
    subscription_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSuspendSubscriptionHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSuspendSubscriptionRequest:
    headers: PutSuspendSubscriptionHeaders = dataclasses.field()
    path_params: PutSuspendSubscriptionPathParams = dataclasses.field()
    request: shared_putsubscriptionsuspendtype.PutSubscriptionSuspendType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutSuspendSubscriptionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_subscription_suspend_response_type: Optional[shared_putsubscriptionsuspendresponsetype.PutSubscriptionSuspendResponseType] = dataclasses.field(default=None)
    
