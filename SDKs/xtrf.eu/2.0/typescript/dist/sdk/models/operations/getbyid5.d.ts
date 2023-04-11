import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetById5Request extends SpeakeasyBase {
    /**
     * list of adittional fields which should be embedded in the response (ie. persons)
     */
    embed?: string;
    /**
     * provider's internal identifier
     */
    providerId: number;
}
export declare class GetById5Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    providerDTO?: shared.ProviderDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
