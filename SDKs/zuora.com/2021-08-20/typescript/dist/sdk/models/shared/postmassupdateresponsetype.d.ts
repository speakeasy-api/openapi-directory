import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTMassUpdateResponseType extends SpeakeasyBase {
    /**
     * String of 32 characters that identifies the mass action. The bulkKey is generated before the mass action is processed. You can use the bulkKey to Get the Mass Action Result.
     *
     * @remarks
     *
     */
    bulkKey?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
