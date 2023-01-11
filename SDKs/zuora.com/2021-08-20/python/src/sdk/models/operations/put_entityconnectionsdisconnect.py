import dataclasses
from typing import Optional
from ..shared import putentityconnectionsdisconnectresponsetype as shared_putentityconnectionsdisconnectresponsetype


@dataclasses.dataclass
class PutEntityConnectionsDisconnectPathParams:
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connection-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutEntityConnectionsDisconnectHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutEntityConnectionsDisconnectRequest:
    headers: PutEntityConnectionsDisconnectHeaders = dataclasses.field()
    path_params: PutEntityConnectionsDisconnectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutEntityConnectionsDisconnectResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_entity_connections_disconnect_response_type: Optional[shared_putentityconnectionsdisconnectresponsetype.PutEntityConnectionsDisconnectResponseType] = dataclasses.field(default=None)
    
