import dataclasses
from typing import Optional
from ..shared import getusagewrapper as shared_getusagewrapper


@dataclasses.dataclass
class GetUsagePathParams:
    account_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsageQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsageHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsageRequest:
    headers: GetUsageHeaders = dataclasses.field()
    path_params: GetUsagePathParams = dataclasses.field()
    query_params: GetUsageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsageResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_usage_wrapper: Optional[shared_getusagewrapper.GetUsageWrapper] = dataclasses.field(default=None)
    
