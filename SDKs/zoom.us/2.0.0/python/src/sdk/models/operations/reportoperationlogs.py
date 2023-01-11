import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class ReportOperationLogsCategoryTypeEnum(str, Enum):
    ALL = "all"
    USER = "user"
    USER_SETTINGS = "user_settings"
    ACCOUNT = "account"
    BILLING = "billing"
    IM = "im"
    RECORDING = "recording"
    PHONE_CONTACTS = "phone_contacts"
    WEBINAR = "webinar"
    SUB_ACCOUNT = "sub_account"
    ROLE = "role"
    ZOOM_ROOMS = "zoom_rooms"


@dataclasses.dataclass
class ReportOperationLogsQueryParams:
    from_: date = dataclasses.field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: date = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    category_type: Optional[ReportOperationLogsCategoryTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category_type', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReportOperationLogsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ReportOperationLogs200ApplicationJSONOperationLogs:
    action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    category_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_type') }})
    operation_detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation_detail') }})
    operator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class ReportOperationLogs200ApplicationJSON:
    r"""ReportOperationLogs200ApplicationJSON
    Pagination object.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    operation_logs: Optional[list[ReportOperationLogs200ApplicationJSONOperationLogs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation_logs') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    

@dataclasses.dataclass
class ReportOperationLogsRequest:
    query_params: ReportOperationLogsQueryParams = dataclasses.field()
    security: ReportOperationLogsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReportOperationLogsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    report_operation_logs_200_application_json_object: Optional[ReportOperationLogs200ApplicationJSON] = dataclasses.field(default=None)
    
