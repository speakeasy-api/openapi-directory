import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetDescribePathParams:
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeRequest:
    headers: GetDescribeHeaders = dataclasses.field()
    path_params: GetDescribePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_describe_200_text_xml_string: Optional[str] = dataclasses.field(default=None)
    get_describe_404_text_xml_string: Optional[str] = dataclasses.field(default=None)
    
