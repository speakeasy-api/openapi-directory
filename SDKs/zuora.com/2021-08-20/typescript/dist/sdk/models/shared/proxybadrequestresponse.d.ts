import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyBadRequestResponseErrors extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class ProxyBadRequestResponse extends SpeakeasyBase {
    errors?: ProxyBadRequestResponseErrors[];
    success?: boolean;
}
