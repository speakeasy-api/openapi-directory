import dataclasses
from typing import Optional
from ..shared import tagbasecontract as shared_tagbasecontract


@dataclasses.dataclass
class TagAPIPostNewTagQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TagAPIPostNewTagRequest:
    query_params: TagAPIPostNewTagQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TagAPIPostNewTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tag_base_contract: Optional[shared_tagbasecontract.TagBaseContract] = dataclasses.field(default=None)
    
