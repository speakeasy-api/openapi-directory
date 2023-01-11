import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import getemailhistoryvostype as shared_getemailhistoryvostype


@dataclasses.dataclass
class GetEmailHistoryQueryParams:
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    event_category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'eventCategory', 'style': 'form', 'explode': True }})
    failed_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'failedOnly', 'style': 'form', 'explode': True }})
    object_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'objectId', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEmailHistoryHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmailHistoryRequest:
    headers: GetEmailHistoryHeaders = dataclasses.field()
    query_params: GetEmailHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmailHistoryResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_email_history_v_os_type: Optional[shared_getemailhistoryvostype.GetEmailHistoryVOsType] = dataclasses.field(default=None)
    
