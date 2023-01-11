package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSelectedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=headers")
    public java.util.Map<String, String> headers;
    public GetSelectedQueryParams withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=js")
    public Boolean js;
    public GetSelectedQueryParams withJs(Boolean js) {
        this.js = js;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=proxy")
    public openapisdk.models.shared.ProxyEnum proxy;
    public GetSelectedQueryParams withProxy(openapisdk.models.shared.ProxyEnum proxy) {
        this.proxy = proxy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=selector")
    public String selector;
    public GetSelectedQueryParams withSelector(String selector) {
        this.selector = selector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Long timeout;
    public GetSelectedQueryParams withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public GetSelectedQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}