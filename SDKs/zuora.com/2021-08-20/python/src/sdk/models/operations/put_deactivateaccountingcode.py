import dataclasses
from typing import Optional
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PutDeactivateAccountingCodePathParams:
    ac_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ac-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutDeactivateAccountingCodeHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutDeactivateAccountingCodeRequest:
    headers: PutDeactivateAccountingCodeHeaders = dataclasses.field()
    path_params: PutDeactivateAccountingCodePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutDeactivateAccountingCodeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
