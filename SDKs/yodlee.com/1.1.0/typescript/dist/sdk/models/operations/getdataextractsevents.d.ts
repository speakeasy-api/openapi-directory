import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDataExtractsEventsQueryParams extends SpeakeasyBase {
    eventName: string;
    fromDate: string;
    toDate: string;
}
export declare class GetDataExtractsEventsRequest extends SpeakeasyBase {
    queryParams: GetDataExtractsEventsQueryParams;
}
export declare class GetDataExtractsEventsResponse extends SpeakeasyBase {
    contentType: string;
    dataExtractsEventResponse?: shared.DataExtractsEventResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
