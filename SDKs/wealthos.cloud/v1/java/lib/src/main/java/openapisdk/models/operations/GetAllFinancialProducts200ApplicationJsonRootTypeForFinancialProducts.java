package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additional_cash_currencies")
    public String[] additionalCashCurrencies;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts withAdditionalCashCurrencies(String[] additionalCashCurrencies) {
        this.additionalCashCurrencies = additionalCashCurrencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availability")
    public String[] availability;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts withAvailability(String[] availability) {
        this.availability = availability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dividend_options")
    public String[] dividendOptions;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts withDividendOptions(String[] dividendOptions) {
        this.dividendOptions = dividendOptions;
        return this;
    }
    @JsonProperty("financial_product_id")
    public String financialProductId;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts withFinancialProductId(String financialProductId) {
        this.financialProductId = financialProductId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flexible")
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum flexible;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts withFlexible(GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum flexible) {
        this.flexible = flexible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interest_preferences")
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences interestPreferences;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts withInterestPreferences(GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences interestPreferences) {
        this.interestPreferences = interestPreferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("investment_preferences")
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences investmentPreferences;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts withInvestmentPreferences(GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences investmentPreferences) {
        this.investmentPreferences = investmentPreferences;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("product_type")
    public String productType;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts withProductType(String productType) {
        this.productType = productType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withdrawal_preferences")
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences withdrawalPreferences;
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts withWithdrawalPreferences(GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences withdrawalPreferences) {
        this.withdrawalPreferences = withdrawalPreferences;
        return this;
    }
}