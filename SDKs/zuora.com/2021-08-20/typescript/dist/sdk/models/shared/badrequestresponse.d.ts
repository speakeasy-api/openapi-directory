import { SpeakeasyBase } from "../../../internal/utils";
export declare class BadRequestResponseErrors extends SpeakeasyBase {
    code?: string;
    status?: string;
    title?: string;
}
export declare class BadRequestResponse extends SpeakeasyBase {
    errors?: BadRequestResponseErrors[];
}
