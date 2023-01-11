import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import postmassupdateresponsetype as shared_postmassupdateresponsetype


@dataclasses.dataclass
class PostMassUpdaterHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostMassUpdaterRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class PostMassUpdaterRequestBody:
    file: PostMassUpdaterRequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    params: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'params' }})
    

@dataclasses.dataclass
class PostMassUpdaterRequest:
    headers: PostMassUpdaterHeaders = dataclasses.field()
    request: PostMassUpdaterRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostMassUpdaterResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_mass_update_response_type: Optional[shared_postmassupdateresponsetype.PostMassUpdateResponseType] = dataclasses.field(default=None)
    
