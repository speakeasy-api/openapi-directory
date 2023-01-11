package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimum_one_off_withdrawal")
    public String minimumOneOffWithdrawal;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences withMinimumOneOffWithdrawal(String minimumOneOffWithdrawal) {
        this.minimumOneOffWithdrawal = minimumOneOffWithdrawal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimum_regular_monthly_withdrawal")
    public String minimumRegularMonthlyWithdrawal;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences withMinimumRegularMonthlyWithdrawal(String minimumRegularMonthlyWithdrawal) {
        this.minimumRegularMonthlyWithdrawal = minimumRegularMonthlyWithdrawal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regular_withdrawal_frequencies")
    public String[] regularWithdrawalFrequencies;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences withRegularWithdrawalFrequencies(String[] regularWithdrawalFrequencies) {
        this.regularWithdrawalFrequencies = regularWithdrawalFrequencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regular_withdrawal_payment_dates")
    public String[] regularWithdrawalPaymentDates;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences withRegularWithdrawalPaymentDates(String[] regularWithdrawalPaymentDates) {
        this.regularWithdrawalPaymentDates = regularWithdrawalPaymentDates;
        return this;
    }
}