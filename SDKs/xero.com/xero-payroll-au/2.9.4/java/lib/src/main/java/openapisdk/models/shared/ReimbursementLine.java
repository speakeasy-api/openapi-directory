package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReimbursementLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Amount")
    public Double amount;
    public ReimbursementLine withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ReimbursementLine withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpenseAccount")
    public String expenseAccount;
    public ReimbursementLine withExpenseAccount(String expenseAccount) {
        this.expenseAccount = expenseAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReimbursementTypeID")
    public String reimbursementTypeID;
    public ReimbursementLine withReimbursementTypeId(String reimbursementTypeID) {
        this.reimbursementTypeID = reimbursementTypeID;
        return this;
    }
}