import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updateentitytype as shared_updateentitytype
from ..shared import updateentityresponsetype as shared_updateentityresponsetype


@dataclasses.dataclass
class PutEntitiesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutEntitiesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutEntitiesRequest:
    headers: PutEntitiesHeaders = dataclasses.field()
    path_params: PutEntitiesPathParams = dataclasses.field()
    request: shared_updateentitytype.UpdateEntityType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutEntitiesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    update_entity_response_type: Optional[shared_updateentityresponsetype.UpdateEntityResponseType] = dataclasses.field(default=None)
    
