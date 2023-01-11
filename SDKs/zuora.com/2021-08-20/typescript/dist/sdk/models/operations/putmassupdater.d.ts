import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutMassUpdaterPathParams extends SpeakeasyBase {
    bulkKey: string;
}
export declare class PutMassUpdaterHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutMassUpdaterRequest extends SpeakeasyBase {
    pathParams: PutMassUpdaterPathParams;
    headers: PutMassUpdaterHeaders;
}
export declare class PutMassUpdaterResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
