package openapisdk.models.operations;



public class ListInternalCalloutCountriesResponse {
    public byte[] body;
    public ListInternalCalloutCountriesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListInternalCalloutCountriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListInternalCalloutCountriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListInternalCalloutCountries200ApplicationJson listInternalCalloutCountries200ApplicationJSONObject;
    public ListInternalCalloutCountriesResponse withListInternalCalloutCountries200ApplicationJsonObject(ListInternalCalloutCountries200ApplicationJson listInternalCalloutCountries200ApplicationJSONObject) {
        this.listInternalCalloutCountries200ApplicationJSONObject = listInternalCalloutCountries200ApplicationJSONObject;
        return this;
    }
}