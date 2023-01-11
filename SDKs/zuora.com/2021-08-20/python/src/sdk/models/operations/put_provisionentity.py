import dataclasses
from typing import Optional
from ..shared import provisionentityresponsetype as shared_provisionentityresponsetype


@dataclasses.dataclass
class PutProvisionEntityPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutProvisionEntityHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutProvisionEntityRequest:
    headers: PutProvisionEntityHeaders = dataclasses.field()
    path_params: PutProvisionEntityPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutProvisionEntityResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    provision_entity_response_type: Optional[shared_provisionentityresponsetype.ProvisionEntityResponseType] = dataclasses.field(default=None)
    
