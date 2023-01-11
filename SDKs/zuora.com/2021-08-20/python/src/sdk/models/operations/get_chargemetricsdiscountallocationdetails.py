import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import chargemetricsdiscountallocationdetailresponse as shared_chargemetricsdiscountallocationdetailresponse
from ..shared import commonreasonserrorresponse as shared_commonreasonserrorresponse


@dataclasses.dataclass
class GetChargeMetricsDiscountAllocationDetailsQueryParams:
    from_timestamp: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'fromTimestamp', 'style': 'form', 'explode': True }})
    to_timestamp: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'toTimestamp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChargeMetricsDiscountAllocationDetailsHeaders:
    accept: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChargeMetricsDiscountAllocationDetailsRequest:
    headers: GetChargeMetricsDiscountAllocationDetailsHeaders = dataclasses.field()
    query_params: GetChargeMetricsDiscountAllocationDetailsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChargeMetricsDiscountAllocationDetailsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    charge_metrics_discount_allocation_detail_response: Optional[shared_chargemetricsdiscountallocationdetailresponse.ChargeMetricsDiscountAllocationDetailResponse] = dataclasses.field(default=None)
    common_reasons_error_response: Optional[shared_commonreasonserrorresponse.CommonReasonsErrorResponse] = dataclasses.field(default=None)
    
