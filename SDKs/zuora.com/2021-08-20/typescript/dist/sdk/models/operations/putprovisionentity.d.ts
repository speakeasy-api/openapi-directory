import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutProvisionEntityPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutProvisionEntityHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutProvisionEntityRequest extends SpeakeasyBase {
    pathParams: PutProvisionEntityPathParams;
    headers: PutProvisionEntityHeaders;
}
export declare class PutProvisionEntityResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    provisionEntityResponseType?: shared.ProvisionEntityResponseType;
    statusCode: number;
}
