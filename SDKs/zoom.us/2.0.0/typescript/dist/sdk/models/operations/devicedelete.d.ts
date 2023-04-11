import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeviceDeleteRequest extends SpeakeasyBase {
    /**
     * The device ID.
     */
    deviceId: string;
}
export declare class DeviceDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
