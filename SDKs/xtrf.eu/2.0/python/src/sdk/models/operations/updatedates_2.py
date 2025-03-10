"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import projectdatesdto as shared_projectdatesdto
from typing import Optional


@dataclasses.dataclass
class UpdateDates2Request:
    
    project_dates_dto: shared_projectdatesdto.ProjectDatesDTO = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    r"""Updated dates of a given task."""  
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    r"""task's internal identifier"""  
    

@dataclasses.dataclass
class UpdateDates2Response:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    project_dates_dto: Optional[shared_projectdatesdto.ProjectDatesDTO] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    