package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuoteObjectFields
 * The fields populated for a quote when a quote is sent to Zuora Billing from Zuora Quote.
 * 
**/
public class QuoteObjectFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpportunityCloseDate__QT")
    public String opportunityCloseDateQT;
    public QuoteObjectFields withOpportunityCloseDateQt(String opportunityCloseDateQT) {
        this.opportunityCloseDateQT = opportunityCloseDateQT;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpportunityName__QT")
    public String opportunityNameQT;
    public QuoteObjectFields withOpportunityNameQt(String opportunityNameQT) {
        this.opportunityNameQT = opportunityNameQT;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuoteBusinessType__QT")
    public String quoteBusinessTypeQT;
    public QuoteObjectFields withQuoteBusinessTypeQt(String quoteBusinessTypeQT) {
        this.quoteBusinessTypeQT = quoteBusinessTypeQT;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuoteNumber__QT")
    public String quoteNumberQT;
    public QuoteObjectFields withQuoteNumberQt(String quoteNumberQT) {
        this.quoteNumberQT = quoteNumberQT;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuoteType__QT")
    public String quoteTypeQT;
    public QuoteObjectFields withQuoteTypeQt(String quoteTypeQT) {
        this.quoteTypeQT = quoteTypeQT;
        return this;
    }
}