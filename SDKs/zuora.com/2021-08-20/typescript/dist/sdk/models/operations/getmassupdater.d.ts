import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMassUpdaterPathParams extends SpeakeasyBase {
    bulkKey: string;
}
export declare class GetMassUpdaterHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetMassUpdaterRequest extends SpeakeasyBase {
    pathParams: GetMassUpdaterPathParams;
    headers: GetMassUpdaterHeaders;
}
export declare class GetMassUpdaterResponse extends SpeakeasyBase {
    contentType: string;
    getMassUpdateType?: shared.GetMassUpdateType;
    headers: Record<string, string[]>;
    statusCode: number;
}
