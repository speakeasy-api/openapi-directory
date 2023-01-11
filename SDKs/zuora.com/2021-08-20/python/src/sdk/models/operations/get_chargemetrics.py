import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import chargemetricsresponse as shared_chargemetricsresponse
from ..shared import commonreasonserrorresponse as shared_commonreasonserrorresponse


@dataclasses.dataclass
class GetChargeMetricsQueryParams:
    from_timestamp: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'fromTimestamp', 'style': 'form', 'explode': True }})
    to_timestamp: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'toTimestamp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChargeMetricsHeaders:
    accept: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChargeMetricsRequest:
    headers: GetChargeMetricsHeaders = dataclasses.field()
    query_params: GetChargeMetricsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChargeMetricsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    charge_metrics_response: Optional[shared_chargemetricsresponse.ChargeMetricsResponse] = dataclasses.field(default=None)
    common_reasons_error_response: Optional[shared_commonreasonserrorresponse.CommonReasonsErrorResponse] = dataclasses.field(default=None)
    
