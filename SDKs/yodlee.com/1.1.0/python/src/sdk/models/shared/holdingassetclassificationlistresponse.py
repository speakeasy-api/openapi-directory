import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetclassificationlist as shared_assetclassificationlist


@dataclass_json
@dataclasses.dataclass
class HoldingAssetClassificationListResponse:
    asset_classification_list: Optional[list[shared_assetclassificationlist.AssetClassificationList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetClassificationList') }})
    
