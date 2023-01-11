import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class ComputeNodeDisableSchedulingPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    pool_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ComputeNodeDisableSchedulingQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ComputeNodeDisableSchedulingHeaders:
    client_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'client-request-id', 'style': 'simple', 'explode': False }})
    ocp_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'ocp-date', 'style': 'simple', 'explode': False }})
    return_client_request_id: Optional[bool] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'return-client-request-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ComputeNodeDisableSchedulingRequest:
    headers: ComputeNodeDisableSchedulingHeaders = dataclasses.field()
    path_params: ComputeNodeDisableSchedulingPathParams = dataclasses.field()
    query_params: ComputeNodeDisableSchedulingQueryParams = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ComputeNodeDisableSchedulingResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_error: Optional[Any] = dataclasses.field(default=None)
    
