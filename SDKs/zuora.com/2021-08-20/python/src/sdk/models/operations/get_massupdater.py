import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import getmassupdatetype as shared_getmassupdatetype


@dataclasses.dataclass
class GetMassUpdaterPathParams:
    bulk_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bulk-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMassUpdaterHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMassUpdaterRequest:
    headers: GetMassUpdaterHeaders = dataclasses.field()
    path_params: GetMassUpdaterPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMassUpdaterResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_mass_update_type: Optional[shared_getmassupdatetype.GetMassUpdateType] = dataclasses.field(default=None)
    
