/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DeviceEnum - Type of device emulation.
 */
public enum DeviceEnum {
    DESKTOP("desktop"),
    MOBILE("mobile"),
    TABLET("tablet");

    @JsonValue
    public final String value;

    private DeviceEnum(String value) {
        this.value = value;
    }
}
