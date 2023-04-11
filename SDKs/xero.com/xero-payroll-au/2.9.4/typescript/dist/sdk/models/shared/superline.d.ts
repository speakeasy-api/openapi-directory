import { SpeakeasyBase } from "../../../internal/utils";
import { SuperannuationCalculationTypeEnum } from "./superannuationcalculationtypeenum";
import { SuperannuationContributionTypeEnum } from "./superannuationcontributiontypeenum";
export declare class SuperLine extends SpeakeasyBase {
    /**
     * Super membership amount
     */
    amount?: number;
    calculationType?: SuperannuationCalculationTypeEnum;
    contributionType?: SuperannuationContributionTypeEnum;
    /**
     * expense account code
     */
    expenseAccountCode?: string;
    /**
     * liabilty account code
     */
    liabilityAccountCode?: string;
    /**
     * amount of minimum earnings
     */
    minimumMonthlyEarnings?: number;
    /**
     * percentage for super line
     */
    percentage?: number;
    /**
     * Xero super membership ID
     */
    superMembershipID?: string;
}
