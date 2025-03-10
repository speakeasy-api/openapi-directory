/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class TrackingfieldUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oAuth: string;
}

/**
 * Tracking Field
 */
export class TrackingfieldUpdateTrackingField extends SpeakeasyBase {
  /**
   * Label/ Name for the tracking field.
   */
  @SpeakeasyMetadata({ data: "multipart_form, name=field" })
  @Expose({ name: "field" })
  field?: string;

  /**
   * Array of recommended values
   */
  @SpeakeasyMetadata({ data: "multipart_form, name=recommended_values" })
  @Expose({ name: "recommended_values" })
  recommendedValues?: string[];

  /**
   * Tracking Field Required
   */
  @SpeakeasyMetadata({ data: "multipart_form, name=required" })
  @Expose({ name: "required" })
  required?: boolean;

  /**
   * Tracking Field Visible
   */
  @SpeakeasyMetadata({ data: "multipart_form, name=visible" })
  @Expose({ name: "visible" })
  visible?: boolean;
}

export class TrackingfieldUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: TrackingfieldUpdateTrackingField;

  /**
   * The Tracking Field ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=fieldId",
  })
  fieldId: string;
}

export class TrackingfieldUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
