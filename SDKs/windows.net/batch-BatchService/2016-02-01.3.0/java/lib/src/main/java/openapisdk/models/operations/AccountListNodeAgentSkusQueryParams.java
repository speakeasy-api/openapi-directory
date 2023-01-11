package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountListNodeAgentSkusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$filter")
    public String dollarFilter;
    public AccountListNodeAgentSkusQueryParams withDollarFilter(String dollarFilter) {
        this.dollarFilter = dollarFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public AccountListNodeAgentSkusQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxresults")
    public Integer maxresults;
    public AccountListNodeAgentSkusQueryParams withMaxresults(Integer maxresults) {
        this.maxresults = maxresults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public AccountListNodeAgentSkusQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}