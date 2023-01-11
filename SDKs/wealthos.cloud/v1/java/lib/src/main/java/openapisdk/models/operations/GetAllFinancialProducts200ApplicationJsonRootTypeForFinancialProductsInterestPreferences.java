package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interest_accrual_basis")
    public String interestAccrualBasis;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences withInterestAccrualBasis(String interestAccrualBasis) {
        this.interestAccrualBasis = interestAccrualBasis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interest_payment_frequency")
    public String interestPaymentFrequency;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences withInterestPaymentFrequency(String interestPaymentFrequency) {
        this.interestPaymentFrequency = interestPaymentFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pay_interest")
    public String payInterest;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences withPayInterest(String payInterest) {
        this.payInterest = payInterest;
        return this;
    }
}