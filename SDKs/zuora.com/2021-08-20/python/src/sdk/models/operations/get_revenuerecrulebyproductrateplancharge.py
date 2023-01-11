import dataclasses
from typing import Optional
from ..shared import getrevenuerecognitionruleassociationtype as shared_getrevenuerecognitionruleassociationtype


@dataclasses.dataclass
class GetRevenueRecRulebyProductRatePlanChargePathParams:
    charge_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'charge-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevenueRecRulebyProductRatePlanChargeHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevenueRecRulebyProductRatePlanChargeRequest:
    headers: GetRevenueRecRulebyProductRatePlanChargeHeaders = dataclasses.field()
    path_params: GetRevenueRecRulebyProductRatePlanChargePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRevenueRecRulebyProductRatePlanChargeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_revenue_recognition_rule_association_type: Optional[shared_getrevenuerecognitionruleassociationtype.GetRevenueRecognitionRuleAssociationType] = dataclasses.field(default=None)
    
