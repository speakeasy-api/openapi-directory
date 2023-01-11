import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssetClassificationListResponse extends SpeakeasyBase {
    contentType: string;
    holdingAssetClassificationListResponse?: shared.HoldingAssetClassificationListResponse;
    statusCode: number;
}
