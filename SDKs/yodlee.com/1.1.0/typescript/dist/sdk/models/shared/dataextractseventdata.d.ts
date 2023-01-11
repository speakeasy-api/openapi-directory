import { SpeakeasyBase } from "../../../internal/utils";
import { DataExtractsEventUserData } from "./dataextractseventuserdata";
export declare class DataExtractsEventData extends SpeakeasyBase {
    fromDate?: string;
    toDate?: string;
    userCount?: number;
    userData?: DataExtractsEventUserData[];
}
