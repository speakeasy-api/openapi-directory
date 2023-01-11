import dataclasses
from typing import Any,Optional
from ..shared import putsubscriptionresponsetype as shared_putsubscriptionresponsetype


@dataclasses.dataclass
class PutSubscriptionPathParams:
    subscription_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSubscriptionHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSubscriptionRequest:
    headers: PutSubscriptionHeaders = dataclasses.field()
    path_params: PutSubscriptionPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutSubscriptionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_subscription_response_type: Optional[shared_putsubscriptionresponsetype.PutSubscriptionResponseType] = dataclasses.field(default=None)
    
