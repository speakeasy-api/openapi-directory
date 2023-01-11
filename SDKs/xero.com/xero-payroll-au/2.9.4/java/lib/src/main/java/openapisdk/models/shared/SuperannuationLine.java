package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SuperannuationLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Amount")
    public Double amount;
    public SuperannuationLine withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CalculationType")
    public SuperannuationCalculationTypeEnum calculationType;
    public SuperannuationLine withCalculationType(SuperannuationCalculationTypeEnum calculationType) {
        this.calculationType = calculationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContributionType")
    public SuperannuationContributionTypeEnum contributionType;
    public SuperannuationLine withContributionType(SuperannuationContributionTypeEnum contributionType) {
        this.contributionType = contributionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpenseAccountCode")
    public String expenseAccountCode;
    public SuperannuationLine withExpenseAccountCode(String expenseAccountCode) {
        this.expenseAccountCode = expenseAccountCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LiabilityAccountCode")
    public String liabilityAccountCode;
    public SuperannuationLine withLiabilityAccountCode(String liabilityAccountCode) {
        this.liabilityAccountCode = liabilityAccountCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumMonthlyEarnings")
    public Double minimumMonthlyEarnings;
    public SuperannuationLine withMinimumMonthlyEarnings(Double minimumMonthlyEarnings) {
        this.minimumMonthlyEarnings = minimumMonthlyEarnings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentDateForThisPeriod")
    public String paymentDateForThisPeriod;
    public SuperannuationLine withPaymentDateForThisPeriod(String paymentDateForThisPeriod) {
        this.paymentDateForThisPeriod = paymentDateForThisPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Percentage")
    public Double percentage;
    public SuperannuationLine withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuperMembershipID")
    public String superMembershipID;
    public SuperannuationLine withSuperMembershipId(String superMembershipID) {
        this.superMembershipID = superMembershipID;
        return this;
    }
}