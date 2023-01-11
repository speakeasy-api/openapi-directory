import dataclasses
from typing import Optional
from ..shared import getproductrateplansresponse as shared_getproductrateplansresponse


@dataclasses.dataclass
class GetProductRatePlansPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'product_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProductRatePlansQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProductRatePlansHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProductRatePlansRequest:
    headers: GetProductRatePlansHeaders = dataclasses.field()
    path_params: GetProductRatePlansPathParams = dataclasses.field()
    query_params: GetProductRatePlansQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProductRatePlansResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_product_rate_plans_response: Optional[shared_getproductrateplansresponse.GetProductRatePlansResponse] = dataclasses.field(default=None)
    
