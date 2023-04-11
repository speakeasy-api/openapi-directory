import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordWithAllFields } from "./customobjectrecordwithallfields";
/**
 * See [Custom Objects API error code](https://knowledgecenter.zuora.com/Central_Platform/Custom_Objects/Z_Custom_Objects_API#Custom_Objects_API_error_code) for details.
 *
 * @remarks
 *
 */
export declare enum CustomObjectRecordsWithErrorCodeEnum {
    SeventyOneMillionTwelveThousandFiveHundredAndTwenty = "71012520",
    SeventyOneMillionTwelveThousandFiveHundredAndTwentyOne = "71012521",
    SeventyOneMillionTwelveThousandFiveHundredAndTwentyTwo = "71012522",
    SeventyOneMillionTwelveThousandFiveHundredAndTwentyThree = "71012523",
    SeventyOneMillionTwelveThousandFiveHundredAndTwentyFour = "71012524",
    SeventyOneMillionTwelveThousandFiveHundredAndTwentyFive = "71012525",
    SeventyOneMillionTwelveThousandFiveHundredAndTwentySix = "71012526",
    SeventyOneMillionTwelveThousandFiveHundredAndThirty = "71012530"
}
export declare class CustomObjectRecordsWithError extends SpeakeasyBase {
    /**
     * See [Custom Objects API error code](https://knowledgecenter.zuora.com/Central_Platform/Custom_Objects/Z_Custom_Objects_API#Custom_Objects_API_error_code) for details.
     *
     * @remarks
     *
     */
    code?: CustomObjectRecordsWithErrorCodeEnum;
    message?: string;
    /**
     * Record data from an object
     */
    record?: CustomObjectRecordWithAllFields;
}
