package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllFinancialProductsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=product_types")
    public String productTypes;
    public GetAllFinancialProductsQueryParams withProductTypes(String productTypes) {
        this.productTypes = productTypes;
        return this;
    }
}