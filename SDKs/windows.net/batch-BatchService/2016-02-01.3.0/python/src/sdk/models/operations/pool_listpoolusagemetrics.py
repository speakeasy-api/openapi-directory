import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class PoolListPoolUsageMetricsQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    endtime: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endtime', 'style': 'form', 'explode': True }})
    maxresults: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxresults', 'style': 'form', 'explode': True }})
    starttime: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starttime', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PoolListPoolUsageMetricsHeaders:
    client_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'client-request-id', 'style': 'simple', 'explode': False }})
    ocp_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'ocp-date', 'style': 'simple', 'explode': False }})
    return_client_request_id: Optional[bool] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'return-client-request-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PoolListPoolUsageMetricsRequest:
    headers: PoolListPoolUsageMetricsHeaders = dataclasses.field()
    query_params: PoolListPoolUsageMetricsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PoolListPoolUsageMetricsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_error: Optional[Any] = dataclasses.field(default=None)
    pool_list_pool_usage_metrics_result: Optional[Any] = dataclasses.field(default=None)
    
