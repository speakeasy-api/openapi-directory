import dataclasses
from typing import Any,Optional
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PutAccountingCodePathParams:
    ac_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ac-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutAccountingCodeHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutAccountingCodeRequest:
    headers: PutAccountingCodeHeaders = dataclasses.field()
    path_params: PutAccountingCodePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutAccountingCodeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
