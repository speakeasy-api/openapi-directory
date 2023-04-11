import { SpeakeasyBase } from "../../../internal/utils";
export declare class AvailableSalesChannel extends SpeakeasyBase {
    /**
     * Sales Channel's ID.
     */
    id: number;
    /**
     * Flag defining if the sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) is selected or not.
     */
    isSelected: boolean;
    /**
     * Name of the Sales Channel.
     */
    name: string;
}
