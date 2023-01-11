import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ReportDailyQueryParams:
    month: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'month', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReportDailySecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ReportDailyRequest:
    query_params: ReportDailyQueryParams = dataclasses.field()
    security: ReportDailySecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReportDailyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    report_daily_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
