package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReimbursementType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountCode")
    public String accountCode;
    public ReimbursementType withAccountCode(String accountCode) {
        this.accountCode = accountCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentRecord")
    public Boolean currentRecord;
    public ReimbursementType withCurrentRecord(Boolean currentRecord) {
        this.currentRecord = currentRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ReimbursementType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReimbursementTypeID")
    public String reimbursementTypeID;
    public ReimbursementType withReimbursementTypeId(String reimbursementTypeID) {
        this.reimbursementTypeID = reimbursementTypeID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedDateUTC")
    public String updatedDateUTC;
    public ReimbursementType withUpdatedDateUtc(String updatedDateUTC) {
        this.updatedDateUTC = updatedDateUTC;
        return this;
    }
}