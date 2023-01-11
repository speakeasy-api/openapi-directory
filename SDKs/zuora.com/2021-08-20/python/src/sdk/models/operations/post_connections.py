import dataclasses
from typing import Optional
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PostConnectionsHeaders:
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    api_access_key_id: str = dataclasses.field(metadata={'header': { 'field_name': 'apiAccessKeyId', 'style': 'simple', 'explode': False }})
    api_secret_access_key: str = dataclasses.field(metadata={'header': { 'field_name': 'apiSecretAccessKey', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostConnectionsRequest:
    headers: PostConnectionsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class PostConnectionsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
