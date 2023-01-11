import dataclasses
from typing import Optional
from ..shared import putrenewsubscriptiontype as shared_putrenewsubscriptiontype
from ..shared import putrenewsubscriptionresponsetype as shared_putrenewsubscriptionresponsetype


@dataclasses.dataclass
class PutRenewSubscriptionPathParams:
    subscription_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRenewSubscriptionHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRenewSubscriptionRequest:
    headers: PutRenewSubscriptionHeaders = dataclasses.field()
    path_params: PutRenewSubscriptionPathParams = dataclasses.field()
    request: shared_putrenewsubscriptiontype.PutRenewSubscriptionType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutRenewSubscriptionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_renew_subscription_response_type: Optional[shared_putrenewsubscriptionresponsetype.PutRenewSubscriptionResponseType] = dataclasses.field(default=None)
    
