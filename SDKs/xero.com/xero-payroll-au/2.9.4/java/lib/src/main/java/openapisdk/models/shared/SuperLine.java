package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SuperLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Amount")
    public Double amount;
    public SuperLine withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CalculationType")
    public SuperannuationCalculationTypeEnum calculationType;
    public SuperLine withCalculationType(SuperannuationCalculationTypeEnum calculationType) {
        this.calculationType = calculationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContributionType")
    public SuperannuationContributionTypeEnum contributionType;
    public SuperLine withContributionType(SuperannuationContributionTypeEnum contributionType) {
        this.contributionType = contributionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpenseAccountCode")
    public String expenseAccountCode;
    public SuperLine withExpenseAccountCode(String expenseAccountCode) {
        this.expenseAccountCode = expenseAccountCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LiabilityAccountCode")
    public String liabilityAccountCode;
    public SuperLine withLiabilityAccountCode(String liabilityAccountCode) {
        this.liabilityAccountCode = liabilityAccountCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumMonthlyEarnings")
    public Double minimumMonthlyEarnings;
    public SuperLine withMinimumMonthlyEarnings(Double minimumMonthlyEarnings) {
        this.minimumMonthlyEarnings = minimumMonthlyEarnings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Percentage")
    public Double percentage;
    public SuperLine withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuperMembershipID")
    public String superMembershipID;
    public SuperLine withSuperMembershipId(String superMembershipID) {
        this.superMembershipID = superMembershipID;
        return this;
    }
}