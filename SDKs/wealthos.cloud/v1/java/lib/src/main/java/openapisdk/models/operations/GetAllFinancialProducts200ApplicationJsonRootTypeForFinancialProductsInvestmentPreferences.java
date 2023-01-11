package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimum_one_off_investment")
    public String minimumOneOffInvestment;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences withMinimumOneOffInvestment(String minimumOneOffInvestment) {
        this.minimumOneOffInvestment = minimumOneOffInvestment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimum_regular_monthly_investment")
    public String minimumRegularMonthlyInvestment;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences withMinimumRegularMonthlyInvestment(String minimumRegularMonthlyInvestment) {
        this.minimumRegularMonthlyInvestment = minimumRegularMonthlyInvestment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regular_investment_dates")
    public String[] regularInvestmentDates;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences withRegularInvestmentDates(String[] regularInvestmentDates) {
        this.regularInvestmentDates = regularInvestmentDates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regular_investment_frequencies")
    public String[] regularInvestmentFrequencies;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences withRegularInvestmentFrequencies(String[] regularInvestmentFrequencies) {
        this.regularInvestmentFrequencies = regularInvestmentFrequencies;
        return this;
    }
}