import dataclasses
from typing import Optional
from ..shared import getrsdetailsbyproductchargetype as shared_getrsdetailsbyproductchargetype


@dataclasses.dataclass
class GetRSbyProductChargeAndBillingAccountPathParams:
    account_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account-key', 'style': 'simple', 'explode': False }})
    charge_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'charge-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRSbyProductChargeAndBillingAccountQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRSbyProductChargeAndBillingAccountHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRSbyProductChargeAndBillingAccountRequest:
    headers: GetRSbyProductChargeAndBillingAccountHeaders = dataclasses.field()
    path_params: GetRSbyProductChargeAndBillingAccountPathParams = dataclasses.field()
    query_params: GetRSbyProductChargeAndBillingAccountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRSbyProductChargeAndBillingAccountResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    getrs_details_by_product_charge_type: Optional[shared_getrsdetailsbyproductchargetype.GetrsDetailsByProductChargeType] = dataclasses.field(default=None)
    
