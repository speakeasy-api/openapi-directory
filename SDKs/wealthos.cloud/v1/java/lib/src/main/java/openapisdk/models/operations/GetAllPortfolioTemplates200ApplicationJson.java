package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetAllPortfolioTemplates200ApplicationJson
 * Array of all portfolio templates applicable to the investor
**/
public class GetAllPortfolioTemplates200ApplicationJson {
    @JsonProperty("portfolio_templates")
    public Object[] portfolioTemplates;
    public GetAllPortfolioTemplates200ApplicationJson withPortfolioTemplates(Object[] portfolioTemplates) {
        this.portfolioTemplates = portfolioTemplates;
        return this;
    }
}