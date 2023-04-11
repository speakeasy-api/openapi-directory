import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssignSIPConfigSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * If the value of this option is set to `0`, the numbers provided by Zoom will be displayed in the account's list of available call-out and call-in numbers in the Zoom Web Portal and Zoom Client.
 *
 * @remarks
 *
 * If the value of this option is set to `1`, the Zoom provided numbers will be shown in the Zoom Web Portal but will not be used unless specified by the user.<br>
 *
 * If the value of this option is set to `2`, all Zoom provided numbers will be deleted and only internal numbers (provided by carrier partners) will be used.
 */
export declare enum AssignSIPConfigApplicationJSONShowZoomProvidedNumbersEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
export declare class AssignSIPConfigApplicationJSON extends SpeakeasyBase {
    /**
     * Enable or delete the configuration.<br> The values can be one of the following:<br> `true`: Enable configuration.<br> `false`: Delete configuration
     */
    enable?: boolean;
    /**
     * If the value of this option is set to `true`, the call-out numbers provided by the Zoom carrier partners will be displayed in the account's list of available call-out numbers in the Zoom Web Portal and Zoom Client.
     */
    showCalloutInternalNumber?: boolean;
    /**
     * If the value of this option is set to `0`, the call-out countries list provided by Zoom will be [displayed](https://support.zoom.us/hc/en-us/articles/200942859-Using-telephone-call-out) in the account's list of available call-out countries.
     *
     * @remarks
     *
     * If the value of this option is set to `1`, the Zoom provided call-out countries will be hidden from the user's account.<br>
     *
     * If the value of this option is set to `2`, all Zoom provided countries will be deleted and only internal countries (provided by carrier partners) will be used.
     */
    showZoomProvidedCalloutCountries?: number;
    /**
     * If the value of this option is set to `0`, the numbers provided by Zoom will be displayed in the account's list of available call-out and call-in numbers in the Zoom Web Portal and Zoom Client.
     *
     * @remarks
     *
     * If the value of this option is set to `1`, the Zoom provided numbers will be shown in the Zoom Web Portal but will not be used unless specified by the user.<br>
     *
     * If the value of this option is set to `2`, all Zoom provided numbers will be deleted and only internal numbers (provided by carrier partners) will be used.
     */
    showZoomProvidedNumbers?: AssignSIPConfigApplicationJSONShowZoomProvidedNumbersEnum;
}
export declare class AssignSIPConfigRequest extends SpeakeasyBase {
    requestBody?: AssignSIPConfigApplicationJSON;
    accountId: string;
}
export declare class AssignSIPConfigResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Configuration assigned successfully.
     *
     */
    assignSIPConfig204ApplicationJSONAny?: any;
}
