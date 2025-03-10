/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * BookDepreciationSettingDepreciationCalculationMethodEnum - See Depreciation Calculation Methods
 */
public enum BookDepreciationSettingDepreciationCalculationMethodEnum {
    RATE("Rate"),
    LIFE("Life"),
    NONE("None");

    @JsonValue
    public final String value;

    private BookDepreciationSettingDepreciationCalculationMethodEnum(String value) {
        this.value = value;
    }
}
