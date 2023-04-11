import { SpeakeasyBase } from "../../../internal/utils";
export declare class SaveautoapproveforaccountsellerRequest extends SpeakeasyBase {
    /**
     * Insert `true` if you wish to activate the autoapprove rule for that specific seller account. Insert `false` if you wish to deactivate it. Be aware that once enabling the setting through this request, all SKUs received from this seller will be automatically approved on your store regardless of the Matcher Score.
     */
    enabled: boolean;
}
