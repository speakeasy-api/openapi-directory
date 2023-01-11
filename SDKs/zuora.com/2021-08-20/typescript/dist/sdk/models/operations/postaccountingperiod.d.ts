import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAccountingPeriodHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostAccountingPeriodRequest extends SpeakeasyBase {
    headers: PostAccountingPeriodHeaders;
    request: Record<string, any>;
}
export declare class PostAccountingPeriodResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postAccountingPeriodResponseType?: shared.PostAccountingPeriodResponseType;
    statusCode: number;
}
