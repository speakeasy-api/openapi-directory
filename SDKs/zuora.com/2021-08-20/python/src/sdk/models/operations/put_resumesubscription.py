import dataclasses
from typing import Optional
from ..shared import putsubscriptionresumetype as shared_putsubscriptionresumetype
from ..shared import putsubscriptionresumeresponsetype as shared_putsubscriptionresumeresponsetype


@dataclasses.dataclass
class PutResumeSubscriptionPathParams:
    subscription_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutResumeSubscriptionHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutResumeSubscriptionRequest:
    headers: PutResumeSubscriptionHeaders = dataclasses.field()
    path_params: PutResumeSubscriptionPathParams = dataclasses.field()
    request: shared_putsubscriptionresumetype.PutSubscriptionResumeType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutResumeSubscriptionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_subscription_resume_response_type: Optional[shared_putsubscriptionresumeresponsetype.PutSubscriptionResumeResponseType] = dataclasses.field(default=None)
    
