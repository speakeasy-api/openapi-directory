import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DashboardClientFeedbackQueryParams:
    from_: date = dataclasses.field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: date = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DashboardClientFeedbackSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardClientFeedback200ApplicationJSONClientFeedbacks:
    feedback_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback_id') }})
    feedback_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback_name') }})
    participants_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants_count') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardClientFeedback200ApplicationJSON:
    client_feedbacks: Optional[list[DashboardClientFeedback200ApplicationJSONClientFeedbacks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_feedbacks') }})
    from_: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    to: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class DashboardClientFeedbackRequest:
    query_params: DashboardClientFeedbackQueryParams = dataclasses.field()
    security: DashboardClientFeedbackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DashboardClientFeedbackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    dashboard_client_feedback_200_application_json_object: Optional[DashboardClientFeedback200ApplicationJSON] = dataclasses.field(default=None)
    
