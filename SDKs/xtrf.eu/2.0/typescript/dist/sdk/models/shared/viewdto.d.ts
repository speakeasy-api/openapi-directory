import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnDTO } from "./columndto";
import { OrderDTO } from "./orderdto";
import { PermissionsDTO } from "./permissionsdto";
import { SettingsDTO } from "./settingsdto";
/**
 * Created view for given class.
 */
export declare class ViewDTO extends SpeakeasyBase {
    columns?: ColumnDTO[];
    order?: OrderDTO;
    permissions?: PermissionsDTO;
    settings?: SettingsDTO;
}
