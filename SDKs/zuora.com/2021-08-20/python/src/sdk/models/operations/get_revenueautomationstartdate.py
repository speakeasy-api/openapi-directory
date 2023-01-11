import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import getrevenuestartdatesettingtype as shared_getrevenuestartdatesettingtype


@dataclasses.dataclass
class GetRevenueAutomationStartDateHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevenueAutomationStartDateRequest:
    headers: GetRevenueAutomationStartDateHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetRevenueAutomationStartDateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_revenue_start_date_setting_type: Optional[shared_getrevenuestartdatesettingtype.GetRevenueStartDateSettingType] = dataclasses.field(default=None)
    
