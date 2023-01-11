import dataclasses
from typing import Optional
from ..shared import createreportmodel as shared_createreportmodel


@dataclasses.dataclass
class UserAPIPostReportPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserAPIPostReportRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    create_report_model: Optional[shared_createreportmodel.CreateReportModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_report_model1: Optional[shared_createreportmodel.CreateReportModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    create_report_model2: Optional[shared_createreportmodel.CreateReportModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class UserAPIPostReportRequest:
    path_params: UserAPIPostReportPathParams = dataclasses.field()
    request: UserAPIPostReportRequests = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIPostReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_api_post_report_200_application_json_boolean: Optional[bool] = dataclasses.field(default=None)
    user_api_post_report_200_application_jsonp_boolean: Optional[bool] = dataclasses.field(default=None)
    user_api_post_report_200_text_json_boolean: Optional[bool] = dataclasses.field(default=None)
    
