import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import usagesresponse as shared_usagesresponse


@dataclasses.dataclass
class GetWorkflowsUsagesQueryParams:
    end_date: date = dataclasses.field(metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    metrics: str = dataclasses.field(metadata={'query_param': { 'field_name': 'metrics', 'style': 'form', 'explode': True }})
    start_date: date = dataclasses.field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWorkflowsUsagesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkflowsUsagesRequest:
    headers: GetWorkflowsUsagesHeaders = dataclasses.field()
    query_params: GetWorkflowsUsagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkflowsUsagesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    usages_response: Optional[shared_usagesresponse.UsagesResponse] = dataclasses.field(default=None)
    
