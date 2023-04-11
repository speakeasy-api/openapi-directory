import { SpeakeasyBase } from "../../../internal/utils";
import { Self } from "./self";
export declare class Payment extends SpeakeasyBase {
    bin: string;
    id: number;
    isDefault: boolean;
    name: string;
    self: Self;
    value: number;
}
