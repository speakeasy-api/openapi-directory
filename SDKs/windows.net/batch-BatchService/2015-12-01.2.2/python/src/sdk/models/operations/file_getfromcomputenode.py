import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class FileGetFromComputeNodePathParams:
    file_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fileName', 'style': 'simple', 'explode': False }})
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    pool_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FileGetFromComputeNodeQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FileGetFromComputeNodeHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_unmodified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Unmodified-Since', 'style': 'simple', 'explode': False }})
    client_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'client-request-id', 'style': 'simple', 'explode': False }})
    ocp_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'ocp-date', 'style': 'simple', 'explode': False }})
    ocp_range: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'ocp-range', 'style': 'simple', 'explode': False }})
    return_client_request_id: Optional[bool] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'return-client-request-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FileGetFromComputeNodeRequest:
    headers: FileGetFromComputeNodeHeaders = dataclasses.field()
    path_params: FileGetFromComputeNodePathParams = dataclasses.field()
    query_params: FileGetFromComputeNodeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class FileGetFromComputeNodeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_error: Optional[Any] = dataclasses.field(default=None)
    file_get_from_compute_node_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
