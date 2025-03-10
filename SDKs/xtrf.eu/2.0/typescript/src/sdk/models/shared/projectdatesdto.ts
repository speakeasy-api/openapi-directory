/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TimeDTO } from "./timedto";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ProjectDatesDTO extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "actualDeliveryDate" })
  @Type(() => TimeDTO)
  actualDeliveryDate?: TimeDTO;

  @SpeakeasyMetadata()
  @Expose({ name: "actualStartDate" })
  @Type(() => TimeDTO)
  actualStartDate?: TimeDTO;

  @SpeakeasyMetadata()
  @Expose({ name: "deadline" })
  @Type(() => TimeDTO)
  deadline?: TimeDTO;

  @SpeakeasyMetadata()
  @Expose({ name: "startDate" })
  @Type(() => TimeDTO)
  startDate?: TimeDTO;
}
