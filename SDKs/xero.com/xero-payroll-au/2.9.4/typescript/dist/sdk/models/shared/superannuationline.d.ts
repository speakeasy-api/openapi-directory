import { SpeakeasyBase } from "../../../internal/utils";
import { SuperannuationCalculationTypeEnum } from "./superannuationcalculationtypeenum";
import { SuperannuationContributionTypeEnum } from "./superannuationcontributiontypeenum";
export declare class SuperannuationLine extends SpeakeasyBase {
    /**
     * Superannuation amount
     */
    amount?: number;
    calculationType?: SuperannuationCalculationTypeEnum;
    contributionType?: SuperannuationContributionTypeEnum;
    /**
     * Superannuation expense account code.
     */
    expenseAccountCode?: string;
    /**
     * Superannuation liability account code
     */
    liabilityAccountCode?: string;
    /**
     * Superannuation minimum monthly earnings.
     */
    minimumMonthlyEarnings?: number;
    /**
     * Superannuation payment date for the current period (YYYY-MM-DD)
     */
    paymentDateForThisPeriod?: string;
    /**
     * Superannuation percentage
     */
    percentage?: number;
    /**
     * Xero identifier for payroll super fund membership ID.
     */
    superMembershipID?: string;
}
