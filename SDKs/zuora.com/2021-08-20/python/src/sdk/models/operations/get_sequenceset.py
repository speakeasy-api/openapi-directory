import dataclasses
from typing import Optional
from ..shared import getsequencesetresponse as shared_getsequencesetresponse


@dataclasses.dataclass
class GetSequenceSetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSequenceSetHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSequenceSetRequest:
    headers: GetSequenceSetHeaders = dataclasses.field()
    path_params: GetSequenceSetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSequenceSetResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_sequence_set_response: Optional[shared_getsequencesetresponse.GetSequenceSetResponse] = dataclasses.field(default=None)
    
