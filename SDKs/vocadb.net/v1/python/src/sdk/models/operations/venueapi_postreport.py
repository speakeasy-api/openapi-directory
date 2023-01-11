import dataclasses
from enum import Enum


@dataclasses.dataclass
class VenueAPIPostReportPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class VenueAPIPostReportReportTypeEnum(str, Enum):
    INVALID_INFO = "InvalidInfo"
    DUPLICATE = "Duplicate"
    INAPPROPRIATE = "Inappropriate"
    OTHER = "Other"


@dataclasses.dataclass
class VenueAPIPostReportQueryParams:
    notes: str = dataclasses.field(metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    report_type: VenueAPIPostReportReportTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'reportType', 'style': 'form', 'explode': True }})
    version_number: int = dataclasses.field(metadata={'query_param': { 'field_name': 'versionNumber', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class VenueAPIPostReportRequest:
    path_params: VenueAPIPostReportPathParams = dataclasses.field()
    query_params: VenueAPIPostReportQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class VenueAPIPostReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
