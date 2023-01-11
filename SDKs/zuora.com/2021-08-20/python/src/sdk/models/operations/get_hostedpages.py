import dataclasses
from typing import Optional
from ..shared import gethostedpagestype as shared_gethostedpagestype


@dataclasses.dataclass
class GetHostedPagesQueryParams:
    version_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'versionNumber', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetHostedPagesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetHostedPagesRequest:
    headers: GetHostedPagesHeaders = dataclasses.field()
    query_params: GetHostedPagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHostedPagesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_hosted_pages_type: Optional[shared_gethostedpagestype.GetHostedPagesType] = dataclasses.field(default=None)
    
