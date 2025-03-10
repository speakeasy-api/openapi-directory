/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Location } from "./location";
import { Expose, Type } from "class-transformer";

/**
 * Location object
 */
export class LocationEmbeddedObject extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Location)
  data?: Location;
}
