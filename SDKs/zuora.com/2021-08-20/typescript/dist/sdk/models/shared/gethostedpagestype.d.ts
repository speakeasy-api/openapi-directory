import { SpeakeasyBase } from "../../../internal/utils";
import { GetHostedPageType } from "./gethostedpagetype";
export declare class GetHostedPagesType extends SpeakeasyBase {
    /**
     * Container for the hosted page information.
     *
     * @remarks
     *
     */
    hostedpages?: GetHostedPageType[];
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
