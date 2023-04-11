import { SpeakeasyBase } from "../../../internal/utils";
export declare class Total extends SpeakeasyBase {
    /**
     * Code that identifies if the information is about `Items`, `Discounts`, `Shipping`, `Tax` or `Change`.
     */
    id: string;
    /**
     * Name of `Items`, `Discounts`, `Shipping`, `Tax` or `Change`.
     */
    name: string;
    /**
     * Total amount of `Items`, `Discounts`, `Shipping`, `Tax` or `Change`.
     */
    value: number;
}
