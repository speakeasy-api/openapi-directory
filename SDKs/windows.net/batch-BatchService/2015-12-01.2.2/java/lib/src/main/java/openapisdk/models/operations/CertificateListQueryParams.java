package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$filter")
    public String dollarFilter;
    public CertificateListQueryParams withDollarFilter(String dollarFilter) {
        this.dollarFilter = dollarFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$select")
    public String dollarSelect;
    public CertificateListQueryParams withDollarSelect(String dollarSelect) {
        this.dollarSelect = dollarSelect;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public CertificateListQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxresults")
    public Integer maxresults;
    public CertificateListQueryParams withMaxresults(Integer maxresults) {
        this.maxresults = maxresults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public CertificateListQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}