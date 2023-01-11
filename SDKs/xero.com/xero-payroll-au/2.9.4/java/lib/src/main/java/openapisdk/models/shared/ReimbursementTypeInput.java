package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReimbursementTypeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountCode")
    public String accountCode;
    public ReimbursementTypeInput withAccountCode(String accountCode) {
        this.accountCode = accountCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentRecord")
    public Boolean currentRecord;
    public ReimbursementTypeInput withCurrentRecord(Boolean currentRecord) {
        this.currentRecord = currentRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ReimbursementTypeInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReimbursementTypeID")
    public String reimbursementTypeID;
    public ReimbursementTypeInput withReimbursementTypeId(String reimbursementTypeID) {
        this.reimbursementTypeID = reimbursementTypeID;
        return this;
    }
}