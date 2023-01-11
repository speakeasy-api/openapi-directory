import dataclasses
from typing import Optional
from enum import Enum
from ..shared import global_request_pagesize_entityconnection_enum as shared_global_request_pagesize_entityconnection_enum
from ..shared import getentityconnectionsresponsetype as shared_getentityconnectionsresponsetype


@dataclasses.dataclass
class GetEntityConnectionsQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    type: Optional[shared_global_request_pagesize_entityconnection_enum.GlobalRequestPageSizeEntityConnectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEntityConnectionsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEntityConnectionsRequest:
    headers: GetEntityConnectionsHeaders = dataclasses.field()
    query_params: GetEntityConnectionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEntityConnectionsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_entity_connections_response_type: Optional[shared_getentityconnectionsresponsetype.GetEntityConnectionsResponseType] = dataclasses.field(default=None)
    
