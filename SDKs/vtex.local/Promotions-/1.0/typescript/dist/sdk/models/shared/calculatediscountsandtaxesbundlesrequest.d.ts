import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
import { Param } from "./param";
export declare class CalculatediscountsandtaxesBundlesRequest extends SpeakeasyBase {
    isShoppingCart: boolean;
    items: Item[];
    origin: string;
    params: Param[];
    profileId: string;
    salesChannel: string;
}
