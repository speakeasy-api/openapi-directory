import dataclasses
from typing import Optional
from ..shared import getamendmenttype as shared_getamendmenttype


@dataclasses.dataclass
class GetAmendmentsByKeyPathParams:
    amendment_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'amendment-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAmendmentsByKeyHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAmendmentsByKeyRequest:
    headers: GetAmendmentsByKeyHeaders = dataclasses.field()
    path_params: GetAmendmentsByKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAmendmentsByKeyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_amendment_type: Optional[shared_getamendmenttype.GetAmendmentType] = dataclasses.field(default=None)
    
