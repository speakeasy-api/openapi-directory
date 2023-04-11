import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PostAdminSettingsRequestBodyUniformTypeEnum {
    Uniform = "uniform"
}
/**
 * Uniformly distributed random response delay.
 */
export declare class PostAdminSettingsRequestBodyUniform extends SpeakeasyBase {
    fixedDelay?: number;
    lower?: number;
    type?: PostAdminSettingsRequestBodyUniformTypeEnum;
    upper?: number;
}
export declare enum PostAdminSettingsRequestBodyLogNormalTypeEnum {
    Lognormal = "lognormal"
}
/**
 * Log normal randomly distributed response delay.
 */
export declare class PostAdminSettingsRequestBodyLogNormal extends SpeakeasyBase {
    fixedDelay?: number;
    median?: number;
    sigma?: number;
    type?: PostAdminSettingsRequestBodyLogNormalTypeEnum;
}
export declare class PostAdminSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
