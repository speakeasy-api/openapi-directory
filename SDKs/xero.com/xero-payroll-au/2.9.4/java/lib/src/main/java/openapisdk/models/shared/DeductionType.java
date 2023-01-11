package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeductionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountCode")
    public String accountCode;
    public DeductionType withAccountCode(String accountCode) {
        this.accountCode = accountCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentRecord")
    public Boolean currentRecord;
    public DeductionType withCurrentRecord(Boolean currentRecord) {
        this.currentRecord = currentRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeductionCategory")
    public DeductionTypeDeductionCategoryEnum deductionCategory;
    public DeductionType withDeductionCategory(DeductionTypeDeductionCategoryEnum deductionCategory) {
        this.deductionCategory = deductionCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeductionTypeID")
    public String deductionTypeID;
    public DeductionType withDeductionTypeId(String deductionTypeID) {
        this.deductionTypeID = deductionTypeID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsExemptFromW1")
    public Boolean isExemptFromW1;
    public DeductionType withIsExemptFromW1(Boolean isExemptFromW1) {
        this.isExemptFromW1 = isExemptFromW1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DeductionType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReducesSuper")
    public Boolean reducesSuper;
    public DeductionType withReducesSuper(Boolean reducesSuper) {
        this.reducesSuper = reducesSuper;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReducesTax")
    public Boolean reducesTax;
    public DeductionType withReducesTax(Boolean reducesTax) {
        this.reducesTax = reducesTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedDateUTC")
    public String updatedDateUTC;
    public DeductionType withUpdatedDateUtc(String updatedDateUTC) {
        this.updatedDateUTC = updatedDateUTC;
        return this;
    }
}