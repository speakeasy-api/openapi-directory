package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePortfolioTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_template_id")
    public String portfolioTemplateId;
    public UpdatePortfolioTemplatePathParams withPortfolioTemplateId(String portfolioTemplateId) {
        this.portfolioTemplateId = portfolioTemplateId;
        return this;
    }
}