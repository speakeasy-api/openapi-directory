import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import customobjectbulkjobresponsecollection as shared_customobjectbulkjobresponsecollection


@dataclasses.dataclass
class GetAllCustomObjectBulkJobsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllCustomObjectBulkJobsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[date] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllCustomObjectBulkJobsRequest:
    headers: GetAllCustomObjectBulkJobsHeaders = dataclasses.field()
    query_params: GetAllCustomObjectBulkJobsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllCustomObjectBulkJobsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_object_bulk_job_response_collection: Optional[shared_customobjectbulkjobresponsecollection.CustomObjectBulkJobResponseCollection] = dataclasses.field(default=None)
    
