package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCalloutCountriesMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=callout_countries,json")
    public AddCalloutCountriesMultipartFormDataCalloutCountries[] calloutCountries;
    public AddCalloutCountriesMultipartFormData1 withCalloutCountries(AddCalloutCountriesMultipartFormDataCalloutCountries[] calloutCountries) {
        this.calloutCountries = calloutCountries;
        return this;
    }
}