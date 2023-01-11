import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSubscriptionsByKeyPathParams:
    subscription_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscription-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubscriptionsByKeyQueryParams:
    charge_detail: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'charge-detail', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSubscriptionsByKeyHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubscriptionsByKeyRequest:
    headers: GetSubscriptionsByKeyHeaders = dataclasses.field()
    path_params: GetSubscriptionsByKeyPathParams = dataclasses.field()
    query_params: GetSubscriptionsByKeyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubscriptionsByKeyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_subscription_type_with_success: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
