/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DocumentsDTO } from "./documentsdto";
import { PeopleDTO } from "./peopledto";
import { ProjectLanguagesDTO } from "./projectlanguagesdto";
import { VolumeDTO } from "./volumedto";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class QuoteDTOv2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "budgetCode" })
  budgetCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "businessDays" })
  businessDays?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "categoryIds" })
  categoryIds?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "clientDeadline" })
  clientDeadline?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "clientId" })
  clientId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "clientNotes" })
  clientNotes?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "clientReferenceNumber" })
  clientReferenceNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "documents" })
  @Type(() => DocumentsDTO)
  documents?: DocumentsDTO;

  @SpeakeasyMetadata()
  @Expose({ name: "expectedDeliveryDate" })
  expectedDeliveryDate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "instructionsForAllJobs" })
  instructionsForAllJobs?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "internalNotes" })
  internalNotes?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isClassicQuote" })
  isClassicQuote?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "languages" })
  @Type(() => ProjectLanguagesDTO)
  languages?: ProjectLanguagesDTO;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "origin" })
  origin?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "people" })
  @Type(() => PeopleDTO)
  people?: PeopleDTO;

  @SpeakeasyMetadata()
  @Expose({ name: "quoteExpiry" })
  quoteExpiry?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "quoteId" })
  quoteId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "quoteIdNumber" })
  quoteIdNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "serviceId" })
  serviceId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "volume" })
  @Type(() => VolumeDTO)
  volume?: VolumeDTO;
}
