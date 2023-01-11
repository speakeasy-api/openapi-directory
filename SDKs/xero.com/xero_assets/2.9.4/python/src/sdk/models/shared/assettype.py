import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssetType:
    asset_type_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTypeName') }})
    book_depreciation_setting: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookDepreciationSetting') }})
    accumulated_depreciation_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accumulatedDepreciationAccountId') }})
    asset_type_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTypeId') }})
    depreciation_expense_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('depreciationExpenseAccountId') }})
    fixed_asset_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedAssetAccountId') }})
    locks: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locks') }})
    
