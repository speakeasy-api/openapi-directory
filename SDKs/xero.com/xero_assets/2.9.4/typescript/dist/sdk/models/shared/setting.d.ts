import { SpeakeasyBase } from "../../../internal/utils";
/**
 * search results matching criteria
 */
export declare class Setting extends SpeakeasyBase {
    /**
     * The prefix used for fixed asset numbers (“FA-” by default)
     */
    assetNumberPrefix?: string;
    /**
     * The next available sequence number
     */
    assetNumberSequence?: string;
    /**
     * The date depreciation calculations started on registered fixed assets in Xero
     */
    assetStartDate?: Date;
    /**
     * Default account that capital gains are posted to
     */
    defaultCapitalGainOnDisposalAccountId?: string;
    /**
     * Default account that gains are posted to
     */
    defaultGainOnDisposalAccountId?: string;
    /**
     * Default account that losses are posted to
     */
    defaultLossOnDisposalAccountId?: string;
    /**
     * The last depreciation date
     */
    lastDepreciationDate?: Date;
    /**
     * opt in for tax calculation
     */
    optInForTax?: boolean;
}
