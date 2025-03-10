/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PayItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeductionTypes")
    public DeductionType[] deductionTypes;

    public PayItem withDeductionTypes(DeductionType[] deductionTypes) {
        this.deductionTypes = deductionTypes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EarningsRates")
    public EarningsRate[] earningsRates;

    public PayItem withEarningsRates(EarningsRate[] earningsRates) {
        this.earningsRates = earningsRates;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveTypes")
    public LeaveType[] leaveTypes;

    public PayItem withLeaveTypes(LeaveType[] leaveTypes) {
        this.leaveTypes = leaveTypes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReimbursementTypes")
    public ReimbursementType[] reimbursementTypes;

    public PayItem withReimbursementTypes(ReimbursementType[] reimbursementTypes) {
        this.reimbursementTypes = reimbursementTypes;
        return this;
    }
    
    public PayItem(){}
}
