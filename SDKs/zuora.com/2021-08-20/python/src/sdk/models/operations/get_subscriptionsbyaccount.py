import dataclasses
from typing import Optional
from ..shared import getsubscriptionwrapper as shared_getsubscriptionwrapper


@dataclasses.dataclass
class GetSubscriptionsByAccountPathParams:
    account_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubscriptionsByAccountQueryParams:
    charge_detail: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'charge-detail', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSubscriptionsByAccountHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubscriptionsByAccountRequest:
    headers: GetSubscriptionsByAccountHeaders = dataclasses.field()
    path_params: GetSubscriptionsByAccountPathParams = dataclasses.field()
    query_params: GetSubscriptionsByAccountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubscriptionsByAccountResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_subscription_wrapper: Optional[shared_getsubscriptionwrapper.GetSubscriptionWrapper] = dataclasses.field(default=None)
    
