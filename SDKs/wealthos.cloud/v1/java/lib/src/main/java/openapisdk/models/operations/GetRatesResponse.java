package openapisdk.models.operations;



public class GetRatesResponse {
    public String contentType;
    public GetRatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetRates200ApplicationJson getRates200ApplicationJSONObject;
    public GetRatesResponse withGetRates200ApplicationJsonObject(GetRates200ApplicationJson getRates200ApplicationJSONObject) {
        this.getRates200ApplicationJSONObject = getRates200ApplicationJSONObject;
        return this;
    }
    public Object getRates401ApplicationJSONAny;
    public GetRatesResponse withGetRates401ApplicationJsonAny(Object getRates401ApplicationJSONAny) {
        this.getRates401ApplicationJSONAny = getRates401ApplicationJSONAny;
        return this;
    }
    public Object getRates403ApplicationJSONAny;
    public GetRatesResponse withGetRates403ApplicationJsonAny(Object getRates403ApplicationJSONAny) {
        this.getRates403ApplicationJSONAny = getRates403ApplicationJSONAny;
        return this;
    }
    public Object getRates404ApplicationJSONAny;
    public GetRatesResponse withGetRates404ApplicationJsonAny(Object getRates404ApplicationJSONAny) {
        this.getRates404ApplicationJSONAny = getRates404ApplicationJSONAny;
        return this;
    }
    public Object getRates429ApplicationJSONAny;
    public GetRatesResponse withGetRates429ApplicationJsonAny(Object getRates429ApplicationJSONAny) {
        this.getRates429ApplicationJSONAny = getRates429ApplicationJSONAny;
        return this;
    }
    public Object getRates500ApplicationJSONAny;
    public GetRatesResponse withGetRates500ApplicationJsonAny(Object getRates500ApplicationJSONAny) {
        this.getRates500ApplicationJSONAny = getRates500ApplicationJSONAny;
        return this;
    }
}