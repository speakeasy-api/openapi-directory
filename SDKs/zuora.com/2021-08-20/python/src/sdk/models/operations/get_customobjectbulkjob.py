import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import commonerrorresponse as shared_commonerrorresponse
from ..shared import customobjectbulkjobresponse as shared_customobjectbulkjobresponse


@dataclasses.dataclass
class GetCustomObjectBulkJobPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomObjectBulkJobHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[date] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomObjectBulkJobRequest:
    headers: GetCustomObjectBulkJobHeaders = dataclasses.field()
    path_params: GetCustomObjectBulkJobPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomObjectBulkJobResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_error_response: Optional[shared_commonerrorresponse.CommonErrorResponse] = dataclasses.field(default=None)
    custom_object_bulk_job_response: Optional[shared_customobjectbulkjobresponse.CustomObjectBulkJobResponse] = dataclasses.field(default=None)
    
