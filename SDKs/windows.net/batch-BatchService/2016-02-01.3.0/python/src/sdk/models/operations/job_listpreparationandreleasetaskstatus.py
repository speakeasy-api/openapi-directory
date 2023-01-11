import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class JobListPreparationAndReleaseTaskStatusPathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JobListPreparationAndReleaseTaskStatusQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    dollar_select: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$select', 'style': 'form', 'explode': True }})
    maxresults: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxresults', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class JobListPreparationAndReleaseTaskStatusHeaders:
    client_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'client-request-id', 'style': 'simple', 'explode': False }})
    ocp_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'ocp-date', 'style': 'simple', 'explode': False }})
    return_client_request_id: Optional[bool] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'return-client-request-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JobListPreparationAndReleaseTaskStatusRequest:
    headers: JobListPreparationAndReleaseTaskStatusHeaders = dataclasses.field()
    path_params: JobListPreparationAndReleaseTaskStatusPathParams = dataclasses.field()
    query_params: JobListPreparationAndReleaseTaskStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class JobListPreparationAndReleaseTaskStatusResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_error: Optional[Any] = dataclasses.field(default=None)
    cloud_job_list_preparation_and_release_task_status_result: Optional[Any] = dataclasses.field(default=None)
    
