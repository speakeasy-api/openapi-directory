import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTaxationItemPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteTaxationItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteTaxationItemRequest extends SpeakeasyBase {
    pathParams: DeleteTaxationItemPathParams;
    headers: DeleteTaxationItemHeaders;
}
export declare class DeleteTaxationItemResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
