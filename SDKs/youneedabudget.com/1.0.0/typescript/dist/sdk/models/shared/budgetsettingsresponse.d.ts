import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetSettings } from "./budgetsettings";
export declare class BudgetSettingsResponseData extends SpeakeasyBase {
    settings: BudgetSettings;
}
/**
 * The requested budget settings
 */
export declare class BudgetSettingsResponse extends SpeakeasyBase {
    data: BudgetSettingsResponseData;
}
