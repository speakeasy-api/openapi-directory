import dataclasses
from typing import Optional
from ..shared import holdingassetclassificationlistresponse as shared_holdingassetclassificationlistresponse


@dataclasses.dataclass
class GetAssetClassificationListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    holding_asset_classification_list_response: Optional[shared_holdingassetclassificationlistresponse.HoldingAssetClassificationListResponse] = dataclasses.field(default=None)
    
