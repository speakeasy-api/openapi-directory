import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import project as shared_project

class GetProjectsAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetProjectsAlt1SortEnum(str, Enum):
    DATE = "date"
    DEFAULT = "default"
    MODIFIED_TIME = "modified_time"
    NAME = "name"


@dataclasses.dataclass
class GetProjectsAlt1QueryParams:
    direction: Optional[GetProjectsAlt1DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetProjectsAlt1SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProjectsAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetProjectsAlt1Request:
    query_params: GetProjectsAlt1QueryParams = dataclasses.field()
    security: GetProjectsAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectsAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    projects: Optional[list[shared_project.Project]] = dataclasses.field(default=None)
    
