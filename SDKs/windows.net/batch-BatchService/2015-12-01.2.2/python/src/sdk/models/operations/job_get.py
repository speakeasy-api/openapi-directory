import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class JobGetPathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JobGetQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_expand: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$expand', 'style': 'form', 'explode': True }})
    dollar_select: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$select', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class JobGetHeaders:
    client_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'client-request-id', 'style': 'simple', 'explode': False }})
    ocp_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'ocp-date', 'style': 'simple', 'explode': False }})
    return_client_request_id: Optional[bool] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'return-client-request-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JobGetRequest:
    headers: JobGetHeaders = dataclasses.field()
    path_params: JobGetPathParams = dataclasses.field()
    query_params: JobGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class JobGetResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_error: Optional[Any] = dataclasses.field(default=None)
    cloud_job: Optional[Any] = dataclasses.field(default=None)
    
