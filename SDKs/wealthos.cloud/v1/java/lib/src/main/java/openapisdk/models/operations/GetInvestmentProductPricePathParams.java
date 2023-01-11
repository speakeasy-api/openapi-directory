package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvestmentProductPricePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category_id")
    public GetInvestmentProductPriceCategoryIdEnum categoryId;
    public GetInvestmentProductPricePathParams withCategoryId(GetInvestmentProductPriceCategoryIdEnum categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=investment_product_id")
    public String investmentProductId;
    public GetInvestmentProductPricePathParams withInvestmentProductId(String investmentProductId) {
        this.investmentProductId = investmentProductId;
        return this;
    }
}