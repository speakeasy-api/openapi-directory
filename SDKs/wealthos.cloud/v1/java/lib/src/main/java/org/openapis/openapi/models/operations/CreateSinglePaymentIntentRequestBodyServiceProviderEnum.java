/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

public enum CreateSinglePaymentIntentRequestBodyServiceProviderEnum {
    STRIPE("stripe"),
    TRUELAYER("truelayer"),
    NONE("none");

    @JsonValue
    public final String value;

    private CreateSinglePaymentIntentRequestBodyServiceProviderEnum(String value) {
        this.value = value;
    }
}
