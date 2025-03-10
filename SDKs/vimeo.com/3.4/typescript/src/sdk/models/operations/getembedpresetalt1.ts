/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetEmbedPresetAlt1Request extends SpeakeasyBase {
  /**
   * The ID of the preset.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=preset_id",
  })
  presetId: number;
}

export class GetEmbedPresetAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * The embed preset was returned.
   */
  @SpeakeasyMetadata()
  presets?: shared.Presets;
}
