import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnDTO } from "./columndto";
import { OrderDTO } from "./orderdto";
import { PermissionsDTO } from "./permissionsdto";
import { SettingsDTO } from "./settingsdto";
/**
 * Success
 */
export declare class ViewWithIdDTO extends SpeakeasyBase {
    columns?: ColumnDTO[];
    order?: OrderDTO;
    permissions?: PermissionsDTO;
    settings?: SettingsDTO;
    viewId?: number;
}
