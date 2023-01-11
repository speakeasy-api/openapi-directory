package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvestmentProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category_id")
    public GetInvestmentProductCategoryIdEnum categoryId;
    public GetInvestmentProductPathParams withCategoryId(GetInvestmentProductCategoryIdEnum categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=investment_product_id")
    public String investmentProductId;
    public GetInvestmentProductPathParams withInvestmentProductId(String investmentProductId) {
        this.investmentProductId = investmentProductId;
        return this;
    }
}