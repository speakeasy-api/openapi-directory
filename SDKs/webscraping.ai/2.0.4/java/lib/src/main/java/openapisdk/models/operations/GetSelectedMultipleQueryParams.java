package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSelectedMultipleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=headers")
    public java.util.Map<String, String> headers;
    public GetSelectedMultipleQueryParams withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=js")
    public Boolean js;
    public GetSelectedMultipleQueryParams withJs(Boolean js) {
        this.js = js;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=proxy")
    public openapisdk.models.shared.ProxyEnum proxy;
    public GetSelectedMultipleQueryParams withProxy(openapisdk.models.shared.ProxyEnum proxy) {
        this.proxy = proxy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=selectors")
    public String[] selectors;
    public GetSelectedMultipleQueryParams withSelectors(String[] selectors) {
        this.selectors = selectors;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Long timeout;
    public GetSelectedMultipleQueryParams withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public GetSelectedMultipleQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}