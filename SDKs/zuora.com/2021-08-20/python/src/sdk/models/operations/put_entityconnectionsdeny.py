import dataclasses
from typing import Optional
from ..shared import putentityconnectionsdenyresponsetype as shared_putentityconnectionsdenyresponsetype


@dataclasses.dataclass
class PutEntityConnectionsDenyPathParams:
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connection-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutEntityConnectionsDenyHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutEntityConnectionsDenyRequest:
    headers: PutEntityConnectionsDenyHeaders = dataclasses.field()
    path_params: PutEntityConnectionsDenyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutEntityConnectionsDenyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_entity_connections_deny_response_type: Optional[shared_putentityconnectionsdenyresponsetype.PutEntityConnectionsDenyResponseType] = dataclasses.field(default=None)
    
