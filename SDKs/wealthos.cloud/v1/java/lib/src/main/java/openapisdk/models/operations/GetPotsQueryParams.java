package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPotsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=financial_product_id")
    public String financialProductId;
    public GetPotsQueryParams withFinancialProductId(String financialProductId) {
        this.financialProductId = financialProductId;
        return this;
    }
}