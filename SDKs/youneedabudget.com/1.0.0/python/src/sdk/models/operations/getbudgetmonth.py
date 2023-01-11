import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import monthdetailresponse as shared_monthdetailresponse


@dataclasses.dataclass
class GetBudgetMonthPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    month: date = dataclasses.field(metadata={'path_param': { 'field_name': 'month', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBudgetMonthRequest:
    path_params: GetBudgetMonthPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBudgetMonthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    month_detail_response: Optional[shared_monthdetailresponse.MonthDetailResponse] = dataclasses.field(default=None)
    
