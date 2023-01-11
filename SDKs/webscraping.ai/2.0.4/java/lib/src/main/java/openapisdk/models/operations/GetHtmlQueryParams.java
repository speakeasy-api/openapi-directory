package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHtmlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=headers")
    public java.util.Map<String, String> headers;
    public GetHtmlQueryParams withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=js")
    public Boolean js;
    public GetHtmlQueryParams withJs(Boolean js) {
        this.js = js;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=proxy")
    public openapisdk.models.shared.ProxyEnum proxy;
    public GetHtmlQueryParams withProxy(openapisdk.models.shared.ProxyEnum proxy) {
        this.proxy = proxy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Long timeout;
    public GetHtmlQueryParams withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public GetHtmlQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}