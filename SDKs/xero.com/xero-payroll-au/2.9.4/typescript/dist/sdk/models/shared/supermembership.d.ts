import { SpeakeasyBase } from "../../../internal/utils";
export declare class SuperMembership extends SpeakeasyBase {
    /**
     * The membership number assigned to the employee by the super fund.
     */
    employeeNumber: string;
    /**
     * Xero identifier for super fund
     */
    superFundID: string;
    /**
     * Xero unique identifier for Super membership
     */
    superMembershipID?: string;
}
