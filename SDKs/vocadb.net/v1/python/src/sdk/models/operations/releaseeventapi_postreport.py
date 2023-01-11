import dataclasses
from enum import Enum


@dataclasses.dataclass
class ReleaseEventAPIPostReportPathParams:
    event_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    
class ReleaseEventAPIPostReportReportTypeEnum(str, Enum):
    INVALID_INFO = "InvalidInfo"
    DUPLICATE = "Duplicate"
    INAPPROPRIATE = "Inappropriate"
    OTHER = "Other"


@dataclasses.dataclass
class ReleaseEventAPIPostReportQueryParams:
    notes: str = dataclasses.field(metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    report_type: ReleaseEventAPIPostReportReportTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'reportType', 'style': 'form', 'explode': True }})
    version_number: int = dataclasses.field(metadata={'query_param': { 'field_name': 'versionNumber', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReleaseEventAPIPostReportRequest:
    path_params: ReleaseEventAPIPostReportPathParams = dataclasses.field()
    query_params: ReleaseEventAPIPostReportQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReleaseEventAPIPostReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
