package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAllFinancialProducts200ApplicationJson {
    @JsonProperty("financial_products")
    public GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts[] financialProducts;
    public GetAllFinancialProducts200ApplicationJson withFinancialProducts(GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts[] financialProducts) {
        this.financialProducts = financialProducts;
        return this;
    }
}