package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SamlLoginQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=issuer")
    public String issuer;
    public SamlLoginQueryParams withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=samlResponse")
    public String samlResponse;
    public SamlLoginQueryParams withSamlResponse(String samlResponse) {
        this.samlResponse = samlResponse;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public String source;
    public SamlLoginQueryParams withSource(String source) {
        this.source = source;
        return this;
    }
}