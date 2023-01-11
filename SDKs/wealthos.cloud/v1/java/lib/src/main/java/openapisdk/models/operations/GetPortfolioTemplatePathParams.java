package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPortfolioTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_template_id")
    public String portfolioTemplateId;
    public GetPortfolioTemplatePathParams withPortfolioTemplateId(String portfolioTemplateId) {
        this.portfolioTemplateId = portfolioTemplateId;
        return this;
    }
}