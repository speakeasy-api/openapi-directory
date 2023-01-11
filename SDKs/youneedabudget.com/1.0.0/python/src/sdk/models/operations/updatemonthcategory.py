import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import savemonthcategorywrapper as shared_savemonthcategorywrapper
from ..shared import errorresponse as shared_errorresponse
from ..shared import savecategoryresponse as shared_savecategoryresponse


@dataclasses.dataclass
class UpdateMonthCategoryPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    category_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    month: date = dataclasses.field(metadata={'path_param': { 'field_name': 'month', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateMonthCategoryRequest:
    path_params: UpdateMonthCategoryPathParams = dataclasses.field()
    request: shared_savemonthcategorywrapper.SaveMonthCategoryWrapper = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateMonthCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    save_category_response: Optional[shared_savecategoryresponse.SaveCategoryResponse] = dataclasses.field(default=None)
    
