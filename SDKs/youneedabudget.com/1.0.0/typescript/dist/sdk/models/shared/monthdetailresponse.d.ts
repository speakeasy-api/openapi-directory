import { SpeakeasyBase } from "../../../internal/utils";
import { MonthDetail } from "./monthdetail";
export declare class MonthDetailResponseData extends SpeakeasyBase {
    month: MonthDetail;
}
/**
 * The budget month detail
 */
export declare class MonthDetailResponse extends SpeakeasyBase {
    data: MonthDetailResponseData;
}
