import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetById4Request extends SpeakeasyBase {
    /**
     * person's internal identifier
     */
    personId: number;
}
export declare class GetById4Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    providerPersonDTO?: shared.ProviderPersonDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
