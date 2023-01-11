import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PutMassUpdaterPathParams:
    bulk_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bulk-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutMassUpdaterHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutMassUpdaterRequest:
    headers: PutMassUpdaterHeaders = dataclasses.field()
    path_params: PutMassUpdaterPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutMassUpdaterResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
