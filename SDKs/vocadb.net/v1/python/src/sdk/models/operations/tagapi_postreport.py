import dataclasses
from enum import Enum


@dataclasses.dataclass
class TagAPIPostReportPathParams:
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    
class TagAPIPostReportReportTypeEnum(str, Enum):
    INVALID_INFO = "InvalidInfo"
    DUPLICATE = "Duplicate"
    INAPPROPRIATE = "Inappropriate"
    OTHER = "Other"


@dataclasses.dataclass
class TagAPIPostReportQueryParams:
    notes: str = dataclasses.field(metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    report_type: TagAPIPostReportReportTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'reportType', 'style': 'form', 'explode': True }})
    version_number: int = dataclasses.field(metadata={'query_param': { 'field_name': 'versionNumber', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TagAPIPostReportRequest:
    path_params: TagAPIPostReportPathParams = dataclasses.field()
    query_params: TagAPIPostReportQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TagAPIPostReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
