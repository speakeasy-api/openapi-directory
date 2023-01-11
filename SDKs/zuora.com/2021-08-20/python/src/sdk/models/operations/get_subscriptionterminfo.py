import dataclasses
from typing import Optional
from ..shared import getsubscriptionterminforesponsetype as shared_getsubscriptionterminforesponsetype


@dataclasses.dataclass
class GetSubscriptionTermInfoPathParams:
    subscription_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriptionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubscriptionTermInfoQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSubscriptionTermInfoHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubscriptionTermInfoRequest:
    headers: GetSubscriptionTermInfoHeaders = dataclasses.field()
    path_params: GetSubscriptionTermInfoPathParams = dataclasses.field()
    query_params: GetSubscriptionTermInfoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubscriptionTermInfoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_subscription_term_info_response_type: Optional[shared_getsubscriptionterminforesponsetype.GetSubscriptionTermInfoResponseType] = dataclasses.field(default=None)
    
