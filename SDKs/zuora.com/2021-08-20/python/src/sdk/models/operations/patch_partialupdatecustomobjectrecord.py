import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import commonerrorresponse as shared_commonerrorresponse


@dataclasses.dataclass
class PatchPartialUpdateCustomObjectRecordPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchPartialUpdateCustomObjectRecordHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[date] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchPartialUpdateCustomObjectRecordRequest:
    headers: PatchPartialUpdateCustomObjectRecordHeaders = dataclasses.field()
    path_params: PatchPartialUpdateCustomObjectRecordPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/merge-patch+json' }})
    

@dataclasses.dataclass
class PatchPartialUpdateCustomObjectRecordResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_error_response: Optional[shared_commonerrorresponse.CommonErrorResponse] = dataclasses.field(default=None)
    custom_object_record_with_all_fields: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
