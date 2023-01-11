package openapisdk.models.operations;



public class AddCalloutCountriesResponse {
    public byte[] body;
    public AddCalloutCountriesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddCalloutCountriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddCalloutCountriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddCalloutCountries201ApplicationJson addCalloutCountries201ApplicationJSONObject;
    public AddCalloutCountriesResponse withAddCalloutCountries201ApplicationJsonObject(AddCalloutCountries201ApplicationJson addCalloutCountries201ApplicationJSONObject) {
        this.addCalloutCountries201ApplicationJSONObject = addCalloutCountries201ApplicationJSONObject;
        return this;
    }
}